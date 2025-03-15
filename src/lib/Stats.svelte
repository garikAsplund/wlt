<script lang="ts">
	import Oregon from './Oregon.svelte';
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { onMount } from 'svelte';
	
	const stats = [
		{
			value: 3000,
			label: 'acres conserved to date',
			color: '#497ca6'
		},
		{
			value: 50,
			label: 'volunteers',
			color: '#678c3c'
		},
		{
			value: 1000,
			label: 'members supporting our mission',
			color: '#d7a860'
		}
	];
	
	// Generate random starting values for better animation effect
	const startingValues = stats.map(stat => {
		// Generate a random value between 50-90% of the final value
		// This creates more interesting digit changes during animation
		return Math.floor(stat.value * (0.5 + Math.random() * 0.4));
	});
	
	let animationStep = $state(0);
	let statsContainer: HTMLElement;
	
	onMount(() => {
		// Create intersection observer
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				
				// When element enters viewport
				if (entry.isIntersecting) {
					// Show the random starting values
					animationStep = 1;
					
					// Then transition to final values after a brief pause
					setTimeout(() => {
						animationStep = 2; // Show the final values
					}, 300);
					
					// Disconnect observer after animation has started
					observer.disconnect();
				}
			},
			{
				// Element must be at least 20% visible to trigger
				threshold: 0.2,
				// Start animation slightly before it's fully in view
				rootMargin: '0px 0px -50px 0px'
			}
		);
		
		// Start observing the stats container
		if (statsContainer) {
			observer.observe(statsContainer);
		}
		
		// Cleanup observer on component unmount
		return () => {
			observer.disconnect();
		};
	});
</script>
<div class="w-full bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 dark:bg-[#121212]">
	<div class="mx-auto max-w-7xl px-4">
		<h2
			class="mb-4 text-center font-['Georgia'] text-2xl text-slate-900 sm:text-3xl dark:text-slate-100"
		>
			By the Numbers
		</h2>
		<p class="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-700 dark:text-gray-300">
			Wallowa Land Trust is a local nonprofit, tax-exempt organization founded in 2004 by landowners
			and residents of Northeast Oregon's Wallowa County.
		</p>
		<div bind:this={statsContainer} class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each stats as stat, index}
				<div class="relative">
					<div
						style="background-color: {stat.color}"
						class="absolute inset-0 rounded-lg opacity-10"
					></div>
					<div class="relative p-6 text-center">
						<p class="mb-3 text-5xl font-bold" style="color: {stat.color}">
							<NumberFlowGroup>
								<div style="--number-flow-char-height: 1em" class="flex items-center justify-center">
									<NumberFlow 
										value={animationStep === 0 ? 0 : animationStep === 1 ? startingValues[index] : stat.value} 
										locales="en-US"
										format={{ 
											useGrouping: true,
											maximumFractionDigits: 0
										}}
										duration={1500}
										transformTiming={{
											duration: 750,
											easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
										}}
										spinTiming={{
											duration: 750,
											easing: 'cubic-bezier(0.42, 0, 0.58, 1)'
										}}
										opacityTiming={{
											duration: 350,
											easing: 'ease-out'
										}}
									/>
									<span class="ml-1">+</span>
								</div>
							</NumberFlowGroup>
						</p>
						<p class="text-lg text-gray-700 dark:text-gray-300">
							{stat.label}
						</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-16 flex items-center justify-center opacity-25 scale-75 text-gray-700 dark:text-gray-300">
			<Oregon />
		</div>
	</div>
</div>