<template>
  <div>
    <van-index-bar :index-list="indexList">
      <template v-for="item in cities">
        <van-index-anchor :index="item.letter" :key="item.letter" />
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
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";
import url from "@/config/url";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);

export default {
  data() {
    return {
      cities: [],
    };
  },
  created() {
    this.$store.commit("setTabbarStatus");
    this.$http.get(url.cityList).then((res) => {
      // console.log(res);
      this.cities = res.data.cities;
      // console.log(this.cities);
    });
  },
  computed: {
    // this.cities
  },
  methods: {
    chooseCity(cityId, cityName) {
      localStorage.setItem("cityId", cityId);
      localStorage.setItem("cityName", cityName);
      this.$router.go(-1);
    },
  },
  computed: {
    indexList() {
      let tmp = [];
      this.cities.forEach((item) => {
        let letter = item.pinyin.substr(0, 1).toUpperCase();
        if (!tmp.includes(letter)) {
          tmp.push(letter);
        }
      });
      return tmp.sort();
    },
    city() {
      let arr = []
      this.indexList.forEach((item) => {
        let obj = {}
        obj.letter = item
        // item 每一个首字母
        let data = []
        this.cities.forEach((item1) => {
          let tmp = {}
          // item1 每一个城市的对象数据
          if (item === item1.pinyin.substr(0, 1).toUpperCase()) {
            tmp.cityId = item1.cityId
            tmp.name = item1.name
            data.push(tmp)
          }
        })
        obj.data = data
        console.log(obj)
        // arr.push(obj)
      })
      return arr
    }
  },
  destroyed() {
    this.$store.commit("setTabbarStatus");
  },
};
</script>

<style lang="scss" scoped></style>
