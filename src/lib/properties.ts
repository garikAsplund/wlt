const imageModules = import.meta.glob(
    '$lib/images/properties/*.{png,jpg}',
    {
        eager: true,
        query: {
            enhanced: true
        }
    }
);

console.log({ imageModules });

export interface Property {
	slug: string;
	name: string;
	description: string;
	image: string | unknown;
	acres?: number;
	conservationYear?: number;
	fullDescription?: string[];
	ecosystemHighlights?: string[];
	conservationChallenges?: string[];
}

export const properties: Property[] = [
	{
		slug: 'east-moraine-community-forest',
		name: 'East Moraine Community Forest',
		description: 'Community-owned forest on Wallowa Lake shore',
        image: imageModules['/src/lib/images/properties/east-moraine.jpg'].default,
		acres: 1791,
		conservationYear: 2020,
		fullDescription: [
			`The 1,791-acre East Moraine property was acquired in January 2020 for public ownership under Wallowa County. The Wallowa Lakes Moraines Partnership made up of Wallowa Land Trust, Wallowa County, Wallowa Resources, and Oregon Parks and Recreation Department worked for over a decade to complete this community conservation project.`
		],
		ecosystemHighlights: [
			'Preserves native plant species',
			'Protects wildlife habitat',
			'Provides non-motorized recreational access'
		],
		conservationChallenges: [
			'Balancing public access with ecosystem preservation',
			'Managing sustainable forestry and grazing',
			'Protecting cultural resources'
		]
	},
	{
		slug: 'ham-conservation-easement',
		name: 'Ham Conservation Easement',
		description: 'Preserving 52 acres of Wallowa Lake East Moraine',
		image: imageModules['/src/lib/images/properties/ham-easement.jpg'].default,
		acres: 52,
		conservationYear: undefined,
		fullDescription: [
			`Standing on the crest of Wallowa Lake’s East Moraine, it’s remarkable to think that this geologic wonder has endured since the last ice age, some 300,000 years ago. Few places in Oregon provide such an extraordinary vista, where one can look back in time and imagine the past while seeing the present. Now, thanks to Bruce and Mary Lou Ham and their family, 52 acres of this landscape are forever protected so that a future traveler might experience the same awe and wonder.`,

			`The age and relatively pristine and exposed nature of the moraines surrounding Wallowa Lake make them an incredible resource, providing rare insight into the geologic record. It is in reality not one moraine (from the 18th century French term morena meaning “mound of earth”) but multiple moraines created by glaciers advancing and retreating over several thousands of years. The oldest moraine is approximately 300,000 years old and the youngest is 17,000 years old.`,

			`Put your hand on one of the enormous, ancient boulders dotting the East Moraine and you are touching a stone that was deposited by the most recent glacier. These ancient guardians, called erratics, have stood watch over Wallowa Lake since long before the pyramids were built or the Roman Empire flourished. Once stewarded by the Nez Perce, today these prehistoric boulders are visited by people from all over the world.`,

			`“It is our wish that this land remains open and undeveloped forever. We hope that in 1,000 years your descendants and ours will enjoy the views we cherish now. It is also our hope that the mule deer of the Wallowa Mountains will retain a small but vital winter range for their long term survival and benefit, and that others will come to understand these benefits as well,” says landowner Bruce Ham.`,

			`Making their vision a reality, the Ham family donated a conservation easement on 52 acres of their East Moraine property. They have agreed to permanently extinguish any future development and subdivision rights and to manage the land in a manner that maintains and enhances the native grassland. The conservation easement extends from Wallowa Lake to the crest of the East Moraine, providing panoramic views of the Wallowa Mountains, Wallowa Valley, the Zumwalt Prairie and out to Hells Canyon. It is a favorite wintering spot for mule deer and glows with blooming arrowleaf balsamroot in the spring. It is now the Land Trust’s perpetual responsibility to ensure the terms of this conservation easement are met. The Hams will continue to own and manage the property, and pay property taxes as they always have.`,

			`“We are incredibly lucky that the East Moraine has been cared for by people who understand the value of this landscape – culturally, ecologically and economically. Wallowa Lake, the moraines and the mountains that surround them are central to our identity as a community and I applaud the Hams and others like them who are making a significant gift in protecting this landscape,” says Kathleen Ackley, Wallowa Land Trust’s executive director.`,

			`Wallowa Land Trust will continue to work with the Ham family and other East Moraine landowners on a publicly accessible trail along the crest of the moraine. This property is part of Wallowa Land Trust’s larger Wallowa Lake Moraines protection effort. The Wallowa Lake Moraines have long been a conservation priority for county residents, public officials and visitors, not to mention the Land Trust and the Wallowa Lake Moraines Partnership. We will continue our efforts with numerous other landowners on the East Moraine to create a seamlessly protected and publicly accessible landscape.`
		]
	},
	{
		slug: 'kimball-preserve',
		name: 'Kimball Preserve',
		description: 'Shoreline property donated by the Kimball family',
		image: imageModules['/src/lib/images/properties/kimball-preserve.jpg'].default,
		acres: 9,
		conservationYear: 2015,
		fullDescription: [
			'As a memorial to their mother, three brothers have donated a piece of family history to Wallowa Land Trust. Thanks to the generosity of Fred, Steve and Frank Kimball, a stretch of Wallowa Lake shoreline will remain in its natural state in perpetuity.',

			"Fred Kimball says that in the early 1950s his father received the lakeside property as payment for legal fees. The property reached from the Wallowa Lake Marina at the south end of the lake to Trouthaven, a guesthouse on the lake's west shore. According to Fred, 'He took 15 acres and sold the remaining to Clyde Harris of Harris Pine Mills.'",

			"For more than 60 years the Walla Walla family has enjoyed their lakeside get-away, but Fred says the family's relationship to Wallowa Lake dates back to early in the twentieth century. 'My grandfather's parents and grandparents used to camp all summer at the head of the lake to get away from the heat - before the dam was built.' In 1956 the brothers' father built a cabin on the property as a 25th wedding anniversary present to his wife. For a while the family had a dock and a boat at the cabin, but unpredictable windstorms prompted its removal.",

			"In 2013 the three Kimball brothers began working with Wallowa Land Trust to keep the cabin along with four acres, and donate the remaining nine acres to the Trust. Fred says the gift fits with the family's sensibilities. 'We love the privacy and beauty of the Wallowas and we wanted to give something back to the county in memory of our mother. We are really pleased to keep that native Wallowa look and know there will be no development.'",

			"According to Fred, it's not just the beauty of Wallowa County that has the family so invested. 'We feel very strongly about preserving the appearance; but we like the people over there – they are real individuals and believe in freedom. I've taken the Chieftain for a jillion years and look forward to getting it.'",

			'The property has 1,500 feet of shoreline lined with ponderosa pines. Current zoning would allow at least four homes along the property, making it highly desirable for development. However, now that Wallowa Land Trust owns the land, no development will occur and it will be managed to maintain and enhance its natural features and habitat.',

			"The Kimball brothers were clear from the beginning that they didn't want to see houses on the shoreline and wanted to keep the forest and springs intact. I'm so proud we could help them fulfill their dream,' says Wallowa Land Trust's Conservation Director Julia Lakes.",

			"Protection of the Kimball property is in line with one of the Land Trust's key conservation goals: to conserve the Wallowa Lake Moraines. In addition to the Kimball property, the Land Trust owns a 30-acre preserve on the West Moraine and holds a conservation easement on 40 acres on the East Moraine."
		]
	},
	{
		slug: 'lola-hasslacher-conservation-easement',
		name: 'Lola-Hasslacher Conservation Easement',
		description: '40 acres of woodland on East Moraine',
		image: imageModules['/src/lib/images/properties/lola-hasslacher.png'].default,
		acres: 40,
		conservationYear: 2014,
		fullDescription: [
			'Named in memory of a well-loved dog (Lola), the Lola-Hasslacher Conservation Easement was protected in February of 2014. Landowners Jacob Hasslacher and Chris Antemann completed a project with Wallowa Land Trust that conserves 40 acres of mature ponderosa pine and mixed conifer woodlands on the back (east) side of the east moraine of Wallowa Lake. This land will now remain forever undeveloped and protected for wildlife habitat and sustainable timber harvesting and grazing.',
			"'From the moment that I first saw this place, I knew it was something special that I wanted to see safeguarded,' says Jacob. Together with his wife, Jacob runs a non-profit ceramic artist-in-residence program, the LH Project. The program draws qualified and well-respected artists from around the world.",
			"Jacob says, 'The beauty of the property, particularly the open forest now protected, is part of what attracts artists to the program. Nowhere else is there a place where ceramic artists can go to learn and practice their craft in such a beautiful, rural setting. Its intimacy and remote, unspoiled backdrop gives the LH Project a unique voice in the world of ceramic residency programs.'",
			"According to Jacob and Chris, the artists take with them an experience that they will never forget, primarily because of the opportunity to have made their work out here on the secluded slope of the east moraine in Wallowa County. 'The surrounding National Forest, Eagle Cap Wilderness Area and nearby Wallowa Lake also inspire and motivate artists to take their work in new, creative directions.'",
			"This project is part of a much larger effort that Wallowa Land Trust is leading with the Wallowa Lake Moraines Partnership to conserve the east moraine of Wallowa Lake. We established the Partnership in 2011 together with Wallowa Resources, Wallowa County and Oregon Parks and Recreation Department. The Partnership's goals include: maintaining sustainable working landscapes of farms, forests and rangeland; providing public access respectful of the landscape and its scenic beauty; and, protecting important wildlife habitat and the ecosystem health of the moraines.",
			"Jacob and Chris's property is the first stepping stone of this larger vision of a protected east moraine. Our heartfelt thanks and gratitude go out to this far-sighted couple who have made a lasting gift to the community and left an unparalleled legacy for many generations to come. This corner of northeast Oregon is a spectacular gem, with the moraines of Wallowa Lake perhaps the most spectacular of them all."
		]
	},
	{
		slug: 'perry-farm-conservation-easement',
		name: 'Perry Farm Conservation Easement',
		description: '482-acre working farm conservation',
		image: imageModules['/src/lib/images/properties/perry-farm.png'].default,
		acres: 482,
		fullDescription: [
			'Working with Wallowa Land Trust, landowners Lou and Deyette Perry voluntarily established a 482-acre conservation easement on their working farm that extinguishes development of one homesite, maintains working lands, and conserves habitat forever. This project is in addition to a growing list of properties under permenant protection on the iconic East Moraine.',
			"'This easement, which still allows me to manage the property and maintain it as a working landscape, was a perfect opportunity to both protect the moraine and ensure that it didn't just get locked up as a park or preserve,' Lou Perry said.",
			"The 482-acre Perry property encompasses portions of the eastern lateral moraines over to the top of the East Moraine's crest. The Perry's have also left open the opportunity to grant a trail easement and public access, where a section of the informal East Moraine trail bisects their farm.  The conserved farm is directly adjacent to the 176-acre Quint and 52-acre Ham conservation easements, which Wallowa Land Trust completed in 2019 and 2017, respectively.",
			"'The Perry Farm is a unique and important piece of property, and its conservation is a great achievement,' said Eric Greenwell, Wallowa Land Trust's Conservation Program Manager. 'Not only does it have fertile soils for farming and provide habitat for grassland birds and mule deer in the winter, when times are hard, but it is a key piece of a community vision to conserve Wallowa Lake's East Moraine and the heart of Northeast Oregon. With this project complete, and the potential purchase of another 1,800 acres of the East Moraine in 2020, we are all working together to establish a corridor of open space and habitat from the Wallowa Mountains to the valley floor.'",
			"Lou has a long history on the land of the new easement. He grew up out on upper Prairie Creek with the Moraines as his backdrop. Perry said, 'When I was still in high school, I leased much of the property now protected for my sheep operation.' At the age of 19 he bought the first parcel and has added to it ever since. He moved to Tennessee for school, where he met his wife Deyette, before moving back to the county. Today, Lou leases out the land to grow crops including grain and wheat.",
			'Lou and Deyette Perry at the closing',
			"Perry has been working with the Land Trust for a number of years to establish a conservation easement.  'It [the easement] maintains both the scenic values we all cherish, and keeps it in productive use,' Perry explained,' I am happy to leave this as a legacy to the County and future generations.'",
			"While this project is another victory for the East Moraine, more work remains to be done to secure this iconic landform.  The Perry Farm is part of a much larger effort by the Wallowa Lake Moraines Partnership to permanently protect the entire East Moraine.  Fundraising efforts continue to secure the neighboring 1,791-acre Ronald C. Yanke Family Trust Property.  Its successful acquisition and conveyance to Wallowa County would preserve over 80% of Wallowa Lake's East Moraine and create a continuous corridor from the Wallowa-Whitman National Forest and Eagle Cap Wilderness to the Wallowa Valley floor.  Of the $6.5 million needed to purchase the Yanke Family Trust's Property, the Partnership has raised $5.7 million. More information on this effort can be found at www.morainecampaign.org."
		]
	},
	{
		slug: 'quint-conservation-easement',
		name: 'Quint Conservation Easement',
		description: '175-acre East Moraine property',
		image: imageModules['/src/lib/images/properties/quint.png'].default,
		acres: 175,
		fullDescription: [
			"Another step to conserve Wallowa Lake's East Moraine has been taken. Working with Wallowa Land Trust, landowner Anna Mae Quint has voluntarily extinguished all future development and sub-division rights on her 175-acre East Moraine property.",
			"'The moraine is very important – there's nothing like it on earth,' Quint said.",
			"The property encompasses two lateral moraines before rising to the crest of the East Moraine at its westernmost boundary, where it abuts the Ham Family Conservation Easement, a 52-acre easement completed by the Ham family and Wallowa Land Trust in 2017. The Ham and Quint Conservation Easements are part of a larger effort to conserve nearly 2,500 acres across Wallowa Lake's East and Terminal Moraines.",
			"Considered the southern tip of Zumwalt Prairie, Quint's property is comprised of 53 acres of cropland and 122 acres of bunchgrass, including habitat for the ESA-listed herbaceous wildflower, Spalding's catchfly, as well as critical winter range for mule deer and habitat for fox, coyote and a variety of grassland birds and raptors, among other species. Quint also reserved the right to graze cattle on the property as well as farm, citing working lands as a big part of her Wallowa County heritage.",
			'Quint, 85, of Redmond, grew up on the southern edge of Joseph in a house her parents bought when she was in elementary school. Her father grew up on a ranch outside of Joseph on Walker Lane.',
			"'My grandmother and grandfather came into the county in a covered wagon from Gilliam County and homesteaded on Sheep Creek,' said Quint.  Marriage and children quickly followed Quint's attendance at Oregon State University, and she and her husband, an engineer, settled in West Linn.  Despite the long drive, the family spent most of their free time in Wallowa County. After Quint's mother's home was sold the family continued to gather in Wallowa County. 'My husband and I would take the kids out and walk those hills,' she said.",
			"Helping conserve the moraine was important to Quint long before Wallowa Land Trust was formed. She said a proposal several decades ago to build houses on the north end of the moraine near the county boat launch prompted her to write a letter in opposition. More than 10 years ago, Quint and Wallowa Land Trust began discussing the idea of putting the property into a conservation easement.  A conservation easement is a voluntary legal agreement between a landowner and a land trust which protects a property's agricultural viability, natural habitat, rural heritage, and/or scenic open space in perpetuity.",
			"The conservation easement that now encompasses the Quint property permanently extinguishes all development and subdivision rights while reserving recreation, hunting, farming, and grazing rights - a testament to Quint's commitment to protecting this iconic landscape for present and future generations."
		]
	},
	{
		slug: 'slinker-conservation-easement',
		name: 'Slinker Conservation Easement',
		description: '128 acres near Joseph, Oregon',
		image: imageModules['/src/lib/images/properties/slinker-easement.jpg'].default,
		acres: 128,
		fullDescription: [
			'A favorite resting and foraging spot for native wildlife is now forever protected from development, thanks to the foresight and generosity of local landowners Pam and Randy Slinker.  The Slinkers worked with Wallowa Land Trust over the past year to craft an agreement that results in the permanent protection of 128 acres adjacent to Ferguson Ski Ridge, near Joseph, Oregon.',
			"Protection of this forested property means refuge for an astonishing array of wildlife, who's habitat is increasingly fragmented in this rapidly developing area.   We feel honored to be able to work on projects like this with thoughtful landowners like the Slinkers who are thinking many generations ahead.  Thank you for this incredible legacy Pam and Randy!   And thank you to our community for supporting this work.",
			"'It's a wonderful piece of property and we we're thrilled that it will remain that way,' said Pam Slinker."
		]
	},
	{
		slug: 'west-moraine-preserve',
		name: 'West Moraine Preserve',
		description: '30 acres returned to Nez Perce Tribe',
		image: imageModules['/src/lib/images/properties/west-moraine.jpg'].default,
		acres: 30,
		fullDescription: [
			'Wallowa Land Trust has returned 30 acres to the Nez Perce Tribe.  Located on the west side of Wallowa Lake, the property has native grasslands and forest, making it a magnet for wildlife increasingly impacted by development.',
			'Wallowa Land Trust, acquired the property in 2014 when it was up for auction by the County.  As of March 24, 2023, the property is now back in tribal ownership.',
			"'We were able to purchase this property thanks to funding from the Oregon Community Foundation,' says Kathleen Ackley, Wallowa Land Trust's executive director.  'Since we have owned it, we have managed the property for open space and wildlife habitat.'",
			"According to Ackley, the Land Trust began talking about transferring ownership within the past two years.  'When we first acquired the property, we intended to retain ownership indefinitely,' she says.  'It is a beautiful area and is part of a critical wildlife corridor.  Our job was to ensure it remained forever protected.'  However, as the Land Trust worked on other conservation projects with the Nez Perce Tribe, the idea of returning the land started to take root.",
			"'The more we learned about tribal history and the more we came to understand how indigenous people have shaped this landscape, the more it seemed like a no-brainer to return the land to tribal ownership,' says Ackley.",
			'Most of Northeast Oregon, and all of what is now Wallowa County, whose very name is a Nez Perce word, is part of the homeland of the Nez Perce people.  For at least 16,000 years, the Nez Perce stewarded this landscape, and what is now Wallowa County was part of the 1855 Nez Perce Reservation and remains treaty-reserved territory.',
			"'Wallowa Lake is a heart within Nez Perce territory, a heart of our 1855 Reservation,' said Samuel Penney, Chairman of the Nez Perce Tribal Executive Committee. 'Every step taken in protecting it and the lands surrounding it is an important step into our future.'",
			'Recent years have seen more lands returned to tribal ownership.  The Tribe was gifted two separate properties from the Methodist Church and they also have purchased several key parcels in Wallowa County.  This particular parcel on the West Moraine will remain much as it always has been, but now under the stewardship of the Nez Perce Tribe.  Wallowa Land Trust will continue to pay property taxes, monitor the property and help with stewardship as needed.',
			"'We want to recognize and thank the Wallowa Land Trust for its vision and integrity,' said Penney. 'It has become a trusted partner for the Nez Perce Tribe as we work to advance the Tribe's vision and priorities in Northeast Oregon.'"
		]
	},
	{
		slug: 'wiggins-graybeal-preserve',
		name: 'Wiggins-Graybeal Preserve',
		description: '34 acres at the south end of Wallowa Lake',
		image: imageModules['/src/lib/images/properties/wiggins.jpg'].default,
		acres: 34,
		fullDescription: [
			'As part of our continuing efforts to conserve the unique natural setting surrounding Wallowa Lake, we are pleased to announce that we are now official members of Wallowa Lake Village! Thanks to the generosity of the Wiggins family, Wallowa Land Trust now owns 34 acres at the south end of Wallowa Lake.',
			'The property was donated to the Land Trust in September 2022 by Brett Wiggins, Eric Wiggins, Christopher Wiggins, Tony Wiggins and Cathy Wiggins-Graybeal. This property had been in the Wiggins family for several generations and the family wanted to honor the wishes of their grandmother, Irene Wiggins. Irene loved this area and would be delighted to know this property is now conserved, to be managed for the benefit and enjoyment of future generations.',
			"The property is steep and thickly forested, surrounded by the East Moraine Community Forest on three sides. Noxious weeds are minimal and the forest is in good health despite being overgrown. Many animals pass through the property as they make their way down from the Wallowa-Whitman National Forest to the valley floor. 'We are honored to receive this generous gift from the Wiggins Family,' said Kathleen Ackley, Wallowa Land Trust's Executive Director. 'The growing mosaic of protected properties surrounding Wallowa Lake means continuity of healthy habitat for generations to come.'",
			'This project was made possible by the Wiggins–Graybeal Family, the Bergstrom Foundation and individual donors like you.'
		]
	},
	{
		slug: 'wolfe-farm-conservation-easement',
		name: 'Wolfe Farm Conservation Easement',
		description: '463 acres of farmground and wetlands',
		image: imageModules['/src/lib/images/properties/wolfe-farm.jpg'].default,
		acres: 463,
        fullDescription: 
        [
            "Working with Woody and Megan Wolfe, Wallowa Land Trust has acquired two adjoining conservation easements that permanently protects 463 acres in Wallowa, Oregon. The first conservation easement was completed in February 2011 and includes the confluence of the Lostine and Wallowa Rivers along with the associated riparian areas and wetlands.",
            "The second easement was finished in August 2017.  All total, 318 acres of prime farmground and 145 acres of wetlands are protected from future development or subdivision.",
            "The Wolfes will continue to farm their land. Approximately three and half miles of the Lostine and Wallowa Rivers will remain forever intact.",
            "According to Oregon Department of Fish & Wildlife staff, the easement encompasses one of the healthiest, most intact stretches of the Lostine River in the Wallowa Valley. The property and surrounding area have been identified in the Oregon Conservation Strategy as a Priority Wildlife Focal Area for land acquisition as well as a Conservation Opportunity Area for the Blue Mountains Ecoregion. Freshwater emergent marsh on the property cools and cleans flows into the Wallowa River and supports Columbia spotted frogs. The property also provides habitat for various bird species of concern including bald eagles, osprey and long-billed curlew as well as three federally-listed endangered species of fish – bull trout, steelhead and Chinook salmon.",
            "Aside from their valuable wildlife habitat, these parcels are also historically significant. They lie within the larger Wolfe Century Ranch, originally established in 1897. From time immemorial, this land has served as a traditional Indian summer fishing camp for the Wallowa Band Nez Perce and was designated by Congress as a private-lands unit of the Nez Perce National Historical Park. It is one of only four Park sites in Oregon. Old Chief Joseph died there in 1871 and was originally buried nearby, before being reinterred in 1926 at the foot of Wallowa Lake. Today the property contains a fish weir facility operated by the Nez Perce Tribe to monitor Chinook salmon. Well-traveled state Highway 82 runs along the western boundary of the property, making the project highly visible and creating ongoing opportunities for education.",
            "Our gratitude goes to the Wolfe Family and our partners and funders who made this work possible: ·         Doris Duke Charitable Foundation ·         The Nature Conservancy ·         National Resources Conservation Service ·         Hells Canyon and Eagle Cap Land and Restoration Subfund of the Oregon Community Foundation (the Penstemon Fund) via Greater Hells Canyon Council ·         Bergstrom Foundation ·         Nez Perce Tribe"
        ]
	}
];

// Helper function to get a property by slug
export function getPropertyBySlug(slug: string): Property | undefined {
	return properties.find((property) => property.slug === slug);
}
