<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    export let data;

    onMount(() => {
        try {
            if (data?.firstName)
                localStorage.setItem("firstName", data.firstName);
            if (data?.lastName) localStorage.setItem("lastName", data.lastName);
        } catch (e) {
            console.error("localStorage unavailable", e);
        }

        goto("/");
    });
</script>

<div>Signing you in…</div>
