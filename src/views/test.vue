<template>
  <div class="container">
    <input type="text" v-model="hint" style="width: 100%" @keydown.enter="sendHint" />
    <br />
    <h1 v-for="(i, index) in f" :key="index">{{i}}</h1>
    {{data}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      hint: "",
      f: [],
      data: ''
    };
  },

  methods: {
    sendHint() {
      const [s_id, , hint] = this.hint.split("\t");
      this.f.push({s_id, hint});
      axios.post(`http://192.168.43.187:3000/post/sentHint/${s_id}`, { hint });
    },
  },
  mounted() {
    axios.get('http://192.168.43.187:3000/post/admin').then(res => this.data = res.data)
  },
};
</script>

<style>
</style>