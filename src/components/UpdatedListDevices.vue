<template>
    <myNavBar/>
    <div class="container p-5" style="width: 600px;">
        <form class="p-3 card">
                <p class="h4 text-center">updated a Device</p>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="ip" v-model="device.ip">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="name device" v-model="device.name">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="serial" v-model="device.serial">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="active" v-model="device.active">
                </div>
                <button class="btn btn-success m-3" @click.prevent="updatedDevices()">Send</button>
            </form>
            <div class="p-2 text-center">
                <button class="btn btn-danger" @click="DeviceDelete()">delete user</button>
            </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import myNavBar from '@/components/Navbar.vue'
import { Devices } from '@/interfaces/devices';
import {updatedDevicesAdmin, delDevice} from '@/services/UserServices';

export default defineComponent ({
    components:{
        myNavBar
    },
    data(){
        return {
            device: {} as Devices
        }
    },
    methods:{
        async updatedDevices() {
            if (typeof this.$route.params.id === "string") {
                await updatedDevicesAdmin(this.$route.params.id, this.device);
                window.alert('user updated successfully');
                this.$router.push('/admin/listdevices');
            }
        },
        async DeviceDelete() {
            if (typeof this.$route.params.id === "string") {
                const res = await delDevice(this.$route.params.id);
                console.log(res)
                this.$router.push('/admin/listdevices');
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