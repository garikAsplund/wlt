<script lang="ts">
	import jonathanImg from '$lib/images/staff/jonathan.jpg?enhanced&w=original;400;200';
	import kathleenImg from '$lib/images/staff/kathleen.jpg?enhanced&w=original;400;200';
	import brianImg from '$lib/images/staff/brian.jpg?enhanced&w=original;400;200';
	import caitlinImg from '$lib/images/staff/caitlin.jpg?enhanced&w=original;400;200';
	import jasperImg from '$lib/images/staff/jasper.png?enhanced&w=original;400;200';
	import altheaImg from '$lib/images/staff/althea.jpg?enhanced&w=original;400;200';
	import susanImg from '$lib/images/staff/susan.jpg?enhanced&w=original;400;200';

	const staffMembers = [
		{
			name: 'Kathleen Ackley',
			title: 'Executive Director',
			email: 'kathleen@wallowalandtrust.org',
			image: kathleenImg,
			bio: [
				"Kathleen is Wallowa Land Trust's first Executive Director. She joined the Trust in the fall of 2013 after almost a decade at Capitol Land Trust in Olympia, Washington.",
				"Raised in Eugene, Oregon, Kathleen graduated from the University of Hawaii with a degree in Asian Studies, before receiving a master's degree in Environmental Studies from The Evergreen State College.",
				'She has worked with many charitable organizations over the years and brings her extensive knowledge of nonprofit administration and successful land conservation to northeast Oregon. She is the past president of the Coalition of Oregon Land Trusts and is a member of the Rotary Club of Wallowa County.'
			]
		},				
		{
			name: 'Susan Christensen',
			title: 'Development Director',
			email: 'susan@wallowalandtrust.org',
			image: susanImg,
			bio: [
				'Susan Christensen brings more than three decades of experience in public service, nonprofit leadership, and environmental work to Wallowa Land Trust. She has spent much of her career supporting rural communities and the landscapes that sustain them by building partnerships, securing funding, and helping organizations develop strong systems for long-term success.',
'Before joining Wallowa Land Trust, Susan served as Executive Director of the Greater Eastern Oregon Development Corporation, where she worked with local governments, tribes, and regional partners across seven counties to advance community and economic development initiatives. Earlier in her career, she spent more than 20 years with the Oregon Department of Environmental Quality managing collaborative environmental projects throughout the state.',
'Susan holds a Master of Science in Public Administration from the University of Oregon and is deeply committed to conserving the lands, waters, and working landscapes of Northeast Oregon. She enjoys spending time outside hiking and skiing with her husband and their dog named Oliver. Their home in Enterprise is basecamp for their two children who love to come home and backcountry ski, hike and fly fish.'
		]
		},
		{
			name: 'Caitlin Rushlow',
			title: 'Conservation Program Manager',
			email: 'caitlin@wallowalandtrust.org',
			image: caitlinImg,
			bio: [
				'Caitlin joined Wallowa Land Trust as Conservation Program Manager in August 2025. After growing up in southwest Michigan, she lived and worked in North Carolina, Idaho, and Arctic Alaska while earning her master’s and doctoral degrees in Geological Sciences.',
				'Caitlin moved to Wallowa County in 2017 and has worked in a myriad of fields, both literally and figuratively. She farmed at Backyard Gardens for Beth Gibans, coordinated a forest monitoring program at Wallowa Resources, and surveyed rangelands for noxious weeds and rare plants as an independent contractor. She continues to work occasionally as a consultant and serves as the Treasurer for the Wallowa Avalanche Center in addition to her time at WLT.',
				'When not working, Caitlin enjoys spending time with friends and exploring the diverse ecosystems of Wallowa County on foot, skis, or a raft with her dog Jasper, stepdog Toots, and partner Ryan. She is currently focused on learning to golf and developing her skills as a fly fisherwoman.'
			]
		},
		{
			name: 'Althea Walker',
			title: 'Indigenous Community Liaison',
			email: 'althea@wallowalandtrust.org',
			image: altheaImg,
			bio: [
				'Althea Walker (Nez Perce, Hopi, and Gila River) serves as the Indigenous Community Liaison for the Wallowa Land Trust. In this role, she builds and nurtures respectful, reciprocal relationships between the Land Trust and the Indigenous communities who have stewarded the lands of Wallowa County since time immemorial. Her work centers on weaving together traditional ecological knowledge and conservation science to ensure that land stewardship efforts are culturally grounded, community-led, and enduring.',
'Althea brings over a decade of experience in meaningful Tribal engagement, climate adaptation, and community resilience. Most recently, she served as the Director of Community Resilience for the Climate Science Alliance, where she uplifted and advanced Indigenous management practices for co-stewardship across the Southwest and beyond. She also provides strategic counsel to multiple organizations and agencies on building trust-based, cross-jurisdictional partnerships that honor Tribal sovereignty and prioritize community-defined needs.',
"A lifelong learner and advocate for the equal valuation of knowledges, Althea is a Contributing Author to the national Status of Tribes and Climate Change Report and a former Steering Committee Member for the Indigenous Foods Knowledges Network. She is a Sequoyah Fellow (lifetime member) of the American Indian Science and Engineering Society (AISES) and serves on the board of hipéexnu' kíi'u núun wisíix Inc., an organization dedicated to revitalizing the Nimiipuu language and cultural ways of life. Althea holds a Master of Science in Environmental Technology Management and a Bachelor of Science in Environmental & Resource Management from Arizona State University and is a Certified Public Manager.",
'Her work is rooted in a deep personal connection to the Wallowa Valley and a lifelong commitment to honoring her family and community through meaningful, collaborative stewardship of these ancestral lands in Wallowa County.'
		]
		},

		{
			name: 'Jonathan Plummer',
			title: 'Office Administrator',
			email: 'jonathan@wallowalandtrust.org',
			image: jonathanImg,
			bio: [
				'After growing up in Texas and Colorado, Jonathan earned an undergraduate degree in English from the University of Montana and a masters degree from the University of Oregon.',
				'Following a short career as an environmental consultant, Jonathan spent the next two decades working as a cabinetmaker and furniture maker. Having moved around the American west for 30 years, Jonathan followed his wife, Jean, to Wallowa County in 2017.',
				"When not in the office, he's either out walking, reading, or watching baseball."
			]
		},
		{
			name: 'Brian Tibbetts',
			title: 'Grant Writer',
			email: '',
			image: brianImg,
			bio: [
				'Brian works to guide nonprofits through transition and help them to grow their capacity. Over the last couple of decades, Brian has partnered with organizations at every stage of growth to help them refine their voice and leverage their mission and vision toward successful funding of their long-term strategy and programming objectives.',
				'He has worked with a variety of nonprofit organizations affecting change by providing housing, protecting the environment, providing instruction and performance opportunities in the arts, and working to ensure that everyone has enough to eat. Brian understands how important and effective it is to tell the story of an organization in language that speaks to a variety of communities and audiences.',
				'Brian stepped away from a successful career in marketing and communications to devote his energy to work that has the highest potential to make a positive impact in the world. He holds a master’s degree in writing and specializes in all aspects of communications-driven fundraising.'
			]
		},

		{
			name: 'Jasper',
			title: 'Field Agent',
			email: '',
			image: jasperImg,
			bio: [
				'Jasper is the Office Dog on the Wallowa Land Trust team. He brings a strong background in Human Companionship to the role, having spent the last ten years accompanying his human, beginning with his adoption out of mysterious street dog origins in the town of Burley, Idaho.',
				'When not working, Jasper enjoys hanging out on the river while his humans fish, romping with his dog friends, eating whatever he can find, barking at intruders, and napping in the sun or in front of the fire.',
			]
		},
	];
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
	<div class="space-y-12 sm:space-y-16">
		{#each staffMembers as member, i}
			<div class="grid gap-6 sm:gap-8 md:grid-cols-[280px_1fr]">
				<div class="mx-auto max-w-sm md:max-w-none">
					<enhanced:img
						src={member.image}
						alt={member.name}
						class="aspect-[4/5] w-full rounded-lg bg-slate-100 object-cover dark:bg-slate-800"
					/>
					<div class="mt-4 text-center md:text-left">
						<h2 class="text-lg font-medium text-slate-900 dark:text-slate-100">{member.name}</h2>
						<p class="text-slate-600 dark:text-slate-400">{member.title}</p>
						<p class="mt-1 block text-sm text-slate-600 select-all dark:text-slate-400">
							{member.email}
						</p>
					</div>
				</div>
				<div class="space-y-4 text-slate-700 dark:text-slate-300">
					{#each member.bio as paragraph}
						<p class="leading-relaxed">{paragraph}</p>
					{/each}
				</div>
			</div>
			{#if i !== staffMembers.length - 1}
				<hr class="my-12 opacity-25 sm:my-16 dark:border-slate-700" />
			{/if}
		{/each}
		<div class="flex w-full justify-center">
			<a
				href="/about/board"
				class="text-xl font-medium text-slate-900 underline underline-offset-4 transition-all duration-350 hover:opacity-75 dark:text-slate-100"
				>See our board</a
			>
		</div>
	</div>
</div>
