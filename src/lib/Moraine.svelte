<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
</script>

<svelte:head
	><link rel="stylesheet" href="node_modules/lite-youtube-embed/src/lite-yt-embed.css" />

	<script src="node_modules/lite-youtube-embed/src/lite-yt-embed.js"></script></svelte:head
>

<div class="min-h-[400px] w-full bg-[#1a3d65] py-8 sm:py-12 md:h-[60vh]">
	<div class="mx-auto flex h-full max-w-7xl px-4">
		<div class="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-center">
			<!-- Video side -->
			<div class="w-full md:w-1/2">
				<div class="relative aspect-video w-full">
					<!-- <iframe
						class="absolute top-0 left-0 h-full w-full rounded-lg shadow-lg"
						src="https://www.youtube.com/embed/uBdSFLIvVHY?modestbranding=1&rel=0&playsinline=1&enablejsapi=1&origin=http://localhost:5173&showinfo=0"
						title="Campaign for the East Moraine"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe> -->
                    <lite-youtube videoid="uBdSFLIvVHY" playlabel="Wallowa Lake's East Moraine: Securing a Community Legacy"></lite-youtube>

				</div>
			</div>
			<!-- Text side -->
			<div class="w-full md:w-1/2 md:pl-4">
				<h2 class="mb-2 text-2xl font-bold text-white sm:text-3xl">
					The East Moraine Community Forest
				</h2>
				<h3 class="mb-4 text-lg text-gray-300 sm:mb-6 sm:text-xl">
					Securing one of North America's most iconic landscapes
				</h3>
				<p class="text-base leading-relaxed text-gray-200 sm:text-lg">
					The breathtaking beauty of Wallowa Lake's East Moraine forest and open space was
					permanently protected in January 2020 when almost 1,800 acres were transferred into
					Wallowa County ownership.
				</p>
				<a
					href="https://morainecampaign.org/index.php"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-6 inline-flex items-center gap-2 border-b border-current text-gray-100 hover:text-gray-300"
				>
					Read more about the moraine
					<ExternalLink class="h-4 w-4" />
				</a>
			</div>
		</div>
	</div>
</div>
