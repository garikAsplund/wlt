<script lang="ts">
	import Donate from '$lib/Donate.svelte';
	import Head2Heart from '$lib/Head2Heart.svelte';
	import Hero from '$lib/Hero.svelte';
	import Intro from '$lib/Intro.svelte';
	import Moraine from '$lib/Moraine.svelte';
	import NewsletterForm from '$lib/NewsletterForm.svelte';
	import Stats from '$lib/Stats.svelte';
	import Events from '$lib/Events.svelte';
	import Hiring from '$lib/Hiring.svelte';

	let { data } = $props();
</script>

<div class="w-full">
	<Hero />
	<Events />
	<!-- <Hiring /> -->
	<Stats />
	<Intro />
	<Moraine />
	<div class="flex h-[35vh] flex-col justify-center">
		<NewsletterForm {data} />
	</div>
	<Head2Heart />
	<Donate />
</div>
