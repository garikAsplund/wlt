<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
	import { page } from '$app/state';
	import { heroContent } from '$lib/heroContent';
	
	// 	const imageModules = import.meta.glob('/static/images/backgrounds/*.{png,jpg}', {
	// 		eager: true,
	// 		query: {
	// 			enhanced: true
	// 		}
	// 	});

	// 	const heroContent = {
	//     '/about': {
	//         title: 'About Us',
	//         image: imageModules['/static/images/backgrounds/about.jpg']?.default,
	//         alt: 'Wallowa Land Trust team and community'
	//     },
	//     '/about/board': {
	//         title: 'Board of Directors',
	//         image: imageModules['/static/images/backgrounds/board.jpg']?.default,
	//         alt: 'Wallowa Land Trust board members'
	//     },
	//     '/about/contact': {
	//         title: 'Contact Us',
	//         image: imageModules['/static/images/backgrounds/contact.jpg']?.default,
	//         alt: 'Wallowa Land Trust Office'
	//     },
	//     '/about/plan': {
	//         title: 'Our Plan',
	//         image: imageModules['/static/images/backgrounds/plan.jpg']?.default,
	//         alt: 'Wallowa landscape planning area'
	//     },
	//     '/about/reports': {
	//         title: 'Annual Reports',
	//         image: imageModules['/static/images/backgrounds/reports.jpg']?.default,
	//         alt: 'Wallowa Land Trust conservation work'
	//     },
	//     '/about/staff': {
	//         title: 'Our Staff',
	//         image: imageModules['/static/images/backgrounds/staff.jpg']?.default,
	//         alt: 'Wallowa Land Trust staff members'
	//     },
	//     '/about/strategic-plan': {
	//         title: 'Strategic Plan',
	//         image: imageModules['/static/images/backgrounds/strategic-plan.jpg']?.default,
	//         alt: 'Wallowa conservation strategic planning'
	//     },
	//     '/conservation/easements': {
	//         title: 'Conservation Easements',
	//         image: imageModules['/static/images/backgrounds/easements.jpg']?.default,
	//         alt: 'Protected Wallowa landscape'
	//     },
	//     '/conservation/plan': {
	//         title: 'Conservation Plan',
	//         image: imageModules['/static/images/backgrounds/conservation-plan.jpg']?.default,
	//         alt: 'Wallowa conservation planning map'
	//     },
	//     '/conservation/properties': {
	//         title: 'Protected Properties',
	//         image: imageModules['/static/images/backgrounds/properties.jpg']?.default,
	//         alt: 'Conserved Wallowa properties'
	//     },
	//     '/executive-director-letter': {
	//         title: 'Letter from the Executive Director',
	//         image: imageModules['/static/images/backgrounds/director.jpg']?.default,
	//         alt: 'Executive Director message'
	//     },
	//     '/give': {
	//         title: 'Support Our Work',
	//         image: imageModules['/static/images/backgrounds/give.jpg']?.default,
	//         alt: 'Support Wallowa conservation'
	//     },
	//     '/news': {
	//         title: 'News & Updates',
	//         image: imageModules['/static/images/backgrounds/news.jpg']?.default,
	//         alt: 'Wallowa Land Trust news'
	//     },
	//     '/news/events': {
	//         title: 'Events',
	//         image: imageModules['/static/images/backgrounds/events.jpg']?.default,
	//         alt: 'Wallowa Land Trust events'
	//     },
	//     '/news/newsletters': {
	//         title: 'Newsletters',
	//         image: imageModules['/static/images/backgrounds/newsletters.jpg']?.default,
	//         alt: 'Wallowa Land Trust newsletters'
	//     },
	//     '/news/press': {
	//         title: 'Press & Media',
	//         image: imageModules['/static/images/backgrounds/press.jpg']?.default,
	//         alt: 'Wallowa Land Trust in the news'
	//     }
	// };

	let { children, data } = $props();
</script>

<div
	class="flex h-full min-h-screen w-full flex-col selection:bg-black selection:text-slate-200 dark:selection:bg-yellow-400 dark:selection:text-black"
>
	<Nav />
	<div class="relative inset-0 z-50 w-full flex-grow">
		<!-- Wrapper for children to ensure they stay within viewport on mobile -->
		<div class="h-full w-full">
			{#if heroContent[page.url.pathname]}
				<div class="relative">
					<enhanced:img
						src={heroContent[page.url.pathname].image}
						alt={heroContent[page.url.pathname].alt}
						class="h-36 w-full object-cover sm:h-64"
						style="object-position: {heroContent[page.url.pathname].position}"
					/>
					<div
						class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-6"
					>
						<h1 class="mx-auto max-w-4xl font-serif text-3xl text-white sm:text-4xl">
							{heroContent[page.url.pathname].title}
						</h1>
					</div>
				</div>
			{/if}
			{@render children()}
		</div>
	</div>
	<Footer {data} />
</div>
