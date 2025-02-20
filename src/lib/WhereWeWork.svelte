<!-- ConservationMap.svelte -->
<script>
    import { onMount } from 'svelte';
    
    let mapElement;
    
    // Define parking from GeoJSON
    const parkingLocations = [
        {
            coordinates: [45.30007441857449, -117.19893754574029], // Note: Leaflet uses [lat, lng]
            name: "East Moraine Parking Area"
        }
    ];
    
    const conservationAreas = [
        {
            name: "Perry Farm Conservation Easement",
            coordinates: [45.3, -117.2],
            type: 'easement',
            size: "482 acres",
            description: "Established in September 2019, includes both irrigated and dry rotational cropland.",
        },
        {
            name: "Lola-Hasslcher Conservation Easement",
            coordinates: [45.25, -117.19],
            type: 'easement',
            description: "Protected native grassland on the East Moraine",
        },
        {
            name: "East Moraine Community Forest",
            coordinates: [45.28, -117.18],
            type: 'community-forest',
            description: "Acquired January 2020, connecting Wallowa Valley floor to National Forest",
        },
        {
            name: "Ham Conservation Easement",
            coordinates: [45.29, -117.21],
            type: 'easement',
            description: "Protected working lands and wildlife habitat",
        }
    ];

    onMount(async () => {
        const L = await import('leaflet');
        
        // Custom icons
        const conservationIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background-color: #1a3d65; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6]
        });

        const parkingIcon = L.divIcon({
            className: 'parking-marker',
            html: `<div style="background-color: #2B5F21; width: 10px; height: 10px; border-radius: 2px; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
            iconSize: [10, 10],
            iconAnchor: [5, 5]
        });

        const map = L.map(mapElement, {
            zoomControl: false,
            attributionControl: false
        }).setView([45.285, -117.2], 13);
        
        L.control.zoom({
            position: 'topright'
        }).addTo(map);

        // Using OpenTopoMap for terrain
        L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 17,
            attribution: ''
        }).addTo(map);
        
        // Add conservation area markers
        conservationAreas.forEach(area => {
            const marker = L.marker(area.coordinates, { icon: conservationIcon })
                .bindPopup(`
                    <div style="font-family: sans-serif; padding: 4px; min-width: 200px;">
                        <strong style="color: #1a3d65; font-size: 14px;">${area.name}</strong>
                        ${area.size ? `<br><span style="color: #666; font-size: 12px;">Size: ${area.size}</span>` : ''}
                        <br><span style="color: #666; font-size: 12px;">${area.description}</span>
                    </div>
                `);
            
            marker.addTo(map);
        });

        // Add parking markers
        parkingLocations.forEach(parking => {
            const parkingMarker = L.marker(parking.coordinates, { icon: parkingIcon })
                .bindPopup(`
                    <div style="font-family: sans-serif; padding: 4px;">
                        <strong style="color: #2B5F21;">Parking Area</strong><br>
                        <span style="color: #666; font-size: 12px;">${parking.name}</span>
                    </div>
                `);
            parkingMarker.addTo(map);
        });

        // Legend
        const legend = L.control({ position: 'bottomright' });
        legend.onAdd = function(map) {
            const div = L.DomUtil.create('div', 'legend');
            div.innerHTML = `
                <div style="background: white; padding: 10px; border-radius: 4px; box-shadow: 0 1px 5px rgba(0,0,0,0.2);">
                    <div style="margin-bottom: 5px;"><span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #1a3d65; border: 2px solid white; margin-right: 5px;"></span> Conservation Areas</div>
                    <div><span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background: #2B5F21; border: 2px solid white; margin-right: 5px;"></span> Parking Access</div>
                </div>
            `;
            return div;
        };
        legend.addTo(map);
    });
</script>

<svelte:head>
    <link 
        rel="stylesheet" 
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin=""
    />
</svelte:head>

<div 
    bind:this={mapElement} 
    class="w-full h-[600px] rounded-lg shadow-lg"
></div>

<style>
    :global(.leaflet-marker-shadow) {
        display: none;
    }
    
    :global(.leaflet-control-attribution) {
        display: none !important;
    }
    
    div {
        background-color: #f3f4f6;
    }
    
    :global(.leaflet-popup-content-wrapper) {
        border-radius: 4px;
        padding: 0;
    }
    
    :global(.leaflet-popup-content) {
        margin: 8px;
    }
</style>