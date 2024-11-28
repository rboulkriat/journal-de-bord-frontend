<template>
  <div id="journal">
    <h1 class="titre-principal">Journal de Bord</h1>

  
    <div class="carnet">
      <h2 class="sous-titre">Ajouter un secret</h2>
      <input
          class="champ-titre"
          v-model="nouveauTitre"
          placeholder="Titre du secret..."
      />
      <input
          class="champ-message"
          v-model="nouveauMessage"
          placeholder="Écris un secret..."
      />
      <button class="bouton-ajouter" @click="ajouterMessage">Ajouter</button>
    </div>
    <div class="carnet">
      <h2 class="sous-titre">Mes secrets</h2>
      <div class="page">
        <ul class="liste-secrets">
          <li class="element-secret" v-for="(message, index) in messages" :key="index">
            <h3 class="titre-secret">{{ message.titre }}</h3>
            <button class="bouton-afficher" @click="afficherMessage(index)">
              {{ message.affiche ? 'Masquer' : 'Afficher' }}
            </button>
            <!-- Texte du message -->
            <p v-if="message.affiche">{{ message.texte }}</p>
            <!-- Bouton pour supprimer un message -->
            <button class="bouton-supprimer" @click="supprimerMessage(index)">
              Supprimer
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: '',
      nouveauTitre: '',       // Nouveau titre du message
      nouveauMessage: '',     // Texte du nouveau message
      messages: []            // Liste des messages avec titres
    };
  },
  methods: {
    ajouterMessage() {
      if (this.nouveauTitre.trim() && this.nouveauMessage.trim()) {
        this.messages.push({
          username: this.username,
          titre: this.nouveauTitre,
          texte: this.nouveauMessage,
          affiche: false // Par défaut, le texte est masqué
        });
        this.nouveauTitre = '';
        this.nouveauMessage = '';
        this.sauvegarderMessages();
      }
    },
    supprimerMessage(index) {
      this.messages.splice(index, 1);
      this.sauvegarderMessages();
    },
    sauvegarderMessages() {
      localStorage.setItem('messages', JSON.stringify(this.messages));
    },
    chargerMessages() {
      const messagesStockes = localStorage.getItem('messages');
      if (messagesStockes) {
        const tousLesMessages = JSON.parse(messagesStockes);
        this.messages = tousLesMessages.filter(
          message => message.username === this.username
        );
      }
    },
    afficherMessage(index) {
      this.messages[index].affiche = !this.messages[index].affiche;
    },
    recupererUsername() {
      const usernameStocke = localStorage.getItem('userName');
      this.username = usernameStocke || 'Utilisateur Anonyme';
    }
  },
  mounted() {
    this.recupererUsername();
    this.chargerMessages();
  }
};
</script>

<style src="../assets/journal.css"></style>
