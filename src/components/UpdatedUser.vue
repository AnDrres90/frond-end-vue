<template>
    <myNavBar />
    <div class="text-center" id="fondUp">
        <div class="container">
            <h1 class="h2 p-5">Update your datas</h1>
            <form style="float:left" class="p-3 formu" @submit.prevent="updatedPass()">
                <p class="h4">updated your password</p>
                <img src="@/assets/padlock.png" alt="pass" class="imgform">
                <div class="p-2">
                    <input type="password" class="form-control" placeholder="old password" v-model="oldPass">
                </div>
                <div class="p-2">
                    <input type="password" class="form-control" placeholder="new password" v-model="user.password">
                </div>
                <div class="p-2">
                    <input type="password" class="form-control" placeholder="repit new password" v-model="repitPass">
                </div>
                <button class="btn btn-success m-2">Send</button>
                <p style="color: red;">{{msgP}}</p>
            </form>
            <form style="float:right" class="p-3 formu" @submit.prevent="updatedEmail()">
                <p class="h4">updated your email</p>
                <img src="@/assets/email.png" alt="email" class="imgform">
                <div class="p-2">
                    <input type="email" class="form-control" placeholder="old email" v-model="oldEmail">
                </div>
                <div class="p-2">
                    <input type="email" class="form-control" placeholder="new email" v-model="user.email">
                </div>
                <div class="p-2">
                    <input type="email" class="form-control" placeholder="repit your new email" v-model="repitEmail">
                </div>
                <button class="btn btn-success m-2">Send</button>
                <p style="color: red;">{{msgE}}</p>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import myNavBar from '@/components/Navbar.vue'
import { Users } from '@/interfaces/users';
import { updatedUser } from '@/services/UserServices';

export default defineComponent({
    components: {
        myNavBar
    },
    data() {
        return {
            msgP: '',
            msgE: '',
            oldPass: '',
            repitPass: '',
            oldEmail: '',
            repitEmail: '',
            user: {} as Users
        };
    },
    methods: {
        async updatedPass() {
            if (this.oldPass !== this.user.password) {
                if (this.repitPass === this.user.password) {
                    await updatedUser(this.user);
                    this.$router.push('/profileuser');
                    window.alert('password updated successfully');
                } else {
                    this.msgP = 'the new password does not match';
                }
            } else {
                this.msgP = 'enter a different password than the current';
            }
        },
        async updatedEmail() {
            if (this.oldEmail !== this.user.email) {
                if (this.repitEmail === this.user.email) {
                    await updatedUser(this.user);
                    this.$router.push('/profileuser');
                    window.alert('email updated successfully');
                } else {
                    this.msgE = 'the new email does not match';
                }
            } else {
                this.msgE = 'enter a different email than the current';
            }
        }
    },
    async mounted() {
        if (localStorage.getItem('token')) {
            await this.$router.push('/userupdate');
        } else {
            await this.$router.push('/');
        }
    }
});
</script>

<style>
.formu {
    width: 300px;
    background-color: #424242;
}

#fondUp {
    background-image: url('@/assets/fondo-perfil-1714205.jpg');
    background-size: 1400px;
    height: 400px;
}

.imgform{
    width: 40px;
}
</style>