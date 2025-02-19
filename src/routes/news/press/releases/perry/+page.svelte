<!-- PressRelease.svelte -->
<script lang="ts">
    import { Calendar, Mail } from 'lucide-svelte';
    
    const pressInfo = {
        date: "09/25/2019",
        title: "482 Acres of Wallowa Lake's East Moraine Conserved",
        location: "Joseph, OR",
        paragraphs: [
            "Wallowa Lake's iconic East Moraine is well on its way to being conserved in its entirety. Another 482 acres was recently added to the growing list of properties under permanent protection. Working with Wallowa Land Trust, landowners Lou and Deyette Perry voluntarily established a conservation easement on their working farm that extinguishes development of one homesite, maintains working lands, and conserves habitat forever.",
            "A conservation easement is a voluntary legal agreement between a landowner and a land trust which protects a property's agricultural viability, natural habitat, rural heritage, and/or scenic open space in perpetuity.",
            "'This easement, which still allows me to manage the property and maintain it as a working landscape, was a perfect opportunity to both protect the moraine and ensure that it didn't just get locked up as a park or preserve,' Lou Perry said.",
            "The 482-acre Perry property encompasses portions of the eastern lateral moraines over to the top of the East Moraine's crest. The Perry's have also left open the opportunity to grant a trail easement and public access, where a section of the informal East Moraine trail bisects their farm. The conserved farm is directly adjacent to the 176-acre Quint and 52-acre Ham conservation easements, which Wallowa Land Trust completed in 2019 and 2017, respectively.",
            "'The Perry Farm is a unique and important piece of property, and its conservation is a great achievement,' said Eric Greenwell, Wallowa Land Trust's Conservation Program Manager. 'Not only does it have fertile soils for farming and provide habitat for grassland birds and mule deer in the winter, when times are hard, but it is a key piece of a community vision to conserve Wallowa Lake's East Moraine and the heart of Northeast Oregon. With this project complete, and the potential purchase of another 1,800 acres of the East Moraine in 2020, we are all working together to establish a corridor of open space and habitat from the Wallowa Mountains to the valley floor.'",
            "Lou Perry is a fourth generation Wallowa County resident. 'My great grandfather, George F. Dawson came by horseback to Wallowa County in 1902,' Perry explained, 'He and his brother soon established a sawmill and retail lumber store, which continues to this day as 1917 Lumber.'",
            "Lou has a long history on the land of the new easement. He grew up out on upper Prairie Creek with the Moraines as his backdrop. Perry said, 'When I was still in high school, I leased much of the property now protected for my sheep operation.' At the age of 19 he bought the first parcel and has added to it ever since. He moved to Tennessee for school, where he met his wife Deyette, before moving back to the county. Today, Lou leases out the land to grow crops including grain and wheat.",
            "Perry has been working with the Land Trust for a number of years to establish a conservation easement. 'It [the easement] maintains both the scenic values we all cherish, and keeps it in productive use,' Perry explained, 'I am happy to leave this as a legacy to the County and future generations.'",
            "While this project is another victory for the East Moraine, more work remains to be done to secure this iconic landform. The Perry Farm is part of a much larger effort by the Wallowa Lake Moraines Partnership to permanently protect the entire East Moraine. Fundraising efforts continue to secure the neighboring 1,791-acre Ronald C. Yanke Family Trust Property. Its successful acquisition and conveyance to Wallowa County would preserve over 80% of Wallowa Lake's East Moraine and create a continuous corridor from the Wallowa-Whitman National Forest and Eagle Cap Wilderness to the Wallowa Valley floor. Of the $6.5 million needed to purchase the Yanke Family Trust's Property, the Partnership has raised $5.7 million. More information on this effort can be found at www.morainecampaign.org."
        ],
        aboutWLT: "Founded in 2004, Wallowa Land Trust is a 501(c)3 nonprofit land conservation organization based in Enterprise, Oregon. The Land Trust's mission is to protect the rural nature of the Wallowa Country by working cooperatively with private landowners, governmental entities, Indian tribes and local communities to conserve land. Wallowa Land Trust uses voluntary, non-regulatory methods to protect natural areas, wildlife habitat and working lands in Wallowa County.",
        aboutPartnership: {
            intro: "In 2011 the largest landowner on the East Moraine announced their intention to sell or develop their property. In response, the Wallowa Lake Moraines Partnership was formed by Wallowa Land Trust, Wallowa Resources, Wallowa County and Oregon Parks and Recreation Department to secure the East Moraine. The goals of the Partnership are to:",
            goals: [
                "provide public access respectful of the landscape and its scenic beauty",
                "protect open space for wildlife, recreation, and natural resources",
                "maintain sustainable working landscapes of farms, forests and rangeland to contribute to the local economy and rural ways of life"
            ],
            outro: "The Partnership officially launched a capital campaign to acquire this property in early 2019."
        },
        contact: {
            name: "Eric Greenwell",
            title: "Conservation Program Manager",
            org: "Wallowa Land Trust",
            phone: "(541) 426-2042",
            email: "eric@wallowalandtrust.org",
            website: "www.wallowalandtrust.org"
        }
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

        <!-- About Sections -->
        <div class="space-y-6 border-t border-slate-200 pt-6 dark:border-slate-700">
            <div>
                <h2 class="mb-3 font-serif text-xl text-slate-800 dark:text-slate-100">
                    About Wallowa Land Trust
                </h2>
                <p class="text-slate-700 dark:text-slate-300">{pressInfo.aboutWLT}</p>
            </div>

            <div>
                <h2 class="mb-3 font-serif text-xl text-slate-800 dark:text-slate-100">
                    About the Wallowa Lake Moraines Partnership
                </h2>
                <p class="mb-4 text-slate-700 dark:text-slate-300">{pressInfo.aboutPartnership.intro}</p>
                <ul class="mb-4 ml-6 space-y-2 list-disc">
                    {#each pressInfo.aboutPartnership.goals as goal}
                        <li class="text-slate-700 dark:text-slate-300">{goal}</li>
                    {/each}
                </ul>
                <p class="text-slate-700 dark:text-slate-300">{pressInfo.aboutPartnership.outro}</p>
            </div>
        </div>

        <!-- Contact Information -->
        <div class="border-t border-slate-200 pt-6 dark:border-slate-700">
            <h2 class="mb-4 font-serif text-xl text-slate-800 dark:text-slate-100">
                For More Information Contact:
            </h2>
            <div class="text-slate-700 dark:text-slate-300">
                <p>{pressInfo.contact.name}</p>
                <p>{pressInfo.contact.title}</p>
                <p>{pressInfo.contact.org}</p>
                <p>{pressInfo.contact.phone}</p>
                <p>{pressInfo.contact.email}</p>
                <p>{pressInfo.contact.website}</p>
            </div>
        </div>
    </div>
</div>