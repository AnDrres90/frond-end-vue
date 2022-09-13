<template>
    <myNavBar/>
    <h1 class="text-center h1 p-2">LIST USERS</h1>
    <div class="container p-5">
        <form class="d-flex p-4" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <table class="table table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>num</th>
                    <th>Name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>creation date</th>
                    <th>update date</th>
                    <th>role</th>
                    <th></th>   
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <th>{{index + 1}}</th>
                    <th>{{user.name}}</th>
                    <th>{{user.lastName}}</th>
                    <th>{{user.email}}</th>
                    <th>{{user.createdAt}}</th>
                    <th>{{user.updatedAt}}</th>
                    <th>{{user.role}}</th>
                    <th><button class="btn btn-warning" @click.prevent="this.$router.push(`/admin/updatedusers/${user._id}`)">Updated</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Users } from '@/interfaces/users';
import { getUsers } from '@/services/UserServices';
import { defineComponent } from 'vue';
import myNavBar from '@/components/Navbar.vue'

export default defineComponent({
    components: {
        myNavBar
    },
    data() {
        return {
            users: [] as Users[]
        };
    },
    async mounted() {
        if (localStorage.getItem('token')) {
            await this.loadUsers();
        } else {
            await this.$router.push('/');
        }
    },
    methods: {
        async loadUsers() {
            const res = await getUsers();
            this.users = res.data;
        }
    }
});
</script>

<style>
    #perfil{
        width: 80px;
    }
</style>