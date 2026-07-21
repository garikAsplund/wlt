<script lang="ts">
  import { Calendar, MapPin, ArrowUpRight } from "lucide-svelte";
  import picnicPic from "$lib/images/events/picnic.jpg";
</script>

<div class="flex w-full justify-center bg-[#e9ad91]/40 px-4 py-12">
  <article
    class="flex w-full max-w-3xl overflow-hidden rounded-lg bg-white
           shadow-md transition-shadow hover:shadow-xl md:flex-row"
  >
    <div class="flex flex-col justify-between p-8 md:w-2/3">
      <div>
        <div class="mb-6 space-y-2 text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <Calendar class="h-4 w-4 flex-shrink-0" />
            <time>Saturday, August 8 • 4:00 PM</time>
          </div>
          <div class="flex items-start gap-2">
            <MapPin class="mt-0.5 h-4 w-4 flex-shrink-0" />
            <a
              href="https://maps.app.goo.gl/GAdus6iYiXFJU5QB8"
              target="_blank"
              class="hover:text-gray-900 hover:underline"
            >
              82972 W. Russell Lane<br />
              Joseph, OR 97846
            </a>
          </div>
        </div>

        <h3 class="mb-4 text-2xl font-bold text-gray-900">
          Annual Potluck Picnic
        </h3>

        <div class="space-y-3 text-gray-600">
          <p>
            Please join Wallowa Land Trust board and staff for an afternoon
            potluck picnic on Saturday, August 8th!
          </p>
          <p>
            This year's picnic will feature live music, burgers and hot dogs
            fresh off the grill, and cold drinks. We'll share about our
            programs and you'll have lots of opportunity to catch up with
            friends, both new and old. This is a potluck-style event, please
            bring a side dish or dessert to share.
          </p>
          <p>
            You can help us reduce waste by bringing your own plates and
            utensils. We will provide eco-friendly drink cups and cloth
            napkins.
          </p>
        </div>
      </div>

      <div class="mt-6 pt-6 border-t border-gray-200">
        <p class="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          RSVP
        </p>
        <div class="space-y-1 text-sm text-gray-900">
          <p class="select-all font-medium">info@wallowalandtrust.org</p>
          <p class="text-gray-600">(541) 426-2042</p>
        </div>
      </div>
    </div>

    <div class="md:w-1/3">
      <enhanced:img
        src="/static/images/events/picnic_cover.jpg"
        alt="Potluck invite"
        class="h-48 w-full object-cover md:h-full"
        loading="lazy"
      />
    </div>
  </article>
</div>