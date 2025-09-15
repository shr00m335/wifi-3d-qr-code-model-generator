<script lang="ts">
	import { Pages } from "$lib/enums";
	import type { WifiInfo } from "$lib/models";
	import { currentPageStore, wifiInfoStore } from "$lib/stores.svelte";
	import WifiIcon from "../icons/wifi.svelte";

	// Input Values
	let ssid: string = "";
	let password: string = "";
	let isHiddenNetwork: boolean = false;

	const submitWifiInfo = (): void => {
		// Reject if ssid is empty
		if (ssid.trim().length == 0) {
			alert("WiFi SSID cannot be empty");
			return;
		}
		// Create WiFi Info Object
		const wifiInfo: WifiInfo = {
			ssid,
			password,
			isHidden: isHiddenNetwork
		};
		// Save to store
		$wifiInfoStore = wifiInfo;
		// Go to QR Code preview page
		$currentPageStore = Pages.QRPreview;
	};
</script>

<div class="mt-20 flex flex-col">
	<div class="mx-auto mb-6">
		<WifiIcon />
	</div>
	<div class="flex flex-col text-xl lg:grid lg:grid-cols-[auto_320px] lg:gap-x-3 lg:gap-y-4">
		<label for="ssid-input" class="my-auto">WiFi SSID:</label>
		<input bind:value={ssid} id="ssid-input" class="rounded-lg bg-white px-2 py-1" type="text" />
		<label for="password-input" class="mt-5 lg:my-auto lg:mt-0">WiFi Password:</label>
		<input
			bind:value={password}
			id="password-input"
			class="rounded-lg bg-white px-2 py-1"
			type="password"
		/>
		<label for="hidden-input" class="mt-5 lg:my-auto lg:mt-0">Hidden Network:</label>
		<input
			bind:checked={isHiddenNetwork}
			id="hidden-input"
			class="my-auto mr-auto h-7 w-7 cursor-pointer rounded-lg bg-white px-2 py-1"
			type="checkbox"
		/>
	</div>
	<button
		onclick={submitWifiInfo}
		class="mx-auto mt-8 w-48 rounded-lg bg-blue-600 px-2 py-1 text-2xl text-white hover:bg-blue-600/50"
		>Next</button
	>
</div>
