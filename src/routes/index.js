import { createRouter, createWebHashHistory } from "vue-router";

//pages 
import Home from "@/pages/HomePage.vue";
import Register from "@/pages/RegisterPage.vue";
import Login from "@/pages/LoginPage.vue";

const routes = [
    {
        path: "/", 
        component: Home
    }, 
    {
        path: "/register", 
        component: Register
    }, 
    {
        path: "/login", 
        component: Login
    }
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes
});

export default router;