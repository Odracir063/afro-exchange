import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/views/Home';
import AboutView from '@/views/AboutView';
import ErrorView from '@/views/ErrorView';
import CoinDetail from '@/views/CoinDetailView';

const history = createWebHistory();

export default createRouter ({
    history,
    routes: [
        {
            path: "/",
            name: 'home',
            component: Home
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
            component: CoinDetail,
        }
        
    ],

})