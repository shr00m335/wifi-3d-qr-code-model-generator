<script lang="ts">
	export let id: string;
	export let label: string;
	export let checked: boolean;
</script>

<div class="mt-2 flex">
	<label for={id} class="text-xl">{label}</label>
	<input {id} class="my-auto ml-2 h-6 w-6" type="checkbox" bind:checked />
</div>
