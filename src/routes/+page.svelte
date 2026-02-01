<script lang="ts">
  import Logo from '$lib/components/Logo.svelte';
</script>

<main class="page">
  <div class="overlay">
    <section class="card">
      <Logo/>

      <h1>We’re building something exciting</h1>

      <p class="subtitle">
        Our platform is launching soon.<br />
        Stay tuned — big things are coming.
      </p>

      <div class="divider"></div>

      <!-- <p class="notify">
        Want to be the first to know?
      </p>

      <form
        class="form"
        on:submit|preventDefault={() => alert('Thanks!')}
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit">Notify me</button>
      </form> -->

      <footer>
        © {new Date().getFullYear()} • All rights reserved
      </footer>
    </section>
  </div>
</main>

<style>
  .page {
    min-height: 100vh;
    background-image: url('/images/maha-kumbh.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  /* Dark overlay for readability */
  .overlay {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.55)
    );
  }

  .card {
    background: #ffffff;
    border-radius: 20px;
    padding: 3rem 2.5rem;
    max-width: 520px;
    width: 100%;
    text-align: center;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
    animation: fadeUp 0.6s ease-out;
  }

  h1 {
    font-size: 1.8rem;
    margin: 0.5rem 0;
    color: #06038d;
  }

  .subtitle {
    color: #444;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .divider {
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      #ddd,
      transparent
    );
    margin: 2rem 0;
  }

  /* .notify {
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .form {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  input {
    flex: 1;
    padding: 0.75rem 1rem;
    border-radius: 999px;
    border: 1px solid #ccc;
    font-size: 0.95rem;
    outline: none;
  }

  input:focus {
    border-color: #06038d;
  }

  button {
    padding: 0.75rem 1.25rem;
    border-radius: 999px;
    border: none;
    background: linear-gradient(
      135deg,
      #ff671f,
      #046a38
    );
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  } */

  footer {
    margin-top: 2rem;
    font-size: 0.8rem;
    color: #888;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
