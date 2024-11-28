<script setup>
import { ref } from 'vue';
import { connexionService } from '../services/connexion';

const currentUserName = ref(localStorage.getItem('userName') || 'Utilisateur');
const users = JSON.parse(localStorage.getItem('users')) || [];
const currentUser = users.find(user => user.username === currentUserName.value);
const currentPassword = ref('********');
const currentEmail = ref(currentUser ? currentUser.email : 'email2@example.com');

const editPassword = ref(false);
const editName = ref(false);
const editEmail = ref(false);

const newPassword = ref('');
const newUserName = ref(currentUserName.value);
const newEmail = ref(currentEmail.value);
const message = ref('');
const currentPasswordInput = ref('');
const showPasswordModal = ref(false); // pour les pop up de confirmation de modification 
const showEmailPasswordModal = ref(false);
const showPasswordChangeModal = ref(false);
const showDeleteAccountModal = ref(false);  

const handleChangeName = () => {
  showPasswordModal.value = true;
};

const confirmChangeName = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const currentUser = users.find(user => user.username === currentUserName.value);

  if (currentUser && currentPasswordInput.value === currentUser.password) {
    currentUser.username = newUserName.value;
    localStorage.setItem('users', JSON.stringify(users));
    currentUserName.value = newUserName.value;
    localStorage.setItem('userName', newUserName.value);
    editName.value = false;
    showPasswordModal.value = false;
    message.value = 'Nom d\'utilisateur changé avec succès!';
  } else {
    message.value = 'Mot de passe incorrect. Veuillez réessayer.';
  }
};

const handleChangeEmail = () => {
  showEmailPasswordModal.value = true;
};

const confirmChangeEmail = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const currentUser = users.find(user => user.username === currentUserName.value);

  if (currentUser && currentPasswordInput.value === currentUser.password) {
    currentUser.email = newEmail.value;
    localStorage.setItem('users', JSON.stringify(users));
    currentEmail.value = newEmail.value;
    editEmail.value = false;
    showEmailPasswordModal.value = false;
    message.value = 'Email changé avec succès!';
  } else {
    message.value = 'Mot de passe incorrect. Veuillez réessayer.';
  }
};

const handleChangePassword = () => {
  showPasswordChangeModal.value = true;
};

const confirmChangePassword = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const currentUser = users.find(user => user.username === currentUserName.value);

  if (currentUser && currentPasswordInput.value === currentUser.password) {
    currentUser.password = newPassword.value;
    localStorage.setItem('users', JSON.stringify(users));
    currentPassword.value = '********';
    editPassword.value = false;
    showPasswordChangeModal.value = false;
    message.value = 'Mot de passe changé avec succès!';
  } else {
    message.value = 'Mot de passe incorrect. Veuillez réessayer.';
  }
};

//  suppression de compte
const handleDeleteAccount = () => {
  showDeleteAccountModal.value = true;
};

const confirmDeleteAccount = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const currentUserIndex = users.findIndex(user => user.username === currentUserName.value);

  if (currentUserIndex !== -1 && currentPasswordInput.value === users[currentUserIndex].password) {
    users.splice(currentUserIndex, 1); //supprime l'utilisateur de la liste
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.removeItem('userName'); // supprime le nom d'utilisateur du localStorage
    message.value = 'Compte supprimé avec succès!';
    // rediriger vers la page de connexion
    setTimeout(() => {
      window.location.href = '/login'; 
    }, 1000);
  } else {
    message.value = 'Mot de passe incorrect. Veuillez réessayer.';
  }
};
</script>

<template>
  <section class="section-settings">
    <div class="settings-container">
      <h2>
        <img src="@/assets/parametre.png" alt="Paramètre" class="icon" />
        Paramètres du compte
      </h2>
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input 
          type="text" 
          v-if="editName" 
          v-model="newUserName" 
          placeholder="Entrez votre nouveau nom d'utilisateur" 
        />
        <span v-else>{{ currentUserName }}</span>
        <button class ="settings-button" v-if="editName" @click="handleChangeName">
          <img src="@/assets/modify.png" alt="Paramètre" class="button-icon" />
          Modifier</button>
        <button class ="settings-button" v-else @click="editName = true">
          <img src="@/assets/modify.png" alt="Paramètre" class="button-icon" />
          Modifier Nom d'utilisateur</button>
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input 
          type="password" 
          v-if="editPassword" 
          v-model="newPassword" 
          placeholder="Nouveau mot de passe" 
        />
        <span v-else>{{ currentPassword }}</span>
        <button class ="settings-button" v-if="editPassword" @click="handleChangePassword">
          <img src="@/assets/modify.png" alt="Paramètre" class="button-icon" />
          Modifier Mot de Passe</button>
        <button class ="settings-button" v-else @click="editPassword = true">
          <img src="@/assets/modify.png" alt="Paramètre" class="button-icon" />
          Modifier Mot de Passe</button>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          v-if="editEmail" 
          v-model="newEmail" 
          placeholder="Entrez votre nouvelle adresse email" 
        />
        <span v-else>{{ currentEmail }}</span>
        <button class ="settings-button" v-if="editEmail" @click="handleChangeEmail">
          <img src="@/assets/modify.png" alt="Paramètre" class="button-icon" />
          Enregistrer</button>
        <button class ="settings-button" v-else @click="editEmail = true">
          <img src="@/assets/modify.png" alt="Paramètre" class="button-icon" />
          Modifier Email</button>
      </div>

      <button id="delete-account-btn" @click="handleDeleteAccount">
        <img src="@/assets/trash2.png" alt="Paramètre" class="button-icon" />

        Supprimer le compte</button>

      <p v-if="message">{{ message }}</p>
    </div>

        <!-- LES POP UPS DE CONFIRMATION -->

    <!-- Modal pour confirmation de suppression de compte -->
    <div v-if="showDeleteAccountModal" class="modal">
      <div class="modal-content">
        <h3>Entrez votre mot de passe pour supprimer votre compte</h3>
        <input type="password" v-model="currentPasswordInput" placeholder="Mot de passe actuel" />
        <button class ="settings-button" @click="confirmDeleteAccount">Confirmer la suppression</button>
        <button class ="settings-button" @click="showDeleteAccountModal = false">Annuler</button>
      </div>
    </div>


    <!-- Modal pour changement d'email -->
    <div v-if="showEmailPasswordModal" class="modal">
      <div class="modal-content">
        <h3>Entrez votre mot de passe actuel pour changer l'email</h3>
        <input type="password" v-model="currentPasswordInput" placeholder="Mot de passe actuel" />
        <button class ="settings-button" @click="confirmChangeEmail">Confirmer</button>
        <button class ="settings-button" @click="showEmailPasswordModal = false">Annuler</button>
      </div>
    </div>

    <!-- Modal pour changement de mot de passe -->
    <div v-if="showPasswordChangeModal" class="modal">
      <div class="modal-content">
        <h3>Entrez votre mot de passe actuel</h3>
        <input type="password" v-model="currentPasswordInput" placeholder="Mot de passe actuel" />
        <button class ="settings-button" @click="confirmChangePassword">Confirmer</button>
        <button class ="settings-button" @click="showPasswordChangeModal = false">Annuler</button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
<style src="../assets/Parametre.css"></style>
