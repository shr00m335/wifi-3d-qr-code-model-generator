<script lang="ts">
	export let id: string;
	export let label: string;
	export let value: number;
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let step: number = 1;
	export let unit: string | undefined = undefined;
</script>

<div class="mt-2 flex">
	<label for={id} class="my-auto text-xl">{label}</label>
	<input
		bind:value
		{id}
		class="ml-2 w-12 rounded-lg bg-white px-1 py-1 text-center"
		type="number"
		{min}
		{max}
		{step}
	/>
	<span class="my-auto ml-2 text-xl">{unit}</span>
</div>
