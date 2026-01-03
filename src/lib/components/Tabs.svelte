<script lang="ts">
    import { goto } from "$app/navigation";

    export let tabs;
    export let lastPath;
    export let slug: any;
    export let navigatePage: String;

    function navigateToPageSection(tab: any) {
        if (tab.link != slug) {
            goto(`/${navigatePage}/${slug}/${tab.link}`);
        } else {
            goto(`/${navigatePage}/${slug}`);
        }
    }
</script>

<section
    id="{slug}-tabs"
    class="sticky top-0 bg-white z-40"
>
    <div
        class="flex text-nowrap items-center overflow-x-auto mx-1 px-1 gap-4 md:mx-2 md:px-2 md:gap-6 lg:mx-3 lg:px-3 lg:gap-8"
    >
        {#each tabs as tab}
            <button
                class={`flex py-1 text-md font-medium ${
                    lastPath.match(slug) && tab?.link == null
                        ? "active-tab"
                        : lastPath.match(tab.link)
                          ? "active-tab"
                          : "text-gray-600"
                }`}
                on:click={() => navigateToPageSection(tab)}
            >
                <h2>{tab.name}</h2>
            </button>
        {/each}
        <div class="flex-1"></div>
    </div>
    <hr class="h-px mb-1 border-0 bg-gray-300" />
</section>

<style>
    .active-tab {
        color: #06038d;
        border-bottom: 2px solid #ff671f;
    }
</style>