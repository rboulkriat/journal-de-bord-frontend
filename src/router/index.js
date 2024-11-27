import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Connexion from '../components/connexion.vue';
import Inscription from '../components/inscription.vue';
<<<<<<< HEAD
import Journal from '../components/journal.vue';
=======
import About from '../components/aPropos.vue';
import Dashboard from '../components/Dashboard.vue';
>>>>>>> 19dbb8a43cbc4a1a3cab3fab6a01e5f6455b53eb

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
<<<<<<< HEAD
        path: '/journal',
        name: 'Journal',
        component: Journal,
    },
=======
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },

>>>>>>> 19dbb8a43cbc4a1a3cab3fab6a01e5f6455b53eb
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
