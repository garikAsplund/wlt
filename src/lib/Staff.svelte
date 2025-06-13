<script lang="ts">
	import jonathanImg from '$lib/images/staff/jonathan.jpg?enhanced&w=original;400;200';
	// import kelImg from '$lib/images/staff/kel.png?enhanced&w=original;400;200';
	import kathleenImg from '$lib/images/staff/kathleen.jpg?enhanced&w=original;400;200';
	// import finnImg from '$lib/images/staff/finn.png?enhanced&w=original;400;200';
	import brianImg from '$lib/images/staff/brian.jpg?enhanced&w=original;400;200';

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
		// {
		// 	name: 'Kel Hoffman, PhD',
		// 	title: 'Conservation Program Manager',
		// 	email: 'kel@wallowalandtrust.org',
		// 	image: kelImg,
		// 	bio: [
		// 		'Kel grew up in Texas where he spent much of his childhood outdoors, whether in a tree fort or on a sports field. He was drawn to conservation during his undergraduate experience at Texas A&M, where he majored in Ecological Restoration.',
		// 		'After several years spent working as an environmental consultant, Kel returned to A&M to pursue two of his passions: landscape-scale conservation work and nonprofit endeavors. During this time he obtained a doctorate in Ecosystem Management along with a certificate in Nonprofit Management.',
		// 		"He is interested in the social/humanistic aspects of landownership, specifically the processes landowners use to make conservation decisions for their properties. Kel is an avid backpacker and kayaker, and can't wait to explore Wallowa County with his pup, Finn."
		// 	]
		// },
		// {
		// 	name: 'Finn',
		// 	title: 'Field Agent',
		// 	email: '',
		// 	image: finnImg,
		// 	bio: [
		// 		'Finn grew up in Central Texas where he showed an aptitude for bug-hunting even as a young pup. He followed this passion to Austin, where he earned his undergraduate and began a Masters in Bug-Hunting in 2015.',
		// 		'Several years later he met Kel at a city park and they decided to make a go of it. Eight years on and they are still together and happier than ever. Finn currently serves as the Wallowa Land Trust Field Agent, protecting Kel in the field and generally being painfully cute.',
		// 		'He also likes to bark at deer and chase his husky brothers, Shadow and Storm, in his free time.'
		// 	]
		// },
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
		}
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
			<a href="/about/board" class="text-xl font-medium text-slate-900 dark:text-slate-100 underline underline-offset-4 transition-all duration-350 hover:opacity-75"
				>See our board</a
			>
		</div>
	</div>
</div>
