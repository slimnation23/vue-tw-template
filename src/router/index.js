import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Brazil from "@/pages/Brazil.vue";
import Hawaii from "@/pages/Hawaii.vue";
import Jamaica from "@/pages/Jamaica.vue";
import Panama from "@/pages/Panama.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/brazil", name: "brazil", component: Brazil },
    { path: "/hawaii", name: "hawaii", component: Hawaii },
    { path: "/jamaica", name: "jamaica", component: Jamaica },
    { path: "/panama", name: "panama", component: Panama },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
