<script lang="ts">
	import { page } from '$app/stores';
	let { data } = $props();
</script>

<div class="mx-auto max-w-3xl">
	{#if data.property}
		<div class="mb-8">
			<img
				src={data.property.image}
				alt={`${data.property.name} landscape`}
				class="h-auto w-full rounded-lg object-cover"
			/>
		</div>
		<div class="mb-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
			<h1 class="font-serif text-4xl text-slate-800">
				{data.property.name}
			</h1>
			{#if data.property.acres}
				<span class="text-base text-slate-500 sm:pl-0 pl-4">{data.property.acres.toLocaleString()} acres</span>
			{/if}
		</div>
		<div class="mb-8 rounded-lg bg-slate-50 p-6">
			{#each data.property.fullDescription as paragraph}
				<p class="mb-4 leading-relaxed text-slate-700 last:mb-0">
					{paragraph}
				</p>
			{/each}
		</div>
	{:else}
		<p>Property not found</p>
	{/if}
</div>