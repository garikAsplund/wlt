<script lang="ts">
	import { Camera, ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let showImageInfo = $state(false);
	let mounted = $state(false);
	let scrollY = $state(0);
	let modalNode: HTMLDivElement | undefined = $state();
	let buttonNode: HTMLButtonElement | undefined = $state();
	let imageNode: HTMLImageElement | undefined = $state();

	$effect(() => {
		if (imageNode) {
			const yPos = scrollY * 0.5; // Adjust speed - lower = slower
			imageNode.style.transform = `translateY(${yPos}px)`;
		}
	});

	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 0);

		// Add click outside handler
		const handleClickOutside = (event: MouseEvent) => {
			if (
				showImageInfo &&
				modalNode &&
				buttonNode &&
				!modalNode.contains(event.target as Node) &&
				!buttonNode.contains(event.target as Node)
			) {
				showImageInfo = false;
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});
</script>

<svelte:window bind:scrollY />

<div class="relative">
	<div class="absolute z-10 h-[64vh] w-full"></div>
	{#if mounted}
		<div class="absolute z-20 flex h-full w-full flex-col sm:grid sm:grid-rows-6">
			<div class="h-full w-full px-6 sm:row-start-4 sm:px-4">
				<h1
					class="px-4 pt-8 text-center font-['Georgia'] text-2xl font-medium tracking-wide text-slate-100 drop-shadow-md sm:pt-0 sm:text-3xl lg:text-5xl"
					in:fade={{ duration: 500, delay: 200 }}
				>
					Protecting the rural nature of <nobr>Wallowa County</nobr>
				</h1>
				<div
					class="flex h-[55vh] flex-col items-center justify-center gap-2 sm:h-full sm:flex-row sm:gap-4 sm:pt-8"
					in:fade={{ duration: 500, delay: 400 }}
				>
					<a
						href="/about/staff"
						class="w-full bg-black/40 px-6 py-3 text-center text-base font-light tracking-wide text-white backdrop-blur-sm transition-all hover:bg-black/50 sm:w-auto sm:bg-white/20 sm:px-8 sm:text-lg sm:hover:bg-white/30"
					>
						Who We Are
					</a>
					<a
						href="/about/plan"
						class="w-full bg-black/40 px-6 py-3 text-center text-base font-light tracking-wide text-white backdrop-blur-sm transition-all hover:bg-black/50 sm:w-auto sm:bg-white/20 sm:px-8 sm:text-lg sm:hover:bg-white/30"
					>
						What We Believe
					</a>
					<a
						href="/conservation/properties"
						class="w-full bg-black/40 px-6 py-3 text-center text-base font-light tracking-wide text-white backdrop-blur-sm transition-all hover:bg-black/50 sm:w-auto sm:bg-white/20 sm:px-8 sm:text-lg sm:hover:bg-white/30"
					>
						Where We Work
					</a>
				</div>
			</div>
		</div>
	{/if}
	<button
		bind:this={buttonNode}
		class="absolute right-3 bottom-3 z-20 cursor-pointer rounded-full bg-black/30 p-2 transition-colors hover:bg-black/40 sm:right-4 sm:bottom-4"
		onclick={() => (showImageInfo = !showImageInfo)}
		aria-label="Show image information"
	>
		<Camera class="h-5 w-5 text-white" />
	</button>
	{#if showImageInfo}
		<div
			bind:this={modalNode}
			class="absolute right-3 bottom-14 z-20 mx-3 max-w-[calc(100%-24px)] bg-black px-4 py-2 text-sm text-white sm:right-4 sm:bottom-16 sm:mx-4 sm:max-w-md md:bg-black/50"
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
			bind:this={imageNode}
			src="/static/images/hero.jpg?w=original;1280;640;320"
			alt="View above the protected moraines of Wallowa Lake"
			class="h-full w-full object-cover object-left will-change-transform"
			style="object-position: center 40%; transform: translateY(0)"
			fetchpriority="high"
			loading="eager"
			sizes="(max-width: 640px) 320px, (max-width: 1280px) 640px, 1280px"
		/>
	</div>
</div>
