<script lang="ts">
    import Tabs from "$lib/components/Tabs.svelte";
    import { page } from "$app/state";

    let { data, children } = $props();
</script>

{#if !page.params?.regionSlug}
    <section
        id="hero-{page.params.stateSlug}"
        title="Background image with heading and short note for {data.name}"
        class="relative h-48 md:h-64 lg:h-96 mb-2"
        style="background-image: url(/images/main_image.jpeg); background-size: cover; background-position: center;"
    >
        <div class="absolute inset-0 content-end pb-0">
            <h1
                class="bg-[#1e1b4b]/90 1 px-2 md:px-4 lg:px-6 py-2 font-semibold text-[#FF671F] text-2xl"
            >
                {data.title}
            </h1>
        </div>
    </section>

    <Tabs
        tabs={data.tabs}
        lastPath={data.lastPath}
        slug={page.params.stateSlug}
        navigatePage={"explore"}
    />
{/if}

{@render children?.()}
