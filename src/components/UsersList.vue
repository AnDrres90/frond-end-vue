<template>
    <h1>List</h1>
    <ul class="list-group container p-5">
        <li class="list-group-item list-group-item-action" style="cursor:pointer" v-for="(user, index) in users"
            :key="index">
            {{ index + 1 }}. {{ user.name }} -- {{ user.email }} -- {{ user.lastName }}
        </li>
    </ul>
</template>

<script lang="ts">
import { Users } from '@/interfaces/users';
import { getUsers } from '@/services/UserServices';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            users: [] as Users[]
        };
    },
    async onMounted() {
        if (!localStorage.getItem('token')) {
            await this.$router.push('/')
        }
    },
    async mounted() {
        if (localStorage.getItem('token')) {
            await this.loadUsers();
        } else {
            await this.$router.push('/');
        }
    },
    methods: {
        async loadUsers() {
            const res = await getUsers();
            this.users = res.data;
        }
    }
});
</script>