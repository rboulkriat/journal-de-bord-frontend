<script setup>
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
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </nav>
  </header>

  <!-- Contenu principal (body) -->
  <main>
    <!-- Remplace HomePage par router-view pour rendre les pages dynamiques -->
    <router-view />
  </main>

  <footer class="footer">
    <div class="footer-logo">Confidelle</div>
    <div class="footer-links">
      <router-link to="/">À propos</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/privacy">Politique de confidentialité</router-link>
    </div>
    <div class="footer-socials">
      <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
      <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>
</template>

<!-- Import CSS -->
<style src="./assets/app.css"></style>
