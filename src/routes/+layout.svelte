<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";

	import Footer from "$lib/components/layout/Footer.svelte";
	import Header from "$lib/components/layout/Header.svelte";
	import { onMount } from "svelte";
	import { authStorage } from "$lib/shared/auth.svelte";

	let { children } = $props();

	onMount(() => {
		const firstName = localStorage.getItem("firstName");
		const loggedIn = localStorage.getItem("loggedIn");

		if (firstName && loggedIn == "1") {
			authStorage.set({ firstName: firstName, loggedIn: true });
		} else {
			authStorage.set({ firstName: "Guest", loggedIn: false });
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children?.()}

<Footer />
