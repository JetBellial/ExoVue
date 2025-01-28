import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: "/link",
            alias: "/link",
            name: "Link",
            component: () => import("../views/LessonTextInterpolation.vue")
        },
        {
            path: "/Randomnbr",
            alias: "/Randomnbr",
            name: "Random",
            component: () => import("../views/Randomnbr.vue")
        },
        {
            path: "/Databind",
            alias: "/Databind",
            name: "Databind",
            component: () => import("../views/Databind.vue")
        },
        {
            path: "/Vbind",
            alias: "/Vbind",
            name: "Vbind",
            component: () => import("../views/LessonAttributeBindingView.vue")
        },
        {
            path: "/Compteur",
            alias: "/Compteur",
            name: "Compteur",
            component: () => import("../views/PereCastor.vue")
        },
        {
            path: "/EventCatch",
            alias: "/EventCatch",
            name: "EventCatch",
            component: () => import("../views/EventCatch.vue")
        },
        {
            path: "/TPEvent",
            alias: "/TPEvent",
            name: "TPEvent",
            component: () => import("../views/TPEvent.vue")
        },
    ]
});
export default router;