<template>
    <myNavBar />
    <div id="fond">
        <div>
            <h2 class="text-center">{{currenUser.name}} {{currenUser.lastName}}</h2>
            <h3 class="text-center p-3 h4"><b>user email: </b> {{currenUser.email}}</h3>
        </div>
        <div class="p-3">
            <button class="btn btn-success" @click.prevent="updatedUser()">Updated Profile</button>
        </div>
    </div>
    <div class="p-2 pt-5 pe-3" style="float:right">
        <button class="btn btn-primary" @click.prevent="addDevice()">add device <img src="@/assets/pc.png" alt="pc" id="pcimg"></button>
    </div>
    <div class="container p-5">
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
</style>