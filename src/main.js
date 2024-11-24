import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assurez-vous que le chemin est correct

const app = createApp(App);

app.use(router); // Ajout de Vue Router à l'application
app.mount('#app');
