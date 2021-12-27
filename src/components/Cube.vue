<template>
  <div>
    <div
      @click="changeColor(devNumber)"
      @mouseleave="isMessage = false"
      ref="statusStyle"
      style="margin-right: 40px; margin-bottom: 20px; height: 82px"
    >
      <!-- 顶部 -->
      <div
        ref="Style1"
        style="
          width: 64px;
          height: 18px;
          background-color: #dddddd;
          transform: skew(-45deg, 0deg) translate(10px, 0px);
          border: 0.5px solid #ccc;
          cursor: pointer;
        "
      ></div>
      <!-- 中间 -->
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          width: 64px;
          height: 64px;
          background-color: #aaaaaa;
          float: left;
          border: 0.5px solid #ccc;
          cursor: pointer;
        "
        ref="Style2"
      >
        <p style="color: #fff">{{ devNumber }}</p>
        <div class="cavas_message" v-if="isMessage">
          <!-- 三角图片 -->
          <img class="cavas_message_triangle" src="../assets/三角.png" alt="" />
          <div class="cavas_message_content">
            <div class="cavas_message_content_centre">
              <p>
                <span style="display: inline-block">天数:{{ dayAmount }}</span>
                <span style="display: inline-block"
                  >温度:{{ temperature }}</span
                >
                <span style="display: inline-block">湿度:{{ humidity }} </span>
                <span style="display: block">湿设:{{ humiditySv }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
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
        ref="Style3"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    devNumber: Number,
    dayAmount: String,
    temperature: String,
    humidity: Number,
    humiditySv: Number,
    status: Number,
  },
  data() {
    return {
      isMessage: false,
    };
  },
  methods: {
    changeColor() {
      //   this.$refs.Style1.style.backgroundColor = "blue";
      //   this.$refs.Style2.style.backgroundColor = "blue";
      //   this.$refs.Style3.style.backgroundColor = "blue";
      this.isMessage = true;
      console.log(this.status);
    },
  },
  mounted() {
    if (this.status === 1) {
      this.$refs.Style1.style.backgroundColor = "blue";
      this.$refs.Style2.style.backgroundColor = "blue";
      this.$refs.Style3.style.backgroundColor = "blue";
    }
  },
};
</script>

<style lang="less">
.cavas_message {
  position: relative;
  top: 25px;
  right: 15px;
  z-index: 999;
  .cavas_message_triangle {
    z-index: 999;
    position: absolute;
    width: 24px;
    height: 24px;

    background-size: contain;
    background-repeat: no-repeat;
  }
  .cavas_message_content {
    position: absolute;
    border: 1px solid #ccc;
    background-color: #fff;
    top: 16px;
    width: 196px;
    height: 88px;
    .cavas_message_content_centre {
      padding: 2px;
      font-size: 6px;
    }
  }
}
</style>