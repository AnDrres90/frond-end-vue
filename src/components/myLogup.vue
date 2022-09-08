<template>
    <div>
        <img src="@/assets/fond.jpg" alt="fondo" class="position-absolute"
            style="width: 100%; height: 100%; opacity: 0.4;">
    </div>
    <div class="col-md-4 offset-md-4 container p-5">
        <form @submit.prevent="SaveUser()" class="card card-body form-group">
            <h1 class="text-center h2 p-5">SIGN UP <img src="@/assets/sign-up.png" alt="signup" class="imgform "></h1>
            <input type="text" placeholder="name" v-model="user.name" class="form-control mb-3">
            <input type="text" placeholder="last name" v-model="user.lastName" class="form-control mb-3">
            <input type="email" placeholder="email" v-model="user.email" class="form-control mb-3">
            <input type="password" placeholder="password" v-model="user.password" class="form-control mb-3">
            <button class="btn btn-primary">Send</button>
            <p class="text-center h6 m-3" style="color: #ea5959;">{{msg}}</p>
            <p class="p-3 text-center">I have an account <router-link to="/">Sign in</router-link>
            </p>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Users } from '@/interfaces/users'
import { createUser } from '@/services/UserServices'

export default defineComponent({
    data() {
        return {
            msg: '',
            user: {} as Users
        };
    },
    methods: {
        async SaveUser() {
            this.$router.push('/');
            await createUser(this.user)
                .catch(err => {
                    this.msg = err.response.data.message;
                });
            await createUser(this.user);
        }
    }
});

</script>

<style>
.imgform {
    width: 40px;
}
</style>