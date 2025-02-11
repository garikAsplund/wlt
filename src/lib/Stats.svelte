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
  
  <div class="w-full bg-white dark:bg-[#121212] lg:py-16 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each stats as stat}
          <div 
            style="background-color: {stat.color}"
            class="p-6 rounded-lg text-center shadow-sm"
          >
            <div class="flex flex-col items-center justify-center h-full">
              <p class="text-4xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p class="text-white text-lg">
                {stat.label}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>