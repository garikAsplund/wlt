<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-full min-h-screen w-full flex-col">
	<Nav />
	<div
		class="relative inset-0 w-full flex-grow overflow-hidden overflow-x-hidden z-0"
	>
		<!-- Wrapper for children to ensure they stay within viewport on mobile -->
		<div class="h-full w-full overflow-hidden">
			{@render children()}
		</div>
	</div>
	<Footer />
</div>