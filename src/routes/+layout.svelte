<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	import { page } from '$app/state';
	import { heroContent } from '$lib/heroContent';

	let pageTitle = $derived(
		page.url.pathname === '/'
			? `Wallowa Land Trust`
			: `${page.url.pathname.split('/')[page.url.pathname.split('/').length - 1].charAt(0).toUpperCase() + page.url.pathname.split('/')[page.url.pathname.split('/').length - 1].slice(1).replace(/-/g, ' ')} | Wallowa Land Trust`
	);

	let scrollY = $state(0);
	let imageNode: HTMLImageElement = $state();

	$effect(() => {
		if (imageNode) {
			const yPos = scrollY * 0.2; // Adjust speed here
			imageNode.style.transform = `translateY(${yPos}px)`;
		}
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
						src={heroContent[page.url.pathname].image}
						alt={heroContent[page.url.pathname].alt}
						class="h-36 w-full scale-110 object-cover will-change-transform sm:h-64"
						style="object-position: {heroContent[page.url.pathname]
							.position}; transform: translateY(0)"
					/>
					<div
						class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-6"
					>
						<h1 class="mx-auto max-w-4xl font-serif text-3xl text-white sm:text-4xl">
							{heroContent[page.url.pathname].title}
						</h1>
					</div>
				</div>
			{/if}
			{@render children()}
		</div>
	</div>
	<Footer {data} />
</div>
