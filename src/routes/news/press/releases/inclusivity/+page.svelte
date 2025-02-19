<!-- EquityStatement.svelte -->
<script lang="ts">
    const paragraphs = [
        "As we take our evening walks on the roads in the shadows of the Wallowa Mountains, or as we hike the half-mile to the top of Wallowa Lake's East Moraine here in Eastern Oregon, these places remind us that, as conservationists and lovers of land and water, the core of our work is empathy, empathy for the beauty and bounty of the world around us and the profound appreciation for the interconnectedness and intrinsic value of all things.",
        "Just as connection lies at the heart of healthy ecosystems, it lies at the heart of healthy communities, and we bear witness every day to the fact that not all people are offered the same opportunities to connect.",
        "When communities of color are disproportionately affected by the coronavirus across our country; when countless people of color are murdered including George Floyd in Minnesota, Breonna Taylor in Kentucky and Ahmaud Arbery in Georgia; when white people like Amy Cooper are ready and willing to manipulate police officers by weaponizing the color of Christian Cooper's own skin against him; and so many more instances of racism and racial inequality, it strikes at the core of who we strive to be as practitioners of conservation and practitioners of community.",
        "We condemn those acts that so threaten the fabric of community, and we stand in solidarity with those committing to working for change.",
        "We stand in solidarity to hear and support people of color, LGBTQ people and marginalized communities who don't have access to the same beautiful vistas, evening walks or jogs in neighborhoods and county parks—experiences we often take for granted—because they are not welcome, safe or secure in those spaces.",
        "We agree with other land conservation organizations across the state, country and internationally, who have a direct hand in shaping our community spaces, and who are committed to hearing and including the voices of those who conservation has not served, because the history of conservation, like many movements and sectors, has not been an equitable and inclusive one.",
        "In our own community, we acknowledge that we work on lands cared for by Nez Perce people, people who were forced to leave this place, their homeland, by threat of violence from the United States military in 1877. We work on lands where the knowledge of how to care for it, through relationships and interconnectedness and community, is thousands and thousands of years old. We work in a place where that knowledge, and the bearers of that knowledge, the original stewards of this land, have been stricken from the conversation for the last 150 years.",
        "When we take our evening walks in this valley, we enjoy the sweeping views of mountains to the south, prairies to the north, and canyons to the east, places that have sustained people, plants and wildlife for a long, long time. When we walk freely and openly around towns like Wallowa, a name derived from the Nez Perce word for a means of catching fish, fish who the Nez Perce believe stepped forward in the beginning to give their bodies so that people might thrive, is everyone welcome here today? When we look on the Wallowa Mountains in Oregon and the Seven Devil Mountains in Idaho, on the roads between Enterprise—a name which evokes promise and prosperity—and Joseph—named for the great chief whose people were forced from this place—what future do we see? What actions can we take to realize that future?",
        "In the end, land connects us in so many ways, rippling out into our communities. If we are working with farmers to conserve a working farm, are our marketplaces spaces where anyone has access to the quality food our skilled farmers produce? Are the wildlife and plants that have already sustained people for thousands of years, physically and spiritually, still healthy and able to sustain people today? Do we have the knowledge to ensure they do? If we are working to conserve a community forest, do the welcome signs and interpretive signs tell an honest, accurate and inclusive story? Do they welcome all of us?",
        "When referring to the racist interaction between Amy Cooper and Christian Cooper in Central Park, Drew Lanham, birder and author of The Home Place: Memoirs of a Colored Man's Love Affair with Nature, writes, 'This is a story beyond one person, a story beyond that park. It is a story writ large of who owns spaces, who has privileges to those spaces.'",
        "As a land trust, and as an organization part of a network that directly influences the tone and tenor of community spaces, we have a lot more work to do to ensure those spaces are inclusive, in all the facets in which land and water nourish our lives.",
        "Sincerely,\n \n Wallowa Land Trust"
    ];

    const resources = {
        articles: [
            {
                title: "How Green Groups Became So White and What We Can Do About it",
                url: "https://e360.yale.edu/features/how-green-groups-became-so-white-and-what-to-do-about-it"
            },
            {
                title: "Being black in nature: 'You're an endangered species.'",
                url: "https://www.theguardian.com/lifeandstyle/2020/may/31/being-black-while-in-nature-youre-an-endangered-species"
            }
        ],
        // films: [
        //     {
        //         title: "Five Films that shed light on Environmental Racism",
        //         url: "https://www.greenfilmfest.org/five_films_that_shed_light_on_environmental_racism"
        //     }
        // ],
        books: [
            {
                title: "Black Faces, White Spaces: Reimagining the Relationship of African-Americans to the Great Outdoors",
                url: "https://uncpress.org/book/9781469614489/black-faces-white-spaces/",
                isItalic: true
            }
        ],
        organizations: [
            {
                title: "NAACP Environmental & Climate Justice",
                url: "https://www.naacp.org/issues/environmental-justice/"
            },
            {
                title: "First Light Learning Journey",
                url: "https://firstlightlearningjourney.net/"
            }
        ]
    };
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
    <h1 class="mb-6 font-serif text-4xl text-slate-800 dark:text-slate-100">
        Statement on Racial Equity in Conservation
    </h1>
    <div class="space-y-8 rounded-lg bg-slate-50 p-6 dark:bg-slate-800/50 sm:p-8">
        <!-- Main Content -->
        <div class="space-y-6">
            {#each paragraphs as paragraph, i}
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                    {@html paragraph.replace('\n', '<br>')}
                </p>
            {/each}
        </div>

        <!-- Resources Section -->
        <div class="border-t border-slate-200 pt-6 dark:border-slate-700">
            <h2 class="mb-4 font-serif text-2xl text-slate-800 dark:text-slate-100">
                Jump Start Your Learning with a Few Resources:
            </h2>
            
            {#each Object.entries(resources) as [category, items]}
                <div class="mb-6">
                    <h3 class="mb-3 font-medium text-slate-800 dark:text-slate-100">
                        {category.charAt(0).toUpperCase() + category.slice(1)}:
                    </h3>
                    <ul class="space-y-2">
                        {#each items as item}
                            <li>
                                <a href={item.url} 
                                   class="text-slate-700 hover:text-slate-900 dark:text-slate-300 
                                          dark:hover:text-slate-100 underline underline-offset-4 ml-4"
                                >
                                    {#if item.isItalic}
                                        <em>{item.title}</em>
                                    {:else}
                                        {item.title}
                                    {/if}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</div>