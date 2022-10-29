<template>
  <div>
    <van-nav-bar title="充值交费" left-arrow @click-left="onClickLeft">
      <template #right>
        <span class="iconfont icon-gengduo"></span>
      </template>
    </van-nav-bar>
    <div class="paybill">
      <div>
        <input type="text" />
        <div>请仔细核对充值号码，充错号将无法退款</div>
      </div>
      <div>
        <div class="iconfont icon-24gl-phoneBook"></div>
        <div>常充号码</div>
      </div>
    </div>
    <div class="billnum">
      <div>充话费</div>
      <div>
        <button
          v-for="(item, index) in money"
          :class="{ active: index == isActive }"
          @click="changeStyle(index)"
          :key="index"
        >
          {{ item }}
        </button>
        <input type="text" />
      </div>
      <div>
        <span>￥</span>
        <span>到账金额：</span>
      </div>
    </div>
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <!-- 权益 -->
    <div class="pright">
      <van-checkbox v-model="checked" disabled icon-size="15px"
        >权益</van-checkbox
      >
      <span class="van-icon van-icon-arrow van-cell__right-icon"></span>
    </div>
    <!-- 充值 -->
    <div class="pay">
      <p>去中国移动APP充值，可享更多充值优惠，也可为他人充值</p>
      <button>￥0.00&nbsp;&nbsp;立即充值</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  NavBar,
  CouponCell,
  CouponList,
  Popup,
  Checkbox,
  CheckboxGroup,
} from "vant";
import "@/assets/icon/iconfont.css";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(NavBar);
Vue.use(Popup);

const coupon1 = {
  available: 1,
  // condition: '无使用门槛\n最多优惠12元',
  reason: "",
  value: 150,
  name: "满减1.50元",
  startAt: 1663670000,
  endAt: 1666780000,
  valueDesc: "1.50元",
  // unitDesc: '',
};
const coupon2 = {
  available: 2,
  // condition: '无使用门槛\n最多优惠12元',
  reason: "",
  value: 300,
  name: "满减3.00元",
  startAt: 1665057952,
  endAt: 1666785951,
  valueDesc: "3.00元",
  // unitDesc: '',
};
const coupon3 = {
  available: 2,
  // condition: '无使用门槛\n最多优惠12元',
  reason: "",
  value: 998,
  name: "9.98折",
  startAt: 1663670000,
  endAt: 1664710000,
  valueDesc: "3.00元",
  // unitDesc: '',
};

export default {
  data() {
    return {
      money: ["10元", "30元", "50元", "100元", "200元"],
      isActive: false,
      chosenCoupon: -1,
      coupons: [coupon1, coupon2],
      disabledCoupons: [coupon3],
      showList: false,
    };
  },
  created() {
    this.$store.commit("setTabbarStatus");
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    changeStyle(index) {
      this.isActive = index;
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
  destroyed() {
    this.$store.commit("setTabbarStatus");
  },
};
</script>

<style lang="scss" scoped>
:deep(.van-nav-bar) {
  background-color: #f4f4f4;
}
:deep(.van-nav-bar .van-icon) {
  color: black;
}
:deep(.van-nav-bar__left) {
  padding: 0;
}
:deep(.van-nav-bar__arrow) {
  font-size: 1.875rem;
}
.icon-gengduo {
  font-size: 1.875rem;
  color: #555555;
}
.paybill {
  height: 4.5rem;
  width: 100%;
  padding: 17px 10px 5px;
  box-sizing: border-box;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  > div:nth-of-type(1) {
    height: 100%;
    width: 18.4375rem;
    border-right: 1px solid #e7e7e7;
    box-sizing: border-box;
    > input {
      font-size: 1.5rem;
      width: 16.25rem;
      border: none;
    }
    > div {
      color: #a4a4a4;
      font-size: 0.75rem;
      height: 1.25rem;
    }
  }
  > div:nth-of-type(2) {
    width: 4.375rem;
    color: #00a3fe;
    .icon-24gl-phoneBook {
      font-size: 1.875rem;
      height: 1.875rem;
      width: 4.375rem;
      text-align: center;
    }
    > div:nth-of-type(2) {
      margin-top: 0.3125rem;
      font-size: 0.75rem;
      width: 100%;
      text-align: center;
    }
  }
}

.billnum {
  height: 9.375rem;
  width: 100%;
  margin-top: 1.125rem;
  > div:nth-of-type(1) {
    font-size: 12px;
    padding-left: 0.75rem;
    box-sizing: border-box;
  }
  > div:nth-of-type(2) {
    height: 7.1875rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    .active {
      border: 1px solid #68c9fe;
      background-color: #ebf8ff;
      // background-color: red;
    }
    input,
    button {
      height: 2.8125rem;
      width: 7rem;
      border: 1px solid #e4e4e4;
      border-radius: 5px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 1.25rem;
    }
  }
  > div:nth-of-type(3) {
    height: 2.5rem;
    width: 100%;
    padding: 5px 12.5px 15px;
    box-sizing: border-box;
    font-size: 0.75rem;
    border-bottom: 1px solid #f3f2f2;
    span {
      float: right;
    }
    span:nth-child(1) {
      color: #00acfe;
    }
  }
}
:deep(.van-coupon__amount) {
  color: #fc72bb;
  border: 1px solid #fc72bb;
  font-size: 1.25rem;
  text-align: center;
  height: 3.75rem;
  line-height: 3.75rem;
  border-radius: 0.375rem;
  font-weight: 500;
}
:deep(.van-coupon__head) {
  padding: 0 0.9375rem;
}
:deep(.van-coupon__condition) {
  color: #dadada;
  height: 0;
}
:deep(.van-coupon--disabled .van-coupon__amount) {
  color: #dadada;
  border: 1px solid #dadada;
}
:deep(.van-coupon--disabled .van-coupon__body) {
  color: #d8d8d8;
}
:deep(.van-coupon-cell) {
  margin-top: 10px;
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
}
.pright {
  height: 2.75rem;
  width: 100%;
  border-bottom: 1px solid #f6f6f6;
  display:flex;
  justify-content: space-between;
  .van-checkbox {
    height: 2.75rem;
    font-size: 0.875rem;
    line-height: 2.75rem;
    margin-left: 16px;
    :deep(.van-checkbox__label) {
      margin-left: 3px;
    }
  }
  >span{
    font-size: 1.0625rem;
    float:right;
    line-height: 2.75rem;
    padding-right: 1rem;
    color:#e6e6e6;
  }
}
.pay{
  height: 7.5rem;
  width: 100%;
  padding:.625rem;
  box-sizing: border-box;
  >p{
    font-size: .75rem;
    color:#9C9C9C;
    text-align: center;
  }
  >button{
    color:#fff;
    height: 2.8125rem;
    line-height: 2.8125rem;
    text-align: center;
    width: 100%;
    border:none;
    background-color: #0084cc;
    border-radius: .375rem;
    margin-top: 14px;
  }
}
</style>