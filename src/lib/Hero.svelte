<script lang="ts">
	import { Camera, ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let showImageInfo = $state(false);
	let mounted = $state(false);
	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 0);
	});
</script>

<div class="relative">
	<div class="absolute z-10 h-[64vh] w-full"></div>
	{#if mounted}
		<div class="absolute z-20 sm:grid h-full w-full sm:grid-rows-6 flex flex-col">
			<div class="w-full h-full sm:row-start-4 px-6 sm:px-4">
				<h1
					class="pt-8 sm:pt-0 px-4 text-center font-['Georgia'] text-2xl sm:text-3xl font-medium tracking-wide text-slate-100 drop-shadow-md lg:text-5xl"
					in:fade={{ duration: 500, delay: 200 }}
				>
					Protecting the rural nature of <nobr>Wallowa County</nobr>
				</h1>
				<div 
				class="flex flex-col h-[55vh] sm:h-full items-center sm:flex-row justify-center gap-2 sm:gap-4"
				in:fade={{ duration: 500, delay: 400 }}
				>
					<a
						href="/about/staff"
						class="w-full sm:w-auto bg-black/40 sm:bg-white/20 px-6 sm:px-8 py-3 text-base sm:text-lg font-light tracking-wide text-white backdrop-blur-sm transition-all hover:bg-black/50 sm:hover:bg-white/30 text-center"
					>
						Who We Are
					</a>
					<a
						href="/about/plan"
						class="w-full sm:w-auto bg-black/40 sm:bg-white/20 px-6 sm:px-8 py-3 text-base sm:text-lg font-light tracking-wide text-white backdrop-blur-sm transition-all hover:bg-black/50 sm:hover:bg-white/30 text-center"
					>
						What We Believe
					</a>
					<a
						href="/conservation/properties"
						class="w-full sm:w-auto bg-black/40 sm:bg-white/20 px-6 sm:px-8 py-3 text-base sm:text-lg font-light tracking-wide text-white backdrop-blur-sm transition-all hover:bg-black/50 sm:hover:bg-white/30 text-center"
					>
						Where We Work
					</a>
				</div>
			</div>
		</div>
	{/if}
	<button
		class="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 z-20 cursor-pointer rounded-full bg-black/30 p-2 transition-colors hover:bg-black/40"
		onclick={() => (showImageInfo = !showImageInfo)}
		aria-label="Show image information"
	>
		<Camera class="h-5 w-5 text-white" />
	</button>
	{#if showImageInfo}
		<div
			class="absolute right-3 sm:right-4 bottom-14 sm:bottom-16 z-20 mx-3 sm:mx-4 bg-black/50 px-4 py-2 text-sm text-white max-w-[calc(100%-24px)] sm:max-w-md"
			transition:fade
		>
			<p class="mb-2">
				Aerial view of Wallowa Lake and its iconic moraines, a Wallowa Land Trust conservation area.
			</p>
			<a
				href="https://unsplash.com/photos/an-aerial-view-of-a-lake-surrounded-by-mountains-vfHdM8Gb2K8"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 border-b border-current hover:text-gray-200"
			>
				Photo by Dan Meyers
				<ExternalLink class="h-4 w-4" />
			</a>
		</div>
	{/if}
	<div class="relative h-[64vh] w-full overflow-hidden">
		<enhanced:img
			src="/static/images/hero.jpg"
			alt="View above the protected moraines of Wallowa Lake"
			class="h-full w-full object-cover object-left"
			style="object-position: center 40%"
		/>
	</div>
</div>