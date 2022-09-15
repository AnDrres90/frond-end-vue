<template>
    <myNavBar/>
    <div id="fond">
        <h1 class="text-center h1 p-5">LIST USERS</h1>
    </div>  
    <div class="container p-5">
        <form class="d-flex p-4" role="search">
            <input class="form-control me-2" v-model="search" type="search" placeholder="Search... name lastname" aria-label="Search">
        </form>
        <table class="table table-bordered">
            <thead class="table-primary">
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
            <tbody class="text-dark table-light">
                <tr v-for="(user, index) in filterList()" :key="index">
                    <th>{{index + 1}}</th>
                    <th>{{user.name}}</th>
                    <th>{{user.lastName}}</th>
                    <th>{{user.email}}</th>
                    <th>{{user.createdAt}}</th>
                    <th>{{user.updatedAt}}</th>
                    <th>{{user.role}}</th>
                    <th><button class="btn btn-warning" @click.prevent="this.$router.push(`/superadmin/updatedusers/${user._id}`)">Updated</button></th>
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
            search: '',
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
        },
        filterList(){
            return this.users.filter(user => {
                if(this.search)
                    return user.name.toLowerCase().includes(this.search.toLowerCase()) || user.lastName.toLowerCase().includes(this.search.toLowerCase());
                else
                    return true;
            })
        }
    }
});
</script>

<style>
#perfil{
    width: 80px;
}
#fond {
background-image: url('@/assets/fondo-perfil-1714205.jpg') ;
background-size: 1400px;
}
</style>