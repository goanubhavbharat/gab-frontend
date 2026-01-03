<script lang="ts">
	import { PUBLIC_MEDIA_URL } from "$env/static/public";
	import District from "$lib/cards/District.svelte";
    import StateRegion from "$lib/cards/StateRegion.svelte";

	let { data } = $props();

	const handleImgError = (ev: any) => {
		ev.target.src = "/images/main_image.jpeg";
	};
</script>

<svelte:head>
	<title>
		Experience {data.name} Tourism | Top Destinations, Events & More
	</title>
	<meta name="description" content={data.seo.desc} />
	<meta name="keywords" content={data.seo.kw} />
</svelte:head>

<section
	id="explore_{data.params?.state}"
	class="mx-1 md:mx-2 lg:mx-3 px-1 md:px-2 my-3 md:my-4 flex flex-col-reverse lg:flex-row"
>
	<div class="lg:w-4/5 lg:pr-6 lg:border-r space-y-4 md:space-y-6">
		<article id="short-note_{data.params?.state}">
			<h3 class="font-semibold text-base text-[#4338ca]">
				{data.heading}
			</h3>
			<p class="text-justify text-sm/6">
				{data.note}
			</p>
		</article>
		{#if data.regions}
			<section id="state-regions_{data.params?.state}">
				<h3 class="font-semibold text-base text-[#4338ca]">
					Cultural and Historical Regions in {data.name}
				</h3>
				<div
					class="py-1 flex flex-row overflow-x-auto gap-3 md:grid md:grid-cols-3 lg:grid-cols-4"
				>
					{#each data.regions as region, index}
						<StateRegion rank={index + 1} stateSlug={data.params?.state} region={region} />
					{/each}
				</div>
			</section>
		{/if}

		{#if data.districts}
			<section id="top-districts_{data.params?.state}">
				<h3 class="font-semibold text-base text-[#4338ca]">
					Dream Destinations
				</h3>
				<div
					class="py-1 flex flex-row overflow-x-auto gap-3 md:grid md:grid-cols-3 lg:grid-cols-4"
				>
					{#each data.districts as dist, index}
						<District rank={index + 1} district={dist} />
					{/each}
				</div>
			</section>
		{/if}
	</div>
	<section
		id="top-images_{data.params?.state}"
		class="lg:w-1/5 mb-2 md:mb-0 md:pl-6"
	>
		<h3 class="hidden lg:flex font-semibold text-base text-[#4338ca]">
			Images
		</h3>
		<div
			class="my-1 flex flex-row overflow-x-auto scrollbar-hide gap-2 lg:flex-col"
		>
			{#each data.images as img}
				<div class="aspect-video w-60 lg:w-full shrink-0">
					<img
						src="{PUBLIC_MEDIA_URL}{img.image}"
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
</section>
