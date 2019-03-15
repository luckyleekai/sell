<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar-wapper">
        <img :src="seller.avatar" alt="" width="64" height="64" class="avatar">
      </div>
      <div class="content">
        <div class="title">
          <i class="brand"></i>
          <span class="title-text">{{seller.name}}</span>
        </div>
        <div class="discribtion">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="discount" v-if="seller.supports">
          <i class="discount-icon" :class="classMap[seller.supports[0].type]"></i>
          <span class="discount-text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="suppert-count" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="suppert-icon">></i>
      </div>
    </div>
    <div class="notice-wrapper">
      <div class="title"></div>
      <div class="notice">{{seller.bulletin}}</div>
      <div class="arrow-right">></div>
    </div>
    <div class="background">
      <img src="./background.jpg" alt="" width="100%" height="100%">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    props: {
      seller: Object
    },
    data() {
      return {
        classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      }
    }
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
      position: relative
      padding: 24px 12px 18px 24px
      .avatar-wapper
        margin-right: 16px
        width: 64px
        height: 64px
        overflow: hidden
        .avatar
          display: block
          width: 100%
          height: 100%
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
          .title-text
            font-size: 16px
            font-weight: bold
            line-height: 18px
        .discribtion
          font-size: 12px
          line-height: 12px
          font-weight: 200
          margin-bottom: 10px
        .discount
          font-size: 0
          .discount-icon
            display: inline-block
            width: 12px
            height: 12px
            background-repeat: no-repeat
            background-size: 12px 12px
            margin-right: 4px
            vertical-align: top
            &.decrease
              bg-image('decrease_1', 'png')
            &.discount
              bg-image('discount_1', 'png')
            &.special
              bg-image('special_1', 'png')
            &.invoice
              bg-image('invoice_1', 'png')
            &.guarantee
              bg-image('guarantee_1', 'png')
          .discount-text
            font-size: 10px
            line-height: 12px
            font-weight: 200
      .suppert-count
        font-size: 10px
        font-weight: 200
        line-height: 24px
        padding: 0 8px
        background-color: rgba(0, 0, 0, .2)
        position: absolute
        right: 12px
        bottom: 10px
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
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
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
