<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
</script>

<footer class="mt-3 text-black relative bg-[#f1f5f9]">
    <nav class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-0">
        <div id="footer-primary">
            <!-- Logo Section -->

            <a
                id="home-footer"
                href="/"
                aria-label="Go to GoAnubhavBharat home page"
                class="flex w-48 lg:w-60"
            >
                <Logo />
                <sup class="text-[10px]">TM</sup>
            </a>

            <!-- Social Media -->
            <div id="social-media" class="text-left my-6">
                <h2 class="font-semibold mb-2">Stay Connected</h2>
                <div class="flex justify-start space-x-4">
                    <a
                        href="https://facebook.com/goanubhavbharat"
                        target="_blank"
                        aria-label="facebook"
                    >
                        <i
                            class="fa-brands fa-facebook text-lg hover:text-[#FF671F]"
                        ></i>
                    </a>
                    <a
                        href="https://x.com/goanubhavbharat"
                        target="_blank"
                        aria-label="x"
                    >
                        <i
                            class="fa-brands fa-x-twitter text-lg hover:text-[#FF671F]"
                        ></i>
                    </a>
                    <a
                        href="https://instagram.com/goanubhavbharat/"
                        target="_blank"
                        aria-label="instagram"
                    >
                        <i
                            class="fa-brands fa-instagram text-lg hover:text-[#FF671F]"
                        ></i>
                    </a>
                    <a
                        href="https://linkedin.com/showcase/goanubhavbharat/"
                        target="_blank"
                        aria-label="linkedin"
                    >
                        <i
                            class="fa-brands fa-linkedin text-lg hover:text-[#FF671F]"
                        ></i>
                    </a>
                    <a
                        href="https://www.youtube.com/@goanubhavbharat"
                        target="_blank"
                        aria-label="youtube"
                    >
                        <i
                            class="fa-brands fa-youtube text-lg hover:text-[#FF671F]"
                        ></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Quick Links Section -->
        <div class="text-left">
            <h2 class="font-semibold mb-2">Quick Links</h2>
            <ul class="space-y-2">
                <li><a href="/faqs" class="hover:text-[#FF671F]">FAQs</a></li>
                <li>
                    <a href="/privacy-policy" class="hover:text-[#FF671F]"
                        >Privacy Policy</a
                    >
                </li>
                <li>
                    <a href="/terms" class="hover:text-[#FF671F]"
                        >Terms of Service</a
                    >
                </li>
            </ul>
        </div>

        <!-- Quick Links Section -->
        <div class="text-left">
            <h2 class="font-semibold mb-2">Company</h2>
            <ul class="space-y-2">
                <li>
                    <a href="/about-us" class="hover:text-[#FF671F]">About Us</a
                    >
                </li>
                <li>
                    <a href="/contact-us" class="hover:text-[#FF671F]"
                        >Contact Us</a
                    >
                </li>
            </ul>
        </div>

        <!-- Company Info -->
        <div
            class="col-span-full mt-4 border-t pt-4 text-center text-sm text-gray-600"
        >
            &copy; 2025 GoAnubhavBharat — Built with
            <span class="text-red-500">❤️</span> and pride in India
            <span class="ml-1">🇮🇳</span>
        </div>
    </nav>
</footer>
