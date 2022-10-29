<template>
  <div>
    <div id="box">
      <!-- 顶部栏 -->
      <div class="top">
        <img class="logo" src="@/assets/img/logo1.png" />
        <div class="area" to="@views/first/Area.vue" @click="changeCity">
          {{ cityName }}&nbsp;<img src="@/assets/img/down1.png" class="down" />
        </div>
        <div class="more">
          <img src="@/assets/img/search.png" /><img
            src="@/assets/img/more.png"
          />
        </div>
      </div>
      <!-- 欢迎栏 -->
      <div class="welcome">
        <span>欢迎来到中国移动商城</span
        ><a @click="$router.push('/center/login')">去登录 ></a>
      </div>
      <!-- 通知栏 -->
      <van-notice-bar
        left-icon="volume-o"
        scrollable
        text="关于中国移动官方服务热线号码的公告"
        background="red"
        color="#fff"
        mode="closeable"
      />
      <!-- 功能区 -->
      <div class="shop-tools">
        <div @click="$router.push('/first/phonebill')">
          <img src="http://img1.shop.10086.cn/file/tmq7trprbpvtpmakm.png" />
          <span>充值交费</span>
        </div>
        <div>
          <img src="http://img1.shop.10086.cn/file/tmq7tawqae6tpmavd.png" />
          <span>我的账单</span>
        </div>
        <div>
          <img src="http://img1.shop.10086.cn/file/tmq7tcj439hkh4dn.png" />
          <span>套餐余量</span>
        </div>
        <div>
          <img src="http://img1.shop.10086.cn/file/tmq7t4ytuuzsb7ub5h.png" />
          <span>已订业务</span>
        </div>
        <div @click="$router.push('/first/Flow')">
          <img src="http://img1.shop.10086.cn/file/tmq7fu82x2b7ubys.png" />
          <span>充流量</span>
        </div>
        <div @click="$router.push('/center/index')">
          <img src="http://img1.shop.10086.cn/file/tmq7fbbpw97khx8t.png" />
          <span>个人中心</span>
        </div>
        <div @click="$router.push('/sale/index')">
          <img src="http://img1.shop.10086.cn/file/tm6f53ts3ujb7ubdk.png" />
          <span>优惠专区</span>
        </div>
      </div>
      <!-- 热门推荐 -->
      <div class="shop-hot">
        <div class="shop-top hot-top">
          <div></div>
          <div>热门推荐</div>
        </div>
        <div class="hot-content">
          <img src="http://img1.shop.10086.cn/file/tw7qqgwrr5rkhp93.png" />
          <img src="http://img1.shop.10086.cn/file/t723jgepzj8ttyvcp.png" />
        </div>
      </div>
      <!-- 办套餐 -->
      <div class="meal">
        <div class="shop-top meal-top">
          <div></div>
          <div>办套餐</div>
        </div>
        <div class="meal-content">
          <div>畅想套餐</div>
          <div>畅享套餐全新升级，玩转多项...</div>
          <img src="http://img1.shop.10086.cn/file/t4fag5ctf8mqfqertte.png" />
        </div>
        <div class="meal-content">
          <div>5G全家享套餐</div>
          <div>畅玩5G特权</div>
          <img src="http://img1.shop.10086.cn/file/t4fayq987wtmvunh.png" />
        </div>
        <div class="meal-content">
          <div>全球通畅想套餐</div>
          <div>畅玩无限</div>
          <img src="http://img1.shop.10086.cn/file/ts8g3cnqh58v7e6j.png" />
        </div>
        <div class="meal-content">
          <div>全球通无限尊享套餐</div>
          <div>尊享无限</div>
          <img src="http://img1.shop.10086.cn/file/tsdbwdaa284v2sz4.png" />
        </div>
      </div>
      <!-- 买手机 -->
      <div class="phone">
        <div class="shop-top phone-top">
          <div></div>
          <div>买手机</div>
        </div>
        <div class="phone-content">
          <img src="http://img1.shop.10086.cn/file/th7rty5munmmjep8.png" />
          <div>nova7 SE</div>
          <div>信用购机最高阿巴阿巴阿巴</div>
          <div>￥2199</div>
        </div>
        <div class="phone-content">
          <img src="http://img1.shop.10086.cn/file/tcbx6nx5uv39t5zn.png" />
          <div>S7 Pro+</div>
          <div>NZONE S7 P阿巴阿巴阿巴</div>
          <div>￥2099</div>
        </div>
        <div class="phone-content">
          <img src="http://img1.shop.10086.cn/file/tcke6ewhd57mhypr.png" />
          <div>iPhone 1阿巴阿巴</div>
          <div>信用购机最高阿巴阿巴阿巴</div>
          <div>￥6299</div>
        </div>
        <div class="phone-content">
          <img src="http://img1.shop.10086.cn/file/tcbaqrdqgdkdnu8d.png" />
          <div>苹果13 min</div>
          <div>诺</div>
          <div>￥5499</div>
        </div>
      </div>
      <!-- 选号码 -->
      <div class="select">
        <div class="shop-top select-top">
          <div></div>
          <div>选号码</div>
        </div>
        <div class="select-content">
          <img src="http://img1.shop.10086.cn/file/tc5sa44ezwqbgys9.png" />
        </div>
      </div>
      <!-- 全家享 -->
      <div class="house">
        <div class="shop-top house-top">
          <div></div>
          <div>全家享</div>
        </div>
        <ul class="house-content">
          <li>
            <div>宽带新装</div>
            <div>家居必备</div>
            <img src="@/assets/img/house1.png" />
          </li>
          <li>
            <div>全国亲情网</div>
            <div>成员多至19人</div>
            <img src="@/assets/img/house2.png" />
          </li>
        </ul>
      </div>
      <!-- 底部 -->
      <div class="sale-bottom">
        <div>京ICP备05002571号&nbsp;&nbsp;&nbsp;证照信息</div>
        <div>Copyright&copy;1999-2022&nbsp;中国移动&nbsp;版权所有</div>
        <div>本网站支持IPv6访问</div>
      </div>
      <!-- 侧边 -->
      <a href=""><span class="iconfont .icon-gouwuche"></span></a>
      <a href=""><span class="iconfont .icon-zhiding"></span></a>
      <div style="height: 45px; width: 100%"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { NoticeBar, Sticky } from "vant";

Vue.use(Sticky);
Vue.use(NoticeBar);

export default {
  methods: {
    beforeCreate() {
      console.log(localStorage.getItem("cityName"));
      let cityName = localStorage.getItem("cityName");
      if (cityName == null || cityName == "") {
        Dialog.confirm({
          title: "选择城市",
          message: "跳转到城市列表进行选择",
        })
          .then(() => {
            this.$router.push("/first/city");
          })
          .catch(() => {});
      }
    },
    changeCity() {
      this.$router.push("/first/city");
    },
  },
};
</script>

<style lang="scss" scoped>
#box {
  background-color: #f8fbfb;
  // 顶部
  .top {
    height: 2.8rem;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    box-sizing: border-box;
    .logo {
      height: 1.4rem;
      width: 7rem;
      display: block;
      cursor: pointer;
    }
    .area {
      cursor: pointer;
      font-size: 0.2133rem;
      .down {
        height: 0.9333rem;
        width: 0.7333rem;
        vertical-align: top;
      }
    }
    .more {
      cursor: pointer;
      img {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        margin-left: 0.6667rem;
      }
    }
  }
  // 欢迎栏
  .welcome {
    background-color: #fff;
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
  // 通知栏
  :deep(.van-notice-bar) {
    height: 1.8667rem;
    font-size: 0.5333rem;
    padding: 0 0.2667rem;
    color: #ffdad6;
    box-sizing: border-box;
  }
  :deep(.van-notice-bar__left-icon) {
    font-size: 1.3333rem;
    color: #ffdad6;
  }
  :deep(.van-notice-bar__right-icon) {
    font-size: 1.3333rem;
    color: #f99d94;
  }
  // 功能区
  .shop-tools {
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
    height: 10.6667rem;
    width: 100%;
    div {
      width: 5.6rem;
      height: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 0.8rem;
      margin-left: 0.2rem;
      float: left;
      img {
        width: 2.4rem;
        height: 2.4rem;
      }
      span {
        margin-top: 0.4rem;
        font-size: 0.5333rem;
      }
    }
  }
  //public
  .shop-top {
    display: flex;
    background-color: #fff;
    height: 2.8rem;
    margin-top: 0.6667rem;
    border-top: 1px solid #f0f0f0;

    div:nth-child(1) {
      width: 0.32rem;
      height: 100%;
    }
    div:nth-child(2) {
      line-height: 2.8rem;
      margin-left: 0.8rem;
    }
  }
  // 热门推荐
  .shop-hot {
    .hot-top {
      div:nth-child(1) {
        background-color: #ff04bd;
      }
    }
    .hot-content {
      display: flex;
      img {
        display: block;
        border: 1px solid #eff1f1;
        display: block;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
      }
    }
  }

  //   办套餐
  .meal {
    height: 19.4rem;
    .meal-top {
      div:nth-child(1) {
        background-color: #ffea00;
      }
    }
    .meal-content {
      width: 50%;
      height: 8.3rem;
      float: left;
      background-color: #fff;
      border: 1px solid #f0f0f0;
      box-sizing: border-box;
      div:nth-of-type(1) {
        font-size: 0.9867rem;
        margin-top: 0.5333rem;
        margin-left: 0.2667rem;
      }
      div:nth-of-type(2) {
        width: 9.2rem;
        font-size: 0.5333rem;
        color: #a8a8a8;
        margin: 0.2667rem;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      img {
        width: 4.8rem;
        height: 4.8rem;
        display: block;
        float: right;
      }
    }
  }

  // 买手机
  .phone {
    height: 16.8rem;
    .phone-top {
      div:nth-child(1) {
        background-color: #46c900;
      }
    }
    .phone-content {
      padding: 1.0667rem 0.5333rem;
      width: 50%;
      height: 7rem;
      border: 1px solid #f0f0f0;
      box-sizing: border-box;
      float: left;
      background-color: #fff;
      div {
        width: 5.3333rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        float: left;
      }
      div:nth-of-type(1) {
        font-size: 1.0667rem;
      }
      div:nth-of-type(2) {
        font-size: 0.5333rem;
        margin: 0.2667rem 0;
        color: #999999;
      }
      div:nth-of-type(3) {
        color: #e40077;
        font-size: 1.0667rem;
      }
      img {
        width: 4.9067rem;
        height: 4.9067rem;
        display: block;
        float: right;
      }
    }
  }

  // 选号码
  .select {
    .select-top {
      div:nth-child(1) {
        background-color: #9e00b9;
      }
    }
    .select-content {
      border: 1px solid #f0f0f0;
      height: 6.6667rem;
      width: 100%;
      background-color: #fff;
      box-sizing: border-box;
      img {
        width: 50%;
        height: 100%;
        display: block;
      }
    }
  }
  // 全家享
  .house {
    .house-top {
      div:nth-child(1) {
        background-color: #45c900;
      }
    }
    .house-content {
      width: 100%;
      display: flex;
      background-color: #fff;
      li {
        border: 1px solid #f1f0f0;
        width: 50%;
        height: 7.3333rem;
        box-sizing: border-box;
        div:nth-of-type(1) {
          font-size: 0.9333rem;
          padding: 0.2rem 0.4rem;
        }
        div:nth-of-type(2) {
          font-size: 0.5333rem;
          padding: 0 0.4rem;
          color: #999999;
        }
        img {
          width: 4.7rem;
          height: 4.7rem;
          float: right;
        }
      }
    }
  }
  // 底部
  .sale-bottom {
    margin-top: 0.6667rem;
    height: 5.3333rem;
    background-color: #f4f4f4;
    font-size: 0.5333rem;
    text-align: center;
    padding: 0.9333rem;
    border: 1px solid #f1f0f0;
    box-sizing: border-box;
    div {
      margin: 0.1333rem 0;
    }
  }
  // 侧边
  .icon-gouwuche {
    display: block;
    width: 1.875rem;
    height: 1.875rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
