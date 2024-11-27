<template>
  <div class="dashboard-container">
    <h1>Bienvenue dans votre Journal de Bord</h1>

    <!-- Section pour créer un nouveau fichier -->
    <div class="create-file">
      <h2>Créer un nouveau fichier</h2>
      <form @submit.prevent="handleCreateFile">
        <input
            type="text"
            v-model="newFileName"
            placeholder="Nom du fichier"
            required
        />
        <button type="submit">Créer</button>
      </form>
    </div>

    <!-- Liste des fichiers -->
    <div class="file-list">
      <h2>Vos fichiers</h2>
      <ul>
        <li v-for="file in files" :key="file.id">
          <span @click="openFile(file.id)">{{ file.name }}</span>
          <button @click="deleteFile(file.id)">Supprimer</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Liste des fichiers
const files = ref([]);
const newFileName = ref('');

// Fonction pour récupérer les fichiers
const fetchFiles = async () => {
  try {
    const response = await axios.get('http://localhost:3000/files', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Token pour authentification
      },
    });
    files.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des fichiers :', error);
  }
};

// Fonction pour créer un nouveau fichier
const handleCreateFile = async () => {
  try {
    const response = await axios.post(
        'http://localhost:3000/files',
        { name: newFileName.value },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
    );
    files.value.push(response.data);
    newFileName.value = ''; // Réinitialiser le champ de saisie
  } catch (error) {
    console.error('Erreur lors de la création du fichier :', error);
  }
};

// Fonction pour supprimer un fichier
const deleteFile = async (fileId) => {
  try {
    await axios.delete(`http://localhost:3000/files/${fileId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    files.value = files.value.filter((file) => file.id !== fileId);
  } catch (error) {
    console.error('Erreur lors de la suppression du fichier :', error);
  }
};

// Fonction pour ouvrir un fichier (redirige vers une page spécifique)
const openFile = (fileId) => {
  window.location.href = `/file/${fileId}`;
};

// Récupérer les fichiers au chargement de la page
onMounted(fetchFiles);
</script>

<style scoped>
.dashboard-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.create-file {
  margin-bottom: 20px;
}

.file-list ul {
  list-style-type: none;
  padding: 0;
}

.file-list li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.file-list li span {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}

.file-list li button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
