import JSZip from "jszip";
import * as THREE from "three";
import { exportTo3MF } from "three-3mf-exporter";
import { CSG } from "three-csg-ts";
import {
	BufferGeometryUtils,
	Font,
	FontLoader,
	GLTFExporter,
	OBJExporter,
	OrbitControls,
	PLYExporter,
	STLExporter,
	TextGeometry
} from "three/examples/jsm/Addons.js";
import { ExportModels, FileFormats } from "./enums";

export class ModelRenderer {
	scene: THREE.Scene;
	meshes: { [key: string]: THREE.Object3D } = {};
	meshesPosition: { [key: string]: number[] } = {};
	qrCodeData: Uint8Array | null = null;
	texts: { [key: string]: string } = {};
	camera: THREE.Camera | null = null;

	constructor(color: number) {
		// Create Scene
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(color);
	}

	private createCube(
		x: number,
		y: number,
		z: number,
		w: number,
		h: number,
		d: number,
		color: number,
		id?: string | undefined
	): THREE.Mesh {
		const geometry = new THREE.BoxGeometry(w, h, d);
		const material = new THREE.MeshBasicMaterial({ color });
		const cube = new THREE.Mesh(geometry, material);
		cube.position.set(x, y, z);
		const edges = new THREE.EdgesGeometry(geometry);
		const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000 }));
		cube.add(line);
		this.scene.add(cube);
		if (id) {
			this.meshes[id] = cube;
			this.meshesPosition[id] = [x, y, z];
		}
		return cube;
	}

	private createText(
		id: string,
		x: number,
		y: number,
		z: number,
		depth: number,
		size: number,
		color: number,
		text: string
	): void {
		const loader = new FontLoader();

		loader.load("/fonts/helvetiker_regular.typeface.json", (font: Font) => {
			const geometry = new TextGeometry(text, {
				font,
				size,
				depth,
				curveSegments: 12,
				bevelEnabled: false
			});

			geometry.computeBoundingBox();
			const textMaterial = new THREE.MeshStandardMaterial({ color });
			const bbox = geometry.boundingBox;
			if (bbox === null) return;
			const xOffset = -0.5 * (bbox.max.x - bbox.min.x);
			const yOffset = -0.5 * (bbox.max.y - bbox.min.y);

			const textMesh = new THREE.Mesh(geometry, textMaterial);
			textMesh.position.set(x + xOffset, y + yOffset, z); // Center the text
			this.scene.add(textMesh);
			this.meshes[id] = textMesh;
			this.meshesPosition[id] = [x, y, z];
			this.texts[id] = text;
		});
	}

	private createQRCode(
		id: string,
		x: number,
		y: number,
		z: number,
		s: number,
		d: number,
		qrdata: Uint8Array
	): void {
		const qrSize: number = Math.sqrt(qrdata.length);
		const pixelSize: number = s / qrSize;
		const size: number = pixelSize * qrSize;
		const startX: number = -size / 2 + pixelSize / 2;
		const startY: number = size / 2 - pixelSize / 2;

		const qrcodeGeometries: THREE.BoxGeometry[] = [];

		for (let row: number = 0; row < qrSize; row++) {
			for (let col: number = 0; col < qrSize; col++) {
				if (qrdata[row * qrSize + col] == 1) {
					const geometry = new THREE.BoxGeometry(pixelSize, pixelSize, d);
					geometry.translate(startX + col * pixelSize, startY - row * pixelSize, d / 2);
					qrcodeGeometries.push(geometry);
				}
			}
		}

		const qrCodeGeometry = BufferGeometryUtils.mergeGeometries(qrcodeGeometries, false);
		const material = new THREE.MeshStandardMaterial({ color: 0x000000 });
		const qrMesh = new THREE.Mesh(qrCodeGeometry, material);
		qrMesh.position.set(x, y, z);

		this.scene.add(qrMesh);
		this.meshes[id] = qrMesh;
		this.meshesPosition[id] = [x, y, z];
	}

	private createArcGeometry(
		radius: number,
		thickness: number,
		depth: number,
		startDeg: number,
		endDeg: number
	): THREE.ExtrudeGeometry {
		const shape = new THREE.Shape();
		shape.absarc(0, 0, radius, startDeg, endDeg, false);
		shape.lineTo((radius - thickness) * Math.cos(endDeg), (radius - thickness) * Math.sin(endDeg));
		shape.absarc(0, 0, radius - thickness, endDeg, startDeg, true);
		shape.lineTo(radius * Math.cos(startDeg), radius * Math.sin(startDeg));
		const extrudeSettings = { depth, bevelEnabled: false };
		return new THREE.ExtrudeGeometry(shape, extrudeSettings);
	}

	private createArc(
		radius: number,
		thickness: number,
		depth: number,
		startDeg: number,
		endDeg: number,
		color: number
	): THREE.Mesh {
		const geometry = this.createArcGeometry(radius, thickness, depth, startDeg, endDeg);
		const material = new THREE.MeshStandardMaterial({ color });
		const waveMesh = new THREE.Mesh(geometry, material);
		waveMesh.position.set(0, 0, 0);
		return waveMesh;
	}

	private createCircleGeometry(radius: number, depth: number): THREE.CylinderGeometry {
		const circleGeometry = new THREE.CylinderGeometry(radius, radius, depth, 50, 1, false);
		return circleGeometry;
	}

	private createCircle(radius: number, depth: number, color: number): THREE.Mesh {
		const geometry = this.createCircleGeometry(radius, depth);
		const material = new THREE.MeshStandardMaterial({ color });
		return new THREE.Mesh(geometry, material);
	}

	private createWifiIcon(id: string, x: number, y: number, z: number, w: number, d: number): void {
		const arc1 = this.createArc(w, 1, d, Math.PI * 0.25, Math.PI * 0.75, 0x000000);
		const arc2 = this.createArc(w * 0.6, 1, d, Math.PI * 0.25, Math.PI * 0.75, 0x000000);
		const arc3 = this.createCircle(1, d, 0x000000);
		arc3.rotateX(Math.PI / 2);
		arc3.position.set(0, 0, d / 2);
		const wifiGroup = new THREE.Group();
		wifiGroup.add(arc1, arc2, arc3);
		wifiGroup.position.set(x, y, z);
		this.scene.add(wifiGroup);
		this.meshes[id] = wifiGroup;
		this.meshesPosition[id] = [x, y, z];
	}

	public createSlotedStand(): void {
		if (
			Object.keys(this.meshes).includes("slotedStand") &&
			this.scene.children.includes(this.meshes["slotedStand"])
		)
			return;
		const standMesh = this.meshes["stand"] as THREE.Mesh;
		standMesh.updateMatrix();
		const cardMesh = this.meshes["card"] as THREE.Mesh;
		cardMesh.updateMatrix();

		const slotedStandMesh = CSG.subtract(standMesh, cardMesh);
		const standEdgesGeometry = new THREE.EdgesGeometry(slotedStandMesh.geometry);
		const standLineMesh = new THREE.LineSegments(
			standEdgesGeometry,
			new THREE.LineBasicMaterial({ color: 0x000000 })
		);
		slotedStandMesh.add(standLineMesh);

		this.scene.add(slotedStandMesh);
		this.meshes["slotedStand"] = slotedStandMesh;
	}

	setObjectAngle(id: string, x: number, y: number, z: number): void {
		const mesh = this.meshes[id];
		mesh.rotation.set((Math.PI * x) / 180, (Math.PI * y) / 180, (Math.PI * z) / 180);
	}

	setObjectPosition(
		id: string,
		x: number | null,
		y: number | null,
		z: number | null,
		isText: boolean = false
	): void {
		const mesh = this.meshes[id];
		if (!mesh) return;
		let xOffset = 0;
		let yOffset = 0;
		if (isText) {
			const geometry = (mesh as THREE.Mesh).geometry;
			geometry.computeBoundingBox();
			const bbox = geometry.boundingBox;
			if (bbox === null) return;
			xOffset = -0.5 * (bbox.max.x - bbox.min.x);
			yOffset = -0.5 * (bbox.max.y - bbox.min.y);
		}
		x = x === null ? mesh.position.x : x;
		y = y === null ? mesh.position.y : y;
		z = z === null ? mesh.position.z : z;

		mesh.position.set(x + xOffset, y + yOffset, z);
		this.meshesPosition[id] = [x, y, z];
	}

	setObjectOffset(id: string, x: number, y: number, z: number): void {
		const mesh = this.meshes[id];
		const originPosition = this.meshesPosition[id];
		mesh.position.set(originPosition[0] + x, originPosition[1] + y, originPosition[2] + z);
	}

	setObjectDimension(id: string, w: number, h: number, d: number): void {
		const object = this.meshes[id];
		if ((object as THREE.Mesh).isMesh) {
			const mesh = object as THREE.Mesh;
			let newGeometry: THREE.BufferGeometry | null = null;

			if (mesh.geometry instanceof THREE.BoxGeometry) {
				newGeometry = new THREE.BoxGeometry(w, h, d);
				const edges = new THREE.EdgesGeometry(newGeometry);
				const line = new THREE.LineSegments(
					edges,
					new THREE.LineBasicMaterial({ color: 0x000000 })
				);
				mesh.children
					.filter((child) => child instanceof THREE.LineSegments)
					.forEach((child) => {
						mesh.remove(child);
						(child as THREE.LineSegments).geometry.dispose();
					});
				mesh.add(line);
			}

			if (newGeometry) {
				mesh.geometry.dispose();
				mesh.geometry = newGeometry;
			}
		}
	}

	resizeQRCode(s: number): void {
		this.scene.remove(this.meshes["qrcode"]);
		this.createQRCode("qrcode", 0, 5, 1, s, 1, this.qrCodeData!);
	}

	resizeText(id: string, size: number): void {
		const loader = new FontLoader();

		loader.load("/fonts/helvetiker_regular.typeface.json", (font: Font) => {
			const geometry = new TextGeometry(this.texts[id], {
				font,
				size,
				depth: 1,
				curveSegments: 12,
				bevelEnabled: false
			});

			const [x, y, z] = this.meshesPosition[id];

			geometry.computeBoundingBox();
			const bbox = geometry.boundingBox;
			if (bbox === null) return;
			const newX = x - 0.5 * (bbox.max.x - bbox.min.x);
			const newY = y - 0.5 * (bbox.max.y - bbox.min.y);
			const textMesh = this.meshes[id] as THREE.Mesh;
			textMesh.position.set(newX, newY, z);
			textMesh.geometry.dispose();
			textMesh.geometry = geometry;
		});
	}

	resizeIcon(size: number): void {
		const meshes = (this.meshes["wifiIcon"] as THREE.Group).children.map((x) => x as THREE.Mesh);

		meshes[0].geometry = this.createArcGeometry(size, size / 6, 1, Math.PI * 0.25, Math.PI * 0.75);
		meshes[1].geometry = this.createArcGeometry(
			size * 0.6,
			size / 6,
			1,
			Math.PI * 0.25,
			Math.PI * 0.75
		);
		meshes[2].geometry = this.createCircleGeometry(size / 7, 1);
	}
	hideObject(id: string): void {
		if (!Object.keys(this.meshes).includes(id)) return;
		this.scene.remove(this.meshes[id]);
	}

	showObject(id: string): void {
		this.scene.add(this.meshes[id]);
	}

	generateModel = (ssid: string, qrcodeData: Uint8Array): void => {
		this.qrCodeData = qrcodeData;
		// Create Model
		// Wifi Card
		this.createCube(0, 0, 0, 50, 75, 2, 0xffffff, "card");
		this.createText("ssidText", 0, 30, 1, 1, 5, 0x000000, ssid);
		this.createQRCode("qrcode", 0, 5, 1, 40, 1, qrcodeData);
		this.createWifiIcon("wifiIcon", 0, -25, 1, 6, 1);

		// Stand
		this.createCube(0, -38, 0, 50, 5, 50, 0xffffff, "stand");
		this.setObjectAngle("stand", 15, 0, 0);
	};

	render(canvas: HTMLCanvasElement): void {
		const camera = new THREE.PerspectiveCamera(
			75,
			canvas.clientWidth / canvas.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 75;

		const renderer = new THREE.WebGLRenderer({ canvas });
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);

		// Render Scene
		const controls = new OrbitControls(camera, renderer.domElement);

		const scene = this.scene;

		function animate() {
			requestAnimationFrame(animate);
			controls.update(); // required for damping
			renderer.render(scene, camera);
		}
		animate();
	}

	private exportModel(model: THREE.Object3D, format: FileFormats): Promise<Blob> {
		return new Promise((resolve, reject) => {
			switch (format) {
				case FileFormats.GLTF:
					new GLTFExporter().parse(
						model,
						(result) => {
							// If binary, result is an ArrayBuffer
							const blob = new Blob([result as ArrayBuffer], { type: "application/octet-stream" });
							resolve(blob);
						},
						(error) => {
							reject(new Error(error.message));
						},
						{ binary: true }
					);
					break;
				case FileFormats.OBJ:
					const objResult = new OBJExporter().parse(model);
					resolve(new Blob([objResult], { type: "application/octet-stream" }));
					break;
				case FileFormats.PLY:
					new PLYExporter().parse(
						model,
						(result) => {
							const blob = new Blob([result], { type: "application/octet-stream" });
							resolve(blob);
						},
						{ binary: true }
					);
					break;
				case FileFormats.STL:
					const stlResult = new STLExporter().parse(model, { binary: true });
					resolve(new Blob([stlResult], { type: "application/octet-stream" }));
					break;
				case FileFormats._3MF:
					resolve(exportTo3MF(model));
					break;
				default:
					reject(new Error("Unsupported format"));
			}
		});
	}

	private exportStand(format: FileFormats): Promise<Blob> {
		this.createSlotedStand();
		this.scene.remove(this.meshes["slotedStand"]);
		this.meshes["slotedStand"].rotation.set(0, 0, 0);
		this.meshes["slotedStand"].updateMatrix();
		const result = this.exportModel(this.meshes["slotedStand"], format);
		delete this.meshes["slotedStand"];
		return result;
	}

	private getContentModel(color: number = 0x000000): THREE.Mesh {
		const textGeometry = (this.meshes["ssidText"] as THREE.Mesh).geometry.clone();
		textGeometry.translate(...this.meshes["ssidText"].position.toArray());
		const qrcodeGeometry = (this.meshes["qrcode"] as THREE.Mesh).geometry.clone();
		qrcodeGeometry.translate(...this.meshes["qrcode"].position.toArray());
		const wifiMeshPosition = this.meshes["wifiIcon"].position;
		const wifiGeometries = (this.meshes["wifiIcon"] as THREE.Group).children.map((mesh) => {
			const geometry = (mesh as THREE.Mesh).geometry.clone();
			geometry.applyMatrix4(mesh.matrixWorld);
			return geometry;
		});
		const contentGeometry = BufferGeometryUtils.mergeGeometries(
			[textGeometry, qrcodeGeometry, ...wifiGeometries].map((x) => (x.index ? x.toNonIndexed() : x))
		);
		const material = new THREE.MeshStandardMaterial({ color });
		return new THREE.Mesh(contentGeometry, material);
	}

	private exportCardContent(format: FileFormats): Promise<Blob> {
		const cardContentScene = new THREE.Scene();
		cardContentScene.add(this.meshes["card"].clone());
		cardContentScene.add(this.getContentModel());
		return this.exportModel(cardContentScene, format);
	}

	private async createZip(files: { name: string; blob: Blob }[]): Promise<Blob> {
		const zip = new JSZip();
		for (const file of files) {
			zip.file(file.name, file.blob);
		}
		const zipBlob = await zip.generateAsync({ type: "blob" });
		return zipBlob;
	}

	async export(format: FileFormats, model: ExportModels): Promise<Blob> {
		let fileExtension: string;
		switch (format) {
			case FileFormats.GLTF:
				fileExtension = "gltf";
				break;
			case FileFormats.OBJ:
				fileExtension = "obj";
				break;
			case FileFormats.PLY:
				fileExtension = "ply";
				break;
			case FileFormats.STL:
				fileExtension = "stl";
				break;
			case FileFormats._3MF:
				fileExtension = "3mf";
				break;
		}
		let files: { name: string; blob: Blob }[] = [];
		switch (model) {
			case ExportModels.Separate:
				const cardModel = await this.exportModel(this.meshes["card"], format);
				const contentModel = await this.exportModel(this.getContentModel(), format);
				const standModel = await this.exportStand(format);
				files = [
					{
						name: `card.${fileExtension}`,
						blob: cardModel
					},
					{
						name: `content.${fileExtension}`,
						blob: contentModel
					},
					{
						name: `stand.${fileExtension}`,
						blob: standModel
					}
				];
				break;
			case ExportModels.CardContentAndStand:
				const cardContentModel = await this.exportCardContent(format);
				const standModel1 = await this.exportStand(format);
				files = [
					{
						name: `card-and-content.${fileExtension}`,
						blob: cardContentModel
					},
					{
						name: `stand.${fileExtension}`,
						blob: standModel1
					}
				];
				break;
			case ExportModels.Single:
				const model = await this.exportModel(this.scene, format);
				files = [
					{
						name: `model.${fileExtension}`,
						blob: model
					}
				];
				break;
		}
		return await this.createZip(files);
	}
}
