<template>
    <myNavBar/>
    <div class="container p-5" style="width: 600px;">
        <form class="p-3 card">
                <p class="h4 text-center">updated a Devices</p>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="ip" v-model="device.ip">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="name" v-model="device.name">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="serial" v-model="device.serial">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="state" v-model="device.active">
                </div>
                <button class="btn btn-success m-3" @click.prevent="updatedDevices()">Send</button>
            </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import myNavBar from '@/components/Navbar.vue'
import { Devices } from '@/interfaces/devices';
import { updatedDevicesAdmin, getDevicesAdmin } from '@/services/UserServices'

export default defineComponent ({
    components:{
        myNavBar
    },
    data(){
        return {
            device: {} as Devices
        }
    },
    methods: {
        async updatedDevices() {
            if (typeof this.$route.params.id === "string") {
                await updatedDevicesAdmin(this.$route.params.id, this.device);
                window.alert('device updated successfully');
                this.$router.push('/admin/listdevices');
            }
        },
        async loadDevices(id: string) {
            const res = await getDevicesAdmin(id);
            this.device = res.data;
        }
    },
    async mounted() {
    if (typeof this.$route.params.id === "string"){
        await this.loadDevices(this.$route.params.id);
    }
    
    if (!localStorage.getItem('token')) {
        await this.$router.push('/');
    }
    }
});
</script>