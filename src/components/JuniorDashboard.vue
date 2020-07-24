<template>
  <div class="bg">
    <header>
      <a href="/" class="logo">Software Engineering</a>
      <nav>
        <ul>
          <li>
            <a @click="onLogout">Log out</a>
          </li>
        </ul>
      </nav>
    </header>
    <section>
      <img src="../assets/curve.png" alt="curve" class="wave" />
      <div class="contentBx">
        <h2 style="margin-bottom: 0.5em;">Hi, {{ user.nickName }}!</h2>

        <div v-if="isSpin">
          <b-spinner medium type="grow" variant="light"></b-spinner>
        </div>

        <div v-else>

          <h3 class="text-break" id="hint--word" v-for="(item, index) in hint" :key="index">คำใบ้ {{index+1}} > {{item}}</h3>
        </div>

        <a @click="toggle()" id="button" style="cursor: pointer;" v-if="!user.random">
          <span>Random Now!</span>
        </a>
      </div>
      <div class="imgBx">
        <img src="../assets/minion.png" alt="mario" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  props: ["user", "hint"],
  data() {
    return {
      show: false,
      isSpin: false,
    };
  },
  methods: {
    toggle(e = "rnd") {
      this.show = !this.show;
      if (e === "rnd") return this.onRandom();
    },
    onLogout() {
      this.$store.dispatch("logout");
    },
    onRandom() {
      this.isSpin = true;
      this.user.random = true;
      this.$store.dispatch("onRandom", {
        s_id: this.user.s_id,
        permission: this.user.permission,
      });
      setTimeout(() => this.$emit("loadHint"), 3000);
    },
  },
  computed: {
    getName() {
      return this.user.firstName.replace(/นาย|นางสาว|นาง/g, () => "");
    },
  },
  watch: {
    hint(a, b) {
      if (a) {
        this.isSpin = false;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.bg {
  background: #ad2323;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
}
header .logo {
  position: relative;
  color: #fff;
  font-size: 28px;
  text-decoration: none;
  font-weight: 600;
}
header nav {
  position: relative;
}
header nav ul {
  position: relative;
  display: flex;
}
header nav ul li {
  list-style: none;
}
header nav ul li a {
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
}
header nav ul li a:hover {
  color: #fab219;
}
section {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 0 100px;
}
section .contentBx {
  position: relative;
  max-width: 600px;
  z-index: 1000;
}
section .contentBx h2 {
  font-weight: 700;
  font-size: 60px;
  color: #fff;
  text-transform: uppercase;
}
section .contentBx p {
  font-size: 18px;
  color: #fff;
}
section .contentBx a {
  position: relative;
  margin-top: 20px;
  display: inline-block;
  background: #fab219;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;
  padding: 15px 35px;
  text-decoration: none;
  border-radius: 40px;
  box-shadow: none;
  transition: 0.5s;
}
section .contentBx a:hover {
  box-shadow: 0 0 10px #fab219;
  transition: 0.5s;
}
section .imgBx img {
  position: relative;
  max-width: 500px;
  width: 100%;
  margin-top: 100px;
  z-index: 2;
}
.wave {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
}
section .sci {
  position: absolute;
  bottom: 40px;
  left: 100px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: invert(1);
}
section .sci li {
  list-style: none;
}
section .sci li a {
  display: block;
  margin-right: 20px;
  transform: scale(0.8);
}
.newsletter {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  padding: 60px;
  background: #fff;
  z-index: 10000;
  box-shadow: 0 0 0 100vh rgba(71, 39, 39, 0.95);
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}
.newsletter.active {
  visibility: visible;
  opacity: 1;
}
.newsletter h2 {
  font-size: 48px;
  color: #312747;
}
.newsletter p {
  font-size: 20px;
  color: #312747;
  margin-bottom: 20px;
}
.newsletter p1 {
  font-size: 14px;
  color: #c9c9c9;
}
.newsletter .inputBox {
  margin-top: 20px;
}
.newsletter .inputBox input {
  padding: 10px;
  outline: none;
  width: 300px;
  font-size: 18px;
  border: 1px solid #999;
}
.newsletter .inputBox input[type="submit"] {
  padding: 10px;
  outline: none;
  width: 140px;
  color: #fff;
  background: #ad2323;
  border: 1px solid #ad2323;
  letter-spacing: 2px;
  box-sizing: border-box;
  cursor: pointer;
}
.newsletter .close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

#hint--word {
  margin-bottom: 0.3em;
  display: block;
  color: white;
  max-width: 22em;
}

@media (max-width: 991px) {
  section {
    flex-direction: column;
    padding-top: 150px;
    height: auto;
  }
  section.contentBx {
    max-width: 100%;
  }
  section .imgBx img {
    margin-top: 0;
  }
  section .sci {
    align-items: center;
  }
  #hint--word {
    display: block;
    color: white;
    max-width: 10em;
  }
}
@media (max-width: 767px) {
  header {
    padding: 20px 50px;
  }
  section {
    flex-direction: column;
    padding: 120px 50px 100px;
    height: auto;
  }
  .newsletter p {
    font-size: 16px;
  }
  section .contentBx h2 {
    font-size: 40px;
  }
  section .contentBx p {
    font-size: 14px;
  }
  section .contentBx a {
    position: relative;
    margin-top: 20px;
    display: inline-block;
    background: #fab219;
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 40px;
  }
  section .sci {
    left: 50px;
  }
  .newsletter {
    width: 90%;
    padding: 30px;
  }
  .newsletter .inputBox input {
    margin-top: 10px;
    width: 100%;
  }
  .newsletter h2 {
    font-size: 36px;
    color: #312747;
  }
  #hint--word {
    display: block;
    color: white;
    max-width: 8em;
  }
}
</style>