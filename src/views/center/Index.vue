<template>
  <div>
    <div id="box">
      <!-- 登录部分 -->
      <div class="center-top">
        <van-nav-bar title="我的" left-arrow @click-left="onClickLeft">
          <template #right>
            <span class="iconfont icon-xiaoxi"></span>
            <span class="iconfont icon-gengduo"></span>
          </template>
        </van-nav-bar>
        <div class="center-login">
          <div class="center-inner">
            <div class="login-top">
              <div class="login-pfp">
                <div>
                  <div>
                    <div>
                      <img
                        src="https://img0.baidu.com/it/u=2988766361,3364435177&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=625"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <input type="button" value="登录" @click="$router.push('/center/login')"/>
              <div>登录后可查看更多信息哦~</div>
            </div>
            <div class="login-bottom">
              <div>
                <div>--元</div>
                <div>我的余额</div>
              </div>
              <div>
                <div>--</div>
                <div>通用流量剩余</div>
              </div>
              <div>
                <div>--分钟</div>
                <div>语音剩余</div>
              </div>
              <div>
                <div>--</div>
                <div>可用积分</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-content">
        <!-- 充值部分 -->
        <div class="recharge">
          <div>
            <div @click="$router.push('/first/phonebill')">充话费</div>
          </div>
          <div>
            <div @click="$router.push('/first/Flow')">充流量</div>
          </div>
        </div>
        <!-- 我的服务 -->
        <div class="serve">
          <div class="serve-top">
            <div>我的服务</div>
            <div>查看更多&nbsp;></div>
          </div>
          <div class="serve-bottom">
            <div>
              <div></div>
              <div>套餐余量</div>
            </div>
            <div>
              <div></div>
              <div>账单查询</div>
            </div>
            <div>
              <div></div>
              <div>已订业务</div>
            </div>
            <div>
              <div></div>
              <div>139邮箱</div>
            </div>
          </div>
        </div>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            ><img
              src="https://touch.10086.cn/i/operation/20120181115155003.png"
          /></van-swipe-item>
          <van-swipe-item
            ><img
              src="https://touch.10086.cn/i/operation/20120181115155140.png"
          /></van-swipe-item>
        </van-swipe>
      </div>
      <!-- 底部 -->
      <div class="center-bottom">
        <div class="bottom-top">
          <span>登录&nbsp;&nbsp;|&nbsp;&nbsp;帮助</span>
          <span>网站无障碍</span>
          <span>回顶部</span>
        </div>
        <div class="bottom-btm">Copyright&copy;1999-2022中国移动版权所有</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Swipe, SwipeItem} from "vant";
import "@/assets/icon/iconfont.css";

Vue.use(Swipe);
Vue.use(SwipeItem);
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
  background-color: #f4f4f4;
  // 登录部分
  .center-top {
    position: relative;
    background: linear-gradient(to right, #416fdf, #4ca1fd);
    :deep(.van-nav-bar__content) {
      color: #fff;
      font-size: 1.875rem;
      padding: 0;
      background: linear-gradient(to right, #416fdf, #4ca1fd);
    }
    :deep(.van-nav-bar__title) {
      color: #fff;
      font-size: 1.0625rem;
      font-weight: 300;
    }
    :deep(.van-nav-bar__arrow) {
      color: #fff;
      font-size: 1.875rem;
      padding: 0;
    }
    :deep(.van-nav-bar__left) {
      padding: 0;
    }
    .iconfont {
      font-size: 1.5625rem;
      margin-left: 0.9375rem;
    }
    .center-login {
      height: 8.75rem;
      background: linear-gradient(to right, #416fdf, #4ca1fd);
      .center-inner {
        width: 100%;
        height: 100%;
        background-image: url(https://touch.10086.cn/i/mobile/pub-ui/images/home/wave-2.png);
        background-position: -45px 0px;
        .login-top {
          height: 5.9375rem;

          .login-pfp {
            margin: 0.625rem 0.625rem 0.2rem;
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            border: 1px solid #4e7ee5;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            div {
              background-color: transparent;
              border-radius: 50%;
            }
            > div {
              width: 4rem;
              height: 4rem;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid #7098ed;
              > div {
                width: 3.75rem;
                height: 3.75rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #6c94e9;
                > div {
                  width: 3rem;
                  height: 3rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: 1px solid #7098ea;
                  img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    border-radius: 50%;
                  }
                }
              }
            }
          }

          input {
            color: #fff;
            background-color: transparent;
            border: 1px solid #fff;
            width: 5.5rem;
            height: 1.8125rem;
            line-height: 1.3rem;
            text-align: center;
            border-radius: 6%;
            float: left;
            margin: 1.8rem 0 0.375rem;
          }

          > div:nth-of-type(2) {
            float: left;
            color: #fff;
            font-size: 0.75rem;
            width: 12.5rem;
          }
        }
        .login-bottom {
          width: 100%;
          display: flex;
          justify-content: space-around;
          > div {
            color: #fff;
            text-align: center;
            // margin-top: 2.4rem;
            font-size: 0.75rem;
            > div {
              height: 1rem;
            }
          }
        }
      }
    }
  }

  .center-content {
    height: 325px;
    width: calc(100% - 20px);
    margin: 0 auto;
    // 充值部分
    .recharge {
      width: 100%;
      height: 4.6563rem;
      margin: 0.625rem 0;
      background-color: #fff;
      border-radius: 5px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      > div {
        width: 9.25rem;
        height: 2.8125rem;
        color: #fff;
        border-radius: 5px;
        line-height: 2.8125rem;
        text-indent: 60px;
        font-size: 0.875rem;
        > div {
          background-repeat: no-repeat;
          background-size: 80px 30px;
          background-position: 10px 8px;
        }
      }
      > div:first-child {
        background: linear-gradient(to right, #ffa359, #fe6076);
        box-shadow: 0px 5px 20px 5px #fcdcc2;
        > div {
          background-image: url(https://touch.10086.cn/i/mobile/pub-ui/images/home/recharge.svg);
        }
      }
      > div:last-child {
        background: linear-gradient(to right, #4ea4ff, #8d7aff);
        box-shadow: 0px 5px 20px 5px #d7d1fb;
        > div {
          background-image: url(https://touch.10086.cn/i/mobile/pub-ui/images/home/rechargeflow.svg);
        }
      }
    }
    // 我的服务
    .serve {
      height: 7.8125rem;
      width: 100%;
      margin: 0.625rem 0;
      border-radius: 5px;
      background-color: #fff;
      .serve-top {
        height: 2.5rem;
        line-height: 2.5rem;
        padding: 0 0.875rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        div:first-child {
          font-size: 0.8125rem;
          font-weight: 700;
        }
        div:last-child {
          font-size: 0.8125rem;
          color: #929090;
        }
      }
      .serve-bottom {
        height: 5.3125rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 3.4375rem;

          > div:first-child {
            width: 2rem;
            height: 2rem;
            background-image: url(https://touch.10086.cn/i/mobile/pub-ui/images/home/menu.svg);
          }
          > div:last-child {
            font-size: 0.75rem;
          }
        }
        > div:first-child {
          > div:first-child {
            background-position: 91px -59px;
          }
        }
        > div:nth-child(2) {
          > div:first-child {
            background-position: 151px -59px;
          }
        }
        > div:nth-child(3) {
          > div:first-child {
            background-position: 32px -59px;
          }
        }
        > div:last-child {
          > div:first-child {
            background-image: url(https://touch.10086.cn/i/mobile/pub-ui/images/home/139logo.svg);
            background-repeat: no-repeat;
          }
        }
      }
    }
    // 轮播图
    .my-swipe {
      height: 4rem;
      img {
        width: 100%;
        height: 4rem;
      }
    }
  }

  .center-bottom {
    padding: 0 0.625rem;
    box-sizing: border-box;
    .bottom-top {
      height: 1.75rem;
      font-size: 0.75rem;
      border-bottom: 1px solid #e0e0e0;
      span:nth-child(1) {
        margin-right: 10.875rem;
      }
      span:nth-child(2) {
        margin-right: 1.25rem;
      }
    }
    .bottom-btm{
      height: 72px;
      text-align: center;
      width: 100%;
      font-size: .75rem;
      line-height: 72px;
    }
  }
}
</style>