<template>
    <myNavBar />
    <div id="fond">
        <div class="text-center">
            <img src="@/assets/perfil.png" alt="perfil" id="perfil">
        </div>
        <div>
            <h2 class="text-center">{{currenUser.name}} {{currenUser.lastName}}</h2>
            <h3 class="text-center p-3 h4"><b>user email: </b> {{currenUser.email}}</h3>
        </div>
        <div class="p-3">
            <button class="btn btn-success">Updated Profile</button>
        </div>
    </div>
    <div class="container p-5">
        <table class="table table-bordered">
            <thead class="table-primary">
                <tr>
                    <th>Num</th>
                    <th>IP</th>
                    <th>Serial</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(device, index) in currenDevices" :key="index">
                    <th>{{index + 1}}</th>
                    <th>{{device.ip}}</th>
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
import { getUser, getDevicesUser } from '@/services/UserServices';
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
            console.log(res.data);
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
#perfil {
    text-align: center;
    width: 200px;
    padding: 20px;
}

#fond {
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 30px;
    background-color: #70868f;
    border-radius: 20px;
}
</style>