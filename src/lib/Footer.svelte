<script>
	import { Phone, Mail, MapPin, CircleArrowUp } from 'lucide-svelte';
	import Socials from '$lib/Socials.svelte';
	import FooterSvg from './FooterSVG.svelte';
	import COLTSVG from './COLTSVG.svelte';
	import AccreditedSvg from './AccreditedSVG.svelte';
</script>

<div class="w-full pt-24 lg:pt-36">
	<FooterSvg />
</div>
<footer
	class="relative bottom-0 mt-auto w-full bg-slate-100 dark:border-gray-700 dark:bg-[#121212]"
>
	<div class="mx-auto max-w-7xl px-4 py-12">
		<div
			class="grid grid-cols-1 justify-evenly gap-12 pl-8 text-neutral-600 md:grid-cols-3 lg:grid-cols-4 dark:text-neutral-400"
		>
			<!-- Logo -->
			<!-- <div class="hidden w-fit scale-150 items-center lg:flex">
				<a href="/" aria-label="Return to homepage" class="hover:opacity-80">
					<Logo />
				</a>
			</div> -->
			<div class="order-1 grid grid-cols-2 gap-4 md:grid-cols-1">
				<a
					href="https://www.landtrustaccreditation.org/about/about-the-seal"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="h-32 w-32 fill-black transition-all duration-500 hover:opacity-75">
						<AccreditedSvg />
					</div>
				</a>
				<a href="https://oregonlandtrusts.org/" target="_blank" rel="noopener noreferrer">
					<div class="h-32 w-32 text-black transition-all duration-500 hover:opacity-75">
						<COLTSVG />
					</div>
				</a>
			</div>
			<!-- Contact with integrated socials -->
			<div class="order-2 space-y-4">
				<h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-300">Contact</h3>
				<div class="space-y-4">
					<!-- Phone number for mobile -->
					<a
						href="tel:5414262042"
						tabindex="0"
						role="button"
						aria-label="Phone number: (541) 426-2042"
						class="flex items-center gap-2 transition-colors hover:text-neutral-900 md:hidden dark:hover:text-neutral-300"
					>
						<Phone size={18} />
						<span>(541) 426-2042</span>
					</a>

					<!-- Phone number for larger screens -->
					<div
						tabindex="0"
						role="button"
						aria-label="Phone number: (541) 426-2042"
						class="hidden cursor-default items-center gap-2 transition-colors md:flex"
					>
						<Phone size={18} />
						<span>(541) 426-2042</span>
					</div>

					<!-- Address link for navigation -->
					<div
						tabindex="0"
						role="button"
						aria-label="Address"
						class=" flex cursor-default items-center gap-2 transition-colors"
					>
						<MapPin size={18} class="mt-1 flex-shrink-0" />
						<span>
							PO Box 516<br />
							<a
								href="https://maps.google.com/?q=117+E+Main+St+Enterprise+OR+97828"
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-start gap-2 transition-colors hover:text-neutral-900 dark:hover:text-neutral-300"
							>
								117 E Main St<br />
								Enterprise, OR 97828
							</a>
						</span>
					</div>

					<!-- Email address -->
					<div
						tabindex="0"
						role="button"
						aria-label="Email: info@wallowalandtrust.org"
						class="flex flex-shrink-0 cursor-default items-center gap-2 transition-colors"
					>
						<Mail size={18} class="mt-1 flex-shrink-0" />
						<span>info@wallowalandtrust.org</span>
					</div>
				</div>
			</div>

			<!-- Links -->
			<div class="order-3 w-fit space-y-4">
				<h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-300">Navigation</h3>
				<div class="flex flex-col space-y-1">
					<a
						href="/course"
						class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
						>About Us</a
					>
					<a
						href="/rates"
						class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
						>Conservation</a
					>
					<a
						href="/events"
						class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
						>Ways to Give</a
					>
					<a
						href="/tournaments"
						class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
						>News and Events</a
					>
					<a
						href="/membership"
						class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
						>Store</a
					>
				</div>
			</div>

			<!-- Mission -->
			<div class="order-4 space-y-4">
				<h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-300">Our Mission</h3>
				<div class="flex flex-col items-start">
					<p class="text-neutral-600 dark:text-neutral-400">
						Wallowa Land Trust's mission is to protect the rural nature of Wallowa County by working
						cooperatively with private landowners, Indigenous people, local communities and
						governmental entities to conserve land.
					</p>
				</div>
			</div>
		</div>

		<div class="pt-8 dark:text-neutral-300">
			<Socials />
		</div>
	</div>
</footer>
