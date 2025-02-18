<script lang="ts">
	import DonateButton from '$lib/DonateButton.svelte';
	import { Users, Calendar, Heart, Gift, Scroll, Home, HandHeart } from 'lucide-svelte';
	const givingOptions = [
		{
			title: 'Membership',
			icon: Users,
			content:
				'Support our mission through annual membership. All donations are tax-deductible, and as a qualified Oregon Cultural Trust non-profit, you can double your impact through matching Cultural Trust gifts.'
		},
		{
			title: 'Monthly Giving',
			icon: Calendar,
			content:
				'Join our All Seasons Club to provide steady, reliable support. Monthly donations help us plan effectively while reducing administrative costs.'
		},
		{
			title: 'Volunteer',
			icon: Heart,
			content:
				'Share your skills and time. We need help with fieldwork, office support, professional services, photography, writing, and more. Every talent can make a difference.'
		},
		{
			title: 'In-Kind Gifts',
			icon: Gift,
			content:
				'Support our work through donated goods and services. We welcome professional assistance (legal, accounting, design), office equipment, event supplies, and other in-kind contributions.'
		},
		{
			title: 'Bequests',
			icon: Scroll,
			content:
				"Leave a lasting legacy by including us in your estate planning. Your gift will help protect Wallowa County's working lands, scenic vistas, and natural areas for future generations."
		},
		{
			title: 'Land Donation',
			icon: Home,
			content:
				'Consider donating land for conservation. Whether through direct donation or conservation easement, you can create a lasting impact while potentially realizing tax benefits.'
		}
	];
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
	<div class="mb-8 sm:mb-12">
		<enhanced:img
			src="/static/images/backgrounds/giving.jpg"
			alt="Wallowa County Landscape"
			class="h-24 w-full object-cover sm:h-64"
		/>
	</div>

	<h1 class="mb-8 font-serif text-3xl text-slate-800 sm:text-4xl dark:text-slate-100">
		Ways to Give
	</h1>

	<div class="mb-8 space-y-6 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800">
		<p class="text-lg text-slate-800 dark:text-slate-200">
			Your support helps protect the places we love in Wallowa County: working farms, natural areas,
			wildlife habitat, and scenic open spaces.
		</p>
		<p class="text-slate-600 dark:text-slate-400">
			As a charitable nonprofit, <b>all donations are tax-deductible</b> to the full extent of the law.
		</p>
		<DonateButton />
	</div>

	<div class="mb-12 grid gap-6 sm:grid-cols-2">
		{#each givingOptions as option}
			<div class="rounded-lg border border-slate-200 p-6 dark:border-slate-700">
				<div class="mb-3 flex items-center gap-3">
					{#if option.icon}
						<option.icon class="h-5 w-5 text-[#1a3d65] dark:text-slate-300" />
					{/if}
					<h2 class="text-lg font-medium text-slate-800 dark:text-slate-100">{option.title}</h2>
				</div>
				<p class="text-sm text-slate-600 dark:text-slate-400">
					{option.content}
				</p>
			</div>
		{/each}
	</div>

	<div class="mt-16 sm:mt-8">
		<div class="rounded-lg bg-slate-50 px-8 py-12 text-center dark:bg-slate-800">
			<h2 class="mb-6 font-serif text-2xl text-slate-800 sm:text-3xl dark:text-slate-100">
				Want to learn more about giving?
			</h2>
			<div class="space-y-3">
				<p class="text-xl text-slate-700 dark:text-slate-300">info@wallowalandtrust.org</p>
				<p class="text-xl text-slate-700 dark:text-slate-300">(541) 426-2042</p>
			</div>
		</div>
	</div>
</div>
