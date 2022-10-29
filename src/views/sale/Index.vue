<template>
  <div>
    <van-nav-bar title="优惠" left-arrow @click-left="onClickLeft" />
    <div class="welcome">
      <span>欢迎来到中国移动掌上营业厅</span><a @click="$router.push('/center/login')">去登录 ></a>
    </div>
    <!-- 内容 -->
    <div class="sale-content" v-for="(item, index) in saleList" :key="index">
      <div v-for="item1 in item.data" :key="item1.id">
        <img :src="item1.img" />
        <div class="sale-text">{{ item1.text }}</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import saleList from "@/config/sale";
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
Vue.use(saleList);
export default {
  data() {
    return {
      saleList,
    };
  },
  methods: {
    onClickLeft() {
      // console.log(this.$router);
      this.$router.go(-1);
    },
  },
  // created() {
  //   // console.log(this.saleList);
  // },
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #f7f7f7;
}

.welcome {
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

.sale-content {
  height: 14.6667rem;
  width: 100%;
  padding: 0.6133rem;
  box-sizing: border-box;

  img {
    display: block;
    width: 100%;
    height: 12.2667rem;
    margin-bottom: 0.5867rem;
  }
  .sale-text {
    margin-bottom: 0.5867rem;
    font-size: 0.9333rem;
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
</style>