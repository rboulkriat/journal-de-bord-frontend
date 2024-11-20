<script setup>
  import HomePage from './components/HomePage.vue';
</script>

<template>
  <header>
    <!-- Logo aligné à gauche -->
    <img alt="Vue logo" class="logo" src="./assets/logo.png" />

    <!-- Navigation centrée -->
    <nav>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">À propos</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>


    <!-- Bouton Connexion aligné à droite -->
    <button class="btn-connexion">Connexion</button>
  </header>
  <!-- Contenu principal (body) -->
  <main>
    <HomePage />
  </main>

  <footer>
    <p>&copy; 2024 Mon Journal de Bord. Tous droits réservés.</p>
  </footer>
</template>


<!-- Import CSS -->
<style src="./assets/app.css"></style>
