import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';


// creates all routers
const routes = [
    {
        path: '/',
        name: "Home", 
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;