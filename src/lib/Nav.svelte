<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronDown, X, AlignJustify } from 'lucide-svelte';
	import Logo from '$lib/Logo.svelte';
	import DonateButton from './DonateButton.svelte';

	const conservationLinks = [
		{ href: '/conservation/plan', label: 'Conservation Plan' },
		{ href: '/conservation/easements', label: 'Conservation Easements' },
		{ href: '/conservation/properties', label: 'Protected Properties' }
	];

	let isDesktopConservationDropdownOpen = $state(false);
	let isMobileConservationDropdownOpen = $state(false);

	function toggleConservationMobileDropdown() {
		isMobileConservationDropdownOpen = !isMobileConservationDropdownOpen;
	}

	let isMenuOpen = $state(false);
	let lastScrollY = $state(0);
	let isNavbarVisible = $state(true);
	let hasScrolled = $state(false);
	let isNavigating = $state(false);

	$effect(() => {
		$page.url.pathname;
		isNavbarVisible = true;
		hasScrolled = false;
		isNavigating = true;
		setTimeout(() => {
			isNavigating = false;
		}, 1000);
	});

	function handleLinkClick() {
		isDesktopConservationDropdownOpen = false;
	}

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
</script>

<svelte:window on:scroll={handleScroll} />

<div class="fixed top-0 right-0 left-0 -z-20 h-fit bg-white dark:bg-[#121212]"></div>

<nav
	class="sticky top-0 z-60 w-full bg-white py-0 font-serif font-light text-gray-800 dark:bg-[#121212] dark:text-gray-200
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
					<div class="h-24 w-24 text-[#1a3d65] dark:text-gray-200">
						<Logo />
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
				<a
					href="/about"
					class="relative flex items-center p-4 text-center whitespace-break-spaces hover:opacity-75 {$page
						.url.pathname === '/about'
						? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
						: ''}"
					aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
				>
					About Us
				</a>
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
			{$page.url.pathname.startsWith('/conservation') || $page.url.pathname.startsWith('/rates')
							? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
							: ''}"
					>
						Conservation
						<ChevronDown
							class="ml-2 transition-transform {isDesktopConservationDropdownOpen ? 'rotate-180' : ''}"
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
									onclick={handleLinkClick}
									class="block px-3 py-2.5 text-center text-base transition-colors
					hover:bg-gray-50 dark:hover:bg-gray-800/60
					{$page.url.pathname === link.href
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
					class="relative p-4 text-center hover:opacity-75 {$page.url.pathname === '/give'
						? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
						: ''}"
					aria-current={$page.url.pathname === '/give' ? 'page' : undefined}
				>
					Ways to Give
				</a>
				<a
					href="/news"
					class="relative p-4 text-center hover:opacity-75 {$page.url.pathname === '/news'
						? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
						: ''}"
					aria-current={$page.url.pathname === '/news' ? 'page' : undefined}
				>
					News and Events
				</a>
				<a
					href="/store"
					class="relative p-4 text-center hover:opacity-75 {$page.url.pathname === '/store'
						? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
						: ''}"
					aria-current={$page.url.pathname === '/store' ? 'page' : undefined}
				>
					Store
				</a>
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
		>
			<a
				href="/about"
				class="w-full p-4 text-center text-lg hover:opacity-75"
				onclick={closeMenu}
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
			>
				<span
					class={$page.url.pathname === '/about' ? 'inline-block border-b-2 border-slate-600' : ''}
				>
					About Us
				</span>
			</a>
			<div class="w-full lg:hidden">
				<button
					class="flex w-full items-center justify-center p-4 text-lg hover:opacity-75"
					onclick={toggleConservationMobileDropdown}
				>
					<span
						class={$page.url.pathname.startsWith('/conservation')
							? 'inline-block border-b-2 border-slate-600'
							: ''}
					>
						Conservation
					</span>
					<ChevronDown
						class="ml-2 transition-transform {isMobileConservationDropdownOpen ? 'rotate-180' : ''}"
						size={20}
					/>
				</button>

				{#if isMobileConservationDropdownOpen}
					<div class="bg-gray-50 dark:bg-gray-800">
						{#each conservationLinks as link}
							<a
								href={link.href}
								onclick={closeMenu}
								class="block w-full p-4 text-center text-base hover:opacity-75
					{$page.url.pathname === link.href
									? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-slate-100'
									: 'text-gray-700 dark:text-slate-300'}"
							>
								{link.label}
							</a>
						{/each}
					</div>
				{/if}
			</div>
			<a
				href="/give"
				class="w-full p-4 text-center text-lg hover:opacity-75"
				onclick={closeMenu}
				aria-current={$page.url.pathname === '/give' ? 'page' : undefined}
			>
				<span
					class={$page.url.pathname === '/give' ? 'inline-block border-b-2 border-slate-600' : ''}
				>
					Ways to Give
				</span>
			</a>
			<a
				href="/news"
				class="w-full p-4 text-center text-lg hover:opacity-75"
				onclick={closeMenu}
				aria-current={$page.url.pathname === '/news' ? 'page' : undefined}
			>
				<span
					class={$page.url.pathname === '/news' ? 'inline-block border-b-2 border-slate-600' : ''}
				>
					News and Events
				</span>
			</a>
			<a
				href="/store"
				class="w-full p-4 text-center text-lg hover:opacity-75"
				onclick={closeMenu}
				aria-current={$page.url.pathname === '/store' ? 'page' : undefined}
			>
				<span
					class={$page.url.pathname === '/store' ? 'inline-block border-b-2 border-slate-600' : ''}
				>
					Store
				</span>
			</a>
			<DonateButton />
		</div>
	{/if}
</nav>
