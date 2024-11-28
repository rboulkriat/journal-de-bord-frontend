<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push('/settings');
};
</script>

<template>
  <div class="about-container">
    <!-- Section Présentation -->
    <section class="about-section intro-section">
      <div class="section-content">
        <h1>À propos de nous</h1>
        <p>
          Bienvenue sur notre plateforme. Notre mission est de fournir un espace où vos pensées et vos idées peuvent s'épanouir dans un environnement sécurisé et inspirant.
        </p>
      </div>
    </section>

    <!-- Section Histoire -->
    <section class="about-section history-section">
      <div class="section-content">
        <h2>Notre Histoire</h2>
        <p>
          Confidelle a été fondée pour offrir une solution simple et élégante aux personnes souhaitant explorer leurs pensées et atteindre leurs objectifs. Ce projet est né d'une passion pour l'organisation, le bien-être mental, et la créativité.
        </p>
      </div>
    </section>

    <!-- Section Valeurs -->
    <section class="about-section values-section">
      <div class="section-content">
        <h2>Nos Valeurs</h2>
        <div class="values-grid">
          <div class="value-item">
            <h3>💡 Innovation</h3>
            <p>Créer des outils modernes et intuitifs pour répondre aux besoins actuels.</p>
          </div>
          <div class="value-item">
            <h3>🤝 Confiance</h3>
            <p>Garantir la confidentialité et la sécurité de vos données.</p>
          </div>
          <div class="value-item">
            <h3>🌟 Excellence</h3>
            <p>Offrir une expérience utilisateur exceptionnelle à travers un design soigné.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nouvelle Section : Nos Engagements -->
    <section class="about-section commitments-section">
      <div class="section-content">
        <h2>Nos Engagements</h2>
        <ul class="commitments-list">
          <li>
            <h3>🔒 Sécurité</h3>
            <p>Nous protégeons vos données avec les standards de sécurité les plus élevés.</p>
          </li>
          <li>
            <h3>🌍 Durabilité</h3>
            <p>Nous intégrons des pratiques responsables pour réduire notre empreinte numérique.</p>
          </li>
          <li>
            <h3>📈 Croissance Personnelle</h3>
            <p>Nous concevons des outils pour soutenir votre développement personnel et professionnel.</p>
          </li>
        </ul>
      </div>
    </section>

      <!-- Section Équipe -->
      <section class="about-team">
      <div class="team-content">
        <h2>Notre Équipe</h2>
        <p>
          Derrière Confidelle se cache une équipe passionnée d'experts en design, développement et expérience utilisateur.
        </p>
        <div class="team-grid">
          <div class="team-member">
            <img src="../assets/pdpRabab.png" alt="Membre 1" />
            <h3>Rabab Boulkriat</h3>
            <p>Développeuse Front-End</p>
          </div>
          <div class="team-member">
            <img src="../assets/pdpFiona.png" alt="Membre 2" />
            <h3>Fiona Borgazzi</h3>
            <p>Développeuse Front-End</p>
          </div>
          <div class="team-member">
            <img src="../assets/pdpCaroline.png" alt="Membre 3" />
            <h3>Caroline Zheng</h3>
            <p>Développeuse Front-End</p>
          </div>
          <div class="team-member">
            <img src="../assets/pdpSofia.png" alt="Membre 4" />
            <h3>Sofia Lopes</h3>
            <p>Développeuse Front-End</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Contact -->
    <section class="about-section contact-section">
      <div class="section-content">
        <h2>Contactez-nous</h2>
        <p>
          Vous avez des questions ou souhaitez en savoir plus ? N'hésitez pas à nous écrire.
        </p>
        <button class="contact-button" @click="goToLogin">Nous Contacter</button>
      </div>
    </section>
  </div>
</template>

<!-- Import CSS -->
<style src="../assets/about.css"></style>
