<template>
  <div class="shopcart">
    <div class="wrapper">
      <div class="left">
        <div class="logo-wrapper">
          <div class="logo" :class="{highlight: totalCount>0}">
            <i class="icon" :class="{highlight: totalCount>0}">shop</i>
          </div>
          <div class="total-count" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{highlight: totalPrice > 0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{seller.deliveryPrice}}元</div>
      </div>
      <div class="right">
        <div class="pay" :class="payClass">
          {{ payDesc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Shopcart',
    props: {
      seller: {
        type: Object,
        default() {
          return {}
        }
      },
      selectFoods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      totalPrice() {
        let price = 0
        this.selectFoods.forEach((food) => {
          price += food.price * food.count
        })
        return price
      },
      totalCount() {
        let num = 0
        this.selectFoods.forEach((food) => {
          num += food.count
        })
        return num
      },
      payDesc() {
        if (this.totalPrice === 0) {
          return `${this.seller.minPrice}元起送`
        } else if (this.totalPrice < this.seller.minPrice) {
          let price = this.seller.minPrice - this.totalPrice
          return `还差${price}元起送`
        } else {
          return '去结算'
        }
      },
      payClass() {
        if (this.totalPrice < this.seller.minPrice) {
          return 'not-enough'
        } else {
          return 'enough'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    height: 48px
    .wrapper
      display: flex
      height: 100%
      .left
        flex: 1
        display: flex
        background-color: #141D27
        .logo-wrapper
          width: 56px
          height: 56px
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          box-sizing: border-box
          border-radius: 50%
          background-color: #141D27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            line-height: 44px
            background-color: #2B343C
            text-align: center
            &.highlight
              background-color: rgb(0, 160, 220)
            .icon
              font-size: 16px
              color: #80858A
              &.highlight
                color: #fff
          .total-count
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            font-size: 10px
            font-weight: 700
            color: #fff
            text-align: center
            background-color: rgb(240, 20, 20)
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4)
            border-radius: 16px
        .price
          height: 16px
          line-height: 16px
          margin-top: 16px
          padding-right: 12px
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-size: 16px
          font-weight: 700
          color: rgba(255, 255, 255, 0.4)
          &.highlight
            color: #fff
        .desc
          height: 16px
          line-height: 16px
          padding-left: 12px
          margin-top: 16px
          font-size: 12px
          color: rgba(255, 255, 255, 0.4)
      .right
        width: 105px
        height: 48px
        line-height: 48px
        .pay
          font-size: 12px
          font-weight: 700
          color: rgba(255, 255, 255, 0.4)
          text-align: center
          &.not-enough
            background-color: #2B333B
          &.enough
            color: #fff
            background-color: #00B43C
</style>
