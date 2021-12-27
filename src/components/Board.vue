<template>
  <div>
    <div class="main">
      <div>
        <ul style="list-style: none">
          <li
            v-for="(item, index) in list1"
            :key="`a` + index"
            style="border: 1px solid red"
          >
            <span>卵化厅{{ item.roomNumber }}</span>
            <hr />
            <div class="content">
              <Cube
                v-for="(item1, i) in item.devList"
                :key="`n` + i"
                :devNumber="item1.devNumber"
                :dayAmount="item1.dayAmount"
                :temperature="item1.temperature"
                :humidity="item1.humidity"
                :humiditySv="item1.humiditySv"
                :status="item1.status"
              >
              </Cube>
              <!-- <div
                class="cavas_none"
                v-for="(item1, i) in item.devList"
                :key="`b` + i"
              > -->
              <!-- <p style="color: #fff">
                  {{ item1.devNumber }}
                </p> -->
              <!-- <div class="cavas_message" v-if="item1.devNumber === isMessage">
                  <img
                    class="cavas_message_triangle"
                    src="../assets/三角.png"
                    alt=""
                  />
                  <div class="cavas_message_content">
                    <div class="cavas_message_content_centre">
                      <p>
                        <span style="display: inline-block"
                          >天数:{{ item1.dayAmount }}</span
                        >
                        <span style="display: inline-block"
                          >温度:{{ item1.temperature }}</span
                        >
                        <span style="display: inline-block"
                          >湿度:{{ item1.humidity }}
                        </span>
                        <span style="display: block"
                          >湿设:{{ item1.humiditySv }}</span
                        >
                      </p>
                    </div>
                  </div>
                </div> -->
              <!-- </div> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Cube from "@/components/Cube";
export default {
  components: {
    Cube,
  },
  data() {
    return {
      isMessage: 0,
      list1: [
        {
          roomNumber: 1, //卵化厅号
          //设备数据列表
          devList: [
            {
              devNumber: 1, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0, //状态
            },
            {
              devNumber: 2, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0, //状态
            },
            {
              devNumber: 3,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 1,
            },
            {
              devNumber: 4,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 0,
            },
            {
              devNumber: 5,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 0,
            },
            {
              devNumber: 6,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 0,
            },
            {
              devNumber: 7,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 1,
            },
            {
              devNumber: 8,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 0,
            },
            {
              devNumber: 9,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 1,
            },
            {
              devNumber: 10,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 1,
            },
            {
              devNumber: 11,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 0,
            },
            {
              devNumber: 12,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 0,
            },
            {
              devNumber: 13,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 1,
            },
            {
              devNumber: 14,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 1,
            },
            {
              devNumber: 15,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 0,
            },
          ],
        },
        {
          roomNumber: 2, //卵化厅号
          //设备数据列表
          devList: [
            {
              devNumber: 1, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 1,
            },
            {
              devNumber: 2,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 70,
              status: 0,
            },
            {
              devNumber: 3, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
            {
              devNumber: 4, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
            {
              devNumber: 5, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 1,
            },
            {
              devNumber: 6, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 1,
            },
            {
              devNumber: 7, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
            {
              devNumber: 8, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 1,
            },
            {
              devNumber: 9, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
            {
              devNumber: 10, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
          ],
        },

        {
          roomNumber: 3, //卵化厅号
          //设备数据列表
          devList: [
            {
              devNumber: 1, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
            {
              devNumber: 2,
              dayAmount: "01d 07h",
              temperature: "37.93/38.03 31.09/30.00",
              humidity: 72,
              humiditySv: 71,
              status: 1,
            },
            {
              devNumber: 3, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
            {
              devNumber: 4, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 1,
            },
            {
              devNumber: 5, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
            {
              devNumber: 6, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 1,
            },
            {
              devNumber: 7, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
            {
              devNumber: 8, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 1,
            },
            {
              devNumber: 9, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 1,
            },
            {
              devNumber: 10, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
            {
              devNumber: 11, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 0,
            },
            {
              devNumber: 12, //设备编号
              dayAmount: "01d 07h", //天数
              temperature: "37.93/38.03 31.09/30.00", //温度
              humidity: 72, //湿度
              humiditySv: 70, //湿设
              status: 1,
            },
          ],
        },
      ],
    };
  },
  methods: {
    // openMessage(i) {
    //   this.isMessage = i;
    //   console.log(111);
    // },
    // fatherMethod(index) {
    //   console.log(index);
    // },
  },
};
</script>

<style lang="less">
.main {
  width: 100%;
  border: 1px solid red;

  // .content_line {
  //   border: 0.5px solid #ccc;
  // }
  .content {
    display: flex;
    border: 1px solid red;
    flex-wrap: wrap;
    // .cavas_none {
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   width: 64px;
    //   height: 46px;
    //   background-color: rgba(215, 215, 215, 1);
    //   border: 1px solid red;
    //   margin-right: 30px;
    //   margin-bottom: 20px;
    //   cursor: pointer;
    //   .cavas_message {
    //     position: relative;
    //     top: 15px;
    //     right: 15px;
    //     .cavas_message_triangle {
    //       position: absolute;
    //       width: 24px;
    //       height: 24px;
    //       background-size: contain;
    //       background-repeat: no-repeat;
    //     }
    //     .cavas_message_content {
    //       position: absolute;
    //       border: 1px solid #ccc;
    //       background-color: #fff;
    //       top: 16px;
    //       width: 196px;
    //       height: 88px;
    //       .cavas_message_content_centre {
    //         padding: 2px;
    //         font-size: 6px;
    //       }
    //     }
    //   }
    // }
    // .cavas {
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   width: 64px;
    //   height: 46px;
    //   background-color: rgba(25, 118, 210, 1);
    //   border: 1px solid red;
    //   margin-right: 30px;
    //   margin-bottom: 20px;
    //   cursor: pointer;
    //   .cavas_message {
    //     position: relative;
    //     top: 15px;
    //     right: 15px;
    //     .cavas_message_triangle {
    //       position: absolute;
    //       width: 24px;
    //       height: 24px;
    //       background-size: contain;
    //       background-repeat: no-repeat;
    //     }
    //     .cavas_message_content {
    //       position: absolute;
    //       border: 1px solid #ccc;
    //       background-color: #fff;
    //       top: 16px;
    //       width: 196px;
    //       height: 120px;
    //       .cavas_message_content_centre {
    //         padding: 2px;
    //         font-size: 6px;
    //       }
    //     }
    //   }
    // }
  }
}
</style>