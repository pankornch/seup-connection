<template>
  <div class="center">
    <h1>
      Login
      <span
        v-if="autoLogin"
        @click="gotoDashboard"
        style="font-size: 1.5rem; color: #32C1F0; text-decoration: underline;"
        id="dashboard--"
      >Dashboard</span>
    </h1>
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
      <div class="footer">
        <div class="pass">Forget Password?</div>
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
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.form);
    },
    onregister() {
      this.$emit("change", "register");
    },
    gotoDashboard() {
      this.$router.push("/dashboard");
    },
  },
  computed: {
    ...mapGetters({ status: "getterStatus", autoLogin: "getterAutologin" }),
  },
  watch: {
    status(a, b) {
      if (a) this.$router.push("/dashboard");
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

#dashboard-- {
  cursor: pointer;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px white;
}
.center h1 {
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid silver;
}
.center form {
  padding: 0 40px;
  box-sizing: border-box;
}
form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 100px;
  height: 2px;
  background: #ad2323;
  transition: 0.5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: #ad2323;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}
.pass,
.register {
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;
}
.pass:hover {
  text-decoration: underline;
}
.register:hover {
  text-decoration: underline;
}
input[type="submit"] {
  width: 100%;
  height: 50px;
  border: none;
  box-shadow: none;
  background: #ad2323;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin: 0 0 30px;
  transition: 0.5s;
}
input[type="submit"]:hover {
  box-shadow: 0 0 10px #ad2323;
  transition: 0.5s;
}

.footer {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 480px) {
  .center {
    width: 350px;
  }
}
@media (max-width: 400px) {
  .center {
    width: 300px;
  }
}
</style>
<!--
<style scoped>
.head {
  text-align: center;
}
.center {
  display: flex;
  justify-content: center;
}
.form input {
  display: block;
}

#btn {
  width: 100%;
}
</style>
-->
    <!-- <h1 class="head">Login</h1>
    <div class="center">
      <form @submit.prevent="login" class="form">
        <label for="id">Student ID</label>
        <input type="text" name="id" v-model="form.id" />
        <label for="password">Password</label>
        <input type="password" name="password" v-model="form.password" />
        <input type="submit" value="Login" id="btn" />
      </form>
    </div> -->