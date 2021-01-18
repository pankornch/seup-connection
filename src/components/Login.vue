<template>
  <div class="center">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="txt_field">
        <input type="text" v-model="form.s_id" required />
        <span></span>
        <label>Student ID</label>
      </div>
      <div class="txt_field">
        <input type="password" v-model="form.password" required />
        <span></span>
        <label>Password</label>
      </div>

      <div class="d-flex justify-content-between">
        <div class="err">
          <span v-if="!isloading">{{err.split(",")[0]}}</span>
          <b-spinner variant="danger" style="width: 30px; height: 30px;" v-if="isloading"></b-spinner>
        </div>
        <div class="register" @click="onregister">Register</div>
      </div>
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "login",
  data() {
    return {
      form: {
        s_id: "",
        password: "",
      },
      isloading: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.form);
      this.isloading = true;
    },
    onregister() {
      this.$emit("change", "register");
    },
    gotoDashboard() {
      this.$router.push("/dashboard");
    },
    
  },
  computed: {
    ...mapGetters({
      status: "getterStatus",
      err: "getterError",
    }),
  },
  watch: {
    status(a, b) {
      setTimeout(() => location.reload(), 300);
    },
    err(a, b) {
      if (a) {
        this.isloading = false;
      }
    },
  },
};
</script>
<style scoped>
@import "../styles/login.css";
</style>