<script setup>
import { ref } from 'vue';
import { connexionService } from '../services/connexion'; // Import du service

// Simuler l'état de connexion
const isAuthenticated = ref(false); // Modifier à `true` si l'utilisateur est connecté
const userName = ref(""); // Nom de l'utilisateur connecté

// Exemple : Vérifier si l'utilisateur est déjà connecté
if (localStorage.getItem("isAuthenticated") === "true") {
  isAuthenticated.value = true;
  userName.value = localStorage.getItem("userName"); // Charger le nom stocké
}

// Champs du formulaire
const email = ref('');
const password = ref('');
const message = ref(''); // Message de succès ou d'erreur

// Fonction pour gérer la soumission du formulaire
const handleLogin = (e) => {
  e.preventDefault();

  // Appeler la méthode login
  const result = connexionService.login(email.value, password.value);

  if (result.success) {
    message.value = result.message;
    isAuthenticated.value = true;
    userName.value = result.message.split(", ")[1].replace("!", "");

    // Stocker l'état de connexion dans localStorage
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userName", userName.value);

    // Rediriger après une courte pause
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } else {
    message.value = result.message;
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-card" v-if="!isAuthenticated">
      <h1>Bienvenue 🌸</h1>
      <p>Connectez-vous pour retrouver votre univers Confidelle</p>

      <!-- Formulaire de connexion -->
      <form @submit="handleLogin">
        <div class="form-group">
          <label for="email">Adresse Email</label>
          <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Entrez votre email"
              required
          />
        </div>
        <div class="form-group">
          <label for="password">Mot de Passe</label>
          <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Entrez votre mot de passe"
              required
          />
        </div>

        <!-- Message d'erreur ou de succès -->
        <p v-if="message" class="message">{{ message }}</p>

        <!-- Bouton de connexion -->
        <button type="submit" class="btn-login">Se connecter</button>
      </form>

      <!-- Lien vers inscription -->
      <p class="register-link">
        Pas encore membre ?
        <router-link to="/inscription">Inscrivez-vous ici</router-link>
      </p>
    </div>

    <div class="already-logged-in" v-else>
      <h1>Vous êtes déjà connecté</h1>
      <p>Bonjour, {{ userName }} !</p>
      <router-link to="/">Retourner à l'accueil</router-link>
    </div>
  </div>
</template>



<style src="../assets/connexion.css"></style>