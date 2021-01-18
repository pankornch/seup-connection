<template>
  <div class="container">
    <div>
      <h1>Dashboard</h1>
      <p>รายชื่อแสดงการจับคู่สายรหัสโดยการใช้ระบบสุ่ม ระหว่างรหัสนักศึกษา 62 และรหัสนักศึกษา 63</p>

      <div class="d-flex justify-content-end">
        <b-button variant="danger" @click="onLogout" style="margin: 1rem 0;">Logout</b-button>
      </div>
    </div>

    <b-table striped hover :items="[relabel]" :fields="fields"></b-table>

    <b-table :items="[rHint]" :fields="fieldsHint" style="margin-top: 5rem;"></b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["user", "hint"],
  data() {
    return {
      fields: [
        { key: "fullName_62", label: "ชื่อจริงพี่" },
        { key: "nickName_62", label: "ชื่อเล่นพี่" },
        { key: "fullName_63", label: "ชื่อจริงน้อง" },
        { key: "nickName_63", label: "ชื่อน้อง" },
      ],
      fieldsHint: [{ key: "hint", label: "คำใบ้" }],
    };
  },
  computed: {
    relabel() {
      let hint;
      if (!this.hint || this.hint.length == 0) {
        hint = {
          firstName: "",
          lastName: "",
          nickName: "",
        };
      } else {
        hint = this.hint;
      }
      try {
        return {
          // Senior
          StudentID_62: this.user.s_id,
          nickName_62: this.user.nickName,
          fullName_62: `${this.getName}  ${this.user.lastName}`,
          hint: this.user.hint,
          nickName_63: hint.nickName,
          fullName_63: `${hint.firstName}  ${hint.lastName}`,
        };
      } catch (error) {}
    },
    rHint() {
      try {
        return { hint: this.user.hint };
      } catch (error) {}
    },
    getName() {
      return this.user.firstName.replace(/นาย|นางสาว|นาง/g, () => "");
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
@import '../styles/senior.css';
</style>