<template>
  <div class="wrapper">
    <div class="left">
      <div class="icon"></div>
      <div class="total-price">￥40</div>
    </div>
    <div class="middle">另需配送费4元</div>
    <div class="right">还差10元起送</div>
  </div>
</template>

<script>
  export default {
    name: 'Shopcart'
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    height: 48px
    line-height: 48px
    position: absolute
    width: 100%
    left: 0
    bottom: 0
    background-color: #141d27
    display: flex
    .left
      width: 115px
      height: 100%
      position: relative
      .icon
        position: absolute
        left: 18px
        bottom: 0
        height: 58px
        width: 58px
        &:before,&:after
          content: ''
          position: absolute
        &:before
          width: 100%
          height: 100%
          border-radius: 50%
          background-color: #131d26
          z-index: 1
        &:after
          width: 46px
          height: 46px
          left: 50%
          top: 50%
          border-radius: 50%
          transform: translate(-50%, -50%)
          background-color: #2b343c
          z-index: 2
      .total-price
        font-size: 16px
        color: rgba(255, 255, 255, 0.4)
        float: right
        font-weight: bold
    .middle
      flex: 1
      font-size: 16px
      color: rgba(255, 255, 255, .4)
      font-weight: 700
      text-indent: 12px
    .right
      width: 105px
      text-align: center
      font-size: 12px
      color: rgba(255, 255, 255, 0.4)
      font-weight: 700
      background-color: #2b343c
</style>
