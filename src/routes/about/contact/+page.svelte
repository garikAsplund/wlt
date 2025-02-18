<script lang="ts">
	import { Phone, Mail, MapPin, Clock, FileCheck } from 'lucide-svelte';
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
	<!-- Hero Section -->
	<!-- <div class="mb-8 sm:mb-12">
		<enhanced:img
			src="/static/images/backgrounds/contact.jpg"
			alt="Wallowa Land Trust Office"
			class="h-24 w-full object-cover sm:h-64"
		/>
	</div>

	<h1 class="mb-8 font-serif text-3xl text-slate-800 sm:mb-12 sm:text-4xl dark:text-slate-100">
		Contact Us
	</h1> -->

	<div class="grid gap-8 lg:grid-cols-2">
		<!-- Contact Information -->
		<div class="space-y-6 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800/50">
			<h2 class="font-serif text-2xl text-slate-800 dark:text-slate-100">Get in Touch</h2>

			<div class="space-y-4">
				<!-- Phone number for mobile -->
				<a
					href="tel:5414262042"
					tabindex="0"
					role="button"
					aria-label="Phone number: (541) 426-2042"
					class="flex items-center gap-2 transition-colors hover:text-neutral-900 md:hidden dark:hover:text-neutral-300 text-slate-700 dark:text-slate-300"
				>
					<Phone size={18} />
					<span class="select-all">(541) 426-2042</span>
				</a>

				<!-- Phone number for larger screens -->
				<div
					tabindex="0"
					role="button"
					aria-label="Phone number: (541) 426-2042"
					class="hidden cursor-default items-center gap-2 transition-colors md:flex text-slate-700 dark:text-slate-300"
				>
					<Phone size={18} />
					<span>(541) 426-2042</span>
				</div>

				<div class="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
					<Mail class="h-5 w-5" />
					<span class="select-all">info@wallowalandtrust.org</span>
				</div>

				<div class="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
					<MapPin class="mt-1 h-5 w-5 flex-shrink-0" />
					<div>
						<p>PO Box 516</p>
						<p>117 E Main St</p>
						<p>Enterprise, OR 97828</p>
					</div>
				</div>

				<div class="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
					<Clock class="h-5 w-5" />
					<div>
						<p>Monday - Friday</p>
						<p>9:00 AM - 5:00 PM Pacific</p>
					</div>
				</div>

				<div class="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
					<FileCheck class="h-5 w-5" />
					<div>
						<p>Federal Tax ID:</p>
						<p class="select-all">20-1037078</p>
					</div>
				</div>
			</div>

			<div class="border-t border-slate-200 pt-6 dark:border-slate-700">
				<h3 class="mb-4 font-serif text-xl text-slate-800 dark:text-slate-100">Media Inquiries</h3>
				<p class="text-slate-700 dark:text-slate-300">
					For media inquiries, please contact
					<span class="text-slate-600 dark:text-slate-400 select-all">
						john@wallowalandtrust.org
					</span>
				</p>
			</div>
		</div>

		<!-- Map Section -->
		<div class="space-y-6 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800/50">
			<h2 class="font-serif text-2xl text-slate-800 dark:text-slate-100">Our Location</h2>

			<!-- Map Embed -->
			<div class="aspect-square w-full overflow-hidden rounded-lg">
				<iframe
					title="Wallowa Land Trust Office Location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.826876631649!2d-117.27933!3d45.426082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a6c3b2b8d8b9a9%3A0x1d7f0f9b9b0b0b0b!2s117%20E%20Main%20St%2C%20Enterprise%2C%20OR%2097828!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
					width="100%"
					height="100%"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>

			<div class="space-y-4">
				<h3 class="font-serif text-xl text-slate-800 dark:text-slate-100">Visiting Our Office</h3>
				<p class="text-slate-700 dark:text-slate-300">
					Our office is located in downtown Enterprise. Free street parking is available.
				</p>
				<a
					href="https://www.google.com/maps/dir//117+E+Main+St,+Enterprise,+OR+97828"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center space-x-2 rounded-lg bg-slate-800 px-6 py-3 text-white transition duration-300 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
				>
					<MapPin class="h-5 w-5" />
					<span>Get Directions</span>
				</a>
			</div>
		</div>
	</div>
</div>
