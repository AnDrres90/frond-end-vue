<template>
    <myNavBar/>
    <div class="container p-5" style="width: 500px;">
        <form class="p-3 card">
                <p class="h4 text-center">Add a Device</p>
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
                <button class="btn btn-success m-3" @click.prevent="addDevice()">Create</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import myNavBar from '@/components/Navbar.vue'
import { Devices } from '@/interfaces/devices';
import {createDevice} from '@/services/UserServices';

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
        async addDevice(){
            await createDevice(this.device);
            this.$router.push('/profileuser');
            window.alert('device create successfully');
        }
    },
    async mounted() {
        if (!localStorage.getItem('token')) {
            await this.$router.push('/');
        }
    }
});
</script>   