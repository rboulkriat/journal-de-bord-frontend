import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000', // URL de base de ton API
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    getHomeMessage() {
        return apiClient.get('/');
    },
    // Ajoute ici d'autres méthodes pour appeler différentes routes
};
