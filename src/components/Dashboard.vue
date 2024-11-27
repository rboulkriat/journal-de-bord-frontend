<template>
  <div class="dashboard">
    <!-- Barre latérale -->
    <aside class="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><router-link to="/overview">Vue d'ensemble</router-link></li>
        <li><router-link to="/files">Mes fichiers</router-link></li>
        <li><router-link to="/settings">Paramètres</router-link></li>
        <li><button @click="logout">Déconnexion</button></li>
      </ul>
    </aside>

    <!-- Contenu principal -->
    <div class="main-content">
      <!-- En-tête -->
      <header class="dashboard-header">
        <h1>Bienvenue, {{ userName }}</h1>
        <p>Voici votre tableau de bord</p>
      </header>

      <!-- Section principale -->
      <section class="dashboard-body">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Nom de l'utilisateur connecté
const userName = ref(localStorage.getItem("userName") || "Utilisateur");

// Fonction de déconnexion
const logout = () => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("userName");
  window.location.href = "/connexion";
};
</script>

<style scoped>
/* Global reset */
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* Layout principal */
.dashboard {
  display: flex;
  height: 100vh; /* Prend toute la hauteur de la fenêtre */
  overflow: hidden;
}

/* Barre latérale */
.sidebar {
  background-color: #f4f4f4;
  width: 250px;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar h2 {
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin-bottom: 15px;
}

.sidebar ul li a, .sidebar ul li button {
  text-decoration: none;
  color: #555;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: block;
  width: 100%;
  text-align: left;
  transition: background 0.3s, color 0.3s;
}

.sidebar ul li a:hover, .sidebar ul li button:hover {
  background-color: #ddd;
  color: #000;
}

/* Contenu principal */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

/* En-tête */
.dashboard-header {
  background-color: #f1a5bf;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.dashboard-header h1 {
  margin: 0;
  font-size: 24px;
}

.dashboard-header p {
  margin: 5px 0 0;
  font-size: 14px;
}

/* Section principale */
.dashboard-body {
  padding: 20px;
}
</style>
