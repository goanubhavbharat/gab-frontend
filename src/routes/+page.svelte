<script lang="ts">
  import Logo from '$lib/components/Logo.svelte';
</script>

<section class="hero">
  <div class="hero-overlay">
    <nav class="navbar">
      <div class="nav-logo">
        <Logo />
      </div>
    </nav>

    <div class="hero-content">
      <h1 class="hero-title">Discover the Soul of India</h1>
      <p class="hero-subtitle">
        Curated travel experiences that connect you to India's rich heritage,
        vibrant culture, and breathtaking destinations.
      </p>
      <a href="mailto:contactus@goanubhavbharat.com" class="hero-btn">
        <i class="fas fa-envelope"></i> contactus@goanubhavbharat.com
      </a>
    </div>

    <footer class="hero-footer">
      &copy; {new Date().getFullYear()} GoAnubhavBharat. All rights reserved.
    </footer>
  </div>
</section>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  .hero {
    min-height: 100vh;
    background-image: url('/images/maha-kumbh.webp');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .hero-overlay {
    min-height: 100vh;
    background: linear-gradient(
      160deg,
      rgba(6, 3, 141, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(4, 106, 56, 0.6) 100%
    );
    display: flex;
    flex-direction: column;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }

  .nav-logo {
    width: 220px;
  }

  .nav-logo :global(svg) {
    width: 100%;
    height: auto;
  }


.hero-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
  }

  .hero-title {
    font-family: 'Yatra-One', serif;
    font-size: 3.5rem;
    color: #fff;
    margin: 0 0 1rem;
    line-height: 1.2;
    max-width: 700px;
    animation: fadeUp 0.8s ease-out;
  }

  .hero-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    line-height: 1.7;
    margin-bottom: 2rem;
    animation: fadeUp 0.8s ease-out 0.15s both;
  }

  .hero-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #ff671f, #e85d1a);
    color: #fff;
    padding: 0.9rem 2rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    animation: fadeUp 0.8s ease-out 0.3s both;
  }

  .hero-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 103, 31, 0.4);
  }

  .hero-footer {
    text-align: center;
    padding: 1.25rem;
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.8rem;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.4rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .nav-logo {
      width: 160px;
    }

}

  @media (max-width: 480px) {
    .hero-title {
      font-size: 2rem;
    }

    .navbar {
      padding: 1rem;
    }

    .nav-logo {
      width: 140px;
    }

    .hero-btn {
      font-size: 0.85rem;
      padding: 0.75rem 1.5rem;
    }
  }
</style>
