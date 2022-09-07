<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <h2 class="navbar-brand">Users And Devices</h2>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profileuser">User Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/listusers">List users</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/listdevices">List devices</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Logout</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'myNavBar'
})
</script>