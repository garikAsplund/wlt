<script lang="ts">
	import Oregon from './Oregon.svelte';

	const stats = [
		{
			value: '3,000+',
			label: 'acres conserved to date',
			color: '#497ca6'
		},
		{
			value: '50+',
			label: 'volunteers',
			color: '#678c3c'
		},
		{
			value: '1,000+',
			label: 'members supporting our mission',
			color: '#d7a860'
		}
	];
</script>

<div class="w-full bg-white pt-12 lg:pt-16 dark:bg-[#121212]">
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

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each stats as stat}
				<div class="relative">
					<div
						style="background-color: {stat.color}"
						class="absolute inset-0 rounded-lg opacity-10"
					></div>
					<div class="relative p-6 text-center">
						<p class="mb-3 text-5xl font-bold" style="color: {stat.color}">
							{stat.value}
						</p>
						<p class="text-lg text-gray-700 dark:text-gray-300">
							{stat.label}
						</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="inset-0 flex items-center justify-center opacity-25 scale-75 text-gray-700 dark:text-gray-300">
			<Oregon />
		</div>
	</div>
</div>
