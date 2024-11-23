<script setup>
</script>


<template>
  <section class="background-section">
    <!-- Vidéo en arrière-plan -->
    <video autoplay muted loop class="background-video">
      <source src="../assets/fond1.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas les vidéos HTML5.
    </video>

    <!-- Grand rectangle vers le haut avec contenu -->
    <div class="overlay">
      <!-- Petit rectangle descendant au centre avec texte -->
      <div class="small-rectangle">
        <div class="content">
          <h1>Confidelle, le sanctuaire de vos pensées</h1>
          <p>Laissez vos mots s’épanouir dans un écrin de sérénité, là où vos confidences deviennent des trésors préservés.</p>
          <!-- Bouton au centre en bas -->
          <button class="cta-button">Commencer</button>
        </div>
      </div>
    </div>
  </section>


  <!-- Section Fonctionnalités -->
  <section class="features">
    <div class="features-left">
      <video autoplay muted loop class="background-video">
        <source src="../assets/video.mp4" type="video/mp4">
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
    </div>
    <div class="features-right">
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
