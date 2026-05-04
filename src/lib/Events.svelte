<script lang="ts">
	import { Calendar, MapPin, ArrowUpRight, Mail, Clock } from 'lucide-svelte';
</script>

+
<div class="flex w-full flex-col items-center gap-6 bg-[#e9ad91]/30 px-4 py-12">
	<article
		class="flex w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-sm
           transition-shadow hover:shadow-md md:flex-row"
	>
		<div class="flex flex-col justify-between gap-6 p-8 md:w-2/3">
			<div>
				<p class="mb-1 text-xs font-semibold tracking-widest text-[#b07050] uppercase">
					Nez Perce Wallowa Homeland Longhouse
				</p>
				<h3 class="text-2xl font-bold text-gray-900">Wallowa Gathering</h3>
			</div>

			<div class="flex flex-col gap-3 text-sm text-gray-600">
				<div class="flex items-center gap-2">
					<Calendar class="h-4 w-4 shrink-0 text-gray-400" />
					<span>May 7–10</span>
				</div>
				<div class="flex items-start gap-2">
					<MapPin class="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
					<a
						href="https://maps.app.goo.gl/51y5Ra83R3r1AWtW7"
						target="_blank"
						class="leading-snug hover:text-gray-900 hover:underline"
					>
						70956 Whiskey Creek Road, Wallowa, OR 97885
					</a>
				</div>
				<div class="flex items-center gap-2">
					<Mail class="h-4 w-4 shrink-0 text-gray-400" />
					<span>
						Althea Walker —
						<a
							href="mailto:althea@wallowalandtrust.org"
							class="select-all hover:text-gray-900 hover:underline"
						>
							althea@wallowalandtrust.org
						</a>
					</span>
				</div>
			</div>

			<a
				href="https://form.jotform.com/261047351923050"
				target="_blank"
				rel="noopener noreferrer"
				class="group inline-flex w-fit items-center gap-1.5 rounded-full bg-gray-900
                       px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
			>
				Volunteer sign-up
				<ArrowUpRight
					class="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
				/>
			</a>
		</div>

		<div class="md:w-1/3">
			<enhanced:img
				src="/static/images/events/gathering.png"
				alt="Wallowa Gathering"
				class="h-48 w-full object-cover md:h-full"
				loading="lazy"
			/>
		</div>
	</article>
	<article
		class="flex w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-sm
           transition-shadow hover:shadow-md md:flex-row"
	>
		<div class="flex flex-col justify-between gap-6 p-8 md:w-2/3">
			<div>
				<p class="mb-1 text-xs font-semibold tracking-widest text-[#b07050] uppercase">
					Nez Perce Wallowa Homeland Longhouse
				</p>
				<h3 class="text-2xl font-bold text-gray-900">Community Potluck</h3>
			</div>

			<div class="flex flex-col gap-3 text-sm text-gray-600">
				<div class="flex items-center gap-2">
					<Calendar class="h-4 w-4 shrink-0 text-gray-400" />
					<span>Friday, May 8</span>
				</div>
				<div class="flex items-center gap-2">
					<Clock class="h-4 w-4 shrink-0 text-gray-400" />
					<span>5:30–7:30 PM</span>
				</div>
				<div class="flex items-start gap-2">
					<MapPin class="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
					<a
						href="https://maps.app.goo.gl/51y5Ra83R3r1AWtW7"
						target="_blank"
						class="leading-snug hover:text-gray-900 hover:underline"
					>
						70956 Whiskey Creek Road, Wallowa, OR 97885
					</a>
				</div>
			</div>
		</div>

		<div class="relative h-48 md:h-auto md:w-1/3">
			<enhanced:img
				src="/static/images/events/potluck.jpg"
				alt="Community Potluck flyer"
				class="absolute inset-0 h-full w-full object-cover"
				loading="lazy"
			/>
		</div>
	</article>
</div>
