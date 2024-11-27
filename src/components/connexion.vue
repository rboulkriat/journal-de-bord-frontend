<script setup>
import { ref } from 'vue';
import axios from 'axios'; // Si tu utilises axios

// Champs du formulaire
const email = ref('');
const password = ref('');
const message = ref(''); // Message de succès ou d'erreur

// Fonction pour gérer la soumission du formulaire
const handleLogin = async (e) => {
  e.preventDefault(); // Empêche le rechargement de la page

  try {
    // Appel à l'API de connexion
    const response = await axios.post('http://localhost:3000/connexion', {
      email: email.value,
      password: password.value,
    }, {
      headers: {
        'Content-Type': 'application/json', // S'assure que le type de contenu est JSON
      },
    });


    // Vérification de la réponse
    if (response.data.success) {
      message.value = 'Connexion réussie !';
      // Stocke le token si nécessaire
      localStorage.setItem('token', response.data.token);
      // Redirige l'utilisateur ou fais autre chose
      window.location.href = '/dashboard';
    } else {
      message.value = response.data.message; // Affiche le message d'erreur
    }
  } catch (error) {
    console.error(error);
    message.value = 'Une erreur est survenue lors de la connexion.';
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-card">
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
        Pas encore membre ? <a href="/inscription">Inscrivez-vous ici</a>
      </p>
    </div>
  </div>
</template>


<style src="../assets/connexion.css"></style>
