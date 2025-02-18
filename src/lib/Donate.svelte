<script>
	import { HandHeart } from 'lucide-svelte';
</script>

<div class="pt-12 sm:pt-24">
	<div class="flex min-h-[350px] w-full flex-col justify-center md:flex-row">
		<!-- Image/Title Section -->
		<div class="relative min-h-[200px] flex-1 md:min-h-full">
			<enhanced:img
				src="/static/images/backgrounds/barn.png"
				class="absolute inset-0 h-full w-full object-cover"
			/>
			<div class="absolute inset-0 dark:bg-black/30"></div>
			<h2
				class="relative z-10 flex h-full items-center justify-center p-6 text-center text-3xl font-semibold text-white sm:p-8 sm:text-4xl"
			>
				Join our mission
			</h2>
		</div>
		<!-- CTA Section -->
		<div class="flex flex-1 flex-col items-center justify-center p-6 text-center sm:p-8">
			<p class=" text-lg text-slate-800 mb-8 sm:text-xl dark:text-slate-300">
				Your support creates lasting change.
			</p>
			<a
				href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E120931&id=5"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:bg-opacity-90 inline-flex items-center gap-2 rounded-lg bg-[#1a3d65] px-6 py-3 text-white transition-all duration-150 active:scale-95 active:transform"
			>
				<HandHeart class="h-6 w-6 stroke-1" />
				Donate Now
			</a>
		</div>
	</div>
</div>
