<!-- PressRelease.svelte -->
<script lang="ts">
    import { Calendar, Mail } from 'lucide-svelte';
    
    const pressInfo = {
        title: "Iconic East Moraine on its way to becoming community-owned forest",
        subtitle: "Local partnership seals deal to purchase 60% of the moraine",
        imageCredits: [
            {
                caption: "Lot lines projected on a planar view. For representation only",
                credit: "Photo © Leon Werdinger"
            }
        ],
        location: "ENTERPRISE",
        paragraphs: [
            "The integrity of Wallowa Lake's East Moraine will be retained for generations to come when nearly 1,800 acres become county-owned land in the coming year.",
            "The Ronald C. Yanke Family Trust has agreed to sell their East Moraine Property to the Wallowa Lake Moraines Partnership. The Partnership, made up of Wallowa Land Trust, Wallowa Resources, Wallowa County and Oregon Parks and Recreation Department, has been pursuing conservation of this landscape for nearly a decade. When the sale is completed in 2020 the land will become a community-owned forest, demonstrating sound forest and range stewardship and contributing to the local economy. Under Wallowa County ownership, the property will remain undeveloped with public access respectful of the unique natural and cultural assets of this iconic landform.",
            "'On behalf of the community, the Wallowa County Commissioners appreciate the opportunity to secure this special area for our citizens,' said Wallowa County Commissioner Susan Roberts.",
            "Nearly one million visitors come to Wallowa County each year, many to enjoy the beauty of the lake and the Wallowa mountain range that frames it. For the county's residents, the lake and its moraines provide fishing, hunting, hiking and economic benefits through agriculture and forestry.",
            "The Wallowa Lake Moraines Partnership formed in 2011 when the picturesque Yanke Family Trust property was destined to be sold and potentially developed for a conference center and single family homes, including three on the crest of the East Moraine. The goal of the Partnership is to:",
            "Nils Christoffersen, Executive Director of Wallowa Resources, noted that 'our community has a strong sense of pride and a commitment to land stewardship – and values its working relationship to the land. From our woodlands, rangelands and watersheds, there's heart, meaning and history there for many people. Turning the East Moraine into a community forest is another win for our residents by maintaining this treasured landscape.'",
            "The Partnership has already secured $3.9 million toward the purchase of the Moraine property from the Land and Water Conservation Fund's Forest Legacy Program. The Fund is financed by royalties paid by energy companies drilling for oil and gas on the Outer Continental Shelf. Created by Congress in 1964, the Fund was a bipartisan commitment to safeguard natural areas, water resources and our cultural heritage, and to provide recreation opportunities to all Americans.",
            "Senator Ron Wyden, a strong supporter of the project, said, 'The natural beauty of the world-renowned and locally treasured Wallowa Lake moraines will gain significant protections, thanks to the foresight and resources provided by the Land and Water Conservation Fund. The good news that this iconic marvel will be enjoyed by visitors and northeastern Oregon residents for generations to come stands as a true testament to the recreation and tourism benefits from this proven conservation fund.'",
            "Senator Jeff Merkley added, 'this is an exciting step toward conserving an iconic Oregon landscape and providing lasting benefits for Oregonians. The East Moraine not only provides recreation for Oregonians, it also is habitat for threatened species, holds cultural significance to Native American tribes, and forms part of the Wallow Lake watershed that is the source for Joseph's drinking water. With this purchase, Wallowa County will preserve this asset for generations of Oregonians.'",
            "The Wallowa Lake Moraines have long been recognized as an irreplaceable asset to both residents and visitors alike. Development concerns on 63 acres of the Terminal Moraine resulted in the creation of Iwetemlaykin State Heritage Site in 2007 and a Moraines Forum in 2008 drew nearly 200 residents out to celebrate this spectacular landform and affirm the community's desire to preserve it.",
            "Wallowa Land Trust has collaborated with five separate landowners around the lake to secure the future of five key parcels of land. With the Yanke parcel under County ownership, more than 2,200 acres of the Moraines will be permanently protected.",
            "'The East Moraine is iconic to eastern Oregon's outdoors. Attracting visitors from across the country to Wallowa County each year, this Oregon treasure is an important component to our economy. Putting the East Moraine into county ownership will help ensure the landscape continues to be managed for multiple use, supporting jobs and our local economy,' said Representative Greg Walden.",
            "The Partnership is preparing to launch a capital campaign to raise the remaining funds necessary to close the deal with the Yanke Family Trust by January 2020. 'We will be seeking a combination of grant funding and gifts from individuals, families and businesses. We need approximately $6.6 million dollars and we have already raised 60% of that,' said Kathleen Ackley, executive director of Wallowa Land Trust. 'With the help of foundations and gifts from individuals who care about the fate of the Wallowa Lake Moraines, together we can conserve a true natural wonder.'"
        ],
        goals: [
            "Maintain sustainable working landscapes of farms, forests and rangeland to contribute to the local economy and rural ways of life",
            "Provide public access respectful of the landscape and its scenic beauty",
            "Protect open space for wildlife, recreation, and natural resources"
        ],
        contacts: [
            {
                name: "Kathleen Ackley",
                title: "Executive Director",
                org: "Wallowa Land Trust",
                phone: "541-426-2042",
                email: "kathleen@wallowalandtrust.org",
                website: "www.wallowalandtrust.org"
            },
            {
                name: "Nils Christoffersen",
                title: "Executive Director",
                org: "Wallowa Resources",
                phone: "541-426 8053 x25",
                email: "nils@wallowaresources.org",
                website: "www.wallowaresources.org"
            }
        ]
    };
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
    <div class="space-y-8 rounded-lg bg-slate-50 p-6 dark:bg-slate-800/50 sm:p-8">
        <!-- Header -->
        <div class="space-y-4">
            <h1 class="font-serif text-3xl text-slate-800 dark:text-slate-100">
                {pressInfo.title}
            </h1>
            
            <h2 class="text-xl text-slate-700 dark:text-slate-300">
                {pressInfo.subtitle}
            </h2>

            {#each pressInfo.imageCredits as {caption, credit}}
                <div class="text-sm italic text-slate-600 dark:text-slate-400">
                    {caption} – {credit}
                </div>
            {/each}
        </div>

        <!-- Location -->
        <div class="font-medium text-slate-700 dark:text-slate-300">
            {pressInfo.location} –
        </div>

        <!-- Main Content -->
        <div class="space-y-4">
            {#each pressInfo.paragraphs as paragraph, i}
                <!-- Insert goals list after the paragraph that introduces it -->
                {#if i === 4}
                    <p class="text-slate-700 dark:text-slate-300">{paragraph}</p>
                    <ul class="ml-6 space-y-2 list-disc">
                        {#each pressInfo.goals as goal}
                            <li class="text-slate-700 dark:text-slate-300">{goal}</li>
                        {/each}
                    </ul>
                {:else}
                    <p class="text-slate-700 dark:text-slate-300">{paragraph}</p>
                {/if}
            {/each}
        </div>

        <!-- Contact Information -->
        <div class="border-t border-slate-200 pt-6 dark:border-slate-700">
            <h3 class="mb-4 font-medium text-slate-800 dark:text-slate-100">
                For More Information Contact:
            </h3>
            <div class="space-y-6">
                {#each pressInfo.contacts as contact}
                    <div class="text-slate-700 dark:text-slate-300">
                        <p class="font-medium">{contact.name}</p>
                        <p>{contact.title}</p>
                        <p>{contact.org}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                        <p>{contact.website}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>