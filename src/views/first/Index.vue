<template>
  <div>
    <!-- 顶部栏 -->
    <div class="top">
      <img class="logo" src="@/assets/img/logo1.png" />
      <div class="area" @click="changeCity">
        {{ cityName }}&nbsp;<img src="@/assets/img/down1.png" class="down" />
      </div>
      <div class="more">
        <img src="@/assets/img/search.png" /><img src="@/assets/img/more.png" />
      </div>
    </div>
    <!-- 欢迎栏 -->
    <div class="welcome">
      <span>欢迎来到中国移动掌上营业厅</span
      ><a @click="$router.push('/center/login')">去登录 ></a>
    </div>
    <!-- 通知栏 -->
    <van-notice-bar
      left-icon="volume-o"
      text="中国移动掌上营业厅9月22日23:00至9月23日7:00系统紧急升级公告"
      mode="closeable"
      color="#fff"
      background="#999999"
    />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item><img src="@/assets/img/banner1.jpg" /></van-swipe-item>
      <van-swipe-item><img src="@/assets/img/banner2.jpg" /></van-swipe-item>
      <van-swipe-item><img src="@/assets/img/banner3.jpg" /></van-swipe-item>
      <van-swipe-item><img src="@/assets/img/banner4.jpg" /></van-swipe-item>
    </van-swipe>
    <!-- 工具栏 -->
    <div class="tools">
      <div @click="$router.push('/first/phonebill')">
        <img src="@/assets/img/tool1.png" /><span>话费充值</span>
      </div>
      <div @click="$router.push('/first/flow')">
        <img src="@/assets/img/tool2.png" /><span>流量充值</span>
      </div>
      <div><img src="@/assets/img/tool3.png" /><span>账单查询</span></div>
      <div><img src="@/assets/img/tool4.png" /><span>套餐余量</span></div>
      <div><img src="@/assets/img/tool5.png" /><span>已定业务</span></div>
      <div><img src="@/assets/img/tool6.png" /><span>国漫专区</span></div>
      <div><img src="@/assets/img/tool7.png" /><span>5G专区</span></div>
      <div><img src="@/assets/img/tool8.png" /><span>买手机</span></div>
      <div><img src="@/assets/img/tool9.png" /><span>办业务</span></div>
      <div><img src="@/assets/img/tool10.png" /><span>万能副卡</span></div>
    </div>
    <!-- 广告 -->
    <img src="@/assets/img/advert.jpg" class="advert" />
    <!-- 全家享 -->
    <div class="house">
      <div class="content-top house-top">
        <div><span></span><span>全家享</span></div>
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
    <!-- 终端推荐 -->
    <div>
      <div class="content-top terminal-top">
        <div>
          <span></span>
          <span>终端推荐</span>
        </div>
      </div>
      <ul class="terminal-content">
        <li>
          <img src="@/assets/img/terminal1.png" />
          <div>售罄</div>
          <div>iphone 13</div>
        </li>
        <li>
          <img src="@/assets/img/terminal2.gif" />
          <div>1,329元</div>
          <div>Redmi Note10Pro</div>
        </li>
      </ul>
    </div>
    <!-- 业务推荐 -->
    <div>
      <div class="content-top business-top">
        <div>
          <span></span>
          <span>业务推荐</span>
        </div>
      </div>
      <ul class="content-inner">
        <li>
          <div>
            <span>号卡专区</span>
            <span>免费领卡，包邮到家</span>
          </div>
          <img src="@/assets/img/business1.png" />
        </li>
        <li>
          <div>
            <span>尊享大吉大利号</span>
            <span>0预存0保底</span>
          </div>
          <img src="@/assets/img/business2.png" />
        </li>
        <li>
          <div>
            <span>流量日包</span>
            <span>24小时内有效</span>
          </div>
          <img src="@/assets/img/business3.png" />
        </li>
        <li>
          <div>
            <span>选套餐</span>
            <span>4G套餐随心享</span>
          </div>
          <img src="@/assets/img/business4.jpg" />
        </li>
      </ul>
      <div class="business-more" @click="moreBusiness">更多业务 ></div>
    </div>
    <!-- 号卡推荐 -->
    <div class="card">
      <div class="content-top card-top">
        <div>
          <span></span>
          <span>号卡推荐</span>
        </div>
      </div>
      <div class="card-content">
        <div>
          <img src="@/assets/img/card1.jpg" />
          <div>优选靓号</div>
          <div>心仪号码随心选</div>
        </div>
        <div>
          <span>39元畅想卡</span>
          <span>焕新上线 福利升级</span>
          <img src="@/assets/img/card2.jpg" />
        </div>
        <div>
          <div>
            <span>59元畅想卡</span>
            <span>轻松上网 畅聊无限</span>
          </div>
          <img src="@/assets/img/card2.jpg" />
        </div>
      </div>
    </div>
    <!-- 特色专区 -->
    <div>
      <div class="content-top special-top">
        <div>
          <span></span>
          <span>特色专区</span>
        </div>
      </div>
      <ul class="content-inner">
        <li>
          <div>
            <span>国际/港澳台</span>
            <span>畅游各地不断网</span>
          </div>
          <img src="@/assets/img/special1.png" />
        </li>
        <li>
          <div>
            <span>活动专区</span>
            <span>用户福利全在这里</span>
          </div>
          <img src="@/assets/img/special2.png" />
        </li>
        <li>
          <div>
            <span>宽带专区</span>
            <span>百兆宽带优惠享</span>
          </div>
          <img src="@/assets/img/special3.png" />
        </li>
        <li>
          <div>
            <span>手机病毒预警</span>
            <span>保护个人信息安全</span>
          </div>
          <img src="@/assets/img/special4.png" />
        </li>
        <li>
          <div>
            <span>5G专区</span>
            <span>5G时代看移动</span>
          </div>
          <img src="@/assets/img/special5.png" />
        </li>
        <li>
          <div>
            <span>资费专区</span>
            <span>自由选择，随心组合</span>
          </div>
          <img src="@/assets/img/special6.png" />
        </li>
      </ul>
    </div>
    <!-- 猜你喜欢 -->
    <div>
      <div class="content-top guess-top">
        <div>
          <span></span>
          <span>猜你喜欢</span>
        </div>
      </div>
      <ul class="guess-inner">
        <li>
          <img
            src="http://img1.shop.10086.cn/goods/tcbpe3qtf5gxetbbm_170x170.png"
          />
          <div>【移动商城】阿巴阿巴阿巴阿巴</div>
        </li>
        <li>
          <img
            src="http://img1.shop.10086.cn/goods/theckcns69vtt2wtu8_170x170.png"
          />
          <div>彩铃包月</div>
        </li>
        <li>
          <img
            src="http://img1.shop.10086.cn/goods/ts4ykjc3725hp4p3_170x170.png"
          />
          <div>咪咕漫威英雄阿巴阿巴阿巴阿巴</div>
        </li>
        <li>
          <img
            src="http://img1.shop.10086.cn/goods/ta833cmtj8utt337q_170x170.png"
          />
          <div>咪咕漫威 银河阿巴阿巴阿巴阿巴</div>
        </li>
        <li>
          <img
            src="http://img1.shop.10086.cn/goods/tc8rmxcvdehsmux6_170x170.png"
          />
          <div>【移动商城】阿巴阿巴阿巴阿巴</div>
        </li>
        <li>
          <img
            src="http://img1.shop.10086.cn/goods/theckhnttmp2tt2m6h_170x170.png"
          />
          <div>咪咕特级会员</div>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <p>京ICP备05002571号 证照信息</p>
      <p>Copyright&copy;1999-2022 中国移动 版权所有</p>
      <p>中华人民共和国增值电信业务经营许可证</p>
      <p>经营许可证编号：A2.B1.B2-20100001</p>
      <p>本网站支持IPv6访问</p>
    </div>
    <!-- 吸顶 -->
    <van-sticky @scroll="boxScroll">
      <div class="stick" v-show="isShow">
        <img class="logo" src="@/assets/img/logo2.png" />
        <div class="area" to="@views/first/Area.vue" @click="changeCity">
          {{cityName}}&nbsp;<img src="@/assets/img/down2.png" class="down" />
        </div>
        <div class="status">未登录</div>
      </div>
    </van-sticky>
    <div style="height: 45px; width: 100%; background-color: red"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, NoticeBar, Sticky, Dialog } from "vant";

