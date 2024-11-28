import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Connexion from '../components/connexion.vue';
import Inscription from '../components/inscription.vue';
import Journal from '../components/journal.vue';
import About from '../components/aPropos.vue';
import Dashboard from '../components/Dashboard.vue';
import Parametre from '../components/Parametre.vue';
import Contact from '@/components/Contact.vue';


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
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/files',
        name: 'Journal',
        component: Journal,
    },
    {
        path: '/settings',
        name: 'Parametre',
        component: Parametre,
    },
    {
        path: '/contact',
        name: 'Contatc',
        component: Contact,
    },

    
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
