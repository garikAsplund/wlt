<script>
	const benefits = [
		'Scenic beauty',
		'Water quality protection',
		'Historic preservation',
		'Wildlife habitat',
		'Working landscapes',
		'Economic returns'
	];

	// Split array into two columns
	const midpoint = Math.ceil(benefits.length / 2);
	const leftColumn = benefits.slice(0, midpoint);
	const rightColumn = benefits.slice(midpoint);
</script>

<div class="absolute z-10 h-full w-full bg-white/30">
	<h1
		class="w-full py-16 text-center font-['Georgia'] text-2xl font-medium tracking-wide text-gray-900 drop-shadow-sm lg:text-5xl"
	>
		Why conserve your land?
	</h1>

	<div class="flex w-full justify-center">
		<ul class="grid gap-36 text-2xl md:grid-cols-2">
			<div class="space-y-4">
				{#each leftColumn as benefit}
					<li class="flex items-start">
						<span>{benefit}</span>
					</li>
				{/each}
			</div>
			<div class="space-y-4">
				{#each rightColumn as benefit}
					<li class="flex items-start">
						<span>{benefit}</span>
					</li>
				{/each}
			</div>
		</ul>
	</div>
</div>

<div class="relative h-[40vh] w-full overflow-hidden">
	<enhanced:img
		src="/static/images/backgrounds/map.png"
		alt="View above the protected moraines of Wallowa Lake"
		class="h-full w-full object-cover object-left brightness-110 saturate-[1.2]"
	/>
</div>
