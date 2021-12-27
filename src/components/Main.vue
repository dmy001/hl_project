<template>
  <div>
    <p>111222</p>
    <h1>33333333333333333333333333</h1>
    <button @click="board()">进入看板</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    board() {
      this.$router.push("/board");
    },
  },
};
</script>

<style>
</style>