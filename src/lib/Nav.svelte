<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronDown, X, AlignJustify } from 'lucide-svelte';
	import Logo from '$lib/Logo.svelte';

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
	class="sticky top-0 z-10 w-full bg-white py-0 font-serif font-light text-gray-800 transition-transform duration-3000 ease-in-out dark:bg-[#121212] dark:text-gray-200 {isNavbarVisible ? 'translate-y-0' : '-translate-y-full'} {isNavigating ? 'transition-none' : ''}"
	id="nav"
	aria-label="Main navigation"
>
    <!-- Main navbar container -->
    <div class="mx-auto flex w-full items-center justify-between px-4 md:px-8">
        <!-- Logo Section - Left -->
        <div class="flex-shrink-0">
            <a
                href="/"
                aria-label="Return to homepage"
                class="hover:opacity-80"
                onclick={closeMenu}
            >
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
            <div class="flex space-x-4 lg:text-lg xl:space-x-8 xl:text-2xl">
                <a
                    href="/about"
                    class="relative flex items-center p-4 wrap hover:opacity-75 {$page.url.pathname === '/about'
                        ? 'after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-full after:bg-slate-600'
                        : ''}"
                    aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
                >
                    About Us
                </a>
                <a
                    href="/rates"
                    class="p-4 hover:opacity-75 {$page.url.pathname === '/rates'
                        ? 'border-b-2 border-slate-600'
                        : ''}"
                    aria-current={$page.url.pathname === '/rates' ? 'page' : undefined}
                >
                    Conservation
                </a>
                <a
                    href="/events"
                    class="p-4 hover:opacity-75 {$page.url.pathname === '/events'
                        ? 'border-b-2 border-slate-600'
                        : ''}"
                    aria-current={$page.url.pathname === '/events' ? 'page' : undefined}
                >
                    Ways to Give
                </a>
                <a
                    href="/tournaments"
                    class="p-4 hover:opacity-75 {$page.url.pathname === '/tournaments'
                        ? 'border-b-2 border-slate-600'
                        : ''}"
                    aria-current={$page.url.pathname === '/tournaments' ? 'page' : undefined}
                >
                    News and Events
                </a>
                <a
                    href="/membership"
                    class="p-4 hover:opacity-75 {$page.url.pathname === '/membership'
                        ? 'border-b-2 border-slate-600'
                        : ''}"
                    aria-current={$page.url.pathname === '/membership' ? 'page' : undefined}
                >
                    Store
                </a>
            </div>
        </div>

        <!-- Right Section - Donate & Mobile Menu -->
        <div class="flex items-center">
            <!-- Donate Button -->
            <div class="hidden lg:block">
                <a
                    href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E120931&id=5"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-[#1a3d65] px-4 py-1 font-serif text-gray-100 uppercase transition-all duration-600 ease-in-out hover:scale-[1.02] hover:bg-gray-600 text-2xl"
                >
                    Donate
                </a>
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
            <!-- Mobile menu items (same as before) -->
        </div>
    {/if}
</nav>
