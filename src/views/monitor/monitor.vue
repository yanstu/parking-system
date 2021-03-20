<template>
  <div class="root" :style="{ height: screenHeight + 'px' }">
    <div class="header">
      <ul class="nav">
        <li>
          <div>当前操作员: admin</div>
          <button>换班</button>
        </li>
        <li>
          <img src="../../assets/修改密码.png" alt="" />
          修改密码
        </li>
        <li>
          <img src="../../assets/车辆查询.png" alt="" />
          在场车辆查询
        </li>
        <li>
          <img src="../../assets/费用查询.png" alt="" />
          出场收费查询
        </li>
        <li>
          <img src="../../assets/收费.png" alt="" />
          中央收费
        </li>
        <li>
          <img src="../../assets/设置.png" alt="" />
          系统设置
        </li>
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
                  <option value="入口一:192.168.1.100">入口一:192.168.1.100</option>
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
                  <option value="出口一:192.168.1.100">入口一:192.168.1.100</option>
                </select>
              </div>
              <div>开闸</div>
              <div>手工录入</div>
            </div>
          </div>
          <div></div>
          <div></div>
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
        <div class="main-right-content" style="background-color: #f8f3f3"></div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenHeight: '', //当前屏幕高度
      nowTime: [] //当前时间
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
      var Week = ['日', '一', '二', '三', '四', '五', '六'];
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
          myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate(),
          myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds(),
          day
        );
      }, 1000);
    }
  }
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
  background-color: #c8cbd0;
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
  border: 1px solid red;
  width: 100%;
}

/* 中间右边 */
.main-right {
  height: 100%;
  width: 25%;
}
.main-right-content {
  height: 33.3333%;
  width: 100%;
  /* background: url(../../assets/车辆离开.png) no-repeat center; */
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
</style>
