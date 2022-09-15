<template>
    <myNavBar />
    <div id="fond">
        <div>
            <div class="text-center" v-if="isSuperAdmin()"><img src="@/assets/perfilRoot.png" alt="root" class="perfil"></div>
            <div class="text-center" v-if="isAdmin()"><img src="@/assets/apoyo.png" alt="root" class="perfil"></div>
            <div class="text-center p-1" v-if="isUser()"><img src="@/assets/perfil.png" alt="root" class="perfil"></div>
            <h2 class="text-center">{{currenUser.name}} {{currenUser.lastName}}</h2>
            <h3 class="text-center p-3 h4"><b>user email: </b> {{currenUser.email}}</h3>
        </div>
        <div class="p-3">
            <button class="btn btn-success" @click.prevent="updatedUser()" v-if="isnotSuperAdmin()">Updated Profile</button>
        </div>
    </div>
    <div class="p-2 pt-5 pe-3" style="float:right" v-if="isnotSuperAdmin()">
        <button class="btn btn-primary" @click.prevent="addDevice()">add device <img src="@/assets/pc.png" alt="pc" id="pcimg"></button>
    </div>
    <div class="container p-5" v-if="isnotSuperAdmin()">
        <table class="table table-bordered">
            <thead class="table-primary">
                <tr>
                    <th>Num</th>
                    <th>IP</th>
                    <th>Name</th>
                    <th>Serial</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody class="table-light text-dark">
                <tr v-for="(device, index) in currenDevices" :key="index">
                    <th>{{index + 1}}</th>
                    <th>{{device.ip}}</th>
                    <th>{{device.name}}</th>
                    <th>{{device.serial}}</th>
                    <th>{{device.active}}</th>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="isSuperAdmin()" class="text-center p-5" id="infotext">
        <h1 class="p-3 h3">you are the super admin</h1>
        <p>you can modified info of the users and can modified roles of users is your tool additionally <br>
        in the page next is tha list where you can updated users and their roles</p>
    </div>
</template>

<script lang="ts">
import { Users } from '@/interfaces/users';
import { Devices } from '@/interfaces/devices';
import { getUser, getDevicesUser} from '@/services/UserServices';
import { defineComponent } from '@vue/runtime-core';
import myNavBar from '@/components/Navbar.vue';

export default defineComponent({
    components: {
        myNavBar
    },
    data() {
        return {
            currenUser: {} as Users,
            currenDevices: [] as Devices[]
        }
    },
    methods: {
        async loadUser() {
            const res = await getUser();
            this.currenUser = res.data;
        },
        async loadDevices() {
            const res = await getDevicesUser();
            this.currenDevices = res.data
        },
        async updatedUser() {
            await this.$router.push('/userupdate');
        },
        async addDevice() {
            await this.$router.push('/devicesadd');
        },
        isnotSuperAdmin(){
            return localStorage.getItem('rol') !== 'super-admin'
        },
        isSuperAdmin(){
            return localStorage.getItem('rol') === 'super-admin'
        },
        isAdmin(){
            return localStorage.getItem('rol') === 'admin'
        },
        isUser(){
            return localStorage.getItem('rol') === 'user'
        }
    },
    async mounted() {
        if (localStorage.getItem('token')) {
            await this.loadUser();
            await this.loadDevices();
        } else {
            await this.$router.push('/');
        }
    }
});
</script>

<style>
#fond {
    background-image: url('@/assets/fondo-perfil-1714205.jpg') ;
    background-size: 1400px;
}
#pcimg{
    width: 20px;
}
.perfil{
    width: 70px;
}
#infotext{
    font-family: Arial, Helvetica, sans-serif;
}
</style>