<script lang="ts">
	import { File, Download } from 'lucide-svelte';
	const pdfUrl: string = '/PDFs/WLT_Conservation_Plan.pdf';
</script>
<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
    <div class="mb-8 sm:mb-12">
		<enhanced:img 
			src="/static/images/backgrounds/farm.jpg" 
			alt="Wallowa County Landscape" 
			class="w-full h-24 sm:h-64 object-cover rounded-lg"
		/>
	</div>
	<h1 class="mb-8 sm:mb-12 font-serif text-3xl sm:text-4xl text-slate-800 dark:text-slate-100">
		Wallowa Land Trust Conservation Plan
	</h1>
	<div class="space-y-6 bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 rounded-lg">
		<p class="text-slate-700 dark:text-slate-300 leading-relaxed">
			Wallowa Land Trust protects the rural nature of the Wallowa Country by working 
			cooperatively with private landowners, Indian tribes, local communities and 
			governmental entities to conserve land. This Conservation Plan establishes and 
			communicates specific goals for how we will achieve our mission and how we plan 
			to preserve the character of the place we call home: Wallowa County.
		</p>
		<p class="text-slate-700 dark:text-slate-300 leading-relaxed">
			Wallowa County is characterized by a stunning and diverse geography, including 
			deep basalt-walled canyons, glacially-cut gorges, high mountain lakes, forests 
			and prairie. Like the rest of the rural West, the area faces a number of challenges 
			– a natural-resource based economy struggling to retain living-wage jobs, shifts 
			in population demographics and a changing climate, to name a few.
		</p>
		<p class="text-slate-700 dark:text-slate-300 leading-relaxed">
			Whether our neighbors are ranchers, loggers, bankers, teachers, or retirees, 
			how we respond to these challenges will determine the character of our home 
			for decades to come.
		</p>
	</div>
	<div class="mt-8 sm:mt-12 flex space-x-4">
		<a 
			href={`${pdfUrl}#view=fit`}
			target="_blank"
			rel="noopener noreferrer"
			class="flex-1 flex items-center justify-center 
				   bg-slate-800 dark:bg-slate-700 text-white 
				   px-6 py-3 rounded-lg 
				   hover:bg-slate-700 dark:hover:bg-slate-600 
				   transition duration-300 
				   space-x-3"
		>
			<File class="w-6 h-6" />
			<span>View PDF</span>
		</a>
		<a 
			href={pdfUrl} 
			download 
			class="flex-1 flex items-center justify-center 
				   bg-slate-800 dark:bg-slate-700 text-white 
				   px-6 py-3 rounded-lg 
				   hover:bg-slate-700 dark:hover:bg-slate-600 
				   transition duration-300 
				   space-x-3"
		>
			<Download class="w-6 h-6" />
			<span>Download PDF</span>
		</a>
	</div>
</div>