<script>
    import { Droplets, Landmark, Bird, Tractor, DollarSign, MountainSnow } from 'lucide-svelte';
    
    const benefits = [
        {
            text: 'Maintain scenic beauty',
            icon: MountainSnow,
            description: 'Preserve Wallowa County\'s stunning vistas for future generations'
        },
        {
            text: 'Improve water quality',
            icon: Droplets,
            description: 'Protect our rivers, streams, and watersheds'
        },
        {
            text: 'Preserve cultural landmarks',
            icon: Landmark,
            description: 'Honor and protect sites of cultural significance'
        },
        {
            text: 'Protect wildlife habitat',
            icon: Bird,
            description: 'Ensure diverse species continue to thrive'
        },
        {
            text: 'Sustain working landscapes',
            icon: Tractor,
            description: 'Support local agriculture and ranching heritage'
        },
        {
            text: 'Provide economic returns',
            icon: DollarSign,
            description: 'Benefit from tax incentives and estate planning options'
        }
    ];
</script>

<div class="relative w-full">
    <div class="relative">
        <enhanced:img
            src="/static/images/backgrounds/map.png"
            alt="Topographical map of Wallowa County"
            class="absolute inset-0 h-full w-full object-cover object-center brightness-105 saturate-[1.1]"
            fetchpriority="high"
			sizes="min(1280px, 100vw)"
        />
        
        <div class="relative bg-white/80 dark:bg-black/70">
            <h1 class="w-full py-6 md:py-12 text-center font-['Georgia'] text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide text-gray-900 dark:text-gray-100">
                Why conserve your land?
            </h1>
            
            <div class="mx-auto max-w-6xl px-4 sm:px-6 pb-6 md:pb-12">
                <div class="grid gap-5 md:grid-cols-2 lg:gap-8">
                    {#each benefits as benefit}
                        <div class="bg-white/50 dark:bg-gray-900/50 p-4 lg:p-6 rounded-lg backdrop-blur-sm">
                            <div class="flex items-start gap-3">
                                <div class="text-[#678c3c] dark:text-[#90b654] mt-1">
                                    <svelte:component this={benefit.icon} class="w-5 h-5 lg:w-6 lg:h-6" />
                                </div>
                                <div>
                                    <h2 class="text-lg lg:text-xl font-medium text-gray-900 dark:text-gray-100">
                                        {benefit.text}
                                    </h2>
                                    <p class="text-base lg:text-lg text-gray-600 dark:text-gray-300">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>