<script lang="ts">
	import Intro from "$lib/Intro.svelte";
	import Stats from "$lib/Stats.svelte";

</script>

<div class="relative w-full">
	<div class="absolute z-10 h-full w-full bg-gradient-to-b from-black/20 to-white/20"></div>
	<h1
		class="absolute z-20 w-full py-16 text-center font-['Georgia'] text-2xl font-medium tracking-wide text-white drop-shadow-md lg:text-5xl"
	>
		Protecting the rural nature of Wallowa County
	</h1>
	<div class="relative h-[64vh] w-full overflow-hidden">
		<enhanced:img
			src="/static/images/hero.jpg"
			alt="View above the protected moraines of Wallowa Lake"
			class="h-full w-full object-cover object-left brightness-110 saturate-[1.2]"
		/>
	</div>
    <Stats />
    <Intro />
</div>
