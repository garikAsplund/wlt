<script lang="ts">
	import { page } from '$app/state';
	import { ChevronDown, X, AlignJustify } from 'lucide-svelte';
	import Logo from '$lib/Logo.svelte';
	import DonateButton from './DonateButton.svelte';
	import { onMount, tick } from 'svelte';

	const aboutLinks = [
		{ href: '/about/plan', label: 'Strategic Plan' },
		{ href: '/about/staff', label: 'Staff' },
		{ href: '/about/board', label: 'Board' },
		{ href: '/about/reports', label: 'Annual Reports' },
		{ href: '/about/contact', label: 'Contact Us' }
	];

	const conservationLinks = [
		{ href: '/conservation/plan', label: 'Conservation Plan' },
		{ href: '/conservation/easements', label: 'Conservation Easements' },
		{ href: '/conservation/properties', label: 'Protected Properties' }
	];

	const newsLinks = [
		{ href: '/news/newsletters', label: 'Newsletters' },
		{ href: '/news/press', label: 'Press' },
		{ href: '/news/events', label: 'Events' }
	];

	let isMenuOpen = $state(false);
	let isNavbarVisible = $state(true);
	let lastScrollY = $state(0);
	let hasScrolled = $state(false);
	let isNavigating = $state(false);
	let menuNode: HTMLDivElement | undefined = $state();

	/* Desktop dropdown keyboard handling */
	let activeDropdown: string | null = $state(null);
	let menuItems: Record<string, HTMLElement[]> = { about: [], conservation: [], news: [] };

	function toggleDropdown(menu: string) {
		activeDropdown = activeDropdown === menu ? null : menu;
	}

	function closeDropdown() {
		activeDropdown = null;
	}

async function handleMenuButtonKeyDown(e: KeyboardEvent, menu: string) {
  switch (e.key) {
    case 'Enter':
    case ' ':
    case 'ArrowDown':
      e.preventDefault();
      activeDropdown = menu;
      await tick(); // wait until menu items render
      menuItems[menu]?.[0]?.focus();
      break;
    case 'Escape':
      e.preventDefault();
      closeDropdown();
      break;
  }
}

function handleMenuListKeyDown(e: KeyboardEvent, menu: string) {
	const items = menuItems[menu] || [];
	const current = document.activeElement as HTMLElement;
	const i = items.indexOf(current);

	switch (e.key) {
		case 'ArrowDown':
			e.preventDefault();
			items[(i + 1) % items.length]?.focus();
			break;
		case 'ArrowUp':
			e.preventDefault();
			items[(i - 1 + items.length) % items.length]?.focus();
			break;
		case 'Escape':
			e.preventDefault();
			closeDropdown();
			const btn = document.querySelector(`[data-menu="${menu}"]`) as HTMLElement;
			btn?.focus();
			break;
	}
}

	/* Mobile menu state */
	let activeMobileDropdown = $state<string | null>(null);

	function toggleMobileDropdown(dropdown: string) {
		activeMobileDropdown = activeMobileDropdown === dropdown ? null : dropdown;
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleScroll() {
		hasScrolled = true;
		const currentScrollY = window.scrollY;
		if (hasScrolled) {
			if (currentScrollY > lastScrollY && currentScrollY > 10) {
				isNavbarVisible = false;
			} else if (currentScrollY < lastScrollY || currentScrollY < 100) {
				isNavbarVisible = true;
			}
		}
		lastScrollY = currentScrollY;
	}

	type MenuActionParams = { menu: string; index: number };

function collectMenuItem(
  node: HTMLElement,
  params: MenuActionParams
): { destroy?: () => void } {
  const { menu, index } = params;
  if (!menuItems[menu]) menuItems[menu] = [];
  menuItems[menu][index] = node;

  return {
    destroy() {
      // remove reference on destroy
      menuItems[menu][index] = undefined!;
    }
  };
}

	onMount(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			const dropdowns = document.querySelectorAll('[role="menu"]');
			let clickedInsideDropdown = false;
			dropdowns.forEach((d) => {
				if (d.contains(target)) clickedInsideDropdown = true;
			});
			if (!clickedInsideDropdown) closeDropdown();
			if (isMenuOpen && menuNode && !menuNode.contains(target)) closeMenu();
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	});

	$effect(() => {
		page.url.pathname;
		isNavbarVisible = true;
		hasScrolled = false;
		isNavigating = true;
		setTimeout(() => (isNavigating = false), 1000);
	});
</script>

<svelte:window on:scroll={handleScroll} />

<div class="fixed top-0 right-0 left-0 -z-20 h-fit bg-white dark:bg-[#121212]"></div>

<nav
	class="sticky top-0 z-120 w-full bg-white py-0 font-serif font-light text-gray-800 dark:bg-[#121212] dark:text-gray-200
	{isNavbarVisible
		? 'transition-transform duration-800 ease-out'
		: 'transition-transform duration-1000 ease-in'}    
		{isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}"
	id="nav"
	aria-label="Main navigation"
>
	<!-- Main navbar container -->
	<div class="mx-auto flex w-full items-center justify-between px-4 md:px-8">
		<!-- Logo Section - Left -->
		<div class="flex-shrink-0">
			<a href="/" aria-label="Return to homepage" class="hover:opacity-80" onclick={closeMenu}>
				<div class="flex items-center">
					<div class="h-24 w-24 p-2 text-[#1a3d65] dark:text-gray-200">
						<!-- <Logo /> -->
						<enhanced:img src="/static/images/logo.png" />
					</div>
					<div class="flex flex-col justify-center text-xl">
						<p>Wallowa</p>
						<p>Land</p>
						<p>Trust</p>
					</div>
				</div>
			</a>
		</div>

		<!-- Navigation Links - Center -->
		<div class="hidden flex-grow justify-center lg:flex">
			<div class="flex items-center justify-center space-x-4 lg:text-lg xl:space-x-8 xl:text-2xl">
				<!-- About Us Dropdown -->
				<div
					role="menu"
					tabindex="0"
					class="relative hidden lg:block"
					onmouseenter={() => (activeDropdown = 'about')}
					onmouseleave={closeDropdown}
				>
					<button
						data-menu="about"
						aria-haspopup="true"
						aria-expanded={activeDropdown === 'about'}
						class="relative flex items-center p-4 text-center hover:opacity-75
					{page.url.pathname.startsWith('/about')
							? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
							: ''}"
						onclick={() => toggleDropdown('about')}
						onkeydown={(e) => (console.log(e.key), handleMenuButtonKeyDown(e, 'about'))}
					>
						About Us
						<ChevronDown
							class="ml-2 transition-transform duration-200 {activeDropdown === 'about'
								? 'rotate-180'
								: ''}"
							size={20}
						/>
					</button>

					{#if activeDropdown === 'about'}
						<div
							role="menu"
							tabindex="-1"
							class="absolute top-full left-0 w-48 overflow-hidden rounded-b-md border-t border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-[#121212]"
							onkeydown={(e) => handleMenuListKeyDown(e, 'about')}
						>
							{#each aboutLinks as link, i}
								<a
									href={link.href}
									role="menuitem"
									tabindex="-1"
									onclick={closeDropdown}
									use:collectMenuItem={{ menu: 'about', index: i }}
									class="block px-3 py-2.5 text-center text-base transition-colors hover:bg-gray-50 focus:bg-gray-100 focus:outline-none dark:hover:bg-gray-800/60"
								>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Conservation Dropdown -->
				<div
					role="menu"
					tabindex="0"
					class="relative hidden lg:block"
					onmouseenter={() => (activeDropdown = 'conservation')}
					onmouseleave={closeDropdown}
				>
					<button
						data-menu="conservation"
						role="menuitem"
						tabindex="0"
						aria-haspopup="true"
						aria-expanded={activeDropdown === 'conservation'}
						class="relative flex items-center p-4 text-center hover:opacity-75
					{page.url.pathname.startsWith('/conservation')
							? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
							: ''}"
						onclick={() => toggleDropdown('conservation')}
						onkeydown={(e) => handleMenuButtonKeyDown(e, 'conservation')}
					>
						Conservation
						<ChevronDown
							class="ml-2 transition-transform duration-200 {activeDropdown === 'conservation'
								? 'rotate-180'
								: ''}"
							size={20}
						/>
					</button>

					{#if activeDropdown === 'conservation'}
						<div
							role="menu"
							tabindex="-1"
							class="absolute top-full left-0 w-48 overflow-hidden rounded-b-md border-t border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-[#121212]"
							onkeydown={(e) => handleMenuListKeyDown(e, 'conservation')}
						>
							{#each conservationLinks as link, i}
								<a
									href={link.href}
									role="menuitem"
									tabindex="-1"
									onclick={closeDropdown}
									use:collectMenuItem={{ menu: 'conservation', index: i }}
									class="block px-3 py-2.5 text-center text-base transition-colors hover:bg-gray-50 focus:bg-gray-100 focus:outline-none dark:hover:bg-gray-800/60"
								>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Ways to Give Link -->
				<a
					href="/give"
					class="relative p-4 text-center hover:opacity-75 {page.url.pathname === '/give'
						? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
						: ''}"
					aria-current={page.url.pathname === '/give' ? 'page' : undefined}
				>
					Ways to Give
				</a>

				<!-- News and Events Dropdown -->
				<div
					role="menu"
					tabindex="0"
					class="relative hidden lg:block"
					onmouseenter={() => (activeDropdown = 'news')}
					onmouseleave={closeDropdown}
				>
					<button
						data-menu="news"
						role="menuitem"
						tabindex="0"
						aria-haspopup="true"
						aria-expanded={activeDropdown === 'news'}
						class="relative flex flex-nowrap items-center p-4 text-center hover:opacity-75
					{page.url.pathname.startsWith('/news')
							? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
							: ''}"
						onclick={() => toggleDropdown('news')}
						onkeydown={(e) => handleMenuButtonKeyDown(e, 'news')}
					>
						News and Events
						<ChevronDown
							class="ml-2 shrink-0 transition-transform duration-200 {activeDropdown === 'news'
								? 'rotate-180'
								: ''}"
							size={20}
						/>
					</button>

					{#if activeDropdown === 'news'}
						<div
							role="menu"
							tabindex="-1"
							class="absolute top-full left-0 w-64 overflow-hidden rounded-b-md border-t border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-[#121212]"
							onkeydown={(e) => handleMenuListKeyDown(e, 'news')}
						>
							{#each newsLinks as link, i}
								<a
									href={link.href}
									role="menuitem"
									tabindex="-1"
									onclick={closeDropdown}
									use:collectMenuItem={{ menu: 'news', index: i }}
									class="block px-3 py-2.5 text-center text-base transition-colors hover:bg-gray-50 focus:bg-gray-100 focus:outline-none dark:hover:bg-gray-800/60"
								>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
		<!-- <a
			href="/store"
			class="relative p-4 text-center hover:opacity-75 {page.url.pathname === '/store'
				? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
				: ''}"
			aria-current={page.url.pathname === '/store' ? 'page' : undefined}
		>
			Store
		</a> -->

		<!-- Right Section - Donate & Mobile Menu -->
		<div class="flex items-center">
			<!-- Donate Button -->
			<div class="hidden scale-80 lg:block lg:scale-90 xl:scale-100">
				<DonateButton />
			</div>

			<!-- Mobile Menu Button -->
			<div class="lg:hidden">
				<button
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={isMenuOpen}
					aria-controls="mobile-menu"
					class="flex items-center p-4 focus:outline-none"
					onclick={toggleMenu}
				>
					{#if isMenuOpen}
						<X class="h-6 w-6" aria-hidden="true" />
					{:else}
						<AlignJustify class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu (same as before) -->
	{#if isMenuOpen}
		<div
			class="absolute top-24 left-0 z-10 flex w-full flex-col items-center space-y-4 bg-white py-6 text-gray-800 shadow-lg lg:hidden dark:bg-[#121212] dark:text-gray-200"
			id="mobile-menu"
			role="navigation"
			aria-label="Mobile menu"
			bind:this={menuNode}
		>
			<!-- About Us Section -->
			<div class="w-full lg:hidden">
				<button
					class="flex w-full items-center justify-center p-4 text-lg hover:opacity-75"
					onclick={() => toggleMobileDropdown('about')}
				>
					<span
						class={page.url.pathname.startsWith('/about')
							? 'inline-block border-b-2 border-slate-600'
							: ''}
					>
						About Us
					</span>
					<ChevronDown
						class="ml-2 transition-transform {activeMobileDropdown === 'about' ? 'rotate-180' : ''}"
						size={20}
					/>
				</button>

				{#if activeMobileDropdown === 'about'}
					<div class="bg-gray-50 dark:bg-gray-800">
						{#each aboutLinks as link}
							<a
								href={link.href}
								onclick={closeMenu}
								class="block w-full p-4 text-center text-base hover:opacity-75
                                  {page.url.pathname === link.href
									? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-slate-100'
									: 'text-gray-700 dark:text-slate-300'}"
							>
								{link.label}
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Conservation Section -->
			<div class="w-full lg:hidden">
				<button
					class="flex w-full items-center justify-center p-4 text-lg hover:opacity-75"
					onclick={() => toggleMobileDropdown('conservation')}
				>
					<span
						class={page.url.pathname.startsWith('/conservation')
							? 'inline-block border-b-2 border-slate-600'
							: ''}
					>
						Conservation
					</span>
					<ChevronDown
						class="ml-2 transition-transform {activeMobileDropdown === 'conservation'
							? 'rotate-180'
							: ''}"
						size={20}
					/>
				</button>

				{#if activeMobileDropdown === 'conservation'}
					<div class="bg-gray-50 dark:bg-gray-800">
						{#each conservationLinks as link}
							<a
								href={link.href}
								onclick={closeMenu}
								class="block w-full p-4 text-center text-base hover:opacity-75
                                  {page.url.pathname === link.href
									? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-slate-100'
									: 'text-gray-700 dark:text-slate-300'}"
							>
								{link.label}
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Ways to Give Section -->
			<a
				href="/give"
				class="w-full p-4 text-center text-lg hover:opacity-75"
				onclick={closeMenu}
				aria-current={page.url.pathname === '/give' ? 'page' : undefined}
			>
				<span
					class={page.url.pathname === '/give' ? 'inline-block border-b-2 border-slate-600' : ''}
				>
					Ways to Give
				</span>
			</a>

			<!-- News and Events Section -->
			<div class="w-full lg:hidden">
				<button
					class="flex w-full items-center justify-center p-4 text-lg hover:opacity-75"
					onclick={() => toggleMobileDropdown('news')}
				>
					<span
						class={page.url.pathname.startsWith('/news')
							? 'inline-block border-b-2 border-slate-600'
							: ''}
					>
						News and Events
					</span>
					<ChevronDown
						class="ml-2 transition-transform {activeMobileDropdown === 'news' ? 'rotate-180' : ''}"
						size={20}
					/>
				</button>

				{#if activeMobileDropdown === 'news'}
					<div class="bg-gray-50 dark:bg-gray-800">
						{#each newsLinks as link}
							<a
								href={link.href}
								onclick={closeMenu}
								class="block w-full p-4 text-center text-base hover:opacity-75
                                  {page.url.pathname === link.href
									? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-slate-100'
									: 'text-gray-700 dark:text-slate-300'}"
							>
								{link.label}
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Store Section -->
			<!-- <a href="/store"
           class="w-full p-4 text-center text-lg hover:opacity-75"
           onclick={closeMenu}
           aria-current={page.url.pathname === '/store' ? 'page' : undefined}>
            <span class={page.url.pathname === '/store' ? 'inline-block border-b-2 border-slate-600' : ''}>
                Store
            </span>
        </a>
         -->
			<DonateButton />
		</div>
	{/if}
</nav>
