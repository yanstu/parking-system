<template>
  <div class="root" :style="{ height: screenHeight + 'px' }">
    <div class="header">
      <ul class="nav">
        <li>
          <div>当前操作员: admin</div>
          <button>换班</button>
        </li>
        <li><img src="../../assets/修改密码.png" alt="" />修改密码</li>
        <li><img src="../../assets/车辆查询.png" alt="" />在场车辆查询</li>
        <li><img src="../../assets/费用查询.png" alt="" />出场收费查询</li>
        <li><img src="../../assets/收费.png" alt="" />中央收费</li>
        <li><img src="../../assets/设置.png" alt="" />系统设置</li>
        <li>{{ nowTime[0] }} {{ nowTime[1] }} 星期{{ nowTime[2] }}</li>
      </ul>
    </div>
    <div class="main">
      <div class="main-left">
        <div class="main-left-top">
          <div class="main-left-news-content">
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="main-left-bottom">
          <div class="main-left-bottom-content-top">
            <div class="main-left-bottom-content-top-container">
              <div>无车牌小图</div>
              <div>贵A12345</div>
              <div>
                <select name="" id="">
                  <option value="入口一:192.168.1.100">
                    入口一:192.168.1.100
                  </option>
                </select>
              </div>
              <div>开闸</div>
              <div>手工录入</div>
            </div>
            <div class="main-left-bottom-content-top-container">
              <div>无车牌小图</div>
              <div>贵A12345</div>
              <div>
                <select name="" id="">
                  <option value="出口一:192.168.1.100">
                    入口一:192.168.1.100
                  </option>
                </select>
              </div>
              <div>开闸</div>
              <div>手工录入</div>
            </div>
          </div>
          <div class="main-left-bottom-content-main">
            <div>入口一 <span>贵A12345</span></div>
            <div>临时车 <span>2021-03-15 10：31</span></div>
          </div>
          <div class="main-left-bottom-content-bottom">
            <div class="main-left-bottom-content-bottom-container">
              <div
                class="main-left-bottom-content-bottom-container-div"
                v-for="(item, index) in parkingSpace"
                :key="index"
              >
                <div>
                  {{ item.name }}: <span>{{ item.number }}</span> 位
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-right">
        <div class="main-right-content">
          <div class="main-right-content-top">入口一:[192.168.0.1]</div>
          <img src="../../assets/车辆进入.png" alt="" />
          <div class="main-right-content-bottom">
            <div>入场时间：</div>
            <div>贵A12345</div>
          </div>
        </div>
        <div class="main-right-content">
          <div class="main-right-content-top">出口大图</div>
          <img src="../../assets/车辆离开.png" alt="" />
          <div class="main-right-content-bottom">
            <div>出场通道</div>
            <div></div>
          </div>
        </div>
        <div class="main-right-content" style="background-color: #f8f3f3">
          <ve-table
            :columns="columns"
            :table-data="tableData"
            even-bg-color="#f4f4f4"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
            scrollWidth="1200px"
          ></ve-table>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
        <input type="checkbox" name="" id="" />
        <span style="color: yellow">自动登录</span>
        <span>本机：192.168.24.233</span>
        <span>服务器：192.168.24.333</span>
      </div>
      <div class="footer-img">
        <div><img src="../../assets/云端办公室.png" alt="" /></div>
        <div><img src="../../assets/网络.png" alt="" /></div>
        <div><img src="../../assets/刷新.png" alt="" /></div>
        <div><img src="../../assets/退出.png" alt="" /></div>
        <div><img src="../../assets/键盘.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      screenHeight: "", //当前屏幕高度
      nowTime: [], //当前时间
      parkingSpace: [
        //车位详情
        { name: "总车位", number: "1000" },
        { name: "场内车", number: "2" },
        { name: "固定车", number: "0" },
        { name: "预约车位", number: "0" },
        { name: "剩余车位", number: "998" },
        { name: "临时车", number: "2" },
        { name: "储值车", number: "0" },
        { name: "收费现金", number: "0" },
      ],
      tableData: [
        {
          name: "赵伟",
          tel: "156*****1987",
          hobby: "钢琴、书法、唱歌",
          address: "上海市黄浦区金陵东路569号17楼",
        },
        {
          name: "李伟",
          tel: "182*****1538",
          hobby: "钢琴、书法、唱歌",
          address: "上海市奉贤区南桥镇立新路12号2楼",
        },
        {
          name: "孙伟",
          tel: "161*****0097",
          hobby: "钢琴、书法、唱歌",
          address: "上海市崇明县城桥镇八一路739号",
        },
        {
          name: "周伟",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          address: "上海市青浦区青浦镇章浜路24号",
        },
        {
          name: "吴伟",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号",
        },
        {
          name: "吴伟",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号",
        },
        {
          name: "吴伟",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号",
        },
        {
          name: "吴伟",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号",
        },
        {
          name: "吴伟",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号",
        },
        {
          name: "吴伟",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号",
        },
      ],
      columns: [
        {
          field: "name",
          title: "姓名",
          width: 80,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true
        },
        {
          field: "tel",
          title: "手机号码",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true,
        },
        {
          field: "hobby",
          title: "爱好",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          isEdit: true,
          isResize: true,
        },
        {
          field: "address",
          title: "地址",
          width: 280,
          titleAlign: "center",
          columnAlign: "left",
          isEdit: true,
          isResize: true,
        },
         {
          field: "address",
          title: "地址",
          width: 280,
          titleAlign: "center",
          columnAlign: "left",
          isEdit: true,
          isResize: true,
        },
         {
          field: "address",
          title: "地址",
          width: 280,
          titleAlign: "center",
          columnAlign: "left",
          isEdit: true,
          isResize: true,
        },
      ],
    };
  },
  mounted() {
    //获得屏幕高度
    this.screenHeight = window.screen.height;
    // 当前时间获取
    this.currentTime();
  },
  methods: {

    // 当前时间获取
    currentTime() {
      var Week = ["日", "一", "二", "三", "四", "五", "六"];
      setInterval(() => {
        this.nowTime = [];
        let myDate = new Date();
        let day;
        for (let i = 0; i <= Week.length; i++) {
          if (myDate.getDay() == i) {
            day = Week[i];
          }
        }
        this.nowTime.push(
          myDate.getFullYear() +
            "-" +
            (myDate.getMonth() + 1) +
            "-" +
            myDate.getDate(),
          myDate.getHours() +
            ":" +
            myDate.getMinutes() +
            ":" +
            myDate.getSeconds(),
          day
        );
      }, 1000);
    },
  },
};
</script>

