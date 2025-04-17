<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import 'lite-youtube-embed/src/lite-yt-embed.css';

	// Dynamically import the JS to avoid SSR issues
	let liteYouTubeLoaded = false;
	
	onMount(async () => {
		// Only import and initialize if not already loaded
		if (!customElements.get('lite-youtube')) {
			await import('lite-youtube-embed/src/lite-yt-embed.js');
			liteYouTubeLoaded = true;
			
			// Force component upgrade if needed
			document.querySelectorAll('lite-youtube').forEach(el => {
				if (!el.shadowRoot) {
					customElements.upgrade(el);
				}
			});
		}
	});
</script>

<div class="min-h-[400px] w-full bg-[#1a3d65] py-8 sm:py-12 md:h-[60vh]">
	<div class="mx-auto flex h-full max-w-7xl px-4">
		<div class="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-center">
			<!-- Video side -->
			<div class="w-full md:w-1/2">
				<div class="relative aspect-video w-full">
					<lite-youtube 
						videoid="uBdSFLIvVHY" 
						playlabel="Wallowa Lake's East Moraine: Securing a Community Legacy"
						style="background-image: url('https://i.ytimg.com/vi/uBdSFLIvVHY/hqdefault.jpg');"
						class="rounded-lg shadow-lg"
					></lite-youtube>
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
					href="https://www.co.wallowa.or.us/east-moraine-community-forest"
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