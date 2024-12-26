<script lang="ts">
	let { code, value = $bindable(), ...props } = $props();
</script>

<label for={code} style="display: inline;">{code}:</label>
<input class="input-number" id={code} type="number" bind:value />

<style>
	.input-number {
		width: 5em;
	}
</style>
