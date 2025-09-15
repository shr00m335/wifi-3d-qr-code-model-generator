<script lang="ts">
	import { ModelRenderer } from "$lib/3dModel";
	import { Pages } from "$lib/enums";
	import type { WifiInfo } from "$lib/models";
	import { currentPageStore, modelRenderer, qrCodeData, wifiInfoStore } from "$lib/stores.svelte";
	import BaseIcon from "../assets/BaseIcon.svelte";
	import CardIcon from "../assets/CardIcon.svelte";
	import QrCode from "../assets/QRCode.svelte";
	import CheckboxInput from "./inputs/CheckboxInput.svelte";
	import InputSection from "./inputs/InputSection.svelte";
	import NumberInput from "./inputs/NumberInput.svelte";
	import SliderInput from "./inputs/SliderInput.svelte";

	// Elements
	let canvas: HTMLCanvasElement;

	// Input values
	let tiltAngle: number = 75;
	let standX: number = 0;
	let standY: number = -38;
	let standZ: number = 0;
	let standWidth: number = 50;
	let standHeight: number = 5;
	let standDepth: number = 30;
	let cardWidth: number = 50;
	let cardHeight: number = 75;
	let cardDepth: number = 2;
	let qrCodeSize: number = 40;
	let qrX: number = 0;
	let qrY: number = 5;
	let textSize: number = 5;
	let textX: number = 0;
	let textY: number = 30;
	let iconSize: number = 6;
	let iconRotation: number = 0;
	let iconX: number = 0;
	let iconY: number = -25;
	let showSsid: boolean = true;
	let showIcon: boolean = true;
	let showCard: boolean = true;
	let showStand: boolean = true;
	let showContent: boolean = true;

	const generateModel = (
		canvas: HTMLCanvasElement,
		wifiInfoStore: WifiInfo | null,
		qrCodeData: Uint8Array | null
	): void => {
		if (!canvas || wifiInfoStore === null || qrCodeData === null) return;
		$modelRenderer = new ModelRenderer(0x888888);
		$modelRenderer.generateModel(wifiInfoStore.ssid, qrCodeData);
		$modelRenderer.render(canvas);
	};

	const adjustCardSize = (w: number, h: number, d: number): void => {
		if (!$modelRenderer) return;
		$modelRenderer.setObjectDimension("card", w, h, d);
		$modelRenderer.setObjectPosition("ssidText", null, null, d / 2);
		$modelRenderer.setObjectPosition("qrcode", null, null, d / 2);
		$modelRenderer.setObjectPosition("wifiIcon", null, null, d / 2);
	};

	const toggleObject = (id: string, showName: boolean): void => {
		if (!$modelRenderer) return;
		showName ? $modelRenderer.showObject(id) : $modelRenderer.hideObject(id);
	};

	const handleToggleObjects = (showContent: boolean, showCard: boolean): void => {
		if (!$modelRenderer) return;
		toggleObject("qrcode", showContent);
		toggleObject("ssidText", showContent);
		toggleObject("wifiIcon", showContent);
		toggleObject("card", showCard);
	};

	const handleToggleStand = (showCard: boolean, showStand: boolean): void => {
		if (!$modelRenderer) return;
		if (!showStand) {
			$modelRenderer.hideObject("stand");
			$modelRenderer.hideObject("slotedStand");
		} else if (showStand && !showCard) {
			$modelRenderer.hideObject("stand");
			$modelRenderer.createSlotedStand();
		} else {
			$modelRenderer.hideObject("slotedStand");
			$modelRenderer.showObject("stand");
		}
	};

	const goBackPage = (): void => {
		$currentPageStore = Pages.QRPreview;
	};

	const nextPage = (): void => {
		$currentPageStore = Pages.ExportOptions;
	};

	$: generateModel(canvas, $wifiInfoStore, $qrCodeData);
	$: $modelRenderer?.setObjectAngle("stand", 90 - tiltAngle, 0, 0);
	$: adjustCardSize(cardWidth, cardHeight, cardDepth);
	$: $modelRenderer?.setObjectDimension("stand", standWidth, standHeight, standDepth);
	$: $modelRenderer?.resizeQRCode(qrCodeSize);
	$: $modelRenderer?.resizeText("ssidText", textSize);
	$: $modelRenderer?.setObjectPosition("ssidText", textX, textY, null, true);
	$: $modelRenderer?.resizeIcon(iconSize);
	$: $modelRenderer?.setObjectAngle("wifiIcon", 0, 0, iconRotation);
	$: $modelRenderer?.setObjectPosition("wifiIcon", iconX, iconY, null, false);
	$: toggleObject("ssidText", showSsid);
	$: toggleObject("wifiIcon", showIcon);
	$: $modelRenderer?.setObjectPosition("stand", standX, standY, standZ);
	$: handleToggleObjects(showContent, showCard);
	$: handleToggleStand(showCard, showStand);
	$: $modelRenderer?.setObjectPosition("qrcode", qrX, qrY, null);
