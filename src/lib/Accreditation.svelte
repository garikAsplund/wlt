<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';

	interface Props {
		eyebrow?: string;
		title?: string;
		body?: string;
		ctaLabel?: string;
		ctaHref?: string;
		deadline?: string;
	}

	let {
		eyebrow = 'Public Notice',
		title = 'We Are Applying to Be Re-Accredited!',
		body = 'Our first accreditation was achieved in 2016. This will be our second renewal. The public comment period is now open.',
	}: Props = $props();
</script>

<section class=" bg-[#e9ad91]/30  px-4 py-16 text-center sm:py-20 dark:bg-slate-950">
	<div class="mx-auto max-w-3xl space-y-6">
		<p class="text-sm font-semibold tracking-widest text-blue-600 uppercase dark:text-blue-400">
			{eyebrow}
		</p>

		<h1 class="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl dark:text-white">
			{title}
		</h1>

		<p class="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
			{body}
		</p>

		<div class="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-center">
			<a
				href="/accreditation"
				class="group mt-6 inline-flex items-center gap-2 border-b border-current text-slate-900 hover:text-slate-600 dark:text-slate-100 hover:dark:text-slate-400"
			>
				Read more about the renewal process
				<ArrowUpRight class="h-4 w-4 group-hover:rotate-45 transition-all duration-300 " />
			</a>
		</div>
	</div>
</section>
