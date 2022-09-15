<template>
    <div>
        <img src="@/assets/fond.jpg" alt="fondo" class="position-absolute"
            style="width: 100%; height: 100%; opacity: 0.4;">
    </div>
    <div class="col-md-4 offset-md-4 container p-5">
        <form @submit.prevent="FindUser()" class="card card-body form-group">
            <h1 class="text-center h2 p-5">SIGN IN <img src="@/assets/log-in.png" alt="signin" class="imgform "></h1>
            <input type="email" placeholder="email" v-model="user.email" class="form-control mb-3">
            <input type="password" placeholder="password" v-model="user.password" class="form-control mb-3">
            <button class="btn btn-primary">Send</button>
            <p class="text-center h6 m-3" style="color: #ea5959;">{{msg}}</p>
            <p class="p-3 text-center text-muted">Don't have an account <router-link to="/logup">Sign up</router-link>
            </p>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueJwtDecode from 'vue-jwt-decode'
import { User } from '@/interfaces/users'
import { signInUser } from '@/services/UserServices'
import axios from "@/services/axios";

export default defineComponent({
    data() {
        return {
            msg: ' ',
            user: {} as User
        };
    },
    async mounted() {
        localStorage.removeItem('token');
    },
    methods: {
        async FindUser() {
            let json = {
                'email': this.user.email,
                'password': this.user.password
            }
            await signInUser(json)
                .catch(err => {
                    this.msg = err.response.data.message;
                });
            const res = await signInUser(json)
            const token = res.data.token;
            axios.defaults.headers.common['Authorization'] = token;
            localStorage.setItem('token', token);
            const tokendecode = VueJwtDecode.decode(token);
            console.log(tokendecode.role);
            localStorage.setItem('rol', tokendecode.role);
            if (token) {
                await this.$router.push('/profileuser')
            }
        }
    }
});
</script>

<style>
.imgform {
    width: 40px;
}
</style>
