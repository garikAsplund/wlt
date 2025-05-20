<script>
	import DonateButton from './DonateButton.svelte';
</script>

<div class="pt-12 sm:pt-24">
	<div class="relative min-h-96 w-full">
		<!-- Background Image -->
		<enhanced:img
			src="/static/images/backgrounds/forest.jpg?w=original;1280;640;320"
			class="absolute inset-0 h-full w-full object-cover object-top"
			alt="Sunset on the forest"
			fetchpriority="high"
			sizes="(max-width: 640px)  320px,
         (max-width: 1280px) 640px,
         100vw"
		/>

		<!-- Overlay -->
		<div class="absolute inset-0 dark:bg-black/30"></div>

		<!-- Centered Content -->
		<div
			class="absolute inset-0 z-10 flex h-full flex-col items-center justify-center p-6 text-center sm:p-8"
		>
			<h2 class="mb-6 text-3xl font-semibold text-white sm:text-4xl">Join our mission</h2>

			<p class="mb-8 text-lg text-white sm:text-xl">Your support creates lasting change.</p>
			<DonateButton />
		</div>
	</div>
</div>
