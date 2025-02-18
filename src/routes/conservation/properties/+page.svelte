<script lang="ts">
    import { properties } from "$lib/properties";
    const propertyStats = {
        totalAcres: properties.reduce((sum, property) => sum + (property.acres || 0), 0).toLocaleString(),
        numberofProperties: properties.length,
        yearsFounded: 20
    };
</script>

<div class="max-w-3xl mx-auto">
    <h1 class="text-3xl lg:text-4xl font-serif text-slate-800 dark:text-slate-100 mb-6 lg:mb-8">
        Wallowa Land Trust Properties
    </h1>
    
    <div class="mb-6 lg:mb-12">
        <enhanced:img 
            src="$lib/images/properties/protected_properties.png" 
            alt="Wallowa County Landscape" 
            class="w-full h-auto scale-90"
        />
    </div>

    <div class="bg-slate-50 dark:bg-slate-800 p-4 lg:p-6 rounded-lg mb-6 lg:mb-8">
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Wallowa Land Trust has been dedicated to conserving the unique landscape 
            of Wallowa County for over {propertyStats.yearsFounded} years. Our carefully 
            selected properties represent the diverse ecosystems that define our region.
        </p>
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
            From expansive grasslands to critical riparian corridors, each property 
            tells a story of ecological preservation and community commitment.
        </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-center">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 lg:p-6 rounded-lg">
            <h3 class="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                {propertyStats.totalAcres}
            </h3>
            <p class="text-slate-600 dark:text-slate-400">Acres Conserved</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 lg:p-6 rounded-lg">
            <h3 class="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                {propertyStats.numberofProperties}
            </h3>
            <p class="text-slate-600 dark:text-slate-400">Protected Properties</p>
        </div>
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 lg:p-6 rounded-lg sm:col-span-2 lg:col-span-1">
            <h3 class="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                {propertyStats.yearsFounded}
            </h3>
            <p class="text-slate-600 dark:text-slate-400">Years of Conservation</p>
        </div>
    </div>
</div>