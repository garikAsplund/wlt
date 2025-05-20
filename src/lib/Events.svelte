<script lang="ts">
	import { Calendar, MapPin, ArrowUpRight } from 'lucide-svelte';
	import potluckPoster from '$lib/images/events/potluck_poster.jpg';
</script>

<div class="flex w-full justify-center bg-[#e9ad91]/40 py-12">
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
					<time>Friday May 23 • 6:00 PM</time>
				</div>
				<div class="flex items-center">
					<MapPin class="mr-2 h-5 w-5" />
					<a
						href="https://www.google.com/maps?hl=en&q=Liberty+Grange+%23613+Hall,+Joseph,+OR+97846,+USA"
						target="_blank"
						class="hover:underline"
					>
						Liberty Grange
					</a>
				</div>
			</div>

			<h3 class="mb-4 text-xl font-semibold text-gray-900">Community Potluck & Celebration</h3>

			<p class="mb-4 text-gray-600">
				Please help us welcome our Nez Perce, Umatilla, Cayuse, Walla Walla, Warm Springs and Yakama
				friends to Wallowa County!
			</p>
			<p class="mb-4 text-gray-600">
				This outdoor potluck celebration is a chance to connect with old friends and make new ones.
				We’ll have drinks and burgers on the grill—please bring a side salad or dessert to share.
			</p>

			<a
				href={potluckPoster}
				target="_blank"
				rel="noopener noreferrer"
				class="group mt-6 inline-flex w-fit items-center gap-2 border-b border-current text-slate-900 hover:text-slate-600"
			>
				See the invite
				<ArrowUpRight class="h-4 w-4 transition-all duration-300 group-hover:rotate-45 " />
			</a>
		</div>

		<!-- right: thumbnail -->
		<div class="md:w-1/3">
			<enhanced:img
				src="/static/images/events/preview.png"
				alt="Potluck invite"
				class="h-48 w-full object-cover md:h-full"
				loading="lazy"
			/>
		</div>
	</article>
</div>
