<template>
  <div>
    <van-tabbar v-model="active" active-color="#208ec3" v-show="$store.state.film.tabbarIsShow">
      <van-tabbar-item icon="home-o" to="/first/index">
        <span>首页</span><span class="iconfont icon-24gl-home11" slot="icon"></span>
      </van-tabbar-item>
      <van-tabbar-item icon="search" to="/shop/index">
        <span>商城</span><span class="iconfont icon-shangcheng" slot="icon"></span>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/sale/index">
        <span>优惠</span><span class="iconfont icon-qian" slot="icon"></span>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/center/index">
        <span>个人中心</span><span class="iconfont icon-huaban36" slot="icon"></span>
      </van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem} from 'vant';
import './assets/icon/iconfont.css'

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
}
};


</script>

<style lang="scss" scoped>
  .van-tabbar{
    height:45px;
    border-top:1px solid #f7f7f7;
  }
  .iconfont{
    font-size: 25px;
    font-weight: 600;
  }

  .van-tabbar-item{
    font-size: 12px;
  }
</style>
