<script lang="ts">
    import angelaImg from '$lib/images/board/angela.jpg?enhanced';
    import benjaminImg from '$lib/images/board/benjamin.jpg?enhanced';
    import davidImg from '$lib/images/board/david.jpg?enhanced';
    import dougImg from '$lib/images/board/doug.jpg?enhanced';
    import jeanImg from '$lib/images/board/jean.jpg?enhanced';
    import jewieImg from '$lib/images/board/jewie.jpg?enhanced';
    import nickImg from '$lib/images/board/nick.jpg?enhanced';
    import paulImg from '$lib/images/board/paul.png?enhanced';
    import yunImg from '$lib/images/board/yun.jpg?enhanced';

    const boardMembers = [
        {
            name: 'Benjamin Curry',
            title: 'Chair',
            image: benjaminImg,
            bio: [
                "Benjamin grew up on his family's farm in Wallowa County's isolated North End. The last student to attend the Flora school, he graduated from Enterprise in 1980, and then lived out of the county for 20 years.",
                "Since returning in 2001, he has been on the board of Fishtrap, Inc., a local literary non-profit, and a member of the Wallowa County Planning Commission. A poet and writer, he finds inspiration in the open spaces that Wallowa County provides, from mountain to canyon and everything in between.",
                "He lives in Joseph with his wife Lynne and two young daughters, both of whom are 5th generation Wallowa County natives."
            ]
        },
        {
            name: 'Yun H. McFall',
            title: 'Secretary',
            image: yunImg,
            bio: [
                "Yun was born in South Korea where she spent her childhood years before immigrating to the United States at 16 years of age. She attended the University of North Carolina at Chapel Hill and graduated with a degree in pharmacy.",
                "After working as a pharmacist in North Carolina for 7 years, Yun moved to Seattle where she worked as the pharmacy director at the Fairfax Psychiatric Hospital. In 1990, she took a position as a Clinical Specialist at the VA Puget Sound Health Care System where she provided direct patient care and educated residents.",
                "She moved to Joseph in 2015 where she lives with her husband Miles and their two cats. After growing up in the dense urban environment of Seoul, Korea, Yun has a special appreciation of the tranquility and splendor of the open prairie grass land of Eastern Oregon.",
                "This appreciation has given rise to Yun's heart felt desire to help preserve the beauty of rural Wallowa county. Yun enjoys cooking, hiking, quilting, and entertaining at her home in support of community organizations."
            ]
        },
        {
            name: 'Jean Pekarek',
            title: 'Treasurer',
            image: jeanImg,
            bio: [
                "One of Wallowa Land Trust's founding members, Jean has been an active community member in Wallowa County since 1980.",
                "She brings a background and interest in land use planning which stems back to the early 1990s when she was appointed to the Wallowa Lake Basin Advisory Committee to work on a plan to address the future of the Wallowa Lake moraines.",
                "Jean also splits her time between managing a business with her husband and coordinating services for the county developmental disability program."
            ]
        },
        {
            name: 'Milton Davis, Jr.',
            title: 'Board Member',
            image: jewieImg,
            bio: [
                "Jewie is from Nespelem, WA. He is a descendant of the Chief Joseph Band of Nez Perce ~ wal'waama, the Palus ~ waw'awiipo, Moses/Columbia ~ skwaxcnexw, Wenatchi ~ snpesqwawsexw.",
                "Jewie was raised by his grandmother Agnes Andrews Davis, whose father was Willie Redstar Andrews. Willie's father passed away in Oklahoma while in exile after the War of 1877. After the family's return to the Pacific Northwest area Willie's mother also passed away, leaving Willie an orphan. Willie was then raised by Chief Joseph.",
                "Jewie started working with the Colville Confederated Tribes' Language Preservation Program in 2000. He was lucky to be able to work with his grandmother, the last fluent speaker of the Nez Perce language of the Chief Joseph Band at the Longhouse in Nespelem. Jewie currently serves as the Sahaptin Traditional Territory Coordinator for the Tribe."
            ]
        },
        {
            name: 'Paul Flanders',
            title: 'Board Member',
            image: paulImg,
            bio: [
                "The oldest of six children Paul spent a large portion of his childhood in Irvine, California. He left for Modesto Junior College on an agriculture scholarship, and spent six years in the San Joaquin valley of California.",
                "Paul arrived in Oregon in 1987 where he met his wife Sharon. They moved to Wallowa County in 1993 when Paul accepted a position with the Wallowa County Mental Health Clinic.",
                "Paul is concerned about the threat of development and the decline of the working family farm and is dedicated to making a difference.",
        ]
        },
        {
            name: 'Doug Hammerstrom',
            title: 'Board Member',
            image: dougImg,
            bio: [
                "Doug currently practices family medicine in Spokane, but grew up in Pittsburgh, PA smelling the sulfur fumes of US Steel's coke ovens. All the while he was laying on the living room floor studying National Geographic articles on the American West.",
                "A long train trip in January 1981, from the 'Burgh to Pasco (to visit a college friend) with the ensuing drive thru the Wallowa River canyon, was all it took to convince him that \"this must be the place.\" Or as John Denver put it, \"coming home to a place he'd never been before.\"",
                "Since then Doug has been convinced that Wallowa County is one of our nations's last best places and that its highest use is sustainable agriculture, sustainable forestry and preservation of its natural grandeur that should constantly prod us to seek after the good, the true and the beautiful. Keep It Rural!"
            ]
        },
        {
            name: 'Angela Harvey',
            title: 'Board Member',
            image: angelaImg,
            bio: [
                "Angela became involved with the Land Trust after returning to her hometown of Lostine in 2017. After 15 years in the crowded San Francisco Bay Area, her desire to conserve the open spaces and working lands of Wallowa County was stronger than ever before.",
                "While in California, Angela worked in hiring and talent development for Apple, Inc. after earning her MBA in Sustainable Enterprise. Finally having made it back home, she has turned her focus to work that strengthens ties between neighbors and inspires collaboration — for the love of the land, and the lifestyle.",
                "For her part, Angela makes the most of her new & improved country life by getting outside with her son Cosmo every day, inspiring a new generation of stewardship for rural Wallowa County."
            ]
        },
        {
            name: 'Nick Lunde',
            title: 'Board Member',
            image: nickImg,
            bio: [
                "Born and raised in Corvallis, Oregon, Nick grew up adjacent to the outskirts of town and spent much of his free time exploring the fields, creeks and forests within bicycle range.",
                "His love of the outdoors led him to pursue a career in Forestry where he spent time working for the Lake Wenatchee Ranger Station and the Siuslaw National Forest. In 1989 Nick accepted the job of Timber Management Officer for the Wallowa Valley Ranger District.",
                "In 2000 he became the Fire Management Officer for the Wallowa Fire Zone until his retirement in 2007. Nick and his wife Angie live in Joseph and are deeply invested in preserving the livability of this special place."
            ]
        },
        {
            name: 'David Mildrexler',
            title: 'Board Member',
            image: davidImg,
            bio: [
                "David grew up exploring farms, forests and wetlands in what used to be a rural area near Portland, Oregon, where his family has deep roots thanks to his Grandfather who came to Oregon and got started working in the woods.",
                "After making a go at a professional tennis career, David found a new passion in the natural sciences and conservation. Field work in tropical forests led to a Masters Degree in Forest Science from the University of Montana.",
                "Finding a small cabin in the woods in Wallowa County in 2005 was a dream come true. He now holds a PhD in Forest Ecosystems and Society from OSU's College of Forestry. David and his wife Andrea were thrilled to return to Wallowa County in 2017 with their two children. He now works as Systems Ecologist for Wallowology."
            ]
        }
    ];
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
    <h1 class="mb-8 sm:mb-12 font-serif text-3xl sm:text-4xl text-slate-800 dark:text-slate-100">Board of Directors</h1>
    <div class="space-y-12 sm:space-y-16">
        {#each boardMembers as member, i}
            <div class="grid gap-6 sm:gap-8 md:grid-cols-[280px_1fr]">
                <div class="max-w-sm mx-auto md:max-w-none">
                    <enhanced:img
                        src={member.image}
                        alt={member.name}
                        class="aspect-[4/5] w-full rounded-lg bg-slate-100 object-cover object-top dark:bg-slate-800"
                    />
                    <div class="mt-4 text-center md:text-left">
                        <h2 class="text-lg font-medium text-slate-900 dark:text-slate-100">{member.name}</h2>
                        <p class="text-slate-600 dark:text-slate-400">{member.title}</p>
                    </div>
                </div>
                <div class="space-y-4 text-slate-700 dark:text-slate-300">
                    {#each member.bio as paragraph}
                        <p class="leading-relaxed">{paragraph}</p>
                    {/each}
                </div>
            </div>
            {#if i !== boardMembers.length - 1}
                <hr class="opacity-25 my-12 sm:my-16 dark:border-slate-700"/>
            {/if}
        {/each}
    </div>
</div>