<template>
  <div class="center">
    <h1>Register</h1>
    <h3 style="text-align: center; color: red;">{{err.split(",")[0]}}</h3>
    <form @submit.prevent="register">
      <div class="txt_field">
        <input type="text" required v-model="form.s_id" />
        <span></span>
        <label>Student ID</label>
      </div>
      <div class="txt_field">
        <input type="text" v-model="form.nickName" required />
        <span></span>
        <label>Nick Name</label>
      </div>
      <div class="txt_field">
        <input type="password" v-model="form.password" required />
        <span></span>
        <label>Password</label>
      </div>
      <div class="txt_field">
        <input type="password" v-model="form.confirmPassword" required />
        <span></span>
        <label>Confirm Password</label>
      </div>
      <div class="txt_field">
        <input type="number" v-model="form.pin" required />
        <span></span>
        <label>PIN (รหัสนิสิต 4 ตัวสุดท้าย)</label>
      </div>
      <div class="footer">
        <div class="login" @click="onlogin">Login</div>
      </div>
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "register",
  data() {
    return {
      form: {
        s_id: "",
        nickName: "",
        password: "",
        confirmPassword: "",
        pin: "",
      },
    };
  },

  methods: {
    register() {
      if (this.form.password !== this.form.confirmPassword)
        return alert("Password not match");

      const { s_id, password, pin, nickName } = this.form;
      if (password.length < 6) return alert("รหัสผ่านต้องไม่ต่ำกว่า 6 ตัว");

      this.$store.dispatch("register", { s_id, nickName, password, pin });
    },

    onlogin() {
      this.$emit("change", "login");
    },
  },
  computed: {
    ...mapGetters({ err: "getterError" }),
  },
};
</script>

<style scoped>
@import '../styles/register.css';
</style>