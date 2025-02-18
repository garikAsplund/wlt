<script lang="ts">
    import { File, Download, ExternalLink } from 'lucide-svelte';
    
    const currentReport = {
        title: "2021 Annual Report",
        url: "/PDFs/WLT_Annual_Report_2021.pdf"
    };

    const archiveLinks = [
        {
            year: "2020",
            url: "https://issuu.com/skleinhanzl/docs/2020_annual_report_final_1_"
        },
        {
            year: "2019",
            url: "https://storymaps.arcgis.com/stories/379a9a44b53c447d9609b2bb70b24db7"
        }
    ];
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
    <div class="mb-8 sm:mb-12">
        <enhanced:img 
            src="/static/images/backgrounds/canyons.jpg" 
            alt="Wallowa Land Trust Impact" 
            class="h-24 w-full rounded-lg object-cover sm:h-64"
        />
    </div>
    
    <h1 class="mb-8 font-serif text-3xl text-slate-800 dark:text-slate-100 sm:mb-12 sm:text-4xl">
        Annual Reports
    </h1>

    <div class="space-y-6 rounded-lg bg-slate-50 p-6 dark:bg-slate-800/50 sm:p-8">
        <p class="leading-relaxed text-slate-700 dark:text-slate-300">
            Our annual reports provide a comprehensive overview of Wallowa Land Trust's 
            conservation achievements, financial health, and community impact. Through these 
            reports, we demonstrate our commitment to transparency and share the stories of 
            our work protecting the rural nature of Wallowa County.
        </p>

        <!-- Current Annual Report Section -->
        <div class="border-t border-slate-200 pt-6 dark:border-slate-700">
            <h2 class="mb-4 font-serif text-2xl text-slate-800 dark:text-slate-100">
                Current Annual Report
            </h2>
            <!-- Changed to stack on mobile -->
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a 
                    href={`${currentReport.url}#view=fit`}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center space-x-3 
                           bg-slate-800 dark:bg-slate-700 text-white 
                           px-6 py-4 rounded-lg 
                           hover:bg-slate-700 dark:hover:bg-slate-600 
                           transition duration-300"
                >
                    <!-- Increased icon size for mobile -->
                    <File class="h-7 w-7 sm:h-6 sm:w-6" />
                    <span>View {currentReport.title}</span>
                </a>
                <a 
                    href={currentReport.url}
                    download
                    class="flex items-center justify-center space-x-3 
                           bg-slate-800 dark:bg-slate-700 text-white 
                           px-6 py-4 rounded-lg 
                           hover:bg-slate-700 dark:hover:bg-slate-600 
                           transition duration-300"
                >
                    <!-- Increased icon size for mobile -->
                    <Download class="h-7 w-7 sm:h-6 sm:w-6" />
                    <span>Download PDF</span>
                </a>
            </div>
        </div>

        <!-- Archive Section -->
        <div class="border-t border-slate-200 pt-6 dark:border-slate-700">
            <h2 class="mb-4 font-serif text-2xl text-slate-800 dark:text-slate-100">
                Previous Annual Reports
            </h2>
            <div class="space-y-3">
                {#each archiveLinks as report}
                    <a 
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-between rounded-lg 
                               border border-slate-200 dark:border-slate-700 
                               px-4 py-4 
                               hover:bg-slate-100 dark:hover:bg-slate-800 
                               transition duration-300"
                    >
                        <span class="text-slate-700 dark:text-slate-300">
                            {report.year} Annual Report
                        </span>
                        <!-- Increased icon size -->
                        <ExternalLink class="h-6 w-6 text-slate-500" />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>