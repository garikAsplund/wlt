<!-- VideoSection.svelte -->
<div class="flex h-[50vh] w-full flex-col justify-center bg-[#1a3d65]">
	<div class="mx-auto max-w-7xl px-4 py-8">
		<div class="flex flex-col items-center gap-8 md:flex-row">
			<!-- Video side -->
			<div class="w-full md:w-1/2">
				<div class="relative aspect-video w-full">
					<iframe
						class="absolute top-0 left-0 h-full w-full rounded-lg"
						src="https://www.youtube.com/embed/uBdSFLIvVHY?modestbranding=1&rel=0&playsinline=1&enablejsapi=1&origin=http://localhost:5173&showinfo=0"
						title="Campaign for the East Moraine"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</div>

			<!-- Text side -->
			<div class="w-full md:w-1/2 md:pl-4">
				<h2 class="mb-2 text-3xl font-bold text-white">Campaign for the East Moraine</h2>
				<h4 class="mb-6 text-xl text-gray-300">
					Securing one of North America's most iconic landscapes
				</h4>
				<p class="text-lg leading-relaxed text-gray-200">
					The breathtaking beauty of Wallowa Lake's East Moraine forest and open space was
					permanently protected in January 2020 when almost 1,800 acres were transferred into
					Wallowa County ownership.
				</p>
			</div>
		</div>
	</div>
</div>
