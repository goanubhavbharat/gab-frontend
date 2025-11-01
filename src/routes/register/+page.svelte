<script lang="ts">
  import Zoho from "$lib/components/oauth2/Zoho.svelte";
  import Google from "$lib/components/oauth2/Google.svelte";
  import main_image from "$lib/assets/images/register_screen.webp";
</script>

<svelte:head>
  <title>Register | GoAnubhavBharat</title>
</svelte:head>

<section id="register-user" class="flex-none md:flex items-center h-screen">
  <div
    class="h-1/2 lg:h-full lg:w-3/4 w-full bg-cover bg-center"
    style={`background-image: url(${main_image});`}
  ></div>
  <div
    class="h-1/2 lg:w-1/4 flex flex-col bg-white p-18 md:p-24 rounded-md items-center"
  >
    <h1 class="text-3xl font-medium">Sign up</h1>
    <h2>to access portal via</h2>

    <section id="register-oidc" class="flex flex-col mt-6">
      <form action="?/zoho" method="POST">
        <button type="submit">
          <Zoho />
        </button>
      </form>
      <form action="?/google" method="POST">
        <button type="submit">
          <Google />
        </button>
      </form>
    </section>

    <section id="register-note" class="mt-6 text-justify">
      <p>
        Join the movement toward Vision 2047 — sign up today and be a catalyst in driving Sustainable Tourism across India.
      </p>
    </section>
  </div>
</section>
