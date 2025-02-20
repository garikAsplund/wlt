<script lang="ts">
	import { Phone, Mail, MapPin, FileCheck } from 'lucide-svelte';
	import { page } from '$app/state';
	import Socials from '$lib/Socials.svelte';
	import FooterSvg from './FooterSVG.svelte';
	import COLTSVG from './COLTSVG.svelte';
	import AccreditedSvg from './AccreditedSVG.svelte';
	import DonateButton from './DonateButton.svelte';
	import NewsletterForm from './NewsletterForm.svelte';

	let { data } = $props();

	let currentPath = $derived(page.url.pathname);
</script>

<div class="relative z-50">
	<div class="relative w-full pt-24 lg:pt-36 dark:text-gray-500">
		<div class="absolute top-12 left-1/2 w-full -translate-x-1/2 transform text-center lg:top-24">
			<h2
				class="translate-y-4 text-2xl font-bold tracking-wider text-neutral-900 sm:translate-y-4 md:translate-y-8
    lg:translate-y-12
    lg:text-3xl
    xl:translate-y-16
    dark:text-neutral-300"
			>
				Keep It Rural!
			</h2>
		</div>
		<FooterSvg />
	</div>

	{#if currentPath !== '/'}
		<div class="w-full bg-neutral-50 py-6 dark:bg-neutral-900">
			<div class="mx-auto max-w-7xl px-4">
				<div class="grid grid-cols-1 gap-8 text-center md:grid-cols-2">
					<div class="flex flex-col items-center justify-center">
						<h2
							class="mb-4 text-center text-lg font-semibold text-neutral-900 dark:text-neutral-300"
						>
							Support our mission
						</h2>
						<DonateButton />
					</div>
					<div>
						<NewsletterForm {data} />
					</div>
				</div>
			</div>
		</div>
	{/if}

	<footer
		class="relative bottom-0 mt-auto w-full bg-slate-100 dark:border-gray-700 dark:bg-[#121212] z-50"
	>
		<div class="mx-auto max-w-7xl px-4 pt-12 pb-4">
			<div
				class="grid grid-cols-1 justify-evenly gap-12 pl-8 text-neutral-600 md:grid-cols-3 lg:grid-cols-4 dark:text-neutral-400"
			>
				<!-- Logo -->
				<div
					class="order-1 col-span-full flex w-full justify-center gap-8 text-black lg:col-span-1 lg:grid lg:grid-cols-1 lg:gap-4 dark:text-gray-300"
				>
					<a
						href="https://www.landtrustaccreditation.org/about/about-the-seal"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="h-32 w-32 transition-all duration-500 hover:opacity-75">
							<AccreditedSvg />
						</div>
					</a>
					<a href="https://oregonlandtrusts.org/" target="_blank" rel="noopener noreferrer">
						<div class="h-32 w-32 transition-all duration-500 hover:opacity-75">
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
							<span class="select-all">(541) 426-2042</span>
						</a>

						<!-- Phone number for larger screens -->
						<div
							tabindex="0"
							role="button"
							aria-label="Phone number: (541) 426-2042"
							class="hidden cursor-default items-center gap-2 transition-colors md:flex"
						>
							<Phone size={18} />
							<span class="select-all">(541) 426-2042</span>
						</div>

						<!-- Address link for navigation -->
						<div
							tabindex="0"
							role="button"
							aria-label="Address"
							class="flex cursor-default items-center gap-2 transition-colors"
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
							<span class="select-all">info@wallowalandtrust.org</span>
						</div>
						<div
							tabindex="0"
							role="button"
							aria-label="Federal Tax ID: 20-1037078"
							class="flex flex-shrink-0 cursor-default items-center gap-2 transition-colors"
						>
							<FileCheck size={18} class="mt-1 flex-shrink-0" />
							<span>Federal Tax ID: <span class="select-all">20-1037078</span></span>
						</div>
					</div>
				</div>

				<!-- Links -->
				<div class="order-3 space-y-4">
					<h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-300">Navigation</h3>
					<div class="grid grid-cols-2 gap-x-12 text-sm">
						<!-- Column 1: About & Core -->
						<div class="flex flex-col space-y-1">
							<a
								href="/"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Home
							</a>
							<a
								href="/about/plan"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Strategic Plan
							</a>
							<a
								href="/about/staff"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Our Staff
							</a>
							<a
								href="/about/board"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Our Board
							</a>
							<a
								href="/about/reports"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Annual Reports
							</a>
						</div>

						<!-- Column 2: Conservation & News -->
						<div class="flex flex-col space-y-1">
							<a
								href="/conservation/properties"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Our Properties
							</a>
							<a
								href="/conservation/plan"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Conservation Plan
							</a>
							<a
								href="/news/events"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Events
							</a>
							<a
								href="/news/newsletters"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Newsletters
							</a>
							<a
								href="/news/press"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Press
							</a>
							<a
								href="/give"
								class="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
							>
								Ways to Give
							</a>
						</div>
					</div>
				</div>

				<!-- Mission -->
				<div class="order-4 space-y-4">
					<h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-300">Our Mission</h3>
					<div class="flex flex-col items-start">
						<p class="text-neutral-600 dark:text-neutral-400">
							Wallowa Land Trust's mission is to protect the rural nature of Wallowa County by
							working cooperatively with private landowners, Indigenous people, local communities
							and governmental entities to conserve land.
						</p>
					</div>
				</div>
			</div>

			<div class="pt-4 lg:pt-0 dark:text-neutral-300">
				<Socials />
			</div>
			<div
				class="flex w-full -translate-y-4 justify-center text-center text-sm text-neutral-600 dark:text-neutral-400"
			>
				<div
					class="mt-4 flex -translate-y-5 items-center justify-center gap-2 border-t border-neutral-200 pt-4 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
				>
					Website by <a
						href="https://garik.codes"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="garik.codes - Website Developer"
						class="flex h-3 items-center transition-colors hover:text-neutral-900 dark:hover:text-neutral-300"
					>
						<svg
							viewBox="0 0 208 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="h-full w-auto"
							><path
								d="M9.59375 0.6875C11.0312 0.6875 12.3438 1.03125 13.5312 1.71875C14.7396 2.38542 15.6667 3.32292 16.3125 4.53125L14.5 6.40625C14.375 6.32292 14.2083 6.07292 14 5.65625C13.625 4.84375 13.0417 4.1875 12.25 3.6875C11.4792 3.1875 10.5938 2.9375 9.59375 2.9375C8.57292 2.9375 7.58333 3.21875 6.625 3.78125C5.6875 4.34375 4.9375 5.16667 4.375 6.25C3.60417 7.6875 3.21875 9.66667 3.21875 12.1875C3.21875 15.7708 3.95833 18.3958 5.4375 20.0625C6.625 21.4167 8.08333 22.0938 9.8125 22.0938C11.3125 22.0938 12.6979 21.625 13.9688 20.6875V15.1562H9.78125V12.9375H16.375V21.9375C14.1667 23.5417 11.9062 24.3438 9.59375 24.3438C8.51042 24.3438 7.46875 24.1458 6.46875 23.75C5.46875 23.3333 4.52083 22.6979 3.625 21.8438C2.72917 20.9896 2.01042 19.7812 1.46875 18.2188C0.927083 16.6354 0.65625 14.8021 0.65625 12.7188C0.65625 10.8021 0.864583 9.10417 1.28125 7.625C1.71875 6.125 2.26042 4.95833 2.90625 4.125C3.55208 3.27083 4.29167 2.57292 5.125 2.03125C5.97917 1.48958 6.76042 1.13542 7.46875 0.96875C8.17708 0.78125 8.88542 0.6875 9.59375 0.6875ZM19.0312 24.0312L27.1875 0.46875H27.4688L36.4062 24H33.7188L31.1562 17.25H23.8125L21.5938 24.0312H19.0312ZM30.5625 15.2188L27.3125 6.4375L24.3438 15.2188H30.5625ZM39.7188 0.90625H46.5312C48.4479 0.90625 49.9167 1.16667 50.9375 1.6875C51.9792 2.22917 52.7812 2.98958 53.3438 3.96875C53.9271 4.94792 54.2188 6.03125 54.2188 7.21875C54.2188 8.76042 53.7812 10.1354 52.9062 11.3438C52.0312 12.5312 50.8958 13.3125 49.5 13.6875L54.8438 24H51.9375L46.8125 13.7812H42.3438V24H39.7188V0.90625ZM42.3438 3.3125V11.5312H46.8125C47.9583 11.5312 48.8542 11.375 49.5 11.0625C50.875 10.3542 51.5625 9.17708 51.5625 7.53125C51.5625 6.76042 51.3646 6.04167 50.9688 5.375C50.5938 4.6875 50.0625 4.16667 49.375 3.8125C48.7083 3.47917 47.7604 3.3125 46.5312 3.3125H42.3438ZM67.9062 0.875V24.0312H65.3125V4.09375L60.6562 5.46875L60.0625 4.03125L66.0938 0.875H67.9062ZM77.5 0.875H80.625C80.6458 1.02083 80.5729 1.19792 80.4062 1.40625C80.3021 1.53125 80.25 1.66667 80.25 1.8125V11.5625L89.9375 0.71875C90.4375 0.84375 91.0729 0.90625 91.8438 0.90625H92.8125L84.0625 10.875L93.4062 24.0312C91.2188 24.1146 90.125 24.1562 90.125 24.1562L82.0938 12.4375L80.25 14.4375V24H77.5V0.875ZM105.5 20.7812C105.938 21.1979 106.156 21.6979 106.156 22.2812C106.156 22.8646 105.938 23.3646 105.5 23.7812C105.062 24.1979 104.542 24.4062 103.938 24.4062C103.333 24.4062 102.812 24.1979 102.375 23.7812C101.958 23.3646 101.75 22.8646 101.75 22.2812C101.75 21.6979 101.958 21.1979 102.375 20.7812C102.812 20.3646 103.333 20.1562 103.938 20.1562C104.542 20.1562 105.062 20.3646 105.5 20.7812ZM124.562 0.71875C126.083 0.71875 127.479 1.13542 128.75 1.96875C130.042 2.78125 131 3.88542 131.625 5.28125L129.156 6.5C129.052 6.41667 129 6.29167 129 6.125C129 6.08333 129 6.03125 129 5.96875C129.021 5.90625 129.031 5.86458 129.031 5.84375C129.031 5.80208 128.979 5.67708 128.875 5.46875C128.396 4.65625 127.76 4.01042 126.969 3.53125C126.198 3.03125 125.365 2.78125 124.469 2.78125C122.74 2.78125 121.271 3.64583 120.062 5.375C118.875 7.08333 118.281 9.40625 118.281 12.3438C118.281 15.3438 118.896 17.7292 120.125 19.5C121.375 21.2708 122.896 22.1562 124.688 22.1562C125.604 22.1562 126.49 21.9062 127.344 21.4062C128.198 20.8854 128.885 20.1875 129.406 19.3125L131.312 20.5625C130.604 21.75 129.635 22.6875 128.406 23.375C127.198 24.0417 125.906 24.375 124.531 24.375C123.51 24.375 122.51 24.1771 121.531 23.7812C120.552 23.3646 119.615 22.7292 118.719 21.875C117.823 21 117.104 19.7708 116.562 18.1875C116.021 16.5833 115.75 14.7188 115.75 12.5938C115.75 10.8229 115.938 9.22917 116.312 7.8125C116.708 6.39583 117.208 5.26042 117.812 4.40625C118.417 3.53125 119.115 2.8125 119.906 2.25C120.719 1.66667 121.5 1.27083 122.25 1.0625C123.021 0.833333 123.792 0.71875 124.562 0.71875ZM137.531 4.0625C139.052 1.85417 140.781 0.75 142.719 0.75C144.656 0.75 146.365 1.84375 147.844 4.03125C149.344 6.19792 150.094 9.13542 150.094 12.8438C150.094 14.7396 149.865 16.4479 149.406 17.9688C148.969 19.4896 148.385 20.7083 147.656 21.625C146.948 22.5208 146.167 23.2083 145.312 23.6875C144.479 24.1667 143.635 24.4062 142.781 24.4062C140.823 24.4062 139.083 23.3333 137.562 21.1875C136.042 19.0208 135.281 16.1667 135.281 12.625C135.281 9.10417 136.031 6.25 137.531 4.0625ZM146.344 6.03125C145.865 5.05208 145.292 4.30208 144.625 3.78125C143.979 3.26042 143.333 3 142.688 3C141.438 3 140.292 3.84375 139.25 5.53125C138.208 7.19792 137.688 9.41667 137.688 12.1875C137.688 13.6458 137.865 15.1042 138.219 16.5625L146.344 6.03125ZM147.188 8.5L139.062 18.9062C139.562 19.9062 140.146 20.6875 140.812 21.25C141.5 21.7917 142.188 22.0625 142.875 22.0625C144.083 22.0625 145.188 21.3125 146.188 19.8125C147.188 18.3125 147.688 16.0833 147.688 13.125C147.688 11.4375 147.521 9.89583 147.188 8.5ZM154.562 0.90625H159.969C161.156 0.90625 162.156 0.989583 162.969 1.15625C163.781 1.30208 164.573 1.625 165.344 2.125C166.781 3.0625 167.854 4.4375 168.562 6.25C169.271 8.04167 169.625 10.0938 169.625 12.4062C169.625 14.9479 169.177 17.1562 168.281 19.0312C167.406 20.9062 166.146 22.2604 164.5 23.0938C163.292 23.7188 161.625 24.0312 159.5 24.0312H154.562V0.90625ZM157.031 3.09375V21.9688H159.375C161.25 21.9688 162.698 21.625 163.719 20.9375C165.906 19.4583 167 16.7292 167 12.75C167 8.72917 166.052 5.9375 164.156 4.375C163.115 3.52083 161.667 3.09375 159.812 3.09375H157.031ZM173.906 0.875H188.094V3.15625H176.375V10.75H186.031V13.125H176.375V21.6875H187.969V24H173.906V0.875ZM207 3.65625L205.375 5.84375C205.25 5.80208 205.188 5.70833 205.188 5.5625C205.188 5.41667 205.156 5.29167 205.094 5.1875C204.052 3.66667 202.49 2.90625 200.406 2.90625C199.135 2.90625 198.115 3.23958 197.344 3.90625C196.594 4.55208 196.219 5.34375 196.219 6.28125C196.219 7.67708 197.01 8.83333 198.594 9.75C198.948 9.95833 200.073 10.4583 201.969 11.25C203.865 12.0208 205.198 12.7812 205.969 13.5312C207.156 14.6771 207.75 16.0729 207.75 17.7188C207.75 19.4271 207.104 20.9688 205.812 22.3438C204.542 23.6979 202.625 24.375 200.062 24.375C197.042 24.375 194.625 23.3854 192.812 21.4062L194.344 18.75C194.448 18.7917 194.5 18.9062 194.5 19.0938C194.5 19.2604 194.542 19.3958 194.625 19.5C195.188 20.2292 195.948 20.8438 196.906 21.3438C197.865 21.8229 198.938 22.0625 200.125 22.0625C201.688 22.0625 202.917 21.6354 203.812 20.7812C204.729 19.9062 205.188 18.9271 205.188 17.8438C205.188 16.5312 204.542 15.4688 203.25 14.6562C202.792 14.3646 201.667 13.8646 199.875 13.1562C198.104 12.4479 196.823 11.7917 196.031 11.1875C194.385 9.95833 193.562 8.45833 193.562 6.6875C193.562 5.0625 194.219 3.67708 195.531 2.53125C196.865 1.36458 198.552 0.78125 200.594 0.78125C203.24 0.78125 205.375 1.73958 207 3.65625Z"
								fill="currentColor"
							></path></svg
						></a
					>
				</div>
			</div>
		</div>
	</footer>
</div>
