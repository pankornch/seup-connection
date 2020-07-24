<template>
  <div style="width: 90vw; margin: auto;">
    <form @submit.prevent="sendData">
      <input type="text" v-model="data" placeholder="ID fname lname" style="width: 80vw" />
    </form>
    <!--  -->
    <div style="display: flex; justify-content: space-between;">
      <div style="width: 40vw">
        <b-table :items="members_62"></b-table>
      </div>
      <div style="width: 40vw">
        <b-table :items="members_63"></b-table>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "admin",
  data() {
    return {
      data: ""
    };
  },

  methods: {
    sendData() {
      const [s_id, name] = this.data.split(" ").filter(e => e.length !== 0);
      if (!s_id || !name) return alert("Nah");
      const [firstName, lastName] = name.split(" ");
      this.$store.dispatch("AddUser", { s_id, firstName, lastName });
      this.data = "";
    },

    fetchMembers() {
      this.$store.dispatch("fetchUsers");
    }
  },
  computed: {
    ...mapGetters({
      all: "getterAll"
    }),
    members_62() {
      try {
        return this.all.filter(el => el.s_id.slice(0, 2) === "62");
      } catch (error) {}
    },
    members_63() {
      try {
        return this.all.filter(el => el.s_id.slice(0, 2) === "63");
      } catch (error) {}
    }
  },
  created() {
    this.fetchMembers();
  }
};
</script>

<style>
</style>