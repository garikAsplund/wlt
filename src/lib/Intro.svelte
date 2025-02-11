<script>
    const benefits = [
        'Maintain scenic beauty',
        'Improve water quality',
        'Preserve cultural landmarks',
        'Protect wildlife habitat',
        'Sustain working landscapes',
        'Provide economic returns'
    ];
    const midpoint = Math.ceil(benefits.length / 2);
    const leftColumn = benefits.slice(0, midpoint);
    const rightColumn = benefits.slice(midpoint);
</script>

<div class="relative w-full">
    <div class="absolute z-10 w-full bg-white/40 dark:bg-black/15 min-h-[400px]">
        <h1 class="w-full py-8 sm:py-12 md:py-16 text-center font-['Georgia'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide text-gray-900">
            Why conserve your land?
        </h1>
        
        <div class="flex w-full justify-center px-4 sm:px-6">
            <ul class="grid gap-8 sm:gap-12 md:gap-24 lg:gap-36 text-lg sm:text-xl md:text-2xl md:grid-cols-2">
                <div class="space-y-3 sm:space-y-4">
                    {#each leftColumn as benefit}
                        <li class="flex items-start">
                            <span>{benefit}</span>
                        </li>
                    {/each}
                </div>
                <div class="space-y-3 sm:space-y-4">
                    {#each rightColumn as benefit}
                        <li class="flex items-start">
                            <span>{benefit}</span>
                        </li>
                    {/each}
                </div>
            </ul>
        </div>
    </div>
    
    <div class="relative h-[400px] w-full overflow-hidden">
        <enhanced:img
            src="/static/images/backgrounds/map.png"
            alt="View above the protected moraines of Wallowa Lake"
            class="h-full w-full object-cover object-left brightness-110 saturate-[1.2]"
        />
    </div>
</div>