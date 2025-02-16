<script lang="ts">
  const stats = [
    {
      value: "3,000+",
      label: "acres conserved to date",
      color: "#497ca6",
    },
    {
      value: "50+",
      label: "volunteers",
      color: "#678c3c",
    },
    {
      value: "1,000+",
      label: "members supporting our mission",
      color: "#d7a860",
    }
  ];
</script>

<div class="w-full bg-white dark:bg-[#121212] lg:py-16 py-12">
  <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-center font-['Georgia'] text-2xl sm:text-3xl text-gray-900 dark:text-gray-100 mb-4">
          By the Numbers
      </h2>
      
      <p class="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 text-xl">
        Wallowa Land Trust is a local nonprofit, tax-exempt organization founded in 2004 by landowners and residents of Northeast Oregon's Wallowa County.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {#each stats as stat}
              <div class="relative">
                  <div 
                      style="background-color: {stat.color}"
                      class="absolute inset-0 rounded-lg opacity-10"
                  ></div>
                  <div class="relative p-6 text-center">
                      <p class="text-5xl font-bold mb-3" style="color: {stat.color}">
                          {stat.value}
                      </p>
                      <p class="text-lg text-gray-700 dark:text-gray-300">
                          {stat.label}
                      </p>
                  </div>
              </div>
          {/each}
      </div>
  </div>
</div>