<script lang="ts">
    import { PUBLIC_MEDIA_URL } from "$env/static/public";
    import Transits from "$lib/cards/Transits.svelte";
    import HowToReach from "$lib/cards/HowToReach.svelte";
    import Timing from "$lib/cards/Timing.svelte";
    import PlaceCard from "$lib/cards/Place.svelte";
    import { page } from "$app/state";

    let { data } = $props();

    const handleImgError = (ev: any) => {
        ev.target.src = "/images/main_image.jpeg";
    };
</script>

<svelte:head>
    <title>
        Experience {data.name} Tourism | Information, Organize Your Trip, Top Places
        to Visit, Images
    </title>
    <meta name="description" content={data.seo?.desc} />
    <meta name="keywords" content={data.seo?.kw} />
</svelte:head>

<section
    id="explore_{page.params.districtSlug}"
    class="mx-1 md:mx-2 lg:mx-3 px-1 md:px-2 my-3 md:my-4 flex flex-col lg:flex-row"
>
    <div class="lg:w-4/5 lg:pr-6 lg:border-r space-y-4 md:space-y-6">
        <!-- Article and list of images-->
        <div class="flex flex-col-reverse lg:flex-col space-y-4 md:space-y-6">
            <article id="short-note_{page.params.districtSlug}">
                <h3 class="font-semibold text-base text-[#4338ca]">
                    {data.info.heading}
                </h3>
                <p class="text-justify text-sm/6">
                    {data.info.note}
                </p>
            </article>
            <section id="top-images_{page.params.districtSlug}" class="mb-2">
                <h3
                    class="hidden lg:flex font-semibold text-base text-[#4338ca]"
                >
                    Images
                </h3>
                <div
                    class="my-1 flex flex-row overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-4 gap-2"
                >
                    {#each data.images as img}
                        <div class="aspect-video w-60 lg:w-full shrink-0">
                            <img
                                src="{PUBLIC_MEDIA_URL}{img.img}"
                                alt={img.imgAlt}
                                class="aspect-video w-60 lg:w-full object-cover rounded-t-md"
                                onerror={handleImgError}
                            />
                            <p
                                class="bg-[#f3f4f6] text-xs text-nowrap truncate p-2 rounded-b-md"
                            >
                                {img.imgAlt}
                            </p>
                        </div>
                    {/each}
                </div>
            </section>
        </div>

        {#if data.places }
            <div class="mb-6">
                <h3 class="text- font-semibold text-[#4338ca]">
                    Must-See Spots
                </h3>
                <div
                    class="py-1 flex flex-row overflow-x-auto gap-3 md:grid md:grid-cols-3 lg:grid-cols-4"
                >
                    {#each data.places as place, index}
                        <PlaceCard {place} rank={index + 1} />
                    {/each}
                </div>
            </div>
        {/if}
    </div>
    <section
        id="tips_{page.params.districtSlug}"
        class="lg:w-1/5 mb-2 md:mb-0 md:pl-6"
    >
        <h3 class="font-semibold text-base text-[#4338ca]">
            Organize Your Trip
        </h3>
        <div class="mb-2 lg:mb-6 lg:grid lg:grid-cols-1 lg:gap-1">
            <!-- How to Reach -->
            <HowToReach />

            <!-- Commute & Transit -->
            <Transits transports={[{ name: "Bus", shortName: "Tram" }]} />

            <!-- Timing -->
            <Timing/>
        </div>
    </section>
</section>
