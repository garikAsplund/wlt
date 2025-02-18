<script lang="ts">
	import { ExternalLink, ChevronDown } from 'lucide-svelte';

	let isMobile = false;
	let activeSection = null;

	// Check for mobile view on client-side
	function checkMobile() {
		isMobile = window.innerWidth < 640;
	}

	const sections = [
		{
			title: 'What are Conservation Easements?',
			content:
				'Conservation Easements are voluntary legal agreements between landowners and a land trust, created to protect certain natural and traditional values of the property in perpetuity. Typically, development rights are permanently extinguished and the owner continues to own and manage their land in a manner consistent with the Conservation Easement parameters.'
		},
		{
			title: 'Private Property Rights',
			content:
				'The landowner retains full ownership of the property, including all rights as reserved in the Easement. Land protected by a Conservation Easement may be sold, bequeathed, mortgaged or otherwise transferred like any other property. The Easement is permanently recorded with the deed and remains with the land regardless of future ownership.'
		},
		{
			title: 'Tax Benefits',
			content:
				'Conserving land can result in income tax benefits, as the donation of a Conservation Easement may be treated as a charitable gift by the Internal Revenue Service, making the value of the Easement tax-deductible. Potential reduction of estate taxes can limit the strain on future heirs and aid in intergenerational transfers of intact properties.'
		}
	];

	function toggleSection(index: number) {
		activeSection = activeSection === index ? null : index;
	}
</script>

<svelte:window on:resize={checkMobile} />

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
	<div class="mb-8 sm:mb-12">
		<enhanced:img
			src="/static/images/backgrounds/moraine-folds.jpg"
			alt="Wallowa County Landscape"
			class="h-24 w-full object-cover sm:h-64"
		/>
	</div>
	<h1 class="mb-8 font-serif text-3xl text-slate-800 sm:text-4xl dark:text-slate-100">
		Conservation Easements
	</h1>
	<div class="mb-8 space-y-6 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800/50">
		<p class="leading-relaxed text-slate-700 dark:text-slate-300">
			Conservation easements are powerful tools that protect the ecological and cultural heritage of
			Wallowa County. By voluntarily limiting development and preserving natural landscapes,
			landowners can ensure that the unique character of our region endures for future generations.
		</p>
		<p class="leading-relaxed text-slate-700 dark:text-slate-300">
			These legal agreements allow landowners to conserve their property's ecological, agricultural,
			or scenic values while maintaining ownership and potential economic benefits. From protecting
			wildlife habitats to preserving working lands, conservation easements are crucial in
			maintaining the rural integrity of our community.
		</p>
	</div>
	<div class="grid gap-6 sm:grid-cols-2">
		{#each sections as section, index}
			<div
				class="
				rounded-lg border border-slate-200
				p-6 dark:border-slate-700
				dark:bg-slate-800/30
				{isMobile ? 'mobile-accordion' : ''}
			"
			>
				<button
					class="mb-4 flex w-full items-center justify-between text-left
							{isMobile ? 'accordion-toggle' : 'cursor-default'}"
					onclick={() => isMobile && toggleSection(index)}
				>
					<h2 class="text-lg font-medium text-slate-800 dark:text-slate-100">{section.title}</h2>
					{#if isMobile}
						<ChevronDown
							class="h-5 w-5 text-slate-600 transition-transform duration-300 dark:text-slate-400"
							style="transform: rotate({activeSection === index ? '180deg' : '0deg'});"
						/>
					{/if}
				</button>
				<div class={isMobile && activeSection !== index ? 'hidden' : ''}>
					<p class="leading-relaxed text-slate-700 dark:text-slate-300">
						{section.content}
					</p>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-8 flex justify-center sm:mt-12">
		<a
			href="/contact/easements"
			class="
				flex items-center justify-center
				space-x-3 rounded-lg
				bg-slate-800
				px-6 py-3 text-white
				transition duration-300
				hover:bg-slate-700 dark:bg-slate-700
				dark:hover:bg-slate-600
			"
		>
			<ExternalLink class="h-5 w-5" />
			<span>Start a Conservation Easement</span>
		</a>
	</div>
</div>

<style>
	@media (max-width: 640px) {
		.mobile-accordion {
			border-bottom: 1px solid rgb(226 232 240);
		}
		.mobile-accordion:last-child {
			border-bottom: none;
		}
		.accordion-toggle {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
