<script lang="ts">
	import { Camera, ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	let showImageInfo = $state(false);
</script>

<div class="relative">
	<div class="absolute z-10 h-full w-full bg-gradient-to-b from-black/30 to-white/25"></div>

	<h1
		class="absolute z-20 w-full py-16 text-center font-['Georgia'] text-2xl font-medium tracking-wide text-white drop-shadow-md lg:text-5xl"
	>
		Protecting the rural nature of Wallowa County
	</h1>

	<button
		class="absolute right-4 bottom-4 z-20 cursor-pointer rounded-full bg-black/30 p-2 transition-colors hover:bg-black/40"
		onclick={() => (showImageInfo = !showImageInfo)}
		aria-label="Show image information"
	>
		<Camera class="h-5 w-5 text-white" />
	</button>

	{#if showImageInfo}
		<div
			class="absolute right-4 bottom-16 z-20 rounded-lg bg-black/50 px-4 mx-4 py-2 text-sm text-white"
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
			class="h-full w-full object-cover object-left brightness-110 saturate-[1.2]"
		/>
	</div>
</div>
