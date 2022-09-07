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
    {
        path: '/listdevices',
        name: 'listDevices',
        component: () => import('@/components/DevicesList.vue')
    },
    {
        path: '/profileuser',
        name: 'users-details',
        component: () => import('@/components/FormUser.vue')
    },
    {
        path: '/userupdate',
        name: 'users-update',
        component: () => import('@/components/UpdatedUser.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router