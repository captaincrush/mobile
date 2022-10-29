<template>
  <div>
    <div id="box">
      <van-nav-bar title="优惠" left-arrow @click-left="onClickLeft" />
      <div class="welcome">
        <span>欢迎来到中国移动掌上营业厅</span><a @click="$router.push('/center/login')">去登录 ></a>
      </div>
      <ul>
        <li>
          <img src="@/assets/img/business1-1.png" />
          <span>移动京享卡</span>
          <span>京东PLUS会员</span>
        </li>
        <li>
          <img src="@/assets/img/business1-2.png" />
          <span>爱奇艺星钻卡</span>
          <span>24月星钻会员</span>
        </li>
        <li>
          <img src="@/assets/img/business1-3.png" />
          <span>万能副卡</span>
          <span>主卡代付资源共享</span>
        </li>
        <li>
          <img src="@/assets/img/business1-4.png" />
          <span>年轻就用潮玩卡</span>
          <span>短视频任性玩</span>
        </li>
        <li>
          <img src="@/assets/img/business1-5.png" />
          <span>29元宝藏卡</span>
          <span>首月免月费</span>
        </li>
        <li>
          <img src="@/assets/img/business1-6.png" />
          <span>神州行孝心卡</span>
          <span>防骚扰更安心</span>
        </li>
      </ul>
      <div class="line">我是有底线的</div>
      <div class="sale-bottom">
        <div>京ICP备05002571号&nbsp;&nbsp;&nbsp;证照信息</div>
        <div>Copyright&copy;1999-2022&nbsp;中国移动&nbsp;版权所有</div>
        <div>中华人民共和国增值电信业务经营许可证</div>
        <div>经营许可证编号:A2.B1.B2-20100001</div>
        <div>本网站支持IPv6访问</div>
      </div>
      <div style="height: 45px; width: 100%"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);

export default {
  methods: {
    onClickLeft() {
      // console.log(this.$router);
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
#box {
  background-color: #f6f6f6;
  .van-nav-bar {
    background-color: #f7f7f7;
  }

  .welcome {
    background-color: #fff;
    color: #666666;
    font-size: 0.8rem;
    line-height: 2.4267rem;
    height: 2.2667rem;
    padding-left: 1rem;
    box-sizing: border-box;
    span {
      margin-right: 0.6667rem;
    }
    a {
      color: #339dd9;
    }
  }

  :deep(.van-nav-bar .van-icon) {
    color: black;
  }
  :deep(.van-nav-bar__arrow) {
    font-size: 1.3333rem;
  }
  :deep(.van-nav-bar__title) {
    font-size: 1.0667rem;
  }

  li {
    height: 6.25rem;
    width: 100%;
    background-color: #fff;
    margin-top: 0.625rem;
    padding: 0.625rem 0.3125rem;
    font-size: 0.75rem;
    box-sizing: border-box;
    img {
      width: 3.125rem;
      height: 3.125rem;
      float: left;
      margin-right: 0.625rem;
    }
    span:nth-of-type(1) {
      width: 18.75rem;
      float: left;
      margin-bottom: 0.625rem;
    }
    span:nth-of-type(2) {
      float: left;
      color: #acacac;
    }
  }
  .line {
    text-align: center;
    color: #acacac;
    font-size: 0.75rem;
    padding: 1.25rem 0;
  }
}
.sale-bottom {
  height: 9.375rem;
  background-color: #f4f4f4;
  font-size: 0.5333rem;
  text-align: center;
  border: 1px solid #f1f0f0;
  div {
    margin: .625rem 0;
  }
}
</style>