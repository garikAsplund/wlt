<!-- PressRelease.svelte -->
<script lang="ts">
    import { Calendar, Mail } from 'lucide-svelte';
    
    const pressInfo = {
        date: "January 6, 2023",
        title: "Forest Health project scheduled for East Moraine Community Forest this winter",
        subtitle: "Almost 19 acres will be thinned near Turner Lane trailhead",
        contact: {
            name: "Katy Nesbitt",
            email: "knesbitt@co.wallowa.or.us"
        },
        location: "ENTERPRISE",
        paragraphs: [
            "To protect forest health on the East Moraine Community Forest a thinning project is planned to reduce an outbreak of bark beetles near the Turner Lane trailhead.",
            "Known as scolytus, or 'fir engravers', the insects are threatening forests across the Blue Mountains and local foresters and landowners have documented phenomenon. Oregon Department of Forestry highlighted this in their most recent Forest Health report. Broadly speaking, the department noted that drought stress, followed by opportunistic insect attacks, is the main underlying cause of tree dieback and decline. Recreationists hiking, biking, riding or cross-country skiing on the Community Forest may have noticed dead or dying trees.",
            "This winter, managers of the Community Forest will be addressing this issue on approximately 19 acres with the goal of mitigating drought stress, slowing the spread of beetles, and improving forest health. Treatment will begin in late February.",
            "Local forester Larry Nall works with the Community Forest's management team on its forestry plan. He said removing insect-riddled trees is key to controlling the spread of scolytus, a bark beetle that has the potential to kill an entire stands of trees. The treatment will improve the overall health of the stands on the east side of the East Moraine.",
            "Nall said, 'This thinning project will reduce stocking, leaving a multi stand structure with a higher percentage of fire and fir engraver resistant species.'",
            "Mike Witherite who owns 'Mr. Timber', a Joseph-based logging company, will harvest the trees over snow to reduce soil compaction and disturbance. The work will be completed by late March, ahead of the migratory bird season and the spring thaw.",
            "The harvest method will be 'whole tree logging' – bringing trees to a landing near a road for further processing. Nall said some slash debris will be left behind, which provides habitat for small mammals, birds, amphibians and insects. Once the area has been thinned, it will also provide better food sources for keystone species such as elk and deer by opening up the forest canopy and allowing shrubs more sunlight for growth.",
            "Nils Christoffersen, the Community Forest's executive committee chairman, said Witherite is continuing forest health work started in September. Fifteen acres of small diameter trees were pre-commercial thinned and mulched onsite to encourage the growth of Douglas fir, larch and ponderosa pine on the upper elevation of the Community Forest.",
            "Christoffersen, 'Completing this work on the lower end of the Community Forest now takes advantage of over-snow harvesting as well as a reasonable log market. This prescription is an example of the stewardship we envision for the county-owned property – management that advances the vision and values established under the new management plan.'",
            "The public is invited to an over-snow tour of the project Jan. 28 from 9 a.m. to 11 a.m. beginning at the Community Forest's Turner Lane parking lot. Snow shoes or cross-country skis will be necessary to access the stand.",
            "The tour will be led by Nall, who serves on the Wallowa Resources board of directors as well as the Wallowa Land Trust's land's committee. He will be supported by Nick Lunde, retired U.S. Forest Service fire management officer and Wallowa Land Trust board member, Mike Hansen, wildlife biologist, and Janet Hohmann, wildlife and bird expert.",
            "Kathleen Ackley, executive director of the Wallowa Land Trust, is on the East Moraine Community Forest executive committee. She said the tour is an opportunity to educate the public about the multi-use management of the Forest.",
            "Ackley said, 'The partners who manage the Community Forest – Wallowa County, Wallowa Land Trust, Wallowa Resources and Oregon Parks and Recreation Department – encourage the public to not only enjoy the property for recreation, but come learn about ecological forestry and how thoughtful stewardship can improve the overall health of the landscape.'",
            "For more information or to sign up for the tour, contact Sarah Kleinhanzl, sarah@wallowalandtrust.org or Katy Nesbitt, knesbitt@co.wallowa.or.us."
        ]
    };
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
    <div class="space-y-8 rounded-lg bg-slate-50 p-6 dark:bg-slate-800/50 sm:p-8">
        <!-- Header -->
        <div class="space-y-4">
            <div class="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                <Calendar class="h-4 w-4" />
                <span>{pressInfo.date}</span>
            </div>

            <h1 class="font-serif text-3xl text-slate-800 dark:text-slate-100">
                {pressInfo.title}
            </h1>
            
            <h2 class="text-xl text-slate-700 dark:text-slate-300">
                {pressInfo.subtitle}
            </h2>

            <div class="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                <Mail class="h-4 w-4" />
                <span>Press contact: </span>
                <span class="text-slate-700 dark:text-slate-300">
                    {pressInfo.contact.name}, <span class="select-all">{pressInfo.contact.email}</span>
                </span>
            </div>
        </div>

        <!-- Location -->
        <div class="font-medium text-slate-700 dark:text-slate-300">
            {pressInfo.location} –
        </div>

        <!-- Main Content -->
        <div class="space-y-4">
            {#each pressInfo.paragraphs as paragraph}
                <p class="text-slate-700 dark:text-slate-300">
                    {paragraph}
                </p>
            {/each}
        </div>
    </div>
</div>