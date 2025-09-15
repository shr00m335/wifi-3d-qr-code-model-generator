import { writable } from "svelte/store";
import { ModelRenderer } from "./3dModel";
import { Pages } from "./enums";
import type { WifiInfo } from "./models";

export const currentPageStore = writable<Pages>(Pages.WifiInfo);
export const wifiInfoStore = writable<WifiInfo | null>(null);
export const qrCodeData = writable<Uint8Array | null>(null);
export const modelRenderer = writable<ModelRenderer>();
