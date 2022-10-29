<template>
  <div>
    <div id="box">
      <van-nav-bar title="登录" left-arrow @click-left="onClickLeft">
        <template #right>
          <span class="iconfont icon-zhuye" @click="$router.push('/center/index')"></span>
        </template>
      </van-nav-bar>
      <div class="login">
        <input type="text" placeholder="邮箱地址" />
        <input type="text" placeholder="网站密码" />
        <div class="login-bottom">
          <van-checkbox v-model="checked" checked-color="#8fc320"
            >记住账号</van-checkbox
          >
          <span>忘记密码</span>
        </div>
      </div>
      <input type="text" value="立即登录" class="btn" />
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
import { NavBar, Checkbox, CheckboxGroup } from "vant";
import "@/assets/icon/iconfont.css";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(NavBar);
export default {
  data() {
    return {
      checked: false,
    };
  },
  created(){
    this.$store.commit('setTabbarStatus')
  },
  methods: {
    onClickLeft() {
    //   console.log(this.$router);
      this.$router.go(-1);
    },
  },
  destroyed(){
    this.$store.commit('setTabbarStatus')
  }
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
    height: 13.75rem;
    border-bottom: 1px solid #ebebeb;
    input {
      width: 20.9375rem;
      height: 2.875rem;
      padding: 10px 20px 10px 35px;
      box-sizing: border-box;
      margin: 20px 20px;
      border: 1px solid #e0e0e0;
      background-repeat: no-repeat;
    }
    input::-webkit-input-placeholder {
      color: #909090;
      font-size: 0.875rem;
    }
    input:nth-of-type(1) {
      background-image: url(https://login.10086.cn/platform/images/email_icon.png);
      background-position: 10px 12px;
      background-size: 20px;
    }
    input:nth-of-type(2) {
      background-image: url(https://login.10086.cn/platform/images/smsg_icon.png);
      background-position: 10px 14px;
      background-size: 20px;
      margin-top: 0px;
    }
    button {
      width: 8.75rem;
      background-color: #fafafa;
      height: 2.875rem;
      border: 1px solid #efefef;
      color: #666666;
      font-size: 0.875rem;
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
    width: 20.9375rem;
    height: 2.8125rem;
    margin: 0.625rem 1.25rem;
    color: #fff;
    background-color: #0085d0;
    border: none;
    text-align: center;
    border-radius: 0.3125rem;
    margin-bottom: 0.625rem;
    box-sizing:border-box;
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