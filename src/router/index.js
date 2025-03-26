import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    {
        path: "/destination/:id/:slug",
        name: "destination.show",
        component: () => import("@/pages/DestinationShow.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
