<script lang="ts">
	import { ExportModels, FileFormats, Pages } from "$lib/enums";
	import { currentPageStore, modelRenderer } from "$lib/stores.svelte";
	import SelectInput from "./inputs/SelectInput.svelte";

	const exportFormats: { [key: string]: FileFormats } = {
		GLTF: FileFormats.GLTF,
		OBJ: FileFormats.OBJ,
		PLY: FileFormats.PLY,
		STL: FileFormats.STL,
		"3MF": FileFormats._3MF
	};

	let canvas: HTMLCanvasElement;

	const renderModel = (canvas: HTMLCanvasElement): void => {
		if (!canvas) return;
		$modelRenderer.render(canvas);
	};

	$: renderModel(canvas);

	let format: FileFormats = FileFormats._3MF;
	let exportModelType: ExportModels = ExportModels.CardContentAndStand;

	const exportModel = async (): Promise<void> => {
		const blob = await $modelRenderer.export(format, exportModelType);
		const a = document.createElement("a");
		document.body.appendChild(a);
		a.style = "display: none";
		const url = window.URL.createObjectURL(blob);
		a.href = url;
		a.download = "3d-wifi-qrcode.zip";
		a.click();
		window.URL.revokeObjectURL(url);
		document.body.removeChild(a);
	};
</script>

<div class="flex h-full w-full flex-col lg:grid lg:grid-cols-2">
	<canvas bind:this={canvas} class="mx-auto lg:m-auto" width="500" height="500"></canvas>
	<div class="mx-auto mt-5 flex h-[500px] flex-col lg:mx-0 lg:my-auto lg:w-7/12">
		<h2 class="text-2xl font-bold">Export Options:</h2>
		<SelectInput
			id="format-select"
			label="Export Format:"
			items={Object.keys(exportFormats).map((k) => ({ label: k, value: exportFormats[k] }))}
			bind:value={format}
		/>
		<SelectInput
			id="parts-select"
			label="Models:"
			items={[
				{ label: "Separate Models", value: ExportModels.Separate },
				{ label: "Base with Content and Stand", value: ExportModels.CardContentAndStand },
				{ label: "Single Model", value: ExportModels.Single }
			]}
			bind:value={exportModelType}
		/>
		<div class="mx-auto mt-10 flex lg:mt-auto lg:ml-auto">
			<button
				onclick={() => ($currentPageStore = Pages.ModelPreview)}
				class="ml-0 w-48 rounded-lg bg-gray-500 px-2 py-1 text-2xl text-white hover:bg-gray-500/50 lg:ml-auto"
				>Back
			</button>
			<button
				onclick={exportModel}
				class="ml-4 w-56 rounded-lg bg-blue-600 px-2 py-1 text-2xl text-white hover:bg-blue-600/50"
				>Download Model
			</button>
		</div>
	</div>
</div>
