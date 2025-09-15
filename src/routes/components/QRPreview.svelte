<script lang="ts">
	import { Pages } from "$lib/enums";
	import type { WifiInfo } from "$lib/models";
	import { generateWiFiCode } from "$lib/qr";
	import { currentPageStore, qrCodeData, wifiInfoStore } from "$lib/stores.svelte";
	import type { QRCodeErrorCorrectionLevel } from "qrcode";

	// HTML Elements
	let canvas: HTMLCanvasElement;

	// Input values
	let errorCorrectionLevel: QRCodeErrorCorrectionLevel = "M";
	let includeIcon: boolean = false;
	$: generateQRCode($wifiInfoStore, errorCorrectionLevel);
	$: drawQRCode($qrCodeData, includeIcon);

	const generateQRCode = async (
		wifiInfo: WifiInfo | null,
		errorCorrectionLevel?: QRCodeErrorCorrectionLevel | undefined
	): Promise<void> => {
		// Move back to previous page is wifi info is null
		if (wifiInfo === null) {
			$currentPageStore = Pages.WifiInfo;
			return;
		}
		$qrCodeData = await generateWiFiCode(
			wifiInfo.ssid,
			wifiInfo.password,
			wifiInfo.isHidden,
			errorCorrectionLevel
		);
	};

	const drawQRCode = (qrCodeData: Uint8Array | null, drawIcon: boolean = false): void => {
		if (!canvas || qrCodeData === null) return;
		if (includeIcon && (errorCorrectionLevel == "L" || errorCorrectionLevel == "M")) {
			errorCorrectionLevel = "Q";
		}
		// Calculate size
		const qrCodeSize: number = Math.sqrt(qrCodeData.length);
		const pixelSize: number = Math.ceil(300 / qrCodeSize);
		const size: number = pixelSize * qrCodeSize;
		canvas.width = size;
		canvas.height = size;
		const width5perc = Math.round(size * 0.5) >> 2;
		console.log(width5perc);
		const center = size / 2;
		// Draw QR Code
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		ctx.fillStyle = "black";
		for (let row: number = 0; row < size; row++) {
			for (let col: number = 0; col < size; col++) {
				if (qrCodeData[row * qrCodeSize + col] == 1) {
					const x = col * pixelSize;
					const y = row * pixelSize;
					ctx.beginPath();
					ctx.fillRect(x, y, pixelSize, pixelSize);
				}
			}
		}
		// Draw Icon
		if (drawIcon) {
			ctx.clearRect(center - width5perc, center - width5perc, width5perc * 2, width5perc * 2);
			ctx.lineWidth = 6;
			ctx.beginPath();
			ctx.arc(size / 2, size / 2 + width5perc / 2, width5perc, -(Math.PI * 3) / 4, -Math.PI / 4);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(
				size / 2,
				size / 2 + width5perc / 2,
				width5perc - 10,
				-(Math.PI * 3) / 4,
				-Math.PI / 4
			);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(
				size / 2,
				size / 2 + width5perc / 2,
				width5perc - 20,
				-(Math.PI * 3) / 4,
				-Math.PI / 4
			);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(
				size / 2,
				size / 2 + width5perc / 2 - width5perc * 0.15,
				width5perc * 0.1,
				0,
				2 * Math.PI
			);
			ctx.fill();
		}
	};

	const goBackPage = (): void => {
		$currentPageStore = Pages.WifiInfo;
	};

	const nextPage = (): void => {
		$currentPageStore = Pages.ModelPreview;
	};
</script>

<div class="my-auto flex h-full w-full flex-col lg:grid lg:grid-cols-2">
	<div class="mt-5 flex flex-col items-center justify-center lg:my-auto lg:mt-0">
		<canvas bind:this={canvas} class="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"></canvas>
		<h3 class="text-md mt-4 lg:text-xl">Scan the QR Code with a phone to verify</h3>
	</div>
	<div class="mt-10 flex flex-col items-center justify-center lg:mt-0">
		<div class="flex flex-col lg:h-[360px]">
			<h2 class="mx-auto text-2xl font-bold lg:mr-auto lg:ml-0">QR Code Option:</h2>
			<div
				class="mt-2 flex w-min flex-col text-xl lg:mx-0 lg:ml-0 lg:grid lg:grid-cols-[auto_320px] lg:gap-x-4 lg:gap-y-3"
			>
				<label for="error-level-input mt-2 lg:mt-0" class="my-auto text-nowrap"
					>Error Correction Level:</label
				>
				<select
					id="error-level-input"
					class="rounded-lg bg-white px-2 py-1"
					bind:value={errorCorrectionLevel}
				>
					<option value="L" disabled={includeIcon}>L (7%)</option>
					<option value="M" disabled={includeIcon}>M (15%)</option>
					<option value="Q">Q (25%)</option>
					<option value="H">H (30%)</option>
				</select>
				<p class="col-span-2 text-sm text-nowrap">
					Error correction level M should be sufficient for most user.
				</p>
				<!-- <label for="show-icon-input" class="my-auto text-nowrap">Include Icon:</label>
				<input
					bind:checked={includeIcon}
					id="show-icon-input"
					type="checkbox"
					class="my-auto mr-auto h-7 w-7 cursor-pointer rounded-lg bg-white px-2 py-1"
				/> -->
			</div>
		</div>
	</div>
	<div class="col-span-2 mx-auto mt-10 flex">
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
