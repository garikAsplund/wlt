<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	import { page } from '$app/state';
	import { heroContent } from '$lib/heroContent';

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

<div
	class="flex h-full min-h-screen w-full flex-col selection:bg-black selection:text-slate-200 dark:selection:bg-yellow-400 dark:selection:text-black"
>
	<Nav />
	<div class="relative inset-0 z-50 w-full flex-grow">
		<div class="h-full w-full">
			{#if heroContent[page.url.pathname]}
				<div class="relative overflow-hidden">
					<enhanced:img
						bind:this={imageNode}
						src={heroContent[page.url.pathname].image}
						alt={heroContent[page.url.pathname].alt}
						class="h-36 w-full object-cover sm:h-64 will-change-transform scale-110"
						style="object-position: {heroContent[page.url.pathname].position}; transform: translateY(0)"
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