<template>
  <div>
    <div class="phone">
      <div class="iconfont icon-zuojiantou" @click="$router.go(-1)"></div>
      <div>充流量号码：<input type="text" placeholder="请输入手机号码" /></div>
    </div>
    <div class="tuijian">
      <div class="tjtop">
        <img
          src="https://flow.clientaccess.10086.cn/leadeon-flow-touch/images/flowNew/recommend.png"
        /><span>推荐</span>
      </div>
      <div class="tjbottom">
        <div>
          <div>随心专区</div>
          <div>热门会员+流量</div>
        </div>
        <div>
          <div>1元抢会员</div>
          <div>月月免费领会员</div>
        </div>
        <div>
          <div>1元20GB</div>
          <div>通用+视频流量</div>
        </div>
      </div>
    </div>
    <div class="day" v-for="(item, index) in product" :key="index">
      <div class="day-top top">
        <div></div>
        <div>{{ item.time }}</div>
        <div>{{ item.tips }}</div>
        <img
          src="https://flow.clientaccess.10086.cn/leadeon-flow-touch/images/flowNew/warm.png"
        />
      </div>
      <div class="day-bottom">
        <div class="day-content" v-for="(value, key) in item.flow" :key="value">
          <div>{{ key }}</div>
          <div>{{ value }}</div>
          <div>{{ item.time }}</div>
        </div>
      </div>
    </div>
    <div class="bottom">充值订单</div>
  </div>
</template>

<script>
import "@/assets/icon/iconfont.css";
export default {
  data() {
    return {
      product: [
        {
          time: "日包",
          flow: { "1GB": "3.00元", "2GB": "5.00元", "5GB": "10.00元" },
          tips: "随时补充，支持跨月",
        },
        {
          time: "小时包",
          flow: { "1GB": "2.00元/4小时", "3GB": "5.00元/4小时" },
          tips: "短时应急，立即生效",
        },
        {
          time: "月包",
          flow: { "1GB": "20.00元", "10GB": "50.00元", "20GB": "70.00元" },
          tips: "多档任您选",
        },
        {
          time: "个性包",
          flow: { "5GB": "6.00元", "10GB": "10.00元", "15GB": "9.00元" },
          tips: "满足您的个性化需求",
        },
        {
          time: "半年包",
          flow: { "5GB": "6.00元", "10GB": "10.00元", "15GB": "9.00元" },
          tips: "180天有效，到期自动失效",
        },
        {
          time: "年包",
          flow: {
            "60GB": "360.00元",
            "120GB": "600.00元",
            "200GB": "840.00元",
          },
          tips: "360天有效，到期自动失效",
        },
      ],
    };
  },
  created() {
    this.$store.commit("setTabbarStatus");
  },
  destroyed() {
    this.$store.commit("setTabbarStatus");
  },
};
</script>

<style lang="scss" scoped>
.phone {
  height: 2.1875rem;
  width: 100%;
  padding: 15px 15px 0 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  > div:nth-of-type(1) {
    font-size: 1.6875rem;
  }
  > div:nth-of-type(2) {
    font-size: 0.875rem;
    color: #666666;
    float: right;
    width: 200px;
    > input {
      width: 100px;
      border: none;
      border-bottom: 1px solid #000;
      margin-left: 0.3125rem;
      font-size: 1.25rem;
    }
    > input::-webkit-input-placeholder {
      font-size: 0.875rem;
    }
  }
}
.tuijian {
  height: 8.4375rem;
  width: 100%;
  padding: 0 17px 0 13px;
  box-sizing: border-box;
  .tjtop {
    height: 3rem;
    padding: 12px 0;
    box-sizing: border-box;
    > img {
      width: 1rem;
      height: 1.125rem;
    }
    > span {
      font-size: 1.125rem;
      color: #333333;
      font-weight: 800;
      margin-left: 0.625rem;
    }
  }
  .tjbottom {
    display: flex;
    justify-content: space-between;
    > div {
      height: 4.6875rem;
      width: 6.875rem;
      border-radius: 0.375rem;
      padding: 16px 0;
      box-sizing: border-box;
      text-align: center;
      color: #fff;
      > div:nth-of-type(1) {
        font-size: 1.125rem;
        font-weight: 800;
      }
      > div:nth-of-type(2) {
        font-size: 0.875rem;
      }
    }
    > div:nth-of-type(1) {
      background-image: linear-gradient(-180deg, #f95554 3%, #f88350);
    }
    > div:nth-of-type(2) {
      background-image: linear-gradient(-180deg, #4eaef8 3%, #a4d3fb);
    }
    > div:nth-of-type(3) {
      background-image: linear-gradient(-180deg, #30c0af 3%, #afeddd);
    }
  }
}
.day {
  height: 7.75rem;
  width: 100%;
  padding: 0 0.9375rem;
  box-sizing: border-box;
  .day-top {
    height: 3rem;
    padding: 12px 0;
    box-sizing: border-box;
    display: flex;
    line-height: 1.5rem;
    > div:nth-of-type(1) {
      width: 0.25rem;
      height: 100%;
      background-color: #ff6710;
    }
    > div:nth-of-type(2) {
      font-size: 1.125rem;
      font-weight: 800;
      margin-left: 0.625rem;
    }
    > div:nth-of-type(3) {
      font-size: 0.75rem;
      color: #9999a6;
      margin-left: 0.625rem;
    }
    > img {
      width: 0.875rem;
      height: 0.875rem;
      vertical-align: bottom;
      margin-left: 0.625rem;
      margin-top: 0.25rem;
    }
  }
  .day-bottom {
    width: 100%;
    height: 4.75rem;
    padding: 0 0 0.625rem;
    box-sizing: border-box;
    display: flex;
    .day-content {
      width: 6.75rem;
      height: 4.125rem;
      margin-right: 0.5rem;
      padding: 10px 0;
      box-sizing: border-box;
      text-align: center;
      background-image: url(https://flow.clientaccess.10086.cn/leadeon-flow-touch/images/flowNew/day.png);
      background-repeat: no-repeat;
      background-size: 30%;
      background-position: 0px 33px;
      border: 1px solid #ffd1b7;
      border-radius: 0.375rem;
      position: relative;
      > div:nth-of-type(1) {
        font-size: 1.125rem;
        font-weight: 800;
      }
      > div:nth-of-type(2) {
        font-size: 0.875rem;
        color: #a699b3;
      }
      > div:nth-of-type(3) {
        width: 2.9375rem;
        height: 0.875rem;
        background-color: #ffad47;
        color: #fff;
        font-size: 0.75rem;
        position: absolute;
        border-radius: 0.375rem 0 0.375rem 0;
        top: 0;
        left: 0;
      }
    }
  }
}
.bottom {
  height: 3.75rem;
  line-height: 3.75rem;
  width: 100%;
  text-align: center;
  background-color: #fafafa;
}
</style>