<template>
  <div id="app">
    <h1>Journal de Bord</h1>
    <div class="book">
    <!-- Entrée pour le titre -->
    <input class="titre" v-model="nouveauTitre" placeholder="Titre du secret..." />
    <!-- Entrée pour le message -->
    <input class="message" v-model="nouveauMessage" placeholder="Écris un secret..." />
    
    <button @click="ajouterMessage">Ajouter</button>
  </div>
    <div class="book">
      <h3>Mes secrets</h3>
      <div class="page">
        <ul>
          <li v-for="(message, index) in messages" :key="index">
            <strong>{{ message.titre }}</strong>
            <button @click="afficherMessage(index)">
              {{ message.affiche ? 'Masquer' : 'Afficher' }}
            </button>
            <p v-if="message.affiche">{{ message.texte }}</p>
            <button @click="supprimerMessage(index)">Supprimer</button>
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
