<template>
    <myNavBar/>
    <div class="container p-3" style="width: 600px;">
        <form class="p-3 card">
                <p class="h4 text-center">updated a user</p>
                <span class="text-center"><img src="@/assets/programador.png" alt="programador" id="programadorimg"></span>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="name user" v-model="user.name">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="lastname user" v-model="user.lastName">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="email" v-model="user.email">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="password" v-model="user.password">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="role" v-model="user.role">
                </div>
                <button class="btn btn-success m-3" @click.prevent="updatedUsers()">Send</button>
            </form>
            <div class="p-2 text-center">
                <button class="btn btn-danger" @click="UserDelete()">delete user</button>
            </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import myNavBar from '@/components/Navbar.vue'
import { Users } from '@/interfaces/users';
import {updatedUsersAdmin, delUser} from '@/services/UserServices';

export default defineComponent ({
    components:{
        myNavBar
    },
    data(){
        return {
            user: {} as Users
        }
    },
    methods:{
        async updatedUsers() {
            if (typeof this.$route.params.id === "string") {
                await updatedUsersAdmin(this.$route.params.id, this.user);
                window.alert('user updated successfully');
                this.$router.push('/admin/listusers');
            }
        },
        async UserDelete() {
            if (typeof this.$route.params.id === "string") {
                await delUser(this.$route.params.id);
                window.alert('user delete successfully');
                this.$router.push('/admin/listusers');
            }
        }
    },
    async mounted() {
        if (!localStorage.getItem('token')) {
            await this.$router.push('/');
        }
    }
});
</script>

<style>
    #programadorimg{
        width: 70px;
    }
</style>