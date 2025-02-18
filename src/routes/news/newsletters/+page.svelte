<script lang="ts">
	import { FileText, Download, File } from 'lucide-svelte';

	const newsletters = [
		// 2022 - Missing: Winter, Summer
		{ id: 1, title: 'WallowaLands_2022_Fall', season: 'Fall', year: '2022' },
		{ id: 2, title: 'WallowaLands_2022_Spring', season: 'Spring', year: '2022' },

		// 2021 - Missing: Winter, Summer
		{ id: 3, title: 'WallowaLands_2021_Fall', season: 'Fall', year: '2021' },
		{ id: 4, title: 'WallowaLands_2021_Spring', season: 'Spring', year: '2021' },

		// 2020 - Missing: Winter, Summer, Fall
		{ id: 5, title: 'WallowaLands_2020_Spring', season: 'Spring', year: '2020' },

		// 2019 - Missing: Spring, Summer
		{ id: 6, title: 'WallowaLands_2019_Fall', season: 'Fall', year: '2019' },
		{ id: 7, title: 'WallowaLands_2019_Winter', season: 'Winter', year: '2019' },

		// 2018 - Missing: Winter, Summer, Fall
		{ id: 8, title: 'WallowaLands_2018_Spring', season: 'Spring', year: '2018' },

		// 2017 - Missing: Winter, Summer, Fall
		{ id: 9, title: 'WallowaLands_2017_Spring', season: 'Spring', year: '2017' },

		// 2016 - Missing: Winter, Spring
		{ id: 10, title: 'WallowaLands_2016_Fall', season: 'Fall', year: '2016' },
		{ id: 11, title: 'WallowaLands_2016_Summer', season: 'Summer', year: '2016' },

		// 2015 - Missing: Winter, Spring, Fall
		{ id: 12, title: 'WallowaLands_2015_Summer', season: 'Summer', year: '2015' }
	];
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
	<div class="space-y-6 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800/50">
		<p class="leading-relaxed text-slate-700 dark:text-slate-300">
			Stay informed about Wallowa Land Trust's conservation efforts, community projects, and local
			events through our seasonal newsletters. Browse our archive below to learn about our ongoing
			work in preserving Wallowa County's natural heritage.
		</p>

		<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each newsletters as newsletter (newsletter.id)}
				<div class="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-slate-800">
					<div class="flex-1 p-4">
						<div class="flex items-center space-x-3">
							<FileText class="h-6 w-6 text-slate-600 dark:text-slate-400" />
							<h3 class="font-medium text-slate-900 dark:text-slate-100">
								{newsletter.season}
								{newsletter.year}
							</h3>
						</div>
					</div>

					<div class="border-t border-slate-200 dark:border-slate-700">
						<div class="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-700">
							<a
								href="/newsletters/{newsletter.title}.pdf#view=fit"
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center justify-center px-4 py-3 text-sm text-slate-600 transition duration-150 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700/50"
							>
								<File class="mr-2 h-4 w-4" />
								<span>View</span>
							</a>
							<a
								href="/newsletters/{newsletter.title}.pdf"
								download
								class="flex items-center justify-center px-4 py-3 text-sm text-slate-600 transition duration-150 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700/50"
							>
								<Download class="mr-2 h-4 w-4" />
								<span>Download</span>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
