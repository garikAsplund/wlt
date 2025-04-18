<script lang="ts">
	import { page } from '$app/state';
	import { ChevronDown, X, AlignJustify } from 'lucide-svelte';
	import Logo from '$lib/Logo.svelte';
	import DonateButton from './DonateButton.svelte';
	import { onMount } from 'svelte';

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

	let isDesktopAboutDropdownOpen = $state(false);
	let isMobileAboutDropdownOpen = $state(false);
	// function toggleAboutMobileDropdown() {
	// 	isMobileAboutDropdownOpen = !isMobileAboutDropdownOpen;
	// }
	function handleAboutLinkClick() {
		isDesktopAboutDropdownOpen = false;
	}

	let isDesktopConservationDropdownOpen = $state(false);
	let isMobileConservationDropdownOpen = $state(false);
	// function toggleConservationMobileDropdown() {
	// 	isMobileConservationDropdownOpen = !isMobileConservationDropdownOpen;
	// }
	function handleConservationLinkClick() {
		isDesktopConservationDropdownOpen = false;
	}

	let isDesktopNewsDropdownOpen = $state(false);
	let isMobileNewsDropdownOpen = $state(false);
	// function toggleNewsMobileDropdown() {
	// 	isMobileNewsDropdownOpen = !isMobileNewsDropdownOpen;
	// }
	function handleNewsLinkClick() {
		isDesktopNewsDropdownOpen = false;
	}

	let activeMobileDropdown = $state<string | null>(null);

	// Replace the individual toggle functions with a single function
	function toggleMobileDropdown(dropdown: string) {
		if (activeMobileDropdown === dropdown) {
			// If clicking the currently open dropdown, close it
			activeMobileDropdown = null;
		} else {
			// If clicking a different dropdown, switch to it
			activeMobileDropdown = dropdown;
		}
	}

	let isMenuOpen = $state(false);
	let lastScrollY = $state(0);
	let isNavbarVisible = $state(true);
	let hasScrolled = $state(false);
	let isNavigating = $state(false);
	let menuNode: HTMLDivElement | undefined = $state();

	$effect(() => {
		page.url.pathname;
		isNavbarVisible = true;
		hasScrolled = false;
		isNavigating = true;
		setTimeout(() => {
			isNavigating = false;
		}, 1000);
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleScroll(event: Event) {
		hasScrolled = true;
		const currentScrollY = window.scrollY;

		if (hasScrolled) {
			if (currentScrollY > lastScrollY && currentScrollY > 10) {
				isNavbarVisible = false;
				// setTimeout(() => {
				// 	isNavbarVisible = true;
				// }, 2000);
			} else if (currentScrollY < lastScrollY || currentScrollY < 100) {
				isNavbarVisible = true;
			}
		}

		lastScrollY = currentScrollY;
	}

	onMount(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isMenuOpen && menuNode && !menuNode.contains(event.target as Node)) {
				isMenuOpen = false;
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
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
				<div
					role="menu"
					tabindex="0"
					class="relative hidden lg:block"
					onmouseenter={() => (isDesktopAboutDropdownOpen = true)}
					onmouseleave={() => (isDesktopAboutDropdownOpen = false)}
				>
					<button
						role="menuitem"
						tabindex="0"
						aria-haspopup="true"
						aria-expanded={isDesktopAboutDropdownOpen}
						class="relative flex items-center p-4 text-center hover:opacity-75
	{page.url.pathname.startsWith('/about')
							? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
							: ''}"
					>
						About Us
						<ChevronDown
							class="ml-2 transition-transform duration-200 {isDesktopAboutDropdownOpen
								? 'rotate-180'
								: ''}"
							size={20}
						/>
					</button>

					{#if isDesktopAboutDropdownOpen}
						<div
							role="menu"
							tabindex="0"
							class="absolute top-full left-0 w-48 overflow-hidden rounded-b-md border-t border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-[#121212]"
						>
							{#each aboutLinks as link}
								<a
									href={link.href}
									role="menuitem"
									tabindex="0"
									onclick={handleAboutLinkClick}
									class="block px-3 py-2.5 text-center text-base transition-colors
			hover:bg-gray-50 dark:hover:bg-gray-800/60
			{page.url.pathname === link.href
										? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
										: 'text-gray-700 dark:text-gray-300'}"
								>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>
				<div
					role="menu"
					tabindex="0"
					class="relative hidden lg:block"
					onmouseenter={() => (isDesktopConservationDropdownOpen = true)}
					onmouseleave={() => (isDesktopConservationDropdownOpen = false)}
				>
					<button
						role="menuitem"
						tabindex="0"
						aria-haspopup="true"
						aria-expanded={isDesktopConservationDropdownOpen}
						class="relative flex items-center p-4 text-center hover:opacity-75
	{page.url.pathname.startsWith('/conservation')
							? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
							: ''}"
					>
						Conservation
						<ChevronDown
							class="ml-2 transition-transform duration-200 {isDesktopConservationDropdownOpen
								? 'rotate-180'
								: ''}"
							size={20}
						/>
					</button>

					{#if isDesktopConservationDropdownOpen}
						<div
							role="menu"
							tabindex="0"
							class="absolute top-full left-0 w-48 overflow-hidden rounded-b-md border-t border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-[#121212]"
						>
							{#each conservationLinks as link}
								<a
									href={link.href}
									role="menuitem"
									tabindex="0"
									onclick={handleConservationLinkClick}
									class="block px-3 py-2.5 text-center text-base transition-colors
			hover:bg-gray-50 dark:hover:bg-gray-800/60
			{page.url.pathname === link.href
										? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
										: 'text-gray-700 dark:text-gray-300'}"
								>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
				</div>
				<a
					href="/give"
					class="relative p-4 text-center hover:opacity-75 {page.url.pathname === '/give'
						? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
						: ''}"
					aria-current={page.url.pathname === '/give' ? 'page' : undefined}
				>
					Ways to Give
				</a>
				<!-- News Dropdown -->
				<div
					role="menu"
					tabindex="0"
					class="relative hidden lg:block"
					onmouseenter={() => (isDesktopNewsDropdownOpen = true)}
					onmouseleave={() => (isDesktopNewsDropdownOpen = false)}
				>
					<button
						role="menuitem"
						tabindex="0"
						aria-haspopup="true"
						aria-expanded={isDesktopNewsDropdownOpen}
						class="relative flex flex-nowrap items-center p-4 text-center hover:opacity-75
{page.url.pathname.startsWith('/news')
							? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
							: ''}"
					>
						News and Events
						<ChevronDown
							class="ml-2 shrink-0 transition-transform duration-200 {isDesktopNewsDropdownOpen
								? 'rotate-180'
								: ''}"
							size={20}
						/>
					</button>

					{#if isDesktopNewsDropdownOpen}
						<div
							role="menu"
							tabindex="0"
							class="absolute top-full left-0 w-64 overflow-hidden rounded-b-md border-t border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-[#121212]"
						>
							{#each newsLinks as link}
								<a
									href={link.href}
									role="menuitem"
									tabindex="0"
									onclick={handleNewsLinkClick}
									class="block px-3 py-2.5 text-center text-base transition-colors
hover:bg-gray-50 dark:hover:bg-gray-800/60
{page.url.pathname === link.href
										? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
										: 'text-gray-700 dark:text-gray-300'}"
								>
									{link.label}
								</a>
							{/each}
						</div>
					{/if}
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
			</div>
		</div>

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
