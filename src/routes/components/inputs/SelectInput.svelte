<script lang="ts">
	export let id: string;
	export let label: string;
	export let items: { label: string; value: any }[];
	export let value: any;
</script>

<div class="mt-2 flex flex-col text-xl">
	<label for={id}>{label}</label>
	<select bind:value {id} class="mt-1 rounded-lg bg-white px-2 py-1">
		{#each items as item}
			<option value={item.value}>{item.label}</option>
		{/each}
	</select>
</div>
