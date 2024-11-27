import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Connexion from '../components/connexion.vue';
import Inscription from '../components/inscription.vue';
import Journal from '../components/journal.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/connexion',
        name: 'Connexion',
        component: Connexion,
    },
    {
        path: '/inscription',
        name: 'Inscription',
        component: Inscription,
    },
    {
        path: '/journal',
        name: 'Journal',
        component: Journal,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
