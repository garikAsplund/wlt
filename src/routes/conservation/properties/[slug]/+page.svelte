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
			<h1 class="font-serif text-4xl text-slate-800 dark:text-slate-100">
				{data.property.name}
			</h1>
			{#if data.property.acres}
				<span class="text-base text-slate-500 dark:text-slate-400 sm:pl-0 pl-4">{data.property.acres.toLocaleString()} acres</span>
			{/if}
		</div>
		<div class="mb-8 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-6">
			{#each data.property.fullDescription as paragraph}
				<p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-300 last:mb-0">
					{paragraph}
				</p>
			{/each}
		</div>
	{:else}
		<p class="text-slate-800 dark:text-slate-200">Property not found</p>
	{/if}
</div>