<template >
  <div>
    <div class="login_container">
      <div class="login_top">
        <div class="top_text">
          <h3>华兰生物MES系统</h3>
        </div>
      </div>
      <div class="login_bottom">
        <div class="login_content">
          <el-input
            class="input_username"
            placeholder="请输入用户名"
            v-model="username"
            clearable
          >
          </el-input>
          <el-input
            class="input_password"
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
          <el-button class="btn_commit" type="primary" @click="register()"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    register() {
      // if (this.username === "" || this.password === "") {
      //   alert("账号密码不能为空");
      // } else {
      //   axios.post("http://183.66.41.42:30624/api/permission/auth/login", {
      //     loginName: this.username,
      //     password: this.password,
      //   });
      // }
      axios
        .post("http://183.66.41.42:30624/api/permission/auth/login", {
          loginName: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200 && res.data.code === 200) {
            window.localStorage.setItem("Token", res.data.data.token);
          } else {
            this.$message.error("账号或密码错误，请重新登录");
          }
          // return window;
        });

      // if (res.code === 0) {
      //   console.log("000");
      // }
    },
  },
};
</script>

<style lang="less" >
.login_container {
  position: relative;
  height: 100vh;
  width: 100%;
  border: 1px solid red;
  .login_top {
    display: flex;
    width: 100%;
    height: 64px;
    background-color: royalblue;
    border: 1px solid red;
    .top_text {
      border: 1px solid red;
      color: white;
      margin-left: 40px;
    }
  }
  .login_bottom {
    display: flex;
    width: 100%;
    height: 100vh;
    border: 1px solid red;
    background-color: rgba(51, 51, 51, 1);
    justify-content: center;
    align-items: center;
    .login_content {
      display: flex;
      border: 1px solid red;
      .input_password {
        margin-left: 20px;
      }
      .btn_commit {
        margin-left: 20px;
      }
    }
  }
}
</style>

