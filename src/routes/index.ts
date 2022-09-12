import { isAdmin } from '@/middlewares/auth.guard';
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
        path: '/admin/listusers',
        name: 'listUsers',
        beforeEnter: [isAdmin],
        component: () => import('@/components/UsersList.vue')
    },
    {
        path: '/admin/listdevices',
        name: 'listDevices',
        beforeEnter: [isAdmin],
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
    {
        path: '/forbidden',
        name: 'forbidden',
        component: () => import('@/components/ErrorUnathorized.vue')
    },
    {
        path: '/admin/updatedusers/:id',
        name: 'updatedlistUsers',
        beforeEnter: [isAdmin],
        component: () => import('@/components/UpdatedListUsers.vue')
    },
    {
        path: '/admin/updateddevices/:id',
        name: 'updatedlistDevices',
        beforeEnter: [isAdmin],
        component: () => import('@/components/UpdatedListDevices.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router