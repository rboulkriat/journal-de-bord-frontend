<script setup>
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Bienvenue 🌸</h1>
      <p>Connectez-vous pour retrouver votre univers Confidelle</p>

      <!-- Formulaire de connexion -->
      <form>
        <div class="form-group">
          <label for="email">Adresse Email</label>
          <input type="email" id="email" placeholder="Entrez votre email" required />
        </div>
        <div class="form-group">
          <label for="password">Mot de Passe</label>
          <input type="password" id="password" placeholder="Entrez votre mot de passe" required />
        </div>

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
