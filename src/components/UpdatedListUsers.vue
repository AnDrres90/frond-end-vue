<template>
  <myNavBar />
  <div id="fondoUp">
    <div class="container p-4" style="width: 500px">
      <form class="p-3 card">
        <span class="text-center"
          ><img
            src="@/assets/programador.png"
            alt="programador"
            id="programadorimg"
        /></span>
        <p class="h4 text-center">updated a user</p>
        <div class="p-2">
          <input
            type="text"
            class="form-control"
            placeholder="name user"
            v-model="user.name"
          />
        </div>
        <div class="p-2">
          <input
            type="text"
            class="form-control"
            placeholder="lastname user"
            v-model="user.lastName"
          />
        </div>
        <div class="p-2">
          <input
            type="text"
            class="form-control"
            placeholder="email"
            v-model="user.email"
          />
        </div>
        <div class="p-2">
          <input
            type="text"
            class="form-control"
            placeholder="password"
            v-model="user.password"
          />
        </div>
        <button class="btn btn-success m-3" @click.prevent="updatedUsers()">
          Send
        </button>
      </form>
      <div class="p-2 text-center">
        <button class="btn btn-danger" @click="UserDelete()">
          delete user
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import myNavBar from "@/components/Navbar.vue";
import { Users } from "@/interfaces/users";
import { updatedUsersAdmin, delUser } from "@/services/UserServices";

export default defineComponent({
  components: {
    myNavBar,
  },
  data() {
    return {
      user: {} as Users,
    };
  },
  methods: {
    async updatedUsers() {
      if (typeof this.$route.params.id === "string") {
        await updatedUsersAdmin(this.$route.params.id, this.user);
        window.alert("user updated successfully");
        this.$router.push("/admin/listusers");
      }
    },
    async UserDelete() {
      if (typeof this.$route.params.id === "string") {
        await delUser(this.$route.params.id);
        window.alert("user delete successfully");
        this.$router.push("/admin/listusers");
      }
    },
  },
  async mounted() {
    if (!localStorage.getItem("token")) {
      await this.$router.push("/");
    }
  },
});
</script>

<style>
#programadorimg {
  width: 70px;
}
#fondoUp {
  background-image: url("@/assets/updatedfondo.jpg");
  background-size: 1400px;
  position: absolute;
  opacity: 0.8;
  width: 100%;
  height: 100%;
}
</style>