<template>
  <div>
    <div id="box">
      <van-nav-bar title="登录" left-arrow @click-left="onClickLeft">
        <template #right>
          <span class="iconfont icon-zhuye" @click="$router.push('/center/index')"></span>
        </template>
      </van-nav-bar>
      <div class="login">
        <div class="login-top">
          <div
            @click="changeLogin"
            class="login-nav"
            :class="{ active: isActive }"
          >
            客服密码登录
          </div>
          <div
            @click="changeLogin"
            class="login-nav"
            :class="{ active: !isActive }"
          >
            短信随机码登录
          </div>
        </div>
        <!-- <div class="tips" v-show="tipsShow">{{ tip }}</div> -->
        <!-- <input
          v-model="valuee"
          type="text"
          placeholder="手机号码"
          @input="validPhone(valuee)"
          :class="{ wrong: isWrong }"
        /> -->
        <input
          type="text"
          placeholder="手机号码"
          v-model="mobile"
          name="mobile"
        />
        <div v-show="!ifShow">
          <input type="text" placeholder="短信随机码" />
          <button v-if="codeShow" @click="getColde">获取短信随机码</button>
          <button v-if="!codeShow">{{ count }}秒后重试</button>
        </div>
        <div v-show="ifShow">
          <input
            type="password"
            placeholder="请您使用客服密码，购买、办理方便"
            v-model="password"
            name="password"
          />
        </div>
        <div class="login-bottom">
          <van-checkbox v-model="checked" checked-color="#8fc320"
            >记住账号</van-checkbox
          >
          <span @click="$router.push('/center/email')">互联网用户登录</span>
        </div>
      </div>
      <input type="submit" value="立即登录" class="btn" @click="onSubmit" />
      <div class="login-help">
        <span>登录&nbsp;&nbsp;|&nbsp;&nbsp;帮助</span>
        <span>回到顶部</span>
      </div>
      <p>中国移动|京ICP备05002571</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Checkbox, CheckboxGroup, Field } from "vant";
import "@/assets/icon/iconfont.css";

Vue.use(Field);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(NavBar);

export default {
  data() {
    return {
      mobile: "",
      password: "",
      //   tip: "",
      //   isWrong: false,
      //   tipsShow: false,
      checked: false,
      ifShow: true,
      isActive: true,
      codeShow: true, //获取验证码倒计时
      timer: null, //定时器
      count: "", //倒计时数字
      //   valuee: "",
    };
  },
  created() {
    this.$store.commit("setTabbarStatus");
    console.log('ddd')
  },
  methods: {
    // validPhone(valuee) {
    //   const reg = /^1[34578]\d{9}$/;
    //   if (valuee == "" || valuee == undefined || valuee == null) {
    //     this.tipsShow = true;
    //     this.tip = "请输入";
    //     this.isWrong = !this.isWrong;
    //   } else {
    //     if (!reg.test(valuee) && valuee !== "") {
    //       this.tipsShow = true;
    //       this.tip = "请输入正确的电话号码";
    //       this.isWrong = !this.isWrong;
    //     } else {
    //     }
    //   }
    // },
    onClickLeft() {
      console.log(this.$router);
      this.$router.push("/center/index");
    },
    changeLogin() {
      this.isActive = !this.isActive;
      this.ifShow = !this.ifShow;
    },
    getColde() {
      alert('已将短信随机码发送至手机，请查收！')
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.codeShow = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.codeShow = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    onSubmit() {
      this.$http
        .post("http://127.0.0.1:3000/api/v1/login", {
          mobile: this.mobile,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.code === 0) {
            // 登录成功后
            // 1、存储token 到本地  后续请求接口需要token校验权限
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("expire_in", new Date().getTime());
            // 2、跳转的用户中心
            alert("登录成功,进入用户中心");
            this.$router.push("/center/index");
          } else {
            alert(res.msg);
          }
        });
    },
  },
  destroyed() {
    this.$store.commit("setTabbarStatus");
  },
};
</script>


<style lang="scss" scoped>
#box {
  height: 41.6875rem;
  background-color: #f7f7f7;
  .active {
    background-color: #0085d0;
    color: #fff;
  }
  :deep(.van-nav-bar__content) {
    background-color: #f7f7f7;
    color: #666666;
    padding: 0;
  }
  :deep(.van-nav-bar__left) {
    padding: 0 0.3125rem;
  }
  :deep(.van-nav-bar .van-icon) {
    color: #000;
    font-size: 25px;
  }
  .iconfont {
    font-size: 1.4375rem;
  }
  // 登录
  .login {
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    .login-top {
      width: 20.875rem;
      border: 1px solid #5fb2e1;
      border-radius: 6.25rem;
      margin: 0.9375rem auto;
      display: flex;
      height: 2.625rem;
      .login-nav {
        width: 10.4375rem;
        text-align: center;
        line-height: 2.625rem;
        border-radius: 6.25rem;
        font-size: 0.875rem;
      }
    }
    // .tips {
    //   width: 100%;
    //   height: 1.75rem;
    //   padding: 0px 20px 10px;
    //   box-sizing: border-box;
    //   color: red;
    //   font-size: 0.875rem;
    // }
    input {
      width: 20.9375rem;
      height: 2.875rem;
      padding: 10px 20px 10px 35px;
      box-sizing: border-box;
      margin: 10px 20px;
      border: 1px solid #efefef;
      background-repeat: no-repeat;
    }
    .wrong {
      border: 1px solid red;
    }
    input::-webkit-input-placeholder {
      color: #909090;
      font-size: 0.875rem;
    }
    input:nth-of-type(1) {
      background-image: url(https://login.10086.cn/platform/images/phone_icon.png);
      background-position: 10px 11px;
      background-size: 16px;
    }
    > div:nth-of-type(2) {
      height: 60px;
      input:nth-of-type(1) {
        width: 12.1875rem;
        background-image: url(https://login.10086.cn/platform/images/smsg_icon.png);
        background-position: 10px 14px;
        background-size: 20px;
        margin-right: 0px;
      }
      button {
        width: 8.75rem;
        background-color: #fafafa;
        height: 2.875rem;
        border: 1px solid #efefef;
        color: #666666;
        font-size: 0.875rem;
      }
    }
    > div:nth-of-type(3) {
      height: 60px;
      input {
        background-image: url(https://login.10086.cn/platform/images/psw_icon.png);
        background-position: 10px 14px;
        background-size: 15px;
      }
    }
    .login-bottom {
      height: 3.9375rem;
      padding: 1.25rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
    }
  }
  .btn {
    box-sizing: border-box;
    width: 20.9375rem;
    height: 2.8125rem;
    margin: 0.625rem 1.25rem;
    color: #fff;
    background-color: #0085d0;
    border: none;
    text-align: center;
    border-radius: 0.3125rem;
    margin-bottom: 0.625rem;
  }
  .login-help {
    height: 3.125rem;
    padding: 0.9375rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: #666666;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  p {
    font-size: 0.875rem;
    color: #acacac;
    text-align: center;
  }
}
</style>