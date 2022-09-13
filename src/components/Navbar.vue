<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <h2 class="navbar-brand">Users And Devices</h2>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profileuser">User Profile</router-link>
                    </li>
                    <li class="nav-item" v-if="isAdmin() || isSuperAdmin()">
                        <router-link class="nav-link" to="/admin/listusers">List users</router-link>
                    </li>
                    <li class="nav-item" v-if="isAdmin() || isSuperAdmin()">
                        <router-link class="nav-link" to="/admin/listdevices">List devices</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Logout <img src="@/assets/logout.png" alt="logut" id="icono"></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'myNavBar',
    methods: {
        isAdmin(){
            return localStorage.getItem('rol') == 'admin'
        },
        isSuperAdmin(){
            return localStorage.getItem('rol') == 'super-admin'
        }
    }
})
</script>

<style>
    #icono{
        width: 20px;
    }
</style>