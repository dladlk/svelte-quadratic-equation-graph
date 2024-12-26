<script lang="ts">
	import { draw } from "svelte/transition";

	let { show = true, pathLine } = $props();
</script>

<svg viewBox="0 0 100 100">
	{#if show}
		<path transition:draw={{ duration: 200 }} d={pathLine} />
	{/if}
</svg>

<style>
	path {
		stroke: purple;
		stroke-width: 2;
		fill: none;
		stroke-linecap: round;
	}
</style>
