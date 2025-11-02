<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";

    export let navOpen = false;
    export let userNavOpen = false;
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
            on:click={() => {
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

    <nav class="md:block {navOpen ? 'block' : 'hidden'}">
        <ul
            class="flex flex-col md:flex-row gap-y-3 md:gap-x-6 px-4 lg:px-8 pb-4 md:pb-0"
        >
            <li class="md:hidden text-base font-semibold">
                Start Your Journey
            </li>

            <li class="relative">
                <button
                    class="text-lg flex items-center"
                    on:click={() => {}}
                    aria-label="explore india by states"
                >
                    Explore
                </button>
            </li>

            <li class="relative">
                <button
                    class="text-lg flex items-center"
                    on:click={() => {}}
                    aria-label="explore india by states"
                >
                    Destinations
                </button>
            </li>

            <li class="relative">
                <button
                    class="text-lg flex items-center"
                    on:click={() => {}}
                    aria-label="explore india by states"
                >
                    Essentials
                </button>
            </li>
            <li class="flex flex-row justify-between items-center md:hidden">
                <p class="text-lg text-[#06038D]">Hi, Guest</p>
                <div>
                    <a
                        href="/auth/login"
                        class="text-lg border rounded-full px-3 py-2 bg-[#FF671F] text-white"
                        aria-label="login user">Login</a
                    >
                    <a
                        href="/auth/register"
                        class="text-lg border rounded-full px-3 py-2 bg-[#046A38] text-white"
                        aria-label="register user">Register</a
                    >
                </div>
            </li>
        </ul>
    </nav>

    <section
        class="hidden md:flex flex-row w-full justify-end gap-x-6 items-center"
    >
        <button
            class="border rounded-full px-4 py-2"
            on:click={() => {
                userNavOpen = !userNavOpen;
            }}>Hi, Guest</button
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
                on:click={() => (userNavOpen = false)}
                class="absolute inset-0 bg-gray-300 opacity-50 backdrop-blur-sm transition-opacity"
            ></button>

            <!-- Drawer Panel -->
            <div
                class="relative h-full w-full md:w-2/3 lg:w-1/4 bg-white"
            >
            <div class="p-6 flex flex-col h-full overflow-y-auto">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl font-medium">Welcome,</h2>
                    <button
                    aria-label="close drawer"
                            class="text-gray-500 hover:text-gray-800"
                            on:click={() => (userNavOpen = false)}
                        >
                            <i class="fa-solid fa-times text-2xl"></i>
                        </button>
                </div>
                <h3 class="text-lg font-medium">Guest</h3>
                <p class="text-gray-600 text-base">
                        Manage your account, view bookings, and personalize your travel experience.
                    </p>
                    <div class="flex flex-col gap-3 mt-6">
                        <a
                            href="/auth/login"
                            class="text-lg border rounded-full px-5 py-3 bg-[#FF671F] text-white text-center hover:bg-[#e85b16]"
                        >
                            Login
                        </a>
                        <a
                            href="/auth/register"
                            class="text-lg border rounded-full px-5 py-3 bg-[#046A38] text-white text-center hover:bg-[#03572e]"
                        >
                            Register
                        </a>
                    </div>
            </div>
        </div>
        </div>
    {/if}
</header>
