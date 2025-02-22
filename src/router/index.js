import { createRouter , createWebHistory } from "vue-router";

import Home from '../components/Home.vue';
import Products from '../components/Products.vue';
import About from '../components/About.vue';

import Coins from '../components/Coins'
import Contact from '../components/Contact'

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/coins', component: Coins },
    // {
    //     path: '/coins/:id',
    //     name: 'Coins',
    //     component: Coins
    //   }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;

