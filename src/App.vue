<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  async onMounted() {
    await localStorage.removeItem('token');
  }
});
</script>
