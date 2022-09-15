<template>
    <myNavBar/>
    <div class="text-center p-5">
        <h1><b>Error: 403 not authorized</b></h1>
        <img src="@/assets/forbidden.png" alt="forbidden" id="forbiddenImg">
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import myNavBar from '@/components/Navbar.vue';

export default defineComponent({
    components: {
        myNavBar
    }
});

</script>

<style>
#forbiddenImg{
    width: 200px;
}
</style>