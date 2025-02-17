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
			content: 'Conservation Easements are voluntary legal agreements between landowners and a land trust, created to protect certain natural and traditional values of the property in perpetuity. Typically, development rights are permanently extinguished and the owner continues to own and manage their land in a manner consistent with the Conservation Easement parameters.'
		},
		{
			title: 'Private Property Rights',
			content: 'The landowner retains full ownership of the property, including all rights as reserved in the Easement. Land protected by a Conservation Easement may be sold, bequeathed, mortgaged or otherwise transferred like any other property. The Easement is permanently recorded with the deed and remains with the land regardless of future ownership.'
		},
		{
			title: 'Tax Benefits',
			content: 'Conserving land can result in income tax benefits, as the donation of a Conservation Easement may be treated as a charitable gift by the Internal Revenue Service, making the value of the Easement tax-deductible. Potential reduction of estate taxes can limit the strain on future heirs and aid in intergenerational transfers of intact properties.'
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
			src="/static/images/backgrounds/canyons.jpg" 
			alt="Wallowa County Landscape" 
			class="w-full h-24 sm:h-64 object-cover"
		/>
	</div>

	<h1 class="mb-8 font-serif text-3xl sm:text-4xl text-slate-800">
		Conservation Easements
	</h1>

	<div class="space-y-6 bg-slate-50 p-6 sm:p-8 rounded-lg mb-8">
		<p class="text-slate-700 leading-relaxed">
			Conservation easements are powerful tools that protect the ecological and 
			cultural heritage of Wallowa County. By voluntarily limiting development 
			and preserving natural landscapes, landowners can ensure that the unique 
			character of our region endures for future generations.
		</p>
		<p class="text-slate-700 leading-relaxed">
			These legal agreements allow landowners to conserve their property's 
			ecological, agricultural, or scenic values while maintaining ownership 
			and potential economic benefits. From protecting wildlife habitats to 
			preserving working lands, conservation easements are crucial in 
			maintaining the rural integrity of our community.
		</p>
	</div>

	<div class="grid sm:grid-cols-2 gap-6">
		{#each sections as section, index}
			<div class="
				border border-slate-200 rounded-lg p-6 
				{isMobile ? 'mobile-accordion' : ''}
			">
				<button 
					class="w-full text-left flex justify-between items-center mb-4
							{isMobile ? 'accordion-toggle' : 'cursor-default'}"
					onclick={() => isMobile && toggleSection(index)}
				>
					<h2 class="text-lg font-medium text-slate-800">{section.title}</h2>
					{#if isMobile}
						<ChevronDown 
							class="w-5 h-5 text-slate-600 transition-transform duration-300"
							style="transform: rotate({activeSection === index ? '180deg' : '0deg'});"
						/>
					{/if}
				</button>

				<div class="{isMobile && activeSection !== index ? 'hidden' : ''}">
					<p class="text-slate-700 leading-relaxed">
						{section.content}
					</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-8 sm:mt-12 flex justify-center">
		<a 
			href="/contact/easements" 
			class="
				flex items-center justify-center 
				bg-slate-800 text-white 
				px-6 py-3 rounded-lg 
				hover:bg-slate-700 transition duration-300 
				space-x-3
			"
		>
			<ExternalLink class="w-5 h-5" />
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