<script lang="ts">
    import { PUBLIC_MEDIA_URL } from "$env/static/public";

    export let rank;
    export let place;

    const handleImgError = (ev: any) => {
        console.log(typeof(ev))
        ev.target.src = "/images/main_image.jpeg"
    }
    
</script>

<div
    class="place-card flex flex-col rounded-lg bg-slate-200 shadow-md overflow-hidden relative shrink-0 group"
>
    <a href="/destination/{place.slug}" class="block relative" rel="">
        <div class="w-full aspect-video h-36 md:h-48 overflow-hidden relative">
            <img
                class="object-cover w-full h-full rounded-t-lg shadow-lg group-hover:scale-110 transition-transform duration-500 border-b-4 border-[#FF671F]"
                src="{PUBLIC_MEDIA_URL}{place.img}"
                alt={place.imgAlt}
                onerror={handleImgError}
            />
        </div>
        <div class="p-2 lg:p-4 bg-white rounded-b-lg flex flex-col items-center">
            <p
                class="text-gray-900 font-semibold leading-tight text-md mb-1 flex items-center gap-3"
            >
                <span class="rank-badge">{rank}</span>
                {place.name}
            </p>
        </div>
    </a>
</div>

<style>
    .place-card {
        background: linear-gradient(
            135deg,
            #ffe5b4 0%,
            #e0e7ff 50%,
            #fef3c7 100%
        );
        border-radius: 0.5rem;
        overflow: hidden;
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
    }
    .place-card:hover {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    .rank-badge {
        padding: 0.2rem 0.4rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        background: #ff671f;
        color: #fff;
        margin-right: 0.25rem;
        font-size: 0.75rem /* 12px */;
        line-height: 1rem /* 16px */;
    }
</style>