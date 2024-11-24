<template>
  <div class="register-container">
    <div class="register-card">
      <h1>Créer un compte 🌸</h1>
      <p>Rejoignez Confidelle et commencez à explorer vos pensées.</p>

      <!-- Formulaire d'inscription -->
      <form>
        <div class="form-group">
          <label for="name">Nom complet</label>
          <input type="text" id="name" placeholder="Entrez votre nom" required />
        </div>
        <div class="form-group">
          <label for="email">Adresse Email</label>
          <input type="email" id="email" placeholder="Entrez votre email" required />
        </div>
        <div class="form-group">
          <label for="password">Mot de Passe</label>
          <input type="password" id="password" placeholder="Choisissez un mot de passe" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirmez le Mot de Passe</label>
          <input type="password" id="confirm-password" placeholder="Confirmez votre mot de passe" required />
        </div>

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

<script setup>
</script>

<style src="../assets/inscription.css"></style>
