<script lang="ts">
	const goals = [
		{
			title: 'Collaborate',
			description:
				'Our diverse communities respect and honor one another and are united over a shared land ethic.',
			strategies: [
				'Build a shared vision for conservation within our community',
				'Continue to work with Nez Perce disbursed descendants and Indian tribes',
				'Support landowners in improving management practices and overcoming challenges'
			]
		},
		{
			title: 'Conserve',
			description:
				'Natural ecosystems together with farms, ranches and working forests flourish and support a healthy population of humans, plants, fish and wildlife.',
			strategies: [
				'Pursue relevant conservation transactions and projects that meet our priorities',
				'Work with the community to create a mosaic of connected habitats across Wallowa County'
			]
		},
		{
			title: 'Sustain',
			description:
				'Our lands and organization are healthy, resilient, and managed to meet diverse needs.',
			strategies: [
				'Increase organizational capacity to accomplish goals and withstand disruptions',
				'Steward land for long-term sustainability',
				'Manage conserved land to meet community needs'
			]
		}
	];

	const guidingPrinciples = [
		{
			title: 'Integrity',
			description:
				'In all interactions, both inside and outside the Land Trust, we are honest, trustworthy, principled, and kind. We hold ourselves accountable to our organization, our constituents, and the people of our region. Our internal and external communications are transparent.'
		},
		{
			title: 'Excellence in All We Do',
			description:
				'We expect high standards in managing our organization and in the partnerships we maintain to conserve and steward land.'
		},
		{
			title: 'Commitment',
			description: 'We persevere through challenges with our mission and vision in mind.'
		},
		{
			title: 'Collaboration',
			description:
				'We work cooperatively with partners to achieve common goals that contribute to the environmental and economic vitality of our community.'
		},
		{
			title: 'Respect the Past, Plan For the Future',
			description:
				'We work with past and future generations in mind. We respect and honor those who came before us while seeking to ensure a legacy of conserved lands for those who come after.'
		}
	];

	const futureQuestions = [
		'What legacy do we want Wallowa Land Trust to leave and what are the concrete steps we can take to make that legacy a reality?',
		'Who are the members of our community, not just today but throughout time, and what do they value?',
		'What values do we all share and how are these values shaped by our connection to the lands and waters of Wallowa County?',
		'What is equity in Wallowa County, and how does our work help realize it?',
		'How do we work with our partners to preserve what is unique about Wallowa County while also being adaptive to the change we know is coming?'
	];
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
	<div class="space-y-12 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800/50">
		<!-- Mission & Vision Section -->
		<section class="space-y-6 border-b border-slate-200 pb-12 dark:border-slate-700">
			<h2 class="font-serif text-3xl text-slate-800 dark:text-slate-100">Mission & Vision</h2>

			<div class="space-y-4">
				<h3 class="font-serif text-2xl text-slate-700 dark:text-slate-200">Our Mission</h3>
				<p class="text-slate-700 dark:text-slate-300">
					Protecting the rural nature of Wallowa County by working cooperatively with private
					landowners, Indigenous people, local communities and governmental entities to conserve
					land.
				</p>
			</div>

			<div class="space-y-4">
				<h3 class="font-serif text-2xl text-slate-700 dark:text-slate-200">Our Vision</h3>
				<p class="text-slate-700 dark:text-slate-300">
					Wallowa Land Trust works with our community to preserve our unique landscape, which is
					intrinsic to our values and way of life. Together we create a future where:
				</p>
				<ul class="ml-6 space-y-2 text-slate-700 dark:text-slate-300">
					<li>
						Our diverse communities respect and honor one another and are united over a shared land
						ethic
					</li>
					<li>
						Natural ecosystems together with farms, ranches, and working forests flourish and
						support a healthy population of humans, plants, fish, and wildlife
					</li>
					<li>
						Our lands and organization are healthy, resilient, and managed to meet diverse needs
					</li>
				</ul>
			</div>
		</section>

		<!-- Guiding Principles Section -->
		<section class="space-y-6 border-b border-slate-200 pb-12 dark:border-slate-700">
			<h2 class="font-serif text-3xl text-slate-800 dark:text-slate-100">Guiding Principles</h2>

			<div class="space-y-6">
				{#each guidingPrinciples as principle}
					<div class="space-y-2">
						<h3 class="font-serif text-xl text-slate-700 dark:text-slate-200">{principle.title}</h3>
						<p class="text-slate-600 dark:text-slate-400 ml-4">{principle.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Our Past Section -->
		<section class="space-y-6 border-b border-slate-200 pb-12 dark:border-slate-700">
			<h2 class="font-serif text-3xl text-slate-800 dark:text-slate-100">Our Past</h2>

			<div class="space-y-4">
				<p class="text-slate-700 dark:text-slate-300">
					Wallowa County is remarkable, filled with a diversity of landscapes, people and wildlife.
					From the peaks of the Wallowa Mountains to the depths of Hells Canyon and all the
					ridgetops and watersheds in between, this dynamic, beautiful landscape has sustained human
					populations for at least 16,000 years.
				</p>

				<p class="text-slate-700 dark:text-slate-300">
					Since our founding in 2004, Wallowa Land Trust has permanently protected over 3,000 acres
					through ten conservation projects, including more than 80% of the iconic East Moraine of
					Wallowa Lake.
				</p>

				<!-- Impact Stats -->
				<div class="mt-6 grid gap-4 sm:grid-cols-2">
					<div
						class="rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800"
					>
						<p class="mb-2 text-3xl font-bold text-slate-800 dark:text-slate-100">3,204</p>
						<p class="text-sm text-slate-600 dark:text-slate-400">
							Acres Completed in Conservation Projects
						</p>
					</div>
					<div
						class="rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800"
					>
						<p class="mb-2 text-3xl font-bold text-slate-800 dark:text-slate-100">2,480</p>
						<p class="text-sm text-slate-600 dark:text-slate-400">East Moraine Acres Protected</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Our Future Section -->
		<section class="space-y-6 border-b border-slate-200 pb-12 dark:border-slate-700">
			<h2 class="font-serif text-3xl text-slate-800 dark:text-slate-100">Our Future</h2>

			<div class="space-y-4">
				<p class="text-slate-700 dark:text-slate-300">
					As we chart our future, our board and staff have grappled with many complex questions,
					including:
				</p>
				<ul class="ml-6 space-y-3">
					{#each futureQuestions as question}
						<li class="text-slate-700 dark:text-slate-300 list-disc">{question}</li>
					{/each}
				</ul>
			</div>
		</section>

		<!-- Strategic Goals Section -->
		
        <section class="space-y-6">
            <h2 class="font-serif text-3xl text-slate-800 dark:text-slate-100">
                Strategic Goals
            </h2>
            
            <div class="space-y-6">
                {#each goals as goal}
                    <div class="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                        <h3 class="mb-3 font-serif text-2xl text-slate-800 dark:text-slate-100">
                            {goal.title}
                        </h3>
                        <p class="mb-6 text-slate-600 dark:text-slate-300">
                            {goal.description}
                        </p>
                        
                        <div>
                            <h4 class="font-serif text-lg text-slate-600">Strategies:</h4>
                            <div class="mt-4 space-y-0">
                                {#each goal.strategies as strategy, i}
                                    <div class="space-y-0">
                                        <div class="flex items-center">
                                            <div class="flex h-8 w-8 ml-4 items-center justify-center rounded-full bg-slate-700 text-sm font-bold text-slate-100 dark:bg-slate-600">
                                                {i + 1}
                                            </div>
                                            <div class="-ml-1 h-0.5 w-48 bg-slate-700 dark:bg-slate-600"></div>
                                        </div>
                                        <p class="ml-14 text-slate-600 dark:text-slate-300 -translate-y-2.5">{strategy}</p>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </section>	</div>
</div>
