<script setup>
</script>


<template>
  <section class="background-section">
    <!-- Grand rectangle vers le haut -->
    <div class="overlay">
      <!-- Petit rectangle descendant au centre avec texte -->
      <div class="small-rectangle">
        <div class="content">
          <h1>Bienvenue dans Mon Journal</h1>
          <p>Explorez vos pensées, vos rêves et vos idées.</p>
          <!-- Bouton au centre en bas -->
          <button class="cta-button">Commencer</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Fonctionnalités -->
  <section class="features">
    <div class="feature">
      <img src="../assets/mood.webp" alt="Suivi d'humeur" />
      <h3>Suivi de l’humeur</h3>
      <p>Notez comment vous vous sentez chaque jour et suivez vos émotions au fil du temps.</p>
    </div>
    <div class="feature">
      <img src="../assets/goals.webp" alt="Objectifs personnels" />
      <h3>Objectifs personnels</h3>
      <p>Définissez vos objectifs et suivez vos progrès avec des outils intuitifs.</p>
    </div>
    <div class="feature">
      <img src="../assets/journal.webp" alt="Réflexions quotidiennes" />
      <h3>Réflexions quotidiennes</h3>
      <p>Exprimez vos pensées, vos idées et vos inspirations chaque jour.</p>
    </div>
  </section>

  <!-- Section Témoignages -->
  <section class="testimonials">
    <h2>Ce que disent nos utilisateurs</h2>
    <div class="testimonial">
      <img src="" alt="Utilisateur 1" />
      <p>“Ce journal m’a aidé à organiser mes pensées et à atteindre mes objectifs. Merci !”</p>
      <h4>- Alice D.</h4>
    </div>
    <div class="testimonial">
      <img src="" alt="Utilisateur 2" />
      <p>“Une interface simple et efficace qui m’accompagne tous les jours.”</p>
      <h4>- Jean M.</h4>
    </div>
  </section>

  <!-- Section Contact -->
  <section class="contact">
    <h2>Rejoignez-nous dès aujourd’hui</h2>
    <p>Créez votre journal personnel et commencez à explorer vos possibilités.</p>
    <button class="cta">Inscrivez-vous maintenant</button>
  </section>
</template>


<!-- Import CSS -->
<style src="../assets/homepage.css"></style>