<style scoped>
.root {
  width: 100%;
}
/* 头部导航 */
.header {
  width: 100%;
  height: 10%;
  background-color: #4c4c4a;
}
.nav {
  display: flex;
  list-style: none;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  color: #ffffff;
}
.nav li {
  flex-grow: 1;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}
.nav li img {
  display: block;
  width: 42px;
  height: 42px;
  margin: 4px auto;
}
.nav li:nth-child(2) {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
.nav li:first-child {
  flex-grow: 3;
  border-right: none;
}
.nav li:first-child button {
  width: 50%;
  outline: none;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 15px;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 5px;
}
.nav li:last-child {
  flex-grow: 3;
}

/* 中部内容 */
.main {
  height: 85%;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  background-color: #4c4c4a;
  display: flex;
}

/* 中间左边 */
.main-left {
  height: 100%;
  width: 75%;
}
.main-left-top {
  height: 80%;
}
.main-left-news-content {
  display: flex;
  height: 100%;
}
.main-left-news-content div {
  height: 100%;
  width: 50%;
  background-color: black;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
}
.main-left-bottom {
  height: 20%;
  width: 100%;
  background-color: #c0c2c8;
}
.main-left-bottom-content-top {
  height: 15%;
  display: flex;
  justify-content: space-between;
}
.main-left-bottom-content-top-container {
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-between;
}
.main-left-bottom-content-top-container div {
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 3px;
}
.main-left-bottom-content-top-container div:nth-child(1) {
  background-color: #00bbff;
}
.main-left-bottom-content-top-container div:nth-child(4) {
  background-color: #fdf800;
  cursor: pointer;
}
.main-left-bottom-content-top-container div:nth-child(5) {
  background-color: #fccc10;
  cursor: pointer;
}
.main-left-bottom-content-top-container div select {
  height: 100%;
}
.main-left-bottom-content-main {
  height: 40%;
}
.main-left-bottom-content-main div {
  height: 50%;
  font-size: 25px;
}
.main-left-bottom-content-main div:nth-child(2) {
  margin-left: 19%;
}
.main-left-bottom-content-main div span {
  margin-left: 2%;
}

.main-left-bottom-content-bottom {
  height: 45%;
}
.main-left-bottom-content-bottom-container {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
}
.main-left-bottom-content-bottom-container-div {
  width: 25%;
  text-align: center;
  line-height: 200%;
  border: 0.8px solid #584e42;
}
.main-left-bottom-content-bottom-container-div span {
  margin: 0 3%;
  color: red;
}

/* 中间右边 */
.main-right {
  height: 100%;
  width: 25%;
}
.main-right-content {
  height: 33.3333%;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  position: relative;
}
.main-right-content img {
  margin: 13% auto;
  display: block;
}
.main-right-content-top {
  width: 65%;
  border: 1px solid white;
  margin: 0 auto;
  text-align: center;
  height: 30px;
  line-height: 30px;
  background-color: #01cbdf;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.main-right-content-bottom {
  display: flex;
  background-color: #584e42;
  position: absolute;
  width: 100%;
  bottom: 0;
  justify-content: space-between;
  height: 33px;
  line-height: 33px;
}
.main-right-content:nth-child(3) div {
  height: 100%;
}
/* 底部 */
.footer {
  height: 4.8%;
  background-color: rgb(24, 23, 23);
  display: flex;
  justify-content: space-between;
}
.footer div {
  height: 100%;
  width: 50%;
  color: white;
  line-height: 250%;
  margin: 0 1.5%;
}
.footer div span {
  margin: 0 1%;
}
.footer-img {
  display: flex;
  text-align: right;
  width: 20% !important;
}
.footer div div img {
  width: 35px;
  height: 35px;
  margin-top: 5%;
}
</style>

