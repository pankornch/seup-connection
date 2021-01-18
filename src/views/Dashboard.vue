<template>
  <div>
    <div
      v-if="isLoading"
      class="text-center d-flex justify-content-center align-items-center"
      style="height: 100vh;"
    >
      <b-spinner variant="info" style="width: 5rem; height: 5rem;"></b-spinner>
    </div>
    <component :is="myComponent" :user="user" :hint="hint" @loadHint="loadHint"></component>
  </div>
</template>

<script>
import seniorDashboard from "../components/SeniorDashboard";
import juniorDashboard from "../components/JuniorDashboard";
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    seniorDashboard,
    juniorDashboard,
  },
  mounted() {
    this.$store.dispatch("getUser");
  },
  computed: {
    ...mapGetters({ user: "getterUser", hint: "getterHint" }),
    myComponent() {
      try {
        return this.user.permission === "fresher"
          ? "juniorDashboard"
          : "seniorDashboard";
      } catch (err) {}
    },
  },
  methods: {
    loadHint() {
      this.$store.dispatch("getHint", this.user.s_id );
    },
  },
  watch: {
    user(a, b) {
      if (a) {
        this.loadHint();
        setTimeout(() => (this.isLoading = false), 1000);
      }
    },
  },
};
</script>

<style>
</style>