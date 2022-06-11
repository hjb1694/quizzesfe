import { createRouter, createWebHashHistory } from "vue-router";

//pages 
import Home from "@/pages/Home.page.vue";
import Register from "@/pages/Register.page.vue";

const routes = [
    {
        path: "", 
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