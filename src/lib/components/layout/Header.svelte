<script lang="ts">
    import { goto } from "$app/navigation";
    import Logo from "$lib/components/Logo.svelte";
    import { authStorage } from "$lib/shared/auth.svelte";
    import regions from "$lib/data/regions.json";

    export let navOpen = false;
    export let userNavOpen = false;
    export let submenus: Record<string, boolean> = {};

    // toggle submenu by key
    function toggleSubmenu(key: any) {
        submenus = { ...submenus, [String(key)]: !submenus[String(key)] };
    }
</script>

<header class="relative lg:flex items-center bg-[#f1f5f9]">
    <section class="flex px-4 py-5 justify-between relative z-50 items-center">
        <!-- Logo Section -->
        <a
            id="home-header"
            href="/"
            aria-label="Go to GoAnubhavBharat home page"
            class="w-48 lg:w-56"
        >
            <Logo />
        </a>

        <!-- Mobile Menu -->
        <button
            class="md:hidden rounded"
            aria-label="header mobile menu"
            aria-expanded={navOpen}
            onclick={() => {
                navOpen = !navOpen;
            }}
        >
            {#if navOpen}
                <i class="fa-solid fa-times text-lg text-red-700"></i>
            {:else}
                <i class="fa-solid fa-bars text-lg"></i>
            {/if}
        </button>
    </section>

    <nav class="md:block {navOpen ? 'block' : 'hidden'} z-10">
        <ul
            class="flex flex-col md:flex-row gap-y-3 md:gap-x-6 px-4 lg:px-8 pb-4 md:pb-0"
        >
            <li class="md:hidden text-base font-semibold">
                Start Your Journey
            </li>

            <li class="relative">
                <button
                    class="header-options-list flex items-center gap-1 w-full"
                    onclick={() => toggleSubmenu("explore")}
                    aria-label="explore india by region states"
                >
                    Explore
                    <i
                        class={`fa-solid ml-auto lg:ml-1 ${submenus.explore ? "fa-caret-up" : "fa-caret-down"}`}
                    ></i>
                </button>
                <ul
                    class={`my-3 md:my-0 z-30 md:absolute md:ml-0 md:top-full md:left-0 bg-white border rounded-md shadow-md md:min-w-[700px] lg:min-w-[900px] ${
                        submenus.explore ? "block" : "hidden md:hidden"
                    }`}
                >
                    {#each regions.regions as reg}
                        <li
                            class="font-semibold relative px-4 py-2 text-[#06038D]"
                        >
                            {reg.name}
                            <ul
                                class="font-normal grid grid-cols-2 lg:flex lg:space-x-3 py-2 text-gray-600"
                            >
                                {#each reg.states as st}
                                    <li>
                                        <a
                                            data-sveltekit-reload
                                            id={st.name}
                                            href="/state/{st.slug}"
                                            class="hover:font-medium hover:text-[#FF671F] p-1"
                                            aria-label="Go to {st.name} tourism page"
                                        >
                                            {st.name}
                                        </a>
                                    </li>
                                {/each}
                            </ul>
                        </li>
                    {/each}
                </ul>
            </li>

            <li class="relative">
                <button
                    class="text-lg flex items-center"
                    onclick={() => {}}
                    aria-label="explore india by states"
                >
                    Destinations
                </button>
            </li>

            <li class="relative">
                <button
                    class="text-lg flex items-center"
                    onclick={() => {}}
                    aria-label="explore india by states"
                >
                    Essentials
                </button>
            </li>
            <li class="flex flex-row justify-between items-center md:hidden">
                <p class="text-lg text-[#06038D]">
                    Hi, {$authStorage.firstName}
                </p>
                <div>
                    {#if $authStorage.loggedIn == false}
                        <a
                            onclick={() => {
                                navOpen = false;
                            }}
                            href="/auth/login"
                            class="text-lg border rounded-full px-3 py-2 bg-[#FF671F] text-white"
                            aria-label="login user">Login</a
                        >
                        <a
                            onclick={() => {
                                navOpen = false;
                            }}
                            href="/auth/register"
                            class="text-lg border rounded-full px-3 py-2 bg-[#046A38] text-white"
                            aria-label="register user">Register</a
                        >
                    {:else}
                        <button
                            onclick={() => {
                                userNavOpen = false;
                                goto("/auth/logout");
                            }}
                            class="text-lg border rounded-full px-5 py-3 bg-red-600 text-white text-center hover:bg-red-800"
                        >
                            Logout
                        </button>
                    {/if}
                </div>
            </li>
        </ul>
    </nav>

    <section
        class="hidden md:flex flex-row w-full justify-end gap-x-6 items-center"
    >
        <button
            class="border rounded-full px-4 py-2"
            onclick={() => {
                userNavOpen = !userNavOpen;
            }}>Hi, {$authStorage.firstName}</button
        >
        <div></div>
    </section>

    {#if userNavOpen}
        <div
            class="fixed inset-0 z-50 flex justify-end transition-all ease-in-out"
        >
            <!-- Background Overlay -->
            <button
                aria-label="close drawer"
                onclick={() => (userNavOpen = false)}
                class="absolute inset-0 bg-gray-300 opacity-50 backdrop-blur-sm transition-opacity"
            ></button>

            <!-- Drawer Panel -->
            <div class="relative h-full w-full md:w-2/3 lg:w-1/4 bg-white">
                <div class="p-6 flex flex-col h-full overflow-y-auto">
                    <div class="flex justify-between items-center">
                        <h2 class="text-xl font-medium">Welcome,</h2>
                        <button
                            aria-label="close drawer"
                            class="text-gray-500 hover:text-gray-800"
                            onclick={() => (userNavOpen = false)}
                        >
                            <i class="fa-solid fa-times text-2xl"></i>
                        </button>
                    </div>
                    <h3 class="text-lg font-medium">
                        {$authStorage.firstName}
                    </h3>
                    <p class="text-gray-600 text-base">
                        Manage your account, view bookings, and personalize your
                        travel experience.
                    </p>
                    <div class="flex flex-col gap-3 mt-6">
                        {#if $authStorage.loggedIn == false}
                            <a
                                onclick={() => (userNavOpen = false)}
                                href="/auth/login"
                                class="text-lg border rounded-full px-5 py-3 bg-[#FF671F] text-white text-center hover:bg-[#e85b16]"
                            >
                                Login
                            </a>
                            <a
                                onclick={() => (userNavOpen = false)}
                                href="/auth/register"
                                class="text-lg border rounded-full px-5 py-3 bg-[#046A38] text-white text-center"
                            >
                                Register
                            </a>
                        {:else}
                            <!-- <a
                                onclick={() => (userNavOpen = false)}
                                href="/in/{username}"
                                class="text-lg border rounded-full px-5 py-3 bg-[#FF671F] text-white text-center"
                            >
                                Profile
                            </a>
                            <a
                                onclick={() => (userNavOpen = false)}
                                href="/in/{username}/trips"
                                class="text-lg border rounded-full px-5 py-3 bg-[#046A38] text-white text-center"
                            >
                                Trips
                            </a> -->
                            <button
                                onclick={() => {
                                    userNavOpen = false;
                                    goto("/auth/logout");
                                }}
                                class="text-lg border rounded-full px-5 py-3 bg-red-600 text-white text-center hover:bg-red-800"
                            >
                                Logout
                            </button>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {/if}
</header>

<style>
    .header-name {
        font-family: "Yatra One", system-ui;
    }
    .header-options-list {
        font-weight: 450;
        font-size: medium;
    }
    .header-options-list:hover {
        color: #ff671f;
    }
</style>