Vue.use(Sticky);
Vue.use(NoticeBar);
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  beforeCreate() {
    console.log(localStorage.getItem('cityName'))
    let cityName = localStorage.getItem('cityName')
    if (cityName == null || cityName == '') {
      Dialog.confirm({
        title: '选择城市',
        message: '跳转到城市列表进行选择'
      })
        .then(() => {
          this.$router.push('/first/city')
        })
        .catch(() => {
        })
    }
  },
  data() {
    return {
      cityName: localStorage.getItem("cityName"),
      isShow: true,
    };
  },
  methods: {
    changeCity() {
      // console.log('跳转');
      this.$router.push("/first/city");
    },
    moreBusiness() {
      this.$router.push("/first/business");
    },
    boxScroll(event) {
      // console.log(event.scrollTop);
      if (event.scrollTop < 40) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// 顶部
.top {
  height: 2.8rem;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
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
  font-size: 0.8rem;
  line-height: 2.4267rem;
  height: 2.2667rem;
  padding-left: 1rem;
  span {
    margin-right: 0.6667rem;
  }
  a {
    color: #339dd9;
  }
}
// 通知栏
.van-notice-bar {
  height: 1.7333rem;
  font-size: 0.16rem;
  padding: 0 0.2667rem;
}
// 轮播图
.my-swipe {
  .van-swipe-item {
    color: #fff;
    font-size: 0.5333rem;
    text-align: center;
    background-color: red;
    height: 8.75rem;
  }
  img {
    width: 100%;
  }
}
:deep(.van-swipe__indicator) {
  width: 0.8rem;
  height: 0.8rem;
}
// 功能区
.tools {
  padding-bottom: 0.9333rem;
  display: flex;
  flex-wrap: wrap;
  div {
    padding-top: 0.9333rem;
    width: 4.69rem;
    height: 3.7333rem;
    // background-color:red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
      width: 2.4533rem;
      height: 2.4533rem;
    }
    span {
      font-size: 0.32rem;
    }
  }
}
// 广告
.advert {
  display: block;
  width: 100%;
}

.content-top {
  height: 2.8rem;
  background-color: #f2f2f2;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2.8rem;
    font-size: 1.0667rem;
    span:nth-child(1) {
      background-image: url(@/assets/img/icons.png);
      background-size: 100%;
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      vertical-align: middle;
    }
  }
}
// 全家享
.house-top {
  color: #85cf22;
}

.house-content {
  width: 100%;
  display: flex;
  li:nth-child(1) {
    border-right: 1px solid #f6f6f6;
  }
  li {
    width: 50%;
    height: 7.3333rem;

    div:nth-of-type(1) {
      font-size: 0.9333rem;
      padding: 0.4rem 0.8rem;
    }
    div:nth-of-type(2) {
      font-size: 0.5333rem;
      padding: 0 0.8rem;
      color: #999999;
    }
    img {
      width: 3.7333rem;
      height: 3.7333rem;
      float: right;
      margin-right: 0.8rem;
    }
  }
}
// 终端推荐
.terminal-top {
  span {
    background-position: 0 -1.7rem;
  }
  color: #fe5788;
}
.terminal-content {
  height: 12.2667rem;
  display: flex;
  li:nth-child(1) {
    border-right: 1px solid #f6f6f6;
  }
  li {
    padding: 0.6667rem;
    box-sizing: border-box;
    width: 50%;
    text-align: center;
    img {
      display: block;
      margin: 0 auto;
      width: 8.5333rem;
      height: 7.0667rem;
    }
    div:nth-of-type(1) {
      width: 100%;
      padding: 0.8rem 0;
      font-size: 0.9333rem;
      height: 0.9333rem;
      color: #e40077;
    }
    div:nth-of-type(2) {
      font-size: 0.4267rem;
      color: #333333;
    }
  }
}
// 业务推荐
.business-top {
  span {
    background-position: 0 -3.4rem;
  }
  color: #9f41fe;
}
.content-inner {
  display: flex;
  flex-wrap: wrap;

  li:nth-child(2n-1) {
    border-right: 1px solid #f6f6f6;
    box-sizing: border-box;
  }
  li {
    border-bottom: 1px solid #f6f6f6;
    width: 50%;
    height: 5.2rem;
    display: flex;
    align-items: center;
    span:nth-of-type(1) {
      display: block;
      width: 7.0667rem;
      font-size: 0.9333rem;
      margin: 0 0 0.4rem 0.5333rem;
    }
    span:nth-of-type(2) {
      display: block;
      color: #999999;
      font-size: 0.5333rem;
      width: 7.0667rem;
      margin-left: 0.5333rem;
    }
    img {
      margin-left: 0.8rem;
      display: block;
      width: 2.6667rem;
      height: 2.6667rem;
      float: right;
      border-radius: 50%;
    }
  }
}
.business-more {
  height: 2.6667rem;
  font-size: 0.9333rem;
  text-align: center;
  line-height: 2.6667rem;
}
// 号卡推荐
.card {
  height: 13.2rem;
  .card-top {
    span {
      background-position: 0 -5.1rem;
    }
    color: #23b3e9;
  }
  .card-content {
    > div:nth-child(1) {
      box-sizing: border-box;
      height: 10.4rem;
      width: 50%;
      border-right: 1px solid #f9f9f9;
      float: left;
      text-align: center;
      img {
        width: 5.3333rem;
        height: 5.3333rem;
        display: block;
        margin: 1rem 3.2rem;
      }
      div:nth-of-type(1) {
        font-size: 0.9333rem;
      }
      div:nth-of-type(2) {
        color: #999999;
        font-size: 0.5333rem;
        margin-top: 0.2667rem;
      }
    }

    > :not(div:nth-child(1)) {
      box-sizing: border-box;
      border-bottom: 1px solid #f9f9f9;
      width: 50%;
      height: 5.2rem;
      float: right;
      span:nth-of-type(1) {
        display: inline-block;
        width: 7.0667rem;
        font-size: 0.9333rem;
        margin: 1.3333rem 0 0.4rem 0.5333rem;
        float: left;
      }
      span:nth-of-type(2) {
        display: inline-block;
        color: #999999;
        font-size: 0.5333rem;
        width: 7.0667rem;
        margin-left: 0.5333rem;
        float: left;
      }
      img {
        display: block;
        width: 2.6667rem;
        height: 2.6667rem;
        margin: 1.3333rem 0;
      }
    }
  }
}
//特色专区
.special-top {
  span {
    background-position: 0 -6.8rem;
  }
  color: #117dea;
}

// 猜你喜欢
.guess-top {
  span {
    background-position: 0 -8.5rem;
  }
  color: #e51984;
}
.guess-inner {
  height: 18.6667rem;
  :not(li:nth-child(3n)) {
    border-right: 1px solid #f9f9f9;
  }
  li {
    width: 33.33%;
    height: 9.3333rem;
    padding: 1.0667rem;
    box-sizing: border-box;
    float: left;
    img {
      width: 5.3333rem;
      height: 5.3333rem;
    }
    div {
      text-align: center;
      font-size: 0.5333rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

// 底部
.bottom {
  height: 9.3333rem;
  width: 100%;
  padding: 0.8rem 0;
  background-color: #f7f7f7;
  text-align: center;
  font-size: 0.6667rem;
  color: #474747;
}

// 吸顶
.stick {
  width: 100%;
  color: #fff;
  background-image: linear-gradient(black, transparent);
  height: 2.8rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 0.2133rem;
  position: fixed;
  top: 0;
  left: 0;
  .logo {
    height: 1.2rem;
    width: 7rem;
    display: block;
    cursor: pointer;
  }
  .area {
    cursor: pointer;
    margin-left: 1.0667rem;
    .down {
      height: 0.9333rem;
      width: 0.7333rem;
      vertical-align: top;
    }
  }
  .status {
    margin-left: 8.5333rem;
  }
}
</style>
