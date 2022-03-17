import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/Home';
import AboutView from '@/views/AboutView';
import ErrorView from '@/views/ErrorView';
import CoinDetailView from '@/views/CoinDetailView';

const history = createWebHistory();

export default createRouter ({
    history,
    routes: [
        {
            path: "/",
            name: 'home',
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/:catchAll(.*)",
            name: "error",
            component: ErrorView
        },
        {
            path: '/coin/:id',
            name: 'coin-detail',
            component: CoinDetailView,
        }
        
    ],

})