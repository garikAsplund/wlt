<script lang="ts">
	const qaItems = [
		{
			question: 'What is the purpose of the management plan and why do we need it?',
			answer:
				'Since the East Moraine is going to continue to have dynamic aspects like forestry and grazing, while also providing for public access, a multi-management plan allows for both the flexibility and accountability needed on a working landscape. The plan is designed to guide the ongoing stewardship in a way that protects key conservation values.'
		},
		{
			question:
				'How did the Moraines Partnership start thinking about the pieces of the management plan?',
			answer:
				"We looked at the historical record of the landscape and its uses. In this sense, we're taking into account what occurred on the landscape 5 days ago, 5 years ago, five hundred years ago, and five thousand years ago. This is how we began looking at management planning through lenses of habitat, cultural resources, forestry, grazing, and recreation.\n\nThese are also the values of the Moraines Partnership, who came together in 2011 specifically to secure this landscape. Individuals, agencies and foundations donated more than $6.5 million to help us conserve these values."
		},
		{
			question: 'Who is providing input on the management plan?',
			answer:
				"The Partnership looked for people who represented different professional capacities and views. These professionals, which range from foresters and biologists to ranchers and cultural resource administrators, lead committees and submit management recommendations. These recommendations are the threads we intend to weave together with public input into a comprehensive, multi-use management plan.\n\nThe Partnership will be seeking public input through a survey and at least one public forum. The public's experience can help us fill in gaps and provide the perspective we need to understand values and uses on the East Moraine."
		},
		{
			question: 'How do the committees operate?',
			answer: `The committee heads and I ideally meet every month. In between these meetings, the committees themselves will meet and discuss their objectives and generate goals, current conditions of the property, management and monitoring strategies, etc. - for the management plan. Those monthly "touch points" are important. We begin to see how uses contrast and dovetail.`
		},
		{
			question: 'What are some of the challenges that have arisen?',
			answer:
				"One is that our community's vision for this property isn't going to happen quickly. It will evolve as the property evolves, and be adjusted as we collect data and information, and as we witness how uses play out across the landscape.\n\nAnother huge challenge has been the timeline. We've had, essentially, one year and six months for fundraising, conveying the property, and drafting an easement and a management plan. When the timeline is that short, I think you have to accept that you can't be as comprehensive as you might want to be, but you can identify the areas where you'd like to know more and make a plan for the future."
		}
	];
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
	<div class="space-y-8 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800/50">
		<!-- Header -->
		<div class="space-y-4">
			<h1 class="font-serif text-3xl text-slate-800 dark:text-slate-100">
				East Moraine Management Plan Q&A
			</h1>
			<div class="text-sm text-slate-600 dark:text-slate-400">By Tia Hatton & Eric Greenwell</div>
			<p class="leading-relaxed text-slate-700 dark:text-slate-300">
				The purchase of the East Moraine was a major milestone, but just the beginning for the
				County-owned property. On behalf of the Wallowa Lake Moraines Partnership, Eric Greenwell
				is acting as the project manager for the creation of a multi-use management plan for the
				East Moraine. I asked him to give us an inside look at the management plan. Here's our
				conversation:
			</p>
		</div>

		<!-- Q&A Section -->
		<div class="space-y-6">
			{#each qaItems as { question, answer }}
				<div class="border-t border-slate-200 pt-6 dark:border-slate-700">
					<h2 class="mb-3 font-medium text-slate-800 dark:text-slate-100">
						{question}
					</h2>
					<div class="prose prose-slate dark:prose-invert">
						{answer}
					</div>
				</div>
			{/each}
		</div>

		<!-- Footer -->
		<div class="border-t border-slate-200 pt-6 dark:border-slate-700">
			<div class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
				<p>Eric Greenwell is Wallowa Land Trust's Conservation Program Manager.</p>
				<p>Tia Hatton is Wallowa Land Trust's Outreach & Communications Coordinator.</p>
			</div>
		</div>
	</div>
</div>
