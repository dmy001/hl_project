<template>
  <div class="hello">
    <h1>1111111111111111111</h1>
    <el-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <el-button slot="reference">click 激活</el-button>
    </el-popover>

    <button @click="btn1(3)">进入登录页面</button>
    <router-link :to="{ path: '/main' }">进入看板</router-link>
    <div @click="changeColor2()">
      <div
        style="
          width: 64px;
          height: 18px;
          background-color: #dddddd;
          transform: skew(-45deg, 0deg) translate(10px, 0px);
          border: 0.5px solid #ccc;
          cursor: pointer;
        "
        ref="TheStyle1"
      ></div>
      <div
        style="
          width: 64px;
          height: 64px;
          background-color: #aaaaaa;
          float: left;
          border: 0.5px solid #ccc;
          cursor: pointer;
        "
        ref="TheStyle2"
      ></div>
      <div
        style="
          width: 18px;
          height: 64px;
          background-color: #888888;
          float: left;
          transform: skew(0deg, -45deg) translate(0px, -10px);
          cursor: pointer;
          border: 0.5px solid #ccc;
        "
        ref="TheStyle3"
      ></div>
    </div>
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
    changeColor2() {
      this.$refs.TheStyle1.style.backgroundColor = "blue";
      this.$refs.TheStyle2.style.backgroundColor = "blue";
      this.$refs.TheStyle3.style.backgroundColor = "blue";
      console.log(this.$refs.TheStyle1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
.top {
  width: 64px;
  height: 46px;
  background-color: #dddddd;
  transform: skew(-45deg, 0deg) translate(30px, 0px);
}
.center {
  width: 64px;
  height: 64px;
  background-color: #aaaaaa;
  float: left;
}
.right {
  width: 46px;
  height: 64px;
  background-color: #888888;
  float: left;
  transform: skew(0deg, -45deg) translate(0px, -30px);
}
</style>
