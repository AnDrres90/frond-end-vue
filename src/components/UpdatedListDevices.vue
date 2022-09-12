<template>
    <myNavBar/>
    <div class="container p-5" style="width: 600px;">
        <form class="p-3 card">
                <p class="h4 text-center">updated a Devices</p>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="ip" >
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="name" >
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="serial">
                </div>
                <div class="p-2">
                    <input type="text" class="form-control" placeholder="state">
                </div>
                <button class="btn btn-success m-3">Send</button>
            </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import myNavBar from '@/components/Navbar.vue'

export default defineComponent ({
    components:{
        myNavBar
    },
    async mounted() {
        if (localStorage.getItem('token')) {
            await this.$router.push('/admin/updatedusers/:id');
        } else {
            await this.$router.push('/');
        }
    }
});
</script>