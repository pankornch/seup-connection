<template>
  <div>
    <Dashboard v-if="autoLogin" />
    <div class="bg" v-else>
      <keep-alive>
        <login v-on:change="change" v-if="status === 'login'" />
        <register v-on:change="change" v-else />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import login from "../components/Login";
import register from "../components/Register";
import Dashboard from "./Dashboard";
import greeting from "../components/Greeting";
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    login,
    register,
    Dashboard,
  },
  data() {
    return {
      status: "login",
      user: false,
    };
  },
  methods: {
    change(e) {
      this.status = e;
    },
  },
  computed: {
    ...mapGetters({ autoLogin: "getterAutologin" }),
  },
};
</script>

<style scoped>
.bg {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  background: #fab219;
  height: 100vh;
  overflow: hidden;
}
</style>