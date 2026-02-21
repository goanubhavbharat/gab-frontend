<script lang="ts">
  import { page } from "$app/state";
  import { PUBLIC_MEDIA_URL } from "$env/static/public";
  import Tabs from "$lib/components/Tabs.svelte";

  let { data, children } = $props();
</script>

<section
  id="hero-{page.params.stateSlug}"
  title="Background image with heading and short note for {data.state.name}"
  class="relative h-48 md:h-64 lg:h-132 mb-2"
  style="background-image: url({PUBLIC_MEDIA_URL}{data.state
    .img}); background-size: cover; background-position: center; alt={data.state
    .imgAlt};"
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

{@render children?.()}
