<script setup>
import { ref } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';

// Vérification de l'état connecté depuis localStorage
const isAuthenticated = ref(localStorage.getItem("isAuthenticated") === "true");
const userName = ref(localStorage.getItem("userName") || "");
// Fonction pour se déconnecter
const logout = () => {
  // Supprimez les données de connexion du localStorage
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("userName");

  // Mettez à jour l'état local
  isAuthenticated.value = false;
  userName.value = "";

  // Redirigez vers la page de connexion
  window.location.href = "/connexion";
};
</script>

<template>
  <header class="header">
    <div class="header-top">
      <!-- Logo centré -->
      <div class="logo-container">
        <img alt="Logo" class="logo" src="./assets/logo.png" />
      </div>

      <!-- Icônes sociales -->
      <div class="social-icons">
        <a href="https://www.instagram.com/confidelle.pro/" target="_blank">
          <img src="./assets/logo/inst.png" alt="Instagram" />
        </a>
        <a href="https://facebook.com" target="_blank">
          <img src="./assets/logo/fb.png" alt="Facebook" />
        </a>
        <a href="mailto:example@example.com">
          <img src="./assets/logo/email.png" alt="Email" />
        </a>
      </div>

      <!-- Menu utilisateur si connecté -->
      <div v-if="isAuthenticated" class="user-menu">
        <span class="user-name">{{ userName }}</span>
        <div class="dropdown">
          <button class="dropdown-button">
            <i class="fas fa-user"></i>
          </button>
          <ul class="dropdown-menu">
            <li><router-link to="/Dashboard">Mon profil</router-link></li>
            <li><router-link to="/settings">Paramètres</router-link></li>
            <li><button @click="logout">Se déconnecter</button></li>
          </ul>
        </div>
      </div>
    </div>


    <!-- Barre de navigation -->
    <nav class="navigation">
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
        <li><router-link to="/Dashboard">JOURNAL</router-link></li>

      </ul>
    </nav>
  </header>

  <!-- Contenu principal (body) -->
  <main>
    <router-view />
  </main>

  <footer class="footer">
    <div class="footer-logo">Confidelle</div>
    <div class="footer-links">
      <router-link to="/about">À propos</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/privacy">Politique de confidentialité</router-link>
    </div>
    <div class="footer-socials">
      <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/confidelle.pro/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>
</template>

<style src="./assets/app.css"></style>
