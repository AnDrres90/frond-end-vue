import {createRouter , RouteRecordRaw, createWebHistory} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        alias: '/',
        name: 'login',
        component: () => import('@/components/myLogin.vue')
    },
    {
        path: '/logup',
        name: 'logup',
        component: () => import('@/components/myLogup.vue')
    },
    {
        path: '/listusers',
        name: 'listUsers',
        component: () => import('@/components/UsersList.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router