<script lang="ts">
	export let id: string;
	export let label: string;
	export let value: number;
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let step: number | undefined = undefined;
</script>

<div class="mt-2">
	<label for={id} class="text-xl">{label}</label>
	<div class="flex">
		<input bind:value {id} class="w-[calc(100%-72px)]" type="range" {min} {max} {step} />
		<input
			bind:value
			id={`${id}-number`}
			class="ml-2 w-16 rounded-lg bg-white px-1 py-1 text-center"
			type="number"
			{min}
			{max}
			{step}
		/>
	</div>
</div>
