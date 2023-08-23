import { createRouter, createWebHistory } from "vue-router";

const routes =  [
    {
        path: '/workout/home',
        name: 'Home',
        component: () => import ("@/views/Home.vue"),
        alias: '/'
    },
    {
        path: '/workout/store',
        name: 'Store',
        component: () => import ("@/views/Store.vue"),
    },
    {
        path: '/workout/log-in',
        name: 'Login',
        component: () => import ("@/views/Login.vue"),
    },
    {
        path: '/workout/sign-up',
        name: 'SignUp',
        component: () => import ("@/views/SignUp.vue"),
    },
    {
        path: '/workout/:pathMatch(.*)*',
        name: 'NotFoundPage',
        component: () => import ("@/views/NotFoundPage.vue"),
    },
]

const createPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ top: 0 });
        }, 300);
    })
}

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition ? savedPosition : createPromise();
    },
})

export default router;