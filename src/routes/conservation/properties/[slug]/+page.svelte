<script lang="ts">
	let { data } = $props();
</script>

<div class="mx-auto max-w-3xl">
	{#if data.property}
		<div class="mb-8">
			<enhanced:img
                src={data.property.image}
                alt={`${data.property.name} landscape`}
                class="h-auto w-full rounded-lg object-cover"
            />
		</div>
		<div class="mb-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
			<h1 class="font-serif text-4xl text-slate-800 dark:text-slate-100">
				{data.property.name}
			</h1>
			{#if data.property.acres}
				<span class="pl-4 text-base text-slate-500 sm:pl-0 dark:text-slate-400"
					>{data.property.acres.toLocaleString()} acres</span
				>
			{/if}
		</div>
		<div class="mb-8 rounded-lg bg-slate-50 p-6 dark:bg-slate-800/50">
			{#each data.property.fullDescription as paragraph}
				<p class="mb-4 leading-relaxed text-slate-700 last:mb-0 dark:text-slate-300">
					{paragraph}
				</p>
			{/each}
		</div>
	{:else}
		<p class="text-slate-800 dark:text-slate-200">Property not found</p>
	{/if}
</div>
