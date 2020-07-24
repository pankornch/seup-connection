<template>
  <div class="center">
    <h1>Register</h1>
    <h3 style="text-align: center; color: red;">{{err}}</h3>
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
        <label>PIN</label>
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

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
.login {
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;
}

.pass:hover {
  text-decoration: underline;
}

.login:hover {
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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.footer {
  display: flex;
  justify-content: flex-end;
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