<script lang="ts">
	import { page } from '$app/stores';
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
</script>

<svelte:window on:scroll={handleScroll} />
<!-- Main wrapper - establish a stacking context -->
<div class="relative isolate flex min-h-screen">
	<div
		class="
    fixed inset-y-0 left-0 z-60 transform
    lg:static lg:z-auto lg:transform-none
    {isSidebarOpen ? 'translate-x-0 overflow-y-auto' : '-translate-x-full lg:translate-x-0'}
    w-64 border-r
    border-slate-200 bg-slate-50 p-6
    transition-transform duration-200 ease-in-out
    dark:border-slate-700
    dark:bg-slate-900
    {isSidebarVisible ? 'top-24' : 'top-0'}
"
	>
		<div class="mb-6 flex items-center justify-between">
			<a
				href="/conservation/properties"
				class="font-serif text-xl text-slate-800 transition-colors hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-300"
			>
				Our Properties
			</a>
			<button
				class="rounded-lg p-2 hover:bg-slate-200 lg:hidden dark:hover:bg-slate-800"
				onclick={() => (isSidebarOpen = false)}
			>
				<X class="h-5 w-5 text-slate-700 dark:text-slate-200" />
			</button>
		</div>
		<nav class="space-y-2">
			{#each properties as property}
				<a
					href="/conservation/properties/{property.slug}"
					onclick={() => (isSidebarOpen = false)}
					class="
                        block rounded px-3 py-2
                        {$page.url.pathname === `/conservation/properties/${property.slug}`
						? 'bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100'
						: 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}
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
	</div>

	<!-- Main Content Area -->
	<div class="flex-1">
		<!-- Properties Menu Button in Content Area -->
		<div
			class="sticky top-0 z-40 border-b border-slate-200 bg-white p-4 lg:hidden dark:border-slate-700 dark:bg-slate-900"
		>
			<button
				class="flex items-center space-x-2 rounded-lg bg-slate-100 px-4 py-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
				onclick={() => (isSidebarOpen = true)}
			>
				<Menu class="h-5 w-5" />
				<span>Properties Menu</span>
			</button>
		</div>

		<div class="p-4 lg:p-8">
			{#if isSidebarOpen}
				<div
					class="bg-opacity-50 fixed inset-0 z-45 bg-black"
					onclick={() => (isSidebarOpen = false)}
				></div>
			{/if}
			<div class="relative">
				{@render children()}
			</div>
			<div
				class="sticky top-0 z-40 border-b border-slate-200 bg-white p-4 lg:hidden dark:border-slate-700 dark:bg-slate-900"
			>
				<button
					class="flex items-center space-x-2 rounded-lg bg-slate-100 px-4 py-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
					onclick={() => (isSidebarOpen = true)}
				>
					<Menu class="h-5 w-5" />
					<span>Properties Menu</span>
				</button>
			</div>
		</div>
	</div>
</div>
