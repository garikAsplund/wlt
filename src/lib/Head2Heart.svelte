<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
</script>

<div class="relative">
	<div class="absolute z-10 h-[300px] w-full bg-white/20 md:h-[40vh] dark:saturate-50"></div>

	<div class="relative h-[300px] w-full overflow-hidden md:h-[40vh]">
		<enhanced:img
			src="/static/images/backgrounds/nez_perce.jpg?w=1280;640;400"
			alt="Nez Perce Tribe land return celebration in Joseph, Oregon"
			class="h-full w-full object-cover object-center brightness-110 saturate-[1.2] dark:brightness-85"
			fetchpriority="high"
			sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
		/>
	</div>
	<div class="w-full py-8 text-center sm:py-12 md:py-16">
		<h2
			class="mb-4 font-['Georgia'] text-xl font-medium tracking-wide text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl dark:text-slate-200"
		>
			Head to Heart Conservation
		</h2>
		<p class="mx-auto max-w-2xl px-4 text-lg text-slate-700 dark:text-slate-300">
			Discover how we're reimagining conservation through meaningful collaboration with Indigenous
			peoples, bridging traditional ecological knowledge with modern land stewardship.
		</p>
		<a
			href="/executive-director-letter"
			class="mt-6 inline-flex items-center gap-2 border-b border-current text-slate-900 hover:text-slate-600 dark:text-slate-100 hover:dark:text-slate-400"
		>
			Read our Executive Director's letter
			<ArrowUpRight class="h-4 w-4" />
		</a>
	</div>
</div>
