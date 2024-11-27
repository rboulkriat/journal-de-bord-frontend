<script setup>
import { ref } from 'vue';
import { connexionService } from '../services/connexion'; // Import du service
import { validatePasswords } from '../utils/passwordValidation'; // Import de la fonction de validation

// Champs du formulaire
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const message = ref(''); // Message de succès ou d'erreur

// Fonction pour gérer l'inscription
const handleRegister = (e) => {
  e.preventDefault(); // Empêche le rechargement de la page

  // Validation des mots de passe
  const passwordValidation = validatePasswords(password.value, confirmPassword.value);
  if (!passwordValidation.valid) {
    message.value = passwordValidation.message;
    return;
  }

  // Appeler la méthode register
  const result = connexionService.register(email.value, password.value, username.value);

  if (result.success) {
    message.value = result.message;

    // Réinitialiser le formulaire après une inscription réussie
    username.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';

    // Rediriger vers la page de connexion après un court délai
    setTimeout(() => {
      window.location.href = '/connexion';
    }, 1000);
  } else {
    message.value = result.message;
  }
};
</script>




<template>
  <div class="register-container">
    <div class="register-card">
      <h1>Créer un compte 🌸</h1>
      <p>Rejoignez Confidelle et commencez à explorer vos pensées.</p>

      <!-- Formulaire d'inscription -->
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="name">Nom complet</label>
          <input
              type="text"
              id="name"
              v-model="username"
              placeholder="Entrez votre nom"
              required
          />
        </div>
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
              placeholder="Choisissez un mot de passe"
              required
          />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirmez le Mot de Passe</label>
          <input
              type="password"
              id="confirm-password"
              v-model="confirmPassword"
              placeholder="Confirmez votre mot de passe"
              required
          />
        </div>

        <!-- Message d'erreur ou de succès -->
        <p v-if="message" class="message">{{ message }}</p>

        <!-- Bouton d'inscription -->
        <button type="submit" class="btn-register">S'inscrire</button>
      </form>

      <!-- Lien vers connexion -->
      <p class="login-link">
        Déjà membre ? <router-link to="/connexion">Connectez-vous ici</router-link>
      </p>
    </div>
  </div>
</template>

<style src="../assets/inscription.css"></style>
