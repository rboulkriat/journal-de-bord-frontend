<template>
  <div>
    <!-- Si l'utilisateur est connecté -->
    <div v-if="isAuthenticated" class="dashboard">
      <!-- Barre latérale -->
      <aside class="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>
            <button @click="navigateTo('/files')">Mes fichiers</button>
          </li>
          <li>
            <button @click="navigateTo('/settings')">Paramètres</button>
          </li>
          <li>
            <button @click="logout">Déconnexion</button>
          </li>
        </ul>
      </aside>

      <!-- Contenu principal -->
      <div class="main-content">
        <!-- En-tête -->
        <header class="dashboard-header">
          <h1>Notre Confidelle, {{ userName }}</h1>
          <p>Voici votre tableau de bord</p>
        </header>

        <!-- Section principale -->
        <section class="dashboard-body">
          <!-- Section pour résumé et statistiques -->
          <div class="stats-section">
            <h2>Vos Statistiques</h2>
            <div class="stats">
              <div class="stat-item">
                <h3>Fichiers créés</h3>
                <p>12</p>
              </div>
            </div>
          </div>

          <!-- Section pour graphiques -->
          <div class="charts-section">
            <h2>Vue d'ensemble</h2>
            <div class="charts">
              <div class="chart-item">
                <canvas id="filesChart"></canvas>
              </div>
              <div class="chart-item">
                <canvas id="usageChart"></canvas>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>


    <!-- Si l'utilisateur n'est pas connecté -->
    <div v-else class="not-authenticated">
      <!-- Section avec une image de fond -->
      <div class="bk-section">
        <div class="overlay1">
          <h1>Confidelle : Confidences & Réflexions 🌸</h1>
          <p>Un espace pour partager vos secrets en toute sécurité.</p>
        </div>
      </div>

      <!-- Section d'explication -->
      <div class="split-section">
        <!-- Colonne gauche avec le texte -->
        <div class="split-left">
          <h2>Pourquoi rejoindre Confidelle ?</h2>
          <p>
            Confidelle vous offre un espace sécurisé pour exprimer vos pensées, organiser vos idées, et partager vos secrets :
          </p>
          <p>Imaginez un endroit où vos pensées les plus profondes trouvent refuge.
            Chez Confidelle, nous croyons en la magie de l’expression personnelle.
            Que vous souhaitiez organiser vos idées, confier vos secrets ou simplement garder une trace de vos rêves,
            nous sommes là pour vous accompagner. 🌟</p>
        </div>

        <!-- Colonne droite avec l'image -->
        <div class="split-right">
          <img src="../assets/j2.webp" alt="Illustration Confidelle" />
        </div>
      </div>

      <div class="hearts">
        ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡ ♡
      </div>

      <!-- Section d'explication2 -->
      <div class="split-section2">
        <!-- Colonne gauche avec l'image -->
        <div class="split-left2">
          <img src="../assets/j1.jpg" alt="Illustration Confidelle" />
        </div>

        <!-- Colonne droite avec le texte -->
        <div class="split-right2">
          <h2>Pourquoi rejoindre Confidelle ?</h2>
          <p>
            Confidelle vous offre un espace sécurisé pour exprimer vos pensées, organiser vos idées, et partager vos secrets :
          </p>
          <p>
            Imaginez un endroit où vos pensées les plus profondes trouvent refuge.
            Chez Confidelle, nous croyons en la magie de l’expression personnelle.
            Que vous souhaitiez organiser vos idées, confier vos secrets ou simplement garder une trace de vos rêves,
            nous sommes là pour vous accompagner. 🌟
          </p>
        </div>
      </div>


      <!-- Section des boutons d'action -->
      <div class="actions-section">
        <div class="overlay2">
          <h2>Rejoignez-nous maintenant</h2>
          <p>Pour accéder à votre tableau de bord, veuillez vous connecter ou créer un compte.</p>
          <div class="actions">
            <router-link to="/connexion" class="btn">Se connecter</router-link>
            <router-link to="/inscription" class="btn">Créer un compte</router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

// État de connexion
const isAuthenticated = ref(localStorage.getItem("isAuthenticated") === "true");
const userName = ref(localStorage.getItem("userName") || "Utilisateur");

// Fonction de déconnexion
const logout = () => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("userName");
  window.location.href = "/connexion";
};

// Initialisation des graphiques uniquement si connecté
const initializeCharts = () => {
  const filesCanvas = document.getElementById('filesChart');
  const usageCanvas = document.getElementById('usageChart');

  if (filesCanvas && usageCanvas) {
    // Graphique pour les fichiers
    const filesCtx = filesCanvas.getContext('2d');
    new Chart(filesCtx, {
      type: 'bar',
      data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
        datasets: [
          {
            label: 'Fichiers créés',
            data: [5, 10, 15, 20, 12],
            backgroundColor: '#f1a5bf',
          },
        ],
      },
    });

    // Graphique pour l'utilisation
    const usageCtx = usageCanvas.getContext('2d');
    new Chart(usageCtx, {
      type: 'pie',
      data: {
        labels: ['Documents', 'Images', 'Vidéos', 'Autres'],
        datasets: [
          {
            data: [40, 30, 20, 10],
            backgroundColor: ['#f1a5bf', '#ffc1e3', '#f9f3f7', '#d8b4c8'],
          },
        ],
      },
    });
  }
};

// Surveiller l'état de connexion pour initialiser les graphiques
watch(isAuthenticated, (newValue) => {
  if (newValue) {
    initializeCharts();
  }
});

// Lancer l'initialisation au montage si connecté
onMounted(() => {
  if (isAuthenticated.value) {
    initializeCharts();
  }
});
import { useRouter } from 'vue-router';

// Utilisation de Vue Router pour la navigation
const router = useRouter();
// Fonction de navigation
const navigateTo = (path) => {
  router.push(path);
};
</script>

<style src="../assets/dashboard.css"></style>
