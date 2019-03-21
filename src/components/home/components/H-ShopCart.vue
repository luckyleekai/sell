<template>
<!-- 这里布局的时候有个坑，假如shopcart的高度和shopcart-main的高度一样的话
在滚动上面的列表时，购物车里面的内容在Chrome模拟器里面显示会出现抖动现象，我
排查了一下原因主要在于购物车那个图标有position relative属性，但是这又是必须的
所以我变通了一种想法，给外层的父元素添加多10px的高度，然后将子元素通过margin-top
往下面顶10px即可实现设计稿的布局 -->
  <div class="shopcart">
    <div class="shopcart-main">
      <div class="left">
        <div class="icon-box">
          <div class="icon"></div>
          <div class="total-count" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="total-price" :class="{'highlight': totalPrice>0}">￥{{totalPrice}}</div>
        <div class="devide-line"></div>
        <div class="desc">另需配送费￥{{deliveryPrice}}</div>
      </div>
      <div class="right">
        <div class="btn" :class="payClass">{{payDesc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopcart',
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [{
          price: 1,
          count: 10
        }]
      }
    },
    deliveryPrice: { // 配送价格
      type: Number,
      default: 0
    },
    minPrice: { // 最小起送价
      type: Number,
      default: 10
    }
  },
  computed: {
    totalCount() {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    totalPrice() {
      let price = 0
      this.selectFoods.forEach((food) => {
        price += food.count * food.price
      })
      return price
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}起送`
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        return `还差￥${diff}起送`
      } else {
        return '起送'
      }
    },
    payClass() {
      if (this.totalPrice < this.minPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    }
  }
}
</script>

<style lang="stylus">
.shopcart
  position fixed
  bottom 0
  left 0
  z-index 10
  width 100%
  height 56px
  overflow hidden
  .shopcart-main
    margin-top 10px
    height 46px
    display flex
    position relative
  .left
    flex: 1
    display flex
    align-items center
    background-color #141d27
    .icon-box
      width 44px
      height 44px
      flex: 0 0 44px
      background-color #141d27
      box-sizing border-box
      padding 6px
      border-radius 50%
      position relative
      top: -10px
      margin: 0 12px
    .icon
      width 100%
      height 100%
      border-radius 50%
      background-color rgba(255, 255, 255, 0.4)
      &.highlight
        background-color rgb(0, 160, 220)
    .total-count
      position absolute
      top 0
      right 0
      width 24px
      height 16px
      line-height 16px
      text-align center
      border-radius 16px
      font-size 10px
      color #ffffff
      background-color rgb(240, 20, 20)
      box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
    .total-price
      font-size 16px
      color rgba(255, 255, 255, 0.4)
      font-weight 700
      &.highlight
        color #ffffff
    .devide-line
      width 1px
      height 30px
      background-color rgba(255, 255, 255, 0.4)
      margin 0 12px
    .desc
      font-size 12px
      color rgba(255, 255, 255, 0.4)
      font-weight 700
      &.highlight
        color #ffffff
  .right
    width 105px
    .btn
      width 100%
      height 100%
      text-align center
      line-height 46px
      font-size 16px
      font-weight 700
      color rgba(255, 255, 255, 0.4)
      &.not-enough
        background-color #2b333b
      &.enough
        color #ffffff
        background-color #00b43c
</style>
