<template>
  <div>
    <!-- 调用API获取LBS 基于位置定位信息服务 -->
    <van-button>定位城市:{{ localCity }}</van-button>
    <!-- 自定义右侧索引 -->
    <van-index-bar :index-list="indexList">
      <!-- template 最终不会解析 只作为容器包裹 -->
      <template v-for="item in city">
        <!-- van-index-anchor 每一个索引项 -->
        <van-index-anchor :index="item.letter" :key="item.letter" />
        <!-- 每一个索引项下的一条 -->
        <van-cell
          v-for="item1 in item.data"
          :title="item1.name"
          :key="item1.cityId"
          @click="chooseCity(item1.cityId, item1.name)"
        />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import Vue, { computed } from "vue";
import { IndexBar, IndexAnchor, Cell, Button } from "vant";
import city from "@/config/city";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(Button);

export default {
  data() {
    return {
      city,
      localCity: "",
    };
  },
  created() {
    this.$store.commit("setTabbarStatus");
    var geolocation = new BMapGL.Geolocation();
    let that = this;
    // 获取地理位置
    geolocation.getCurrentPosition(function (r) {
      // 调用成功
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        console.log(r.address.city);
        console.log(r.address);
        console.log(this);
        that.localCity = r.address.city;
      } else {
        alert("获取地理位置信息失败");
      }
    });
  },
  
  computed: {
    indexList() {
      let tmp = [];
      this.city.forEach((item) => {
        tmp.push(item.letter);
      });
      return tmp;
    },
  },
  methods: {
    chooseCity(cityId, cityName) {
      localStorage.setItem("cityId", cityId);
      localStorage.setItem("cityName", cityName);
      this.$router.go(-1);
    },
  },
  destroyed() {
    this.$store.commit("setTabbarStatus");
  },
};

</script>

<style lang="scss" scoped></style>