</script>

<div class="flex h-full w-full flex-col lg:grid lg:grid-cols-2">
	<div class="flex flex-col items-center justify-center">
		<canvas bind:this={canvas} width="450" height="450"></canvas>
		<div class="mt-4 flex">
			<button
				onclick={() => (showContent = !showContent)}
				class={`flex items-center rounded-lg ${showContent ? "bg-blue-600" : "bg-gray-500"} px-2 py-1 text-xl text-white ${showContent ? "hover:bg-blue-600/50" : "hover:bg-gray-500/50"}`}
				><QrCode /></button
			>
			<button
				onclick={() => (showCard = !showCard)}
				class={`mx-4 flex rounded-lg ${showCard ? "bg-blue-600" : "bg-gray-500"} px-2 py-1 text-xl text-white ${showCard ? "hover:bg-blue-600/50" : "hover:bg-gray-500/50"}`}
				><CardIcon width={48} height={48} /></button
			>
			<button
				onclick={() => (showStand = !showStand)}
				class={`flex rounded-lg ${showStand ? "bg-blue-600" : "bg-gray-500"} px-2 py-1 text-xl text-white ${showStand ? "hover:bg-blue-600/50" : "hover:bg-gray-500/50"}`}
				><BaseIcon width={48} height={48} /></button
			>
		</div>
	</div>
	<div
		class="mx-auto mt-5 flex flex-col lg:mx-0 lg:my-auto lg:mt-0 lg:max-h-[500px] lg:overflow-y-auto"
	>
		<h2 class="text-2xl font-bold">3D Model Options:</h2>
		<InputSection title="Stand Options:">
			<SliderInput
				id="tilt-angle-input"
				label="Stand Tile Angle:"
				bind:value={tiltAngle}
				min={60}
				max={90}
			/>
			<SliderInput
				id="stand-x-input"
				label="Stand Horizontal Position:"
				bind:value={standX}
				min={-cardWidth}
				max={cardWidth}
				step={0.1}
			/>
			<SliderInput
				id="stand-y-input"
				label="Stand Vertical Position:"
				bind:value={standY}
				min={-cardHeight / 2 - 5}
				max={cardHeight / 2 + 5}
				step={0.1}
			/>
			<SliderInput
				id="stand-z-input"
				label="Stand Depth Position:"
				bind:value={standZ}
				min={-standDepth / 2}
				max={standDepth / 2}
				step={0.1}
			/>
			<NumberInput
				id="stand-width-input"
				label="Stand Width:"
				min={1}
				bind:value={standWidth}
				step={0.1}
				unit={"mm"}
			/>
			<NumberInput
				id="stand-height-input"
				label="Stand Depth:"
				min={1}
				bind:value={standDepth}
				step={0.1}
				unit={"mm"}
			/>
			<NumberInput
				id="stand-depth-input"
				label="Stand Thickness:"
				min={1}
				bind:value={standHeight}
				step={0.1}
				unit={"mm"}
			/>
		</InputSection>
		<InputSection title="Card Options:">
			<NumberInput
				id="card-width-input"
				label="Card Width:"
				min={1}
				bind:value={cardWidth}
				step={0.1}
				unit={"mm"}
			/>
			<NumberInput
				id="card-height-input"
				label="Card Height:"
				min={1}
				bind:value={cardHeight}
				step={0.1}
				unit={"mm"}
			/>
			<NumberInput
				id="card-depth-input"
				label="Card Thickness:"
				min={1}
				bind:value={cardDepth}
				step={0.1}
				unit={"mm"}
			/>
		</InputSection>

		<InputSection title="QR Code Options:">
			<SliderInput
				id="qr-size-input"
				label="QR Code Size:"
				bind:value={qrCodeSize}
				min={1}
				max={cardWidth}
			/>
			<SliderInput
				id="qr-x-input"
				label="QR Code Horizontal Position:"
				bind:value={qrX}
				min={Math.floor(-cardWidth / 2)}
				max={Math.ceil(cardWidth / 2)}
				step={0.1}
			/>
			<SliderInput
				id="qr-y-input"
				label="QR Code Vertical Position:"
				bind:value={qrY}
				min={Math.floor(-cardHeight / 2)}
				max={Math.ceil(cardHeight / 2)}
				step={0.1}
			/>
		</InputSection>
		<InputSection title="WiFi Name Options:">
			<CheckboxInput id="show-name-input" label="Show WiFi SSID:" bind:checked={showSsid} />
			<NumberInput
				id="name-size-input"
				label="Text Size:"
				min={1}
				bind:value={textSize}
				step={0.5}
			/>
			<SliderInput
				id="name-x-input"
				label="Text Horizontal Position:"
				bind:value={textX}
				min={Math.ceil(-cardWidth / 2)}
				max={Math.floor(cardWidth / 2)}
				step={0.1}
			/>
			<SliderInput
				id="name-y-input"
				label="Text Vertical Position:"
				bind:value={textY}
				min={Math.ceil(-cardHeight / 2)}
				max={Math.floor(cardHeight / 2)}
				step={0.1}
			/>
		</InputSection>
		<InputSection title="WiFi Icon Options">
			<CheckboxInput id="show-icon-input" label="Show WiFi Icon:" bind:checked={showIcon} />
			<SliderInput
				id="wifi-icon-size-input"
				label="Icon Size:"
				bind:value={iconSize}
				min={1}
				max={cardWidth}
				step={0.1}
			/>
			<SliderInput
				id="wifi-icon-rotation-input"
				label="Icon Rotation:"
				bind:value={iconRotation}
				min={0}
				max={360}
				step={1}
			/>
			<SliderInput
				id="wifi-x-input"
				label="Icon Horizontal Position:"
				bind:value={iconX}
				min={Math.ceil(-cardWidth / 2)}
				max={Math.floor(cardWidth / 2)}
				step={1}
			/>
			<SliderInput
				id="wifi-y-input"
				label="Icon Vertical Position:"
				bind:value={iconY}
				min={Math.ceil(-cardHeight / 2)}
				max={Math.floor(cardHeight / 2)}
				step={1}
			/>
		</InputSection>
	</div>
	<div class="col-span-2 mx-auto mt-6">
		<button
			onclick={goBackPage}
			class="ml-auto w-48 rounded-lg bg-gray-500 px-2 py-1 text-2xl text-white hover:bg-gray-500/50"
			>Back
		</button>
		<button
			onclick={nextPage}
			class="ml-4 w-48 rounded-lg bg-blue-600 px-2 py-1 text-2xl text-white hover:bg-blue-600/50"
			>Next
		</button>
	</div>
</div>
