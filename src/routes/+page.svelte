<script lang="ts">
	import { Pages } from "$lib/enums";
	import { currentPageStore } from "$lib/stores.svelte";
	import ExportOptions from "./components/ExportOptions.svelte";
	import ModelPreview from "./components/ModelPreview.svelte";
	import QRPreview from "./components/QRPreview.svelte";
	import WifiInfoInput from "./components/WifiInfoInput.svelte";
</script>

<div
	class="flex h-full w-screen flex-col items-center bg-[#EFEFEF] px-2 py-2 font-nunito-sans lg:h-screen"
>
	<h1 class="w-full text-center text-2xl md:text-3xl">WiFi QR Code 3D Model Generator</h1>

	{#if $currentPageStore == Pages.WifiInfo}
		<h2 class="my-3 text-xl lg:text-2xl">Step 1: Enter WiFi Info</h2>
		<WifiInfoInput />
	{:else if $currentPageStore == Pages.QRPreview}
		<h2 class="my-3 text-2xl">Step 2: Preview and verify QR Code</h2>
		<QRPreview />
	{:else if $currentPageStore == Pages.ModelPreview}
		<h2 class="my-3 text-2xl">Step 3: Preview the 3D model</h2>
		<ModelPreview />
	{:else if $currentPageStore == Pages.ExportOptions}
		<h2 class="my-3 text-2xl">Step 4: Export Options</h2>
		<ExportOptions />
	{/if}
</div>
