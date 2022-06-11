import { createRouter, createWebHashHistory } from "vue-router";

//pages 
import Home from "@/pages/HomePage.vue";
import Register from "@/pages/RegisterPage.vue";

const routes = [
    {
        path: "/", 
        component: Home
    }, 
    {
        path: "/register", 
        component: Register
    }
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes
});

export default router;