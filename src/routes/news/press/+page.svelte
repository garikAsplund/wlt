<!-- Press.svelte -->
<script lang="ts">
	import { Newspaper, Calendar, ExternalLink } from 'lucide-svelte';
	// Type definition for a press item
	interface PressItem {
		date: string;
		title: string;
		outlet: string;
		url: string;
		blurb: string;
	}
	// Example press items - replace with your actual data
	const pressItems: PressItem[] = [
		{
			date: '2019-12-27',
			title: 'Saving a Treasured Heritage',
			outlet: 'The Other Oregon',
			url: 'https://www.theotheroregon.com/the_land/saving-a-treasured-heritage/article_633f07fe-28c5-11ea-afa6-93a555a0648d.html',
			blurb:
				'Wallowa Lake curves gently from the imposing cragginess of Mt. Bonneville to the rolling grasslands of the Wallowa Valley. Cushioning the transition from mountains to prairies are the high, steep, and undeveloped slopes of the Wallowa Lake moraines. Thanks to the dedicated efforts of Wallowa County residents and non-profits, a big part of this iconic landscape of the past will be preserved forever into the future.'
		},
		{
			date: '2020-01-22',
			title: 'Land Purchase Protects Wallowa Lake’s East Moraine From Development',
			outlet: 'Oregon Public Broadcasting',
			url: 'https://www.opb.org/news/article/oregon-wallowa-lake-east-moraine-land-purchase-protection/',
			blurb:
				'A large portion of the moraine that frames Eastern Oregon’s iconic Wallowa Lake has been purchased and protected from development. A public-private partnership that includes Wallowa County, two nonprofit organizations and the Oregon Parks and Recreation Department spent more than a decade arranging the purchase.'
		},
		{
			date: '2020-01-22',
			title: 'Public access to views above Wallowa Lake are one step closer to reality',
			outlet: 'The Oregonian',
			url: 'https://www.oregonlive.com/travel/2020/01/public-access-to-views-above-wallowa-lake-are-one-step-closer-to-reality.html',
			blurb:
				'Beautiful views above Wallowa Lake will soon be accessible to the public, after a yearlong fundraising effort has come to a close. The Wallowa Lake Moraines Partnership announced Tuesday that it has officially purchased nearly 1,800 acres of land on the eastern rim above the iconic northeast Oregon lake, with plans to manage the land for public recreation in the near future.'
		},
		{
			date: '2019-06-19',
			title: 'Wallowa Moraine Campaign',
			outlet: 'OPB Think Out Loud',
			url: 'https://www.spreaker.com/episode/wallowa-moraine-campaign--18321575',
			blurb:
				'The East Moraine of the Wallowa Lake Moraines is a textbook example of a glacial moraine. The glacially formed mass of rocks and sediment is largely untouched and attracts visitors from around the world. Now, it is under threat of being made residential and closed to visitors. The goal of the Campaign for the East Moraine is to raise enough funding so that Wallowa County can buy the property and secure it as a community forest in order to keep the land undeveloped and allow access to the public.'
		},
		{
			date: '2021-09-22',
			title: 'A Blessing on Both Sides',
			outlet: 'Saving Land Magazine, Land Trust Alliance',
			url: '/static/PDFs/BlessingOnBothSides.pdf',
			blurb: 'The transformative power of partnerships between land trusts and tribal members.'
		},
		{
			date: '2019-10-23',
			title: 'Perry family saves nearly 500 acres of East Moraine for posterity',
			outlet: 'Wallowa County Chieftain',
			url: 'https://www.wallowa.com/news/perry-family-saves-nearly-acres-of-east-moraine-for-posterity/article_39446704-f423-11e9-a7a7-d307f923caf8.html',
			blurb:
				'Wallowa Lake’s iconic East Moraine is well on its way to being conserved in its entirety. Another 482 acres was recently added to the growing list of properties under permanent protection. Working with Wallowa Land Trust, landowners Lou and Deyette Perry voluntarily established a conservation easement on their working farm that extinguishes development of one homesite, ensures that the 482 acres will never be subdivided, maintains working grazing and agricultural lands and conserves habitat forever.'
		},
		{
			date: '2019-10-23',
			title: 'Oregon Parks and Rec pledges $1M to East Moraine Conservation',
			outlet: 'Wallowa County Chieftain',
			url: 'https://www.wallowa.com/news/oregon-parks-and-rec-pledges-m-to-east-moraine-conservation/article_c985b90e-f42c-11e9-8f9a-7f07329d9b18.html',
			blurb:
				'For the past 19,000 years or so, Wallowa Lake’s stately East Moraine has towered above Wallowa Lake, a monumental and unspoiled legacy to the power of glacial ice and the persistence of nature. Revered by local residents and visitors alike, this privately owned landscape has remained miraculously undeveloped. Now, thanks to a $1 million dollar commitment by Oregon State Parks and Recreation Department (ORPD), the effort to place the 1800-acre Yanke property, largest tract of land on the East Moraine, into ownership of Wallowa County has taken a giant step toward completion.'
		},
		{
			date: '2019-09-18',
			title: 'Nez Perce guide Wallowa Land Trust moraine hike',
			outlet: 'Wallowa County Chieftain',
			url: 'https://www.wallowa.com/news/nez-perce-guide-wallowa-land-trust-moraine-hike/article_0d7ad4b4-d808-11e9-b4a0-6bbbae40c8a3.html',
			blurb:
				'About 25 stalwart hikers accompanied three Nez Perce tribal elders for a hike on Wallowa Lake’s east moraine on Saturday morning, September 15. The purpose was to explore the moraine’s natural features, and better understand concepts and ethics of resource management from the perspective of Joseph’s Wallowa Band, the Nez Perce people who lived here. The elders were from Nespelem, Washington, and are descendants of Chief Joseph’s band, the Wallowa NiMiiPuu. An evening presentation at Fishtrap’s Coffin House focused on the history of Joseph’s band after the War of 1877.'
		},
		{
			date: '2017-08-29',
			title: 'Farm, trust close easement',
			outlet: 'La Grande Observer',
			url: 'https://www.lagrandeobserver.com/archive/farm-trust-close-easement/article_999e49e3-390a-5be8-b14f-ca969d14d037.html',
			blurb:
				'Woody Wolfe, of Wallowa, is well known for saying, “I’m more of a businessman than a farmer,” but keeping working lands working takes business sense and agricultural know-how. For Wolfe, that means constantly thinking outside the box.'
		},
		{
			date: '2017-06-18',
			title: 'Family donates conservation easement to Wallowa trust',
			outlet: 'La Grande Observer',
			url: 'https://www.lagrandeobserver.com/archive/family-donates-conservation-easement-to-wallowa-trust/article_4e402b52-a618-5fa9-8e6a-38e0da930d30.html',
			blurb:
				'More than 50 acres of Wallowa Lake’s East Moraine was protected from development this spring, leaving more open space for wildlife and threatened plants. Kathleen Ackley, Wallowa Land Trust executive director, said the Ham Family LLC donated a conservation easement to the Trust, extinguishing development and subdivision rights on the majority of the 70-acre property.'
		},
		{
			date: '2020-06-18',
			title: 'East Moraine Management Plan Q&A',
			outlet: 'Wallowa Land Trust',
			url: '/news/press/releases/moraineQA',
			blurb:
				"Learn more about how Wallowa County and partners are developing a comprehensive plan to manage the East Moraine's working landscape, balancing forestry, grazing, cultural resources, and public access while protecting this iconic natural treasure."
		},
		{
			date: '2020-06-03',
			title: 'We Have A lot of Work to Do: Land Trusts and Inclusive Spaces',
			outlet: 'Wallowa Land Trust',
			url: '/news/press/releases/inclusivity',
			blurb:
				"Read Wallowa Land Trust's statement on racial equity in conservation, acknowledging our responsibility to create inclusive spaces and recognizing the Nez Perce people's deep connection to these lands. Includes resources for further learning about environmental justice."
		},
		{
			date: '2016-07-12',
			title: 'Land Trust outing shows importance of foods to Native culture',
			outlet: 'Wallowa County Chieftain',
			url: 'http://www.wallowa.com/local_news/20160712/land-trust-outing-shows-importance-of-foods-to-native-culture',
			blurb:
				'Several dozen people ignored rain-threatening skies Saturday morning to journey to the Homeland Project in Wallowa for an Into the Wallowas outing focused on Native American foods. The outing, part of Wallowa Land Trust’s summer series, focused on common plants in the area that Native Americans utilized for sustenance and how their culture integrated foods and resource care into the daily fabric of their lives.'
		},
		{
			date: '2016-02-22',
			title: 'Moraine preservation grant high on national list',
			outlet: 'Wallowa County Chieftain',
			url: 'http://www.wallowa.com/local_news/20160222/moraine-preservation-grant-high-on-national-list',
			blurb:
				'Wallowa Land Trust is a step closer to achieving its goal of East Moraine of Wallowa Lake preservation with the possibility of a $900,000 Forest Legacy Grant through the Land and Water Conservation Fund. The WLT application ranked third nationwide on the U.S. Forest Service list of 34 priority LWCF projects submitted in the president’s 2017 budget released to Congress on Feb. 9. It is the only Oregon project that received funding.'
		},
		{
			date: '2015-12-16',
			title: 'Congress gives Land and Water Conservation Fund three more years',
			outlet: 'East Oregonian',
			url: 'http://www.eastoregonian.com/eo/local-news/20151216/congress-gives-land-and-water-conservation-fund-three-more-years',
			blurb:
				'A local land trust is in line to receive $3 million to protect the East Moraine of Wallowa Lake after Congress agreed to renew the Land and Water Conservation Fund for three more years.'
		},
		{
			date: '2015-12-08',
			title: 'Washington family donates lake property to local land trust',
			outlet: 'Wallowa County Chieftain',
			url: 'http://www.wallowa.com/local_news/20151208/washington-family-donates-lake-property-to-local-land-trust',
			blurb:
				'Wallowa Land Trust just took another step in protecting the moraines of Wallowa Lake from development with a recent donation of 9 acres of prime lakefront property that includes 1,500 feet of shoreline. Brothers Fred, Frank and Steve Kimball of Washington donated the property, and the land trust took possession of the land Nov. 23. The Kimball brothers inherited the property from their parents and didn’t want to see the land divided up or developed.'
		},
		{
			date: '2023-01-06',
			title: 'Forest Health project scheduled for East Moraine Community Forest this winter',
			outlet: 'Wallowa Land Trust',
			url: '/news/press/releases/thinning',
			blurb:
				'To protect forest health on the East Moraine Community Forest a thinning project is planned to reduce an outbreak of bark beetles near the Turner Lane trailhead.'
		},
		{
			date: '2023-02-08',
			title: 'Final Hurdle Cleared to Permanently Protect East Moraine Community Forest.',
			outlet: 'Wallowa Land Trust',
			url: '/news/press/releases/easement',
			blurb:
				'After more than a decade of work, the final step to ban all future commercial and residential development on the East Moraine Community Forest was put to rest in a matter of ten minutes. On Thursday, January 26th 2023, Wallowa County Commissioners John Hillock, Todd Nash and Susan Roberts joined Wallowa Land Trust board chair Benjamin Curry at the Wallowa Title Company to sign the East Moraine Community Forest conservation easement.'
		},
		{
			date: '2019-02-05',
			title: 'Iconic East Moraine on its way to becoming community-owned forest',
			outlet: 'Wallowa Land Trust',
			url: '/news/press/releases/moraine',
			blurb:
				'Wallowa Lake Moraines Partnership announces agreement to purchase 1,800 acres of East Moraine from Yanke Family Trust, transforming it into a community-owned forest that will preserve the iconic landscape while supporting local economy through sustainable management.'
		},
		{
			date: '2019-09-25',
			title: 'Perry Farm Conservation Easement',
			outlet: 'Wallowa Land Trust',
			url: '/news/press/releases/perry',
			blurb:
				"Wallowa Land Trust secures conservation easement on 482-acre Perry Farm on Wallowa Lake's East Moraine, protecting working farmland and wildlife habitat while maintaining the possibility for future public trail access."
		},
		{
			date: '2020-01-21',
			title: "1,791 acres of Wallowa Lake's East Moraine acquired for Wallowa County",
			outlet: 'Wallowa Land Trust',
			url: '/news/press/releases/moraine2',
			blurb:
				'Historic conservation victory achieved as Wallowa County acquires 1,791 acres of the East Moraine, permanently protecting this iconic landscape from development while ensuring sustainable management for wildlife habitat, cultural resources, recreation, and working lands.'
		},
		{
			date: '2023-04-27',
			title: 'West Moraine Property in Wallowa County Returned to Nez Perce Tribe',
			outlet: 'Big Country News',
			url: 'https://www.bigcountrynewsconnection.com/idaho/west-moraine-property-in-wallowa-county-returned-to-nez-perce-tribe/article_32dedc76-e530-11ed-99c3-6ff58f5668da.html',
			blurb:
				'Thirty (30) acres of land on the West Moraine property located on the west side of Wallowa Lake has been returned to the Nez Perce Tribe. The property, which was acquired by local conservation organization Wallowa Land Trust in 2014 when it was up for auction by the County, has native grasslands and forest, making it a magnet for wildlife increasingly impacted by wildlife. \nAs of March 24, 2023, the property is now back in tribal ownership.'
		},
		{
			date: '2008-10-06',
			title: 'Protecting, preserving moraines focus of forum',
			outlet: 'La Grande Observer',
			url: 'https://www.lagrandeobserver.com/archive/protecting-preserving-moraines-focus-of-forum/article_e55b53a6-8f6d-512e-8d6e-ace0f3c5aabb.html',
			blurb:
				"Everyone who visits Wallowa Lake, the jewel of Northeast Oregon, knows what a beautiful sight it is, sparkling in the sun of late summer as it rests between the protecting arms of the glacial lateral moraines on its east and west sides and the terminal moraine at its foot on the northern end. What most people don't realize is that this iconic landscape curving around the lake is almost all privately owned."
		},
		{
			date: '2023-05-17',
			title: '30 Acres of Land Transferred Back to the Nez Perce in Wallowa County',
			outlet: 'Elkhorn Media Group',
			url: 'https://elkhornmediagroup.com/30-acres-of-land-transferred-back-to-the-nez-perce-in-wallowa-county/',
			blurb:
				'Wallowa County is part of a long and storied history of the Nez Perce Tribe. Though much of the land today is organized like any other county in the Pacific Northwest, with a smattering of private and public owners, this isn’t the case for all of it. On March 24, 2023, The Wallowa Land Trust, a local nonprofit and conservation organization, signed 30 acres of land from the West Moraine area of Wallowa Lake back to the Nez Perce.'
		},
		{
			date: '2011-03-18',
			title: 'New conservation easement will protect historic Wallowa County ranch property',
			outlet: 'The Oregonian',
			url: 'https://www.oregonlive.com/pacific-northwest-news/2011/03/new_conservation_pact_will_protect_historic_wallowa_county_ranch_property.html',
			blurb:
				"A homespun nonprofit in northeastern Oregon's picturesque Wallowa County is trying a new technique for keeping developers from buying up ranches and farms for homes, subdivisions and condominiums. The Wallowa Land Trust paid $200,000 for a 'conservation easement' on 197 acres of the historic Wolfe Ranch between Lostine and Wallowa. The goal: to keep the acreage as undeveloped and hauntingly beautiful as it's always been."
		},
		{
			date: '2011-02-16',
			title: "First conservation easement signed",
			outlet: 'Wallowa County Chieftain',
			url: 'https://www.wallowa.com/news/first-conservation-easement-signed/article_0dbc1887-9174-5487-9fdd-01cafc120811.html',
			blurb:
"The first working lands conservation easement in Wallowa County has been negotiated between Wallowa Land Trust and Wolfe Century Farm owners Woody and Megan Wolfe. The money we can generate renting the land for grazing isnt enough to cover the debt-load on the property, Woody Wolfe said. He sees the conservation easement as a way to get value out of his marshland and riverfront property without subdividing it and turning the land over to houses and concrete."		}
	];

	function organizePressItems(items: PressItem[]) {
		// Group items by year
		const itemsByYear = items.reduce(
			(acc, item) => {
				const year = new Date(item.date + 'T00:00:00Z').getFullYear();
				if (!acc[year]) {
					acc[year] = [];
				}
				acc[year].push(item);
				return acc;
			},
			{} as Record<number, PressItem[]>
		);

		// Sort items within each year by date (most recent first)
		Object.keys(itemsByYear).forEach((year) => {
			itemsByYear[Number(year)].sort(
				(a, b) =>
					new Date(b.date + 'T00:00:00Z').getTime() - new Date(a.date + 'T00:00:00Z').getTime()
			);
		});

		return itemsByYear;
	}

	// Sort years in descending order
	const grouped = organizePressItems(pressItems);
	const years = Object.keys(grouped)
		.map(Number)
		.sort((a, b) => b - a);
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
	<div class="space-y-6 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800/50">
		<p class="leading-relaxed text-slate-700 dark:text-slate-300">
			Stay updated with the latest news and press coverage about our conservation efforts and
			community initiatives in Wallowa County.
		</p>

		{#each years as year}
			<div class="border-t border-slate-200 pt-6 dark:border-slate-700">
				<h2 class="mb-4 font-serif text-2xl text-slate-800 dark:text-slate-100">
					{year} Press Coverage
				</h2>

				<div class="space-y-4">
					{#each grouped[year] as item}
						<div class="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
							<div
								class="mb-2 flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400"
							>
								<Calendar class="h-4 w-4" />
								<span>{new Date(item.date).toLocaleDateString()}</span>
								<span>•</span>
								<Newspaper class="h-4 w-4" />
								<span>{item.outlet}</span>
							</div>

							<h3 class="mb-2 text-lg font-medium text-slate-800 dark:text-slate-100">
								{item.title}
							</h3>

							<p class="mb-3 text-slate-700 dark:text-slate-300">
								{item.blurb}
							</p>

							<a
								href={item.url}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center space-x-2 text-slate-600 transition
                                       duration-300 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
							>
								<span>Read Full Article</span>
								<ExternalLink class="h-4 w-4" />
							</a>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
