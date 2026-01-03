<script lang="ts">
	import District from "$lib/cards/District.svelte";

	let { data } = $props();

	const handleImgError = (ev: any) => {
		ev.target.src = "/images/main_image.jpeg";
	};
</script>

<svelte:head>
	<title>
		Top {data.districts.length ? data.districts.length  : ""} Districts To Visit In {data.name}
		| Districts to Visit, Places to Visit
	</title>
	<meta name="description" content={data.seo.desc} />
	<meta name="keywords" content={data.seo.kw} />
</svelte:head>

<section
	id="districts_{data.params?.state}"
	class="mx-1 md:mx-2 lg:mx-3 px-1 md:px-2 my-3 md:my-4 flex flex-col"
>
	<article class="text-[#4a5568] text-md/6">
		You can explore hidden gems, each holding unique experiences waiting to
		be discovered in <span class="font-medium text-[#FF671F]"
			>{data.name}</span
		>.
	</article>
	{#if data.districts && data.districts.length > 0}
		<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-3">
			{#each data.districts as dist, index}
				<District rank={index + 1} district={dist} />
			{/each}
		</div>
	{/if}
</section>