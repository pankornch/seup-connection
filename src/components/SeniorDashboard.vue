<template>
  <div class="container">
    <div>
      <h1>Dashboard</h1>
      <p>รายชื่อแสดงการจับคู่สายรหัสโดยการใช้ระบบสุ่ม ระหว่างรหัสนักศึกษา 62 และรหัสนักศึกษา 63</p>
      <div class="d-flex justify-content-end">
        <b-button variant="danger" @click="onLogout">Logout</b-button>
      </div>
    </div>

    <!-- <div>
      <h3><span>ชื่อพี่</span><span>{{user.nickName}}</span></h3>
      <h3><span>ชื่อน้อง</span><span>{{hint.nickName}}</span></h3>
      <h3><span>คำใบ้</span><span>{{user.hint}}</span></h3>
    </div>-->
    <b-table striped hover :items="[relabel]" :fields="fields"></b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["user", "hint"],
  data() {
    return {
      fields: [
        { key: "fullName_62", label: "ชื่อพี่" },
        { key: "nickName_62", label: "ชื่อเล่นพี่" },
        { key: "fullName_63", label: "ชื่อน้อง" },
        { key: "nickName_63", label: "ชื่อเล่นน้อง" },
        { key: "hint", label: "คำใบ้" },
      ],
    };
  },
  computed: {
    relabel() {
      try {
        return {
          // Senior
          StudentID_62: this.user.s_id,
          nickName_62: this.user.nickName,
          fullName_62: `${this.user.firstName}  ${this.user.lastName}`,
          hint: this.user.hint,
          nickName_63: this.hint.nickName || "",
          fullName_63: `${this.hint.firstName || ""}  ${
            this.hint.lastName || ""
          }`,
        };
      } catch (error) {}
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
h1 {
  text-align: center;
  font-size: 50px;
}
p {
  text-align: center;
  color: #9c9c9c;
}
</style>