<template>
    <myNavBar/>
    <div id="fond">
        <h1 class="text-center h1 p-5">LIST DEVICES</h1>
    </div>
    <div class="container p-5">
        <form class="d-flex p-4" role="search">
            <input class="form-control me-2" v-model="search" type="search" placeholder="Search... name serial" aria-label="Search">
        </form>
        <table class="table table-bordered">
            <thead class="table-primary">
                <tr>
                    <th>Num</th>
                    <th>IP</th>
                    <th>Name</th>
                    <th>Serial</th>
                    <th>Active</th>
                    <th>Propietary ID</th>
                    <th>creation date</th>
                    <th>update date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="table-light text-dark">
                <tr v-for="(device, index) in filterList()" :key="index">
                    <th>{{index + 1}}</th>
                    <th>{{device.ip}}</th>
                    <th>{{device.name}}</th>
                    <th>{{device.serial}}</th>
                    <th>{{device.active}}</th>
                    <th>{{device.propietaryId}}</th>
                    <th>{{device.createdAt}}</th>
                    <th>{{device.updatedAt}}</th>
                    <th><button class="btn btn-warning" @click.prevent="this.$router.push(`/admin/updateddevices/${device._id}`)">Updated</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Devices } from '@/interfaces/devices';
import { getDevices } from '@/services/UserServices';
import { defineComponent } from 'vue';
import myNavBar from '@/components/Navbar.vue'

export default defineComponent({
    components: {
        myNavBar
    },
    data() {
        return {
            search: '',
            devices: [] as Devices[]
        };
    },
    async mounted() {
        if (localStorage.getItem('token')) {
            await this.loadDevices();
        } else {
            await this.$router.push('/');
        }
    },
    methods: {
        async loadDevices() {
            const res = await getDevices();
            this.devices = res.data;
        },
        filterList(){
            return this.devices.filter(device => {
                if(this.search)
                    return device.name.toLowerCase().includes(this.search.toLowerCase()) || device.serial.toLowerCase().includes(this.search.toLowerCase());
                else
                    return true;
            })
        }
    }
});
</script>

<style>
#fond {
background-image: url('@/assets/fondo-perfil-1714205.jpg') ;
background-size: 1400px;
}
</style>