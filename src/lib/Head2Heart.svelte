<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
</script>

<div class="relative">
	<div class="absolute z-10 h-[300px] w-full bg-white/20 md:h-[40vh] dark:saturate-50"></div>

	<div class="relative h-[300px] w-full overflow-hidden md:h-[40vh]">
		<enhanced:img
			src="/static/images/backgrounds/nez_perce.jpg"
			alt="Nez Perce Tribe land return celebration in Joseph, Oregon"
			class="h-full w-full object-cover object-center brightness-110 saturate-[1.2]"
		/>
	</div>
	<div class="w-full py-8 text-center sm:py-12 md:py-16">
		<h2
			class="mb-4 font-['Georgia'] text-xl font-medium tracking-wide text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl dark:invert"
		>
			Head to Heart Conservation
		</h2>
		<p class="mx-auto max-w-2xl px-4 text-lg text-gray-700 dark:text-gray-300">
			Discover how we're reimagining conservation through meaningful collaboration with Indigenous
			peoples, bridging traditional ecological knowledge with modern land stewardship.
		</p>
		<a
			href="/executive-director-letter"
			class="mt-6 inline-flex items-center gap-2 border-b border-current text-gray-900 hover:text-gray-600 dark:text-gray-100"
		>
			Read our Executive Director's letter
			<ArrowUpRight class="h-4 w-4" />
		</a>
	</div>
</div>
