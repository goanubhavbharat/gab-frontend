<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { authStorage } from "$lib/shared/auth.svelte";


    onMount(() => {
        localStorage.removeItem("firstName")
        localStorage.removeItem("lastName")
        localStorage.removeItem("loggedIn")

        authStorage.set({firstName: "Guest", loggedIn: false});
        goto("/");
    });
</script>

<div>Logging out…</div>