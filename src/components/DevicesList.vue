<template>
    <myNavBar/>
    <h1 class="text-center h1 p-2">LIST DEVICES</h1>
    <div class="container p-5">
        <form class="d-flex p-4" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <table class="table table-bordered">
            <thead class="table-dark">
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
            <tbody>
                <tr v-for="(device, index) in devices" :key="index">
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
        }
    }
});
</script>