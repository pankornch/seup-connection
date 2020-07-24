<template>
  <div class="center">
    <h1>Greeting</h1>
    <div class="box">
      <h2 class="name">
        Hello
        <span>John</span>
      </h2>
      <div class="go_dashboard" @click="$router.push('/dashboard')">
        <span>Dashboard</span>
      </div>
      <b-button class="logout" @click="onlogout">Logout</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Greeting",
  methods: {
    onlogout() {
      this.$store.dispatch("logout");
    }
  }
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

.name {
  text-align: center;
}

.box {
  padding: 0 40px;
  box-sizing: border-box;
}

.go_dashboard,
.logout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: none;
  box-shadow: none;
  border-radius: 25px;
  margin: 1em 0;
}

.go_dashboard {
  background-color: rgb(250, 178, 25);
  cursor: pointer;
  transition: 0.5s;
}

.logout {
  font-size: 18px;
  background-color: #ad2323;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin: 0 0 30px;
  transition: 0.5s;
}
.go_dashboard span {
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  outline: none;
  transition: 0.5s;
}
.go_dashboard:hover {
  box-shadow: 0 0 10px rgb(250, 178, 25);
  transition: 0.5s;
}

.logout:hover {
  box-shadow: 0 0 10px #ad2323;
  transition: 0.5s;
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
