<!-- PressRelease.svelte -->
<script lang="ts">
    import { Calendar } from 'lucide-svelte';
    
    const pressInfo = {
        date: "January 21, 2020",
        title: "1,791 ACRES OF WALLOWA LAKE'S EAST MORAINE ACQUIRED FOR WALLOWA COUNTY",
        subtitle: "Significant development pressure leads to successful campaign to secure unique glacial landscape off the shore of Wallowa Lake's East Moraine in northeast Oregon.",
        location: "JOSEPH, Ore.",
        imageCredit: "Photo by Leon Werdinger",
        paragraphs: [
            "The breathtaking beauty of Wallowa Lake's East Moraine forest and open space was permanently protected when almost 1,800 acres were transferred this week into Wallowa County ownership.",
            "For over ten years the Wallowa Lake Moraines Partnership – a consortium comprised of the County, Wallowa Land Trust, Wallowa Resources, and Oregon Parks and Recreation Department – worked to acquire the property in order to eliminate any risk of home development, especially on the moraine's vulnerable crest. Now that it is under Wallowa County ownership, all development and sub-division rights have been extinguished and the property will be managed as a working community forest, protecting native plants, wildlife habitat, and cultural resources while providing non-motorized recreational access and returns to the local economy through sustainable forestry and grazing.",
            "'We couldn't have hoped for a better outcome that serves the public's need for permanent protection and access to this spectacular natural landscape,' said John Hillock, Wallowa County Commissioner and Chair of the East Moraine Campaign."
        ],
        sections: [
            {
                title: "Push to protect moraine receives broad support",
                content: [
                    "After nearly a decade of negotiations, the Partnership and the former landowner, the Ronald C. Yanke Family Trust, came to a purchase agreement of $6 million in January 2019. Fundraising then went into full-gear, with over half coming in the form of a $3.5 million grant the Oregon Department of Forestry received from the USDA Forest Service's Forest Legacy Program that helped the Partnership reach the purchase price in a voluntary sale by the Yanke Family Trust.",
                    "'Forest Legacy Program grants are one resource to help keep Oregon's working forests intact so they can continue to provide social, environmental and economic benefits to Oregonians,' said Oregon State Forester Peter Daugherty. 'We are pleased that we could help the Wallowa Lake Moraines Partnership protect this unique forest resource.'",
                    "Obtaining Forest Legacy grants is a competitive process, Daugherty said, adding 'I am proud that to date we've brought in $8.2 million in federal money to fund the most worthwhile proposals from Oregon.'",
                    "Individual donors contributed more than $1.1 million to the purchase. Oregon Parks and Recreation contributed $1 million and its staff is lending a hand in formulating the land's recreation plan. The Nez Perce Tribe gave $300,000 to the campaign and is helping the Partnership with the plan for management as well.",
                    "All told, almost $6.5 million was raised through grants and donations to purchase the moraine property and begin a multi-use management plan for its perpetual management. The Partnership continues to seek funding to support and sustain the management of the property.",
                    "'This is an incredible milestone,' says Kathleen Ackley, Wallowa Land Trust Director. 'It's by no means the end of the project, we still have a lot of work ahead of this, but this is something to be proud of. More than a million dollars came from private individuals and families with deep connections to Wallowa County and an enduring love for Wallowa Lake and the Moraines. We remain astonished by the incredible generosity of our community.'"
                ]
            },
            {
                title: "A Community Legacy",
                content: [
                    "For thousands of years the spectacular East Moraine has been a refuge for wildlife and sacred to Indigenous peoples. Today it continues to be a working landscape enjoyed by locals and visitors alike. In recent years, the land was zoned for the development of houses, including three trophy homes on the crest of the moraine, but under county ownership the threats of development and subdivision are now extinguished in perpetuity.",
                    "Rebecca Miles, Nez Perce Tribe Executive Director noted, 'Participating with the Partnership and representing the Nez Perce Tribe has been a true honor. This purchase is a dream come true, closing out any and all fears of potential development on the East Moraine. This is a historical feat for the permanent protection of such sacred lands. The protections of this property will ensure our ancestors and our way of life are forever protected and continue on.'",
                    "Once complete, a multi-use management plan will strive to balance healthy habitat for native plants and animals, cultural resources, non-motorized recreation, and sustainable timber harvest and range management. Securing the East Moraine creates a significant habitat corridor; protects cultural resources; expands upon existing conserved lands; and opens to the public the property's beautiful views on the moraine's southern crest in a manner that is respectful of its scenic beauty. The draft management is currently scheduled for public input and review in spring of 2020.",
                    "'Community forests are a powerful response to forest and rangeland loss to development,' adds Nils Christoffersen, Executive Director of Wallowa Resources. 'The East Moraine is central to our community's sense of place. This milestone helps us sustain our connection to the land, which is central to the custom and culture of everyone who calls this place home. It's an incredible achievement.'",
                    "A ribbon-cutting ceremony and celebration is scheduled for late spring of 2020. Stay tuned for upcoming details!"
                ]
            }
        ],
        funders: [
            "USDA Forest Service Forest Legacy Program via the Oregon Department of Forestry",
            "Individual donors",
            "Oregon Parks and Recreation Department",
            "Nez Perce Tribe",
            "Collins Foundation",
            "Oregon Community Foundation",
            "Travel Oregon in partnership with Eastern Oregon Visitors Association",
            "Conservation Alliance",
            "Land Trust Alliance/Yarg Foundation/ACE Program",
            "Rose E. Tucker Charitable Trust",
            "Walker Family Foundation",
            "Cycle Oregon"
        ],
        aboutPartnership: "The Partnership was formed in 2011 by Wallowa Land Trust, Wallowa Resources, Wallowa County and Oregon Parks and Recreation Department to secure the East Moraine as a natural landscape and a model for sustainable natural resource management. The goals of the Partnership are to: provide public access respectful of the landscape and its scenic beauty; protect open space for wildlife, recreation, and natural resources; and, maintain sustainable working landscapes of farms, forests and rangeland to contribute to the local economy and rural ways of life.",
        contacts: [
            {
                name: "Kathleen Ackley",
                title: "Executive Director of Wallowa Land Trust",
                address: "116 S River St, Enterprise, OR 97828",
                phone: "(541) 426-2042"
            },
            {
                name: "Nils Christoffersen",
                title: "Executive Director of Wallowa Resources",
                address: "401 NE First St, Suite A, Enterprise, OR 97828",
                phone: "(541) 426-8053"
            },
            {
                name: "Wallowa County Board of Commissioners",
                address: "101 S River St, Enterprise, OR 97828",
                phone: "(541) 426-4543"
            },
            {
                name: "Matt Rippee",
                title: "Oregon Parks and Recreation District",
                phone: "(541) 962-6518"
            },
            {
                name: "Amy Singh",
                title: "Oregon Department of Forestry",
                phone: "(971) 718-1054"
            }
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
                
                <p class="text-xl italic text-slate-700 dark:text-slate-300">
                    {pressInfo.subtitle}
                </p>
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

        <!-- Sections -->
        {#each pressInfo.sections as section}
            <div class="space-y-4">
                <h2 class="font-serif text-2xl text-slate-800 dark:text-slate-100">
                    {section.title}
                </h2>
                {#each section.content as paragraph}
                    <p class="text-slate-700 dark:text-slate-300">
                        {paragraph}
                    </p>
                {/each}
            </div>
        {/each}

        <!-- Funders -->
        <div class="space-y-4">
            <h2 class="font-serif text-2xl text-slate-800 dark:text-slate-100">
                Project funders include:
            </h2>
            <ul class="ml-6 space-y-2 list-disc">
                {#each pressInfo.funders as funder}
                    <li class="text-slate-700 dark:text-slate-300">{funder}</li>
                {/each}
            </ul>
        </div>

        <!-- About Partnership -->
        <div class="space-y-4">
            <h2 class="font-serif text-2xl text-slate-800 dark:text-slate-100">
                About the Wallowa Lake Moraines Partnership:
            </h2>
            <p class="text-slate-700 dark:text-slate-300">
                {pressInfo.aboutPartnership}
            </p>
        </div>

        <!-- Contact Information -->
        <div class="space-y-4">
            <h2 class="font-serif text-2xl text-slate-800 dark:text-slate-100">
                For those seeking more information on the next steps of the Project:
            </h2>
            <div class="space-y-4">
                {#each pressInfo.contacts as contact}
                    <div class="text-slate-700 dark:text-slate-300">
                        <p class="font-medium">{contact.name}</p>
                        {#if contact.title}
                            <p>{contact.title}</p>
                        {/if}
                        {#if contact.address}
                            <p>{contact.address}</p>
                        {/if}
                        <p>{contact.phone}</p>
                    </div>
                {/each}
                <p class="text-slate-700 dark:text-slate-300">
                    or find useful information at morainecampaign.org
                </p>
            </div>
        </div>
    </div>
</div>