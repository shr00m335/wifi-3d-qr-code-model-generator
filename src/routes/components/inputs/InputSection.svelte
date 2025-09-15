<script lang="ts">
	import UpArrow from "../../assets/up_arrow.svelte";

	export let title: string;

	let isHidden: boolean = false;
</script>

<div class="flex w-[400px] flex-col">
	<button class="mt-2 flex cursor-pointer justify-between" onclick={() => (isHidden = !isHidden)}>
		<h3 class="text-xl font-bold">{title}</h3>

		<div class="my-auto" style={`transform: rotate(${isHidden ? 0 : 180}deg)`}>
			<UpArrow width={24} height={24} />
		</div>
	</button>
	{#if !isHidden}
		<slot />
	{/if}
</div>
