<script lang="ts">
	import { CircleArrowUp } from 'lucide-svelte';
	import FacebookSvg from './FacebookSVG.svelte';
	import InstagramSvg from './InstagramSVG.svelte';
	import YouTubeSvg from './YouTubeSVG.svelte';
	import DarkModeButton from './DarkModeButton.svelte';
</script>

<div class="flex w-full items-center justify-between">
	
	<div class="flex flex-1 items-center justify-center space-x-4 text-black dark:text-white">
		<FacebookSvg />
		<InstagramSvg />
		<div class="scale-120 px-2">
			<YouTubeSvg />
		</div>
	</div>
</div>
<div class="flex flex-1 w-full -translate-y-4 justify-between">
	<div class="">
		<DarkModeButton />
	</div>
	<a href="#top" class="scale-125 hover:opacity-65" aria-label="To the top of the page">
		<CircleArrowUp />
	</a>
</div>
