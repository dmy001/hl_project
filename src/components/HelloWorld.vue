<template>
  <div class="hello">
    <h1>1111111111111111111</h1>
    <button @click="btn1(3)">111</button>
    <router-link :to="{ path: '/main' }">1111111111</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {
    btn1(id) {
      // this.$router.push("/login");
      this.$router.push({
        path: `/login/${id}`,
      });
    },
  },
  mounted: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
