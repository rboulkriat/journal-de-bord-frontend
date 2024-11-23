<script setup>
import HomePage from './components/HomePage.vue';
import '@fortawesome/fontawesome-free/css/all.css';

</script>

<template>
  <header class="header">
    <!-- Logo centré -->
    <div class="header-top">
      <div class="logo-container">
        <img alt="Logo" class="logo" src="./assets/logo.png" />
      </div>

      <!-- Icônes à droite -->
      <div class="social-icons">
        <a href="https://instagram.com" target="_blank">
          <img src="./assets/logo/inst.png" alt="Instagram" />
        </a>
        <a href="https://facebook.com" target="_blank">
          <img src="./assets/logo/fb.png" alt="Facebook" />
        </a>
        <a href="mailto:example@example.com">
          <img src="./assets/logo/email.png" alt="Email" />
        </a>
      </div>
    </div>

    <!-- Barre de navigation -->
    <nav class="navigation">
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
    </nav>
  </header>

  <!-- Contenu principal (body) -->
  <main>
    <HomePage />
  </main>

  <footer class="footer">
    <div class="footer-logo">Confidelle</div>
    <div class="footer-links">
      <a href="">À propos</a>
      <a href="">Services</a>
      <a href="">Contact</a>
      <a href="">Politique de confidentialité</a>
    </div>
    <div class="footer-socials">
      <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
      <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>

</template>

<!-- Import CSS -->
<style src="./assets/app.css"></style>
