<script lang="ts">
	// You might want to put this in an env variable later
	const calendarUrl =
		'https://calendar.google.com/calendar/embed?src=183c082b451d654b6aa2cb1f80165d71e3ba76dc0947581a01183c0d08a8239e%40group.calendar.google.com&ctz=America%2FLos_Angeles';
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
	<div class="mb-8 sm:mb-12">
		<enhanced:img
			src="/static/images/backgrounds/events.jpg"
			alt="Wallowa County Landscape"
			class="h-24 w-full object-cover sm:h-64"
		/>
	</div>
	<h1 class="mb-8 font-serif text-3xl text-slate-800 sm:mb-12 sm:text-4xl dark:text-slate-100">
		Events
	</h1>

	<div class="space-y-6 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800/50">
		<p class="leading-relaxed text-slate-700 dark:text-slate-300">
			Join us for upcoming events, including volunteer opportunities, educational programs, and
			community gatherings. You can add our calendar to your own Google Calendar by clicking the "+
			Google Calendar" button in the bottom right.
		</p>

		<!-- Calendar Container -->
		<div
			class="relative overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700"
		>
			<div class="aspect-video w-full">
				<iframe
					src={calendarUrl}
					class="h-full w-full dark:brightness-85"
					frameborder="0"
					scrolling="no"
					title="Wallowa Land Trust Events Calendar"
				></iframe>
			</div>
		</div>

		<p class="text-sm text-slate-600 dark:text-slate-400">
			Can't see the calendar? <a
				href={calendarUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 hover:underline dark:text-blue-400"
			>
				View it directly on Google Calendar
			</a>
		</p>
	</div>
</div>
