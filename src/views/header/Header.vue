<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img src="./avatar.jpg" alt="" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <i class="brand"></i>
          <span class="text">粥品香坊（大运村）</span>
        </div>
        <div class="discribtion">蜂鸟专送 / 38分钟送达</div>
        <div class="discount">
          <span class="icon"></span>
          <span class="text">在线支付满28减5，满50减10</span>
        </div>
        <div class="btn">
          <span>5个</span>
          <i>></i>
        </div>
      </div>
    </div>
    <div class="notice-wrapper">
      <div class="title"></div>
      <div class="notice">粥品香坊其烹饪粥料的秘方源于中国千年古法，再融和现代制作工艺</div>
      <div class="arrow-right">></div>
    </div>
    <div class="background">
      <img src="./background.jpg" alt="" width="100%" height="100%">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header'
  }
</script>
<style lang="stylus" scoped>
  @import '~@/common/stylus/mixin.styl'
  .header
    color: #fff
    position: relative
    background-color: rgba(7, 17, 27, 0.5)
    overflow: hidden
    .content-wrapper
      display: flex
      padding: 24px 12px 18px 24px
      .avatar
        margin-right: 16px
        img
          border-radius: 2px
      .content
        flex: 1
        position: relative
        overflow: hidden
        .title
          margin: 2px 0 8px 0
          font-size: 0
          .brand
            display: inline-block
            width: 30px
            height: 18px
            bg-image('brand', 'png')
            background-size: 30px 18px
            background-repeat: no-repeat
            vertical-align: top
            margin-right: 6px
          .text
            font-size: 16px
            font-weight: bold
            line-height: 18px
        .discribtion
          font-size: 12px
          font-weight: 200
          line-height: 12px
          margin-bottom: 10px
        .discount
          font-size: 0
          .icon
            display: inline-block
            width: 12px
            height: 12px
            bg-image('decrease_1', 'png')
            background-repeat: no-repeat
            background-size: 12px 12px
            vertical-align: top
            margin-right: 4px
          .text
            font-size: 10px
            font-weight: 200
            line-height: 12px
        .btn
          font-size: 10px
          font-weight: 200
          line-height: 24px
          padding: 0 8px
          background-color: rgba(0, 0, 0, .2)
          position: absolute
          right: 0
          bottom: 0
          border-radius: 24px
    .notice-wrapper
      display: flex
      height: 28px
      line-height: 28px
      padding: 0 12px
      background-color: rgba(7, 17, 27, 0.2)
      .title
        width: 22px
        height: 12px
        bg-image('bulletin', 'png')
        background-repeat: no-repeat
        background-size: 22px 12px
        margin-top: 8px
      .notice
        font-size: 10px
        font-weight: 200
        margin: 0 4px
        flex: 1
      .arrow-right
        width: 20px
        font-size: 20px
        text-align: center
    .background
      position: absolute
      width: 100%
      height: 100%
      top: 0
      z-index: -1
      filter: blur(10px)
</style>
