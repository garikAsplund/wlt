<!-- PressRelease.svelte -->
<script lang="ts">
    import { Calendar, Mail } from 'lucide-svelte';
    
    const pressInfo = {
        date: "February 8, 2023",
        title: "Final Hurdle Cleared to Permanently Protect East Moraine Community Forest",
        subtitle: "Conservation easement permanently protects over 1,800 acres of the East Moraine of Wallowa Lake",
        contact: {
            name: "Sarah Kleinhanzl",
            email: "sarah@wallowalandtrust.org"
        },
        imageCredit: "Image of the East Moraine next to Wallowa Lake by Leon Werdinger Photography.",
        location: "ENTERPRISE",
        paragraphs: [
            "After more than a decade of work, the final step to ban all future commercial and residential development on the East Moraine Community Forest was put to rest in a matter of ten minutes.",
            "On Thursday, January 26th 2023, Wallowa County Commissioners John Hillock, Todd Nash and Susan Roberts joined Wallowa Land Trust board chair Benjamin Curry at the Wallowa Title Company to sign the East Moraine Community Forest conservation easement. A conservation easement is a voluntary legal agreement that limits certain uses of the land in perpetuity. The East Moraine Community Forest conservation easement serves as an additional layer of protection on the 1,824-acre property.",
            "At the time the property was acquired and transferred into Wallowa County ownership in January 2020, minimal restrictions were placed on the title. While these restrictions stopped the chance of any development on the property, the restrictions were broad in nature with no one obligated to make sure that the terms were met. In contrast, the final conservation easement defines prohibited and allowed uses on the property and assigns the permanent obligation of watching over the property to Wallowa Land Trust and the Oregon Department of Forestry (ODF). As co-holders of the easement, Wallowa Land Trust and ODF will work with Wallowa County and the East Moraine Community Forest Management Team to ensure that the terms of this binding, legal document are honored.",
            "'We are lucky to have a team of committed individuals and organizations that all care deeply about the future of the East Moraine. Having this property in county ownership, managed as a multiple-use landscape, creates an incredible asset for our community,' said Wallowa Land Trust's executive director, Kathleen Ackley.",
            "The team that came together to acquire the East Moraine Community Forest (Wallowa County, Wallowa Resources, Wallowa Land Trust and Oregon Parks and Recreation Department) is now turning their efforts to the task of long-term management. Guided by a management plan, the team is joined by newly hired property manager Katy Nesbitt. Together they are overseeing the various uses on the property. Most recently, a guided forest health tour was arranged for the public to learn about a planned commercial thinning to address grand fir die off.",
            "Nesbitt said, 'This is a community-owned forest that will be a model for public land stewardship. To that end, we are working on a carrying capacity study to better understand the impact of recreation on the moraine's plants and animals. In the coming years we will also conduct a comprehensive wildlife and plant inventory. Starting in 2024, to ensure livestock best utilize the grass on the moraine and to protect sensitive habitat and species, we will be using virtual fencing - radio-controlled collars - to manage the cattle.'",
            "Going forward, you can expect ample recreation opportunities on the Community Forest, with no threat of future development, thanks to the conservation easement now placed on the property. But this promise of permanent protection would not be without the many hands that have helped it take shape along the way.",
            "'Recognizing the amount of hard work and persistence that has gone into this project over the last 15 years is key to appreciating this moment's significance,' said Ackley. 'We wouldn't be here without the many supporters, project partners and community members who have advocated for the East Moraine's protection for many years. This is a historic moment we should all be proud of.'",
            "For more information about the East Moraine Community Forest, visit https://co.wallowa.or.us/east-moraine-community-forest/ or email Katy Nesbitt at knesbitt@co.wallowa.or.us."
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

            <div class="space-y-2">
                <h1 class="font-serif text-3xl text-slate-800 dark:text-slate-100">
                    {pressInfo.title}
                </h1>
                
                <h2 class="text-xl text-slate-700 dark:text-slate-300">
                    {pressInfo.subtitle}
                </h2>
            </div>

            <div class="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                <Mail class="h-4 w-4" />
                <span>Press contact: </span>
                <span class="text-slate-700 dark:text-slate-300">
                    {pressInfo.contact.name}, {pressInfo.contact.email}
                </span>
            </div>

            <div class="text-sm italic text-slate-600 dark:text-slate-400">
                {pressInfo.imageCredit}
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