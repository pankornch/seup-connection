<template>
  <div class="bg">
    <div>
      <keep-alive>
        <login v-on:change="change" v-if="status === 'login'" />
        <register v-on:change="change" v-else />
      </keep-alive>
    </div>
    <!-- <div>
      <greeting />
    </div> -->
  </div>
</template>

<script>
import login from "../components/Login";
import register from "../components/Register";
import dashBoard from "./Dashboard";
import greeting from "../components/Greeting";
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    login,
    register,
    dashBoard,
    greeting
  },
  data() {
    return {
      status: "login"
    };
  },
  methods: {
    change(e) {
      this.status = e;
    }
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