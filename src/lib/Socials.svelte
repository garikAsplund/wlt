<script lang="ts">
	import { CircleArrowUp } from 'lucide-svelte';
	import FacebookSvg from './FacebookSVG.svelte';
	import InstagramSvg from './InstagramSVG.svelte';
	import YouTubeSvg from './YouTubeSVG.svelte';
</script>

<div class="flex items-center justify-between w-full">
    <div class="flex-1">

    </div>
    <div class="flex items-center justify-center space-x-4 flex-1 text-black ">
        <FacebookSvg />
        <InstagramSvg />
        <div class="scale-120 px-2">
            <YouTubeSvg />
        </div>
    </div>
    <div class="flex justify-end flex-1">
        <a href="#top" class="hover:opacity-65 scale-125">
            <CircleArrowUp />
        </a>
    </div>
</div>