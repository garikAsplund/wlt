<script lang="ts">
	import { page } from '$app/state';
	import { Menu, X, ChevronRight } from 'lucide-svelte';
	import { properties } from '$lib/properties';

	let { children } = $props();
	let isSidebarOpen = $state(false);
	let lastScrollY = $state(0);
	let isSidebarVisible = $state(true);
	let hasScrolled = $state(false);

	function handleScroll(event) {
		hasScrolled = true;
		const currentScrollY = window.scrollY;
		if (hasScrolled) {
			if (currentScrollY > lastScrollY && currentScrollY > 10) {
				isSidebarVisible = false;
			} else if (currentScrollY < lastScrollY || currentScrollY < 100) {
				isSidebarVisible = true;
			}
		}
		lastScrollY = currentScrollY;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			isSidebarOpen = false;
		}
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
		}
	});

</script>

<svelte:window onscroll={handleScroll} />

<!-- Main wrapper -->
<div class="relative flex min-h-screen">
	<!-- Sidebar -->
	<aside
		class="
                fixed z-100 flex
                h-[100dvh] w-full flex-col overflow-y-auto border-r border-slate-200
                bg-slate-50 p-6
                transition-transform duration-200 ease-in-out
                md:w-2/5 lg:sticky lg:w-1/4
                dark:border-slate-700 dark:bg-[#121212]
                {isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                {isSidebarVisible ? 'top-24' : 'top-0 md:top-24'}
            "
		role="navigation"
		aria-label="Properties navigation"
	>
		<div class="mb-6 flex items-center justify-between">
			<a
				href="/conservation/properties"
				onclick={() => (isSidebarOpen = false)}
				class="font-serif text-xl text-slate-800 transition-colors hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-300"
			>
				Our Properties
			</a>
			<button
				type="button"
				class="rounded-lg p-2 hover:bg-slate-200 lg:hidden dark:hover:bg-slate-800/50"
				onclick={() => (isSidebarOpen = false)}
				onkeydown={(e) => e.key === 'Enter' && (isSidebarOpen = false)}
				aria-label="Close menu"
			>
				<X class="h-5 w-5 text-slate-700 dark:text-slate-200" />
			</button>
		</div>
		<nav class="space-y-2" aria-label="Properties">
			{#each properties as property, index}
				<a
					href="/conservation/properties/{property.slug}"
					onclick={() => (isSidebarOpen = false)}
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							isSidebarOpen = false;
							window.location.href = `/conservation/properties/${property.slug}`;
						}
						// Arrow key navigation
						if (e.key === 'ArrowDown' && index < properties.length - 1) {
							e.preventDefault();
							document.querySelector(`nav a:nth-child(${index + 2})`).focus();
						}
						if (e.key === 'ArrowUp' && index > 0) {
							e.preventDefault();
							document.querySelector(`nav a:nth-child(${index})`).focus();
						}
					}}
					class="
						block rounded px-3 py-2 transition-colors
						{page.url.pathname === `/conservation/properties/${property.slug}`
						? 'bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100'
						: 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50'}
					"
				>
					<div class="flex items-center justify-between">
						<span>{property.name}</span>
						<ChevronRight class="h-4 w-4 text-slate-500 dark:text-slate-400" />
					</div>
					<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">{property.description}</p>
				</a>
			{/each}
		</nav>
	</aside>

	<!-- Main Content Area -->
	<main class="z-40 flex-1">
		<!-- Properties Menu Button in Content Area -->
		<div class="top-0 border-b border-slate-200 p-4 lg:hidden dark:border-slate-700">
			<button
				type="button"
				class="flex items-center space-x-2 rounded-lg bg-slate-100 px-4 py-2 text-slate-700
					transition-colors duration-200 hover:bg-slate-200 dark:bg-slate-800
					dark:text-slate-200 dark:hover:bg-slate-700"
				onclick={() => (isSidebarOpen = true)}
				onkeydown={(e) => e.key === 'Enter' && (isSidebarOpen = true)}
				aria-label="Open properties menu"
				aria-expanded={isSidebarOpen}
			>
				<Menu class="h-5 w-5" />
				<span>Properties Menu</span>
			</button>
		</div>

		<div class="p-4 lg:p-8">
			{#if isSidebarOpen}
				<div
					role="presentation"
					class="fixed inset-0 z-45 bg-black/50 backdrop-blur-sm dark:bg-black/70"
					onclick={() => (isSidebarOpen = false)}
					onkeydown={(e) => e.key === 'Escape' && (isSidebarOpen = false)}
				></div>
			{/if}
			<div class="relative z-40">
				{@render children()}
			</div>
		</div>
		<div class="top-0 z-40 border-b border-slate-200 p-4 lg:hidden dark:border-slate-700">
			<button
				type="button"
				class="flex items-center space-x-2 rounded-lg bg-slate-100 px-4 py-2 text-slate-700
					transition-colors duration-200 hover:bg-slate-200 dark:bg-slate-800
					dark:text-slate-200 dark:hover:bg-slate-700"
				onclick={() => (isSidebarOpen = true)}
				onkeydown={(e) => e.key === 'Enter' && (isSidebarOpen = true)}
				aria-label="Open properties menu"
				aria-expanded={isSidebarOpen}
			>
				<Menu class="h-5 w-5" />
				<span>Properties Menu</span>
			</button>
		</div>
	</main>
</div>
