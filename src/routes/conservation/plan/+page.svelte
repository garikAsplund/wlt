<script lang="ts">
    import { File, Download } from 'lucide-svelte';
    const pdfUrl: string = '/PDFs/WLT_Conservation_Plan.pdf';
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
    <div class="space-y-6 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800/50">
        <p class="leading-relaxed text-slate-700 dark:text-slate-300">
            Wallowa Land Trust protects the rural nature of the Wallowa Country by working cooperatively
            with private landowners, Indian tribes, local communities and governmental entities to
            conserve land. This Conservation Plan establishes and communicates specific goals for how we
            will achieve our mission and how we plan to preserve the character of the place we call home:
            Wallowa County.
        </p>
        <p class="leading-relaxed text-slate-700 dark:text-slate-300">
            Wallowa County is characterized by a stunning and diverse geography, including deep
            basalt-walled canyons, glacially-cut gorges, high mountain lakes, forests and prairie. Like
            the rest of the rural West, the area faces a number of challenges – a natural-resource based
            economy struggling to retain living-wage jobs, shifts in population demographics and a
            changing climate, to name a few.
        </p>
        <p class="leading-relaxed text-slate-700 dark:text-slate-300">
            Whether our neighbors are ranchers, loggers, bankers, teachers, or retirees, how we respond to
            these challenges will determine the character of our home for decades to come.
        </p>
    </div>
    <div class="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:space-x-4">
        <a
            href={`${pdfUrl}#view=fit`}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center space-x-3 rounded-lg bg-slate-800 px-6 py-3 text-white transition duration-300 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
        >
            <File class="h-6 w-6" />
            <span>View PDF</span>
        </a>
        <a
            href={pdfUrl}
            download
            class="flex items-center justify-center space-x-3 rounded-lg bg-slate-800 px-6 py-3 text-white transition duration-300 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
        >
            <Download class="h-6 w-6" />
            <span>Download PDF</span>
        </a>
    </div>
</div>