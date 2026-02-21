<script lang="ts">
    import { PUBLIC_MEDIA_URL } from "$env/static/public";

    let { data } = $props();

    const handleImgError = (ev: any) => {
        ev.target.src = "/images/main_image.jpeg";
    };
</script>

