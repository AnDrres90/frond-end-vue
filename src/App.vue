<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';


export default defineComponent({
  name: 'App',
  components: {
  },
  async onMounted() {
    localStorage.removeItem('token');
  }
});
</script>
