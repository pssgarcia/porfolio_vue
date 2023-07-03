import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import ContactPage from '@/pages/ContactPage.vue';

const routes = [
   { path: '/', name: 'HomePage', component: HomePage },
   { path: '/about', name: 'AboutPage', component: AboutPage },
   { path: '/contact', name: 'ContactPage', component: ContactPage}
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router;
