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


  <!-- Section Présentation -->
  <section class="about-confidelle">
    <h2>Confidelle : Votre Partenaire pour Organiser vos Pensées</h2>
    <p class="intro">
      Confidelle est bien plus qu’un journal de bord. C’est un espace intime conçu pour vous aider à structurer vos pensées, exprimer vos émotions et atteindre vos objectifs. Avec des outils simples et intuitifs, Confidelle vous accompagne au quotidien pour explorer vos idées et transformer vos rêves en réalité.
    </p>
    <div class="features-container">
      <div class="feature">
        <h3>🌟 Explorez vos pensées</h3>
        <p>
          Écrivez en toute liberté. Confidelle est un espace où chaque mot compte, sans jugement ni contrainte.
        </p>
      </div>
      <div class="feature">
        <h3>📊 Suivez vos progrès</h3>
        <p>
          Gardez un œil sur vos accomplissements grâce à des outils de suivi personnalisés pour rester motivé.
        </p>
      </div>
      <div class="feature">
        <h3>🔒 Un espace sécurisé</h3>
        <p>
          Vos confidences restent privées. Confidelle garantit la confidentialité de vos écrits avec des technologies de pointe.
        </p>
      </div>
    </div>
  </section>

  <!-- Section Contact -->
  <section class="contact">
    <div class="contact-content">
      <h2>Prêt à transformer vos pensées avec Confidelle ?</h2>
      <p>
        Commencez votre voyage vers un esprit plus clair et organisé. Rejoignez-nous aujourd’hui et découvrez un espace conçu pour vos idées, vos rêves et vos confidences.
      </p>
      <button class="cta">Créer mon compte</button>
    </div>
  </section>

</template>


<!-- Import CSS -->
<style src="../assets/homepage.css"></style>
