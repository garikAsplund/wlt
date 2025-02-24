<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	import { page } from '$app/state';
	import { heroContent } from '$lib/heroContent';
	import { Camera, ExternalLink } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let pageTitle = $derived(
		page.url.pathname === '/'
			? `Wallowa Land Trust`
			: `${page.url.pathname.split('/')[page.url.pathname.split('/').length - 1].charAt(0).toUpperCase() + page.url.pathname.split('/')[page.url.pathname.split('/').length - 1].slice(1).replace(/-/g, ' ')} | Wallowa Land Trust`
	);
	let scrollY = $state(0);
	let imageNode: HTMLImageElement = $state();
	let showImageInfo = $state(false);
	let mounted = $state(false);
	let modalNode: HTMLDivElement | undefined = $state();
	let buttonNode: HTMLButtonElement | undefined = $state();

	$effect(() => {
		if (imageNode) {
			const yPos = scrollY * 0.2; // Adjust speed here
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

	let { children, data } = $props();
</script>

<svelte:window bind:scrollY />
<svelte:head><title>{pageTitle}</title></svelte:head>

<div
	class="flex h-full min-h-screen w-full flex-col selection:bg-black selection:text-slate-200 dark:selection:bg-yellow-400 dark:selection:text-black"
>
	<Nav />
	<div class="relative inset-0 w-full flex-grow">
		<div class="h-full w-full">
			{#if heroContent[page.url.pathname]}
				<div class="relative overflow-hidden">
					<enhanced:img
						bind:this={imageNode}
						src={`${heroContent[page.url.pathname].image}?w=1280;640;320`}
						alt={heroContent[page.url.pathname].alt}
						class="h-36 w-full scale-110 object-cover will-change-transform sm:h-64"
						style="object-position: {heroContent[page.url.pathname].position ||
							'center'}; transform: translateY(0)"
						fetchpriority="high"
						sizes="(max-width: 640px) 320px, (max-width: 1280px) 640px, 1280px"					/>
					<div
						class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-6"
					>
						<h1 class="mx-auto max-w-4xl font-serif text-3xl text-white sm:text-4xl">
							{heroContent[page.url.pathname].title}
						</h1>
					</div>

					{#if heroContent[page.url.pathname]?.credit}
						<button
							bind:this={buttonNode}
							class="absolute right-3 bottom-3 z-20 cursor-pointer rounded-full bg-black/30 p-2 transition-colors hover:bg-black/40 sm:right-4 sm:bottom-4"
							onclick={() => (showImageInfo = !showImageInfo)}
							aria-label="Show image information"
						>
							<Camera class="h-5 w-5 text-white" />
						</button>

						{#if showImageInfo && mounted}
							<div
								bind:this={modalNode}
								class="absolute right-3 bottom-14 z-20 mx-3 max-w-[calc(100%-24px)] bg-black px-4 py-2 text-sm text-white sm:right-4 sm:bottom-16 sm:mx-4 sm:max-w-md md:bg-black/50"
								transition:fade
							>
								<p class="mb-2">
									{heroContent[page.url.pathname].alt}
								</p>
								{#if heroContent[page.url.pathname].credit.url}
									<a
										href={heroContent[page.url.pathname].credit.url}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-2 border-b border-current hover:text-gray-200"
									>
										Photo by {heroContent[page.url.pathname].credit.photographer}
										<ExternalLink class="h-4 w-4" />
									</a>
								{:else}
									<p class="inline-flex items-center gap-2">
										Photo by {heroContent[page.url.pathname].credit.photographer}
									</p>
								{/if}
							</div>
						{/if}
					{/if}
				</div>
			{/if}
			{@render children()}
		</div>
	</div>
	<Footer {data} />
</div>
