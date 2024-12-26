<script lang="ts">
	import CoefficientInput from "./CoefficientInput.svelte";
	import LineGraph from "./LineGraph.svelte";
	import { getData, buildPathLine } from "./lineData.svelte";
	let show = $state(true);

	let a = $state(2);
	let b = $state(3);
	let c = $state(4);

	let data = $derived(getData(a, b, c));

	let pathLine = $state(null);
	$effect(() => {
		const f = buildPathLine(data);
		pathLine = f(data);
		console.log(pathLine.slice(0, 100));
	});
</script>

<label for="show" style="display: inline;">Show Line:</label>
<input id="show" type="checkbox" bind:checked={show} />

<div
	style="display: flex; flex-direction: row; justify-content: left; gap: 2em;"
>
	<div style="width: 600px; border: 1px solid black;">
		<LineGraph {show} {pathLine} />
	</div>

	<div style="width: 600px; border: 1px solid black; padding: 20px;">
		<div
			style="display: flex; flex-direction: columns; justify-content: space-between;"
		>
			<div>
				<h2>y = ax&sup2; + bx + c</h2>

				<CoefficientInput code="a" bind:value={a} />
				<CoefficientInput code="b" bind:value={b} />
				<CoefficientInput code="c" bind:value={c} />
			</div>
			<div>
				<h2>b&sup2; - 4ac</h2>
			</div>
		</div>

		<div
			style="display: flex; flex-direction: columns; justify-content: space-between;"
		>
			<div>
				<h1>Formula</h1>
				<h2>
					y = {a == 1 ? "" : a}{@html a > 0 ? "x&sup2;" : ""}
					+
					{b == 1 ? "" : b}{b == 0 ? "" : "x"}
					+
					{c}
				</h2>
			</div>

			<div>
				<h1>Discriminant</h1>
				<h2>{b}&sup2; - 4*{a}*{c} = {b * b - 4 * a * c}</h2>
			</div>
		</div>

		<div
			style="display: flex; flex-direction: columns; justify-content: space-between;"
		>
			<div>
				<h1>First 10 values</h1>
				<ol>
					{#each data.slice(0, 10) as v}
						<li>[{v.x}, {v.y}]</li>
					{/each}
				</ol>
			</div>
			<div>
				<h1>Last 10 values</h1>
				<ol>
					{#each data.slice(-10) as v}
						<li>[{v.x}, {v.y}]</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>
</div>
