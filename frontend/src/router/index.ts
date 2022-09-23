import { createRouter, createWebHistory } from 'vue-router';
import RequestsView from '../views/RequestsView.vue';
import SettingsView from '../views/SettingsView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: RequestsView,
        },
        {
            path: '/about',
            name: 'about',
            component: SettingsView,
        },
    ],
});

export default router;
