<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { authStorage } from "$lib/shared/auth.svelte";

    let { data } = $props();

    onMount(() => {
        try {
            if (data?.firstName)
                localStorage.setItem("firstName", data?.firstName);
            if (data?.lastName)
                localStorage.setItem("lastName", data?.lastName);
            localStorage.setItem("loggedIn", "1");
            authStorage.set({firstName: String(data?.firstName), loggedIn: true})
        } catch (e) {
            console.error("localStorage unavailable", e);
        }

        goto("/");
    });


</script>

<div>Signing you in…</div>
