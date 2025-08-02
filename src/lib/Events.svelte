<script lang="ts">
	import { Calendar, MapPin, ArrowUpRight } from 'lucide-svelte';
	import picnicPic from '$lib/images/events/picnic.jpg';
</script>

<div class="flex w-full justify-center bg-[#e9ad91]/40 px-4 py-12">
	<article
		class="flex w-full max-w-3xl flex-col overflow-hidden rounded-lg
           bg-white transition-shadow
           hover:shadow-lg md:flex-row"
	>
		<!-- left: content -->
		<div class="flex flex-col p-6 md:w-2/3">
			<div class="mb-4 flex flex-wrap gap-4 text-gray-700">
				<div class="flex items-center">
					<Calendar class="mr-2 h-5 w-5" />
					<time>Saturday, August 16 • 4:00 PM</time>
				</div>
				<div class="flex items-center">
					<MapPin class="mr-2 h-5 w-5" />
					<a
						href="https://maps.app.goo.gl/rVX6Ev3VTgGUjvaYA"
						target="_blank"
						class="hover:underline"
					>
						601 S Main St, Joseph, OR
					</a>
				</div>
			</div>

			<h3 class="mb-4 text-xl font-semibold text-gray-900">Annual Picnic</h3>

			<p class="mb-4 text-gray-600">
				Enjoy live music by the Backyard Rangers, local beef burgers, and drinks.
			</p>
			<p class="mb-4 text-gray-600">
				Please bring a side dish to share as well as your own plates and utensils to help make this
				a zero-waste event.
			</p>
			<p class="mb-4 text-gray-600">RSVP <span class="select-all">info@wallowalandtrust.org</span></p>

			<a
				href={picnicPic}
				target="_blank"
				rel="noopener noreferrer"
				class="group inline-flex w-fit items-center gap-2 border-b border-current text-slate-900 hover:text-slate-600"
			>
				See the invite
				<ArrowUpRight class="h-4 w-4 transition-all duration-300 group-hover:rotate-45 " />
			</a>
		</div>

		<!-- right: thumbnail -->
		<div class="md:w-1/3">
			<enhanced:img
				src="/static/images/events/picnic_cover.jpg"
				alt="Potluck invite"
				class="h-48 w-full object-cover md:h-full"
				loading="lazy"
			/>
		</div>
	</article>
</div>
