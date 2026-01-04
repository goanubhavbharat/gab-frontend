<script lang="ts">
    import { page } from "$app/state";
    import { PUBLIC_MEDIA_URL } from "$env/static/public";
    import Tabs from "$lib/components/Tabs.svelte";

    let { data, children } = $props();
</script>

<nav aria-label="Breadcrumb" class="bg-white px-2 md:px-4 lg:px-6 py-2 font-semibold text-[#1e1b4b]/90 text-sm">
  <ol class="flex gap-2">
    <li><a href="/explore/{data.state.slug}">{data.state.name}</a></li>
    <li aria-current="page">{">"}&nbsp&nbsp&nbsp{data.district.name}</li>
  </ol>
</nav>

<section
    id="hero-{page.params.districtSlug}"
    title="Background image with heading and short note for {data.district.name}"
    class="relative h-48 md:h-64 lg:h-132 mb-2"
    style="background-image: url({PUBLIC_MEDIA_URL}{data.district.img}); background-size: cover; background-position: center;"
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
    slug={page.params.districtSlug}
    navigatePage={"destination"}
/>

{@render children?.()}
