<template>
  <div class="h-header">
    <div class="wrapper">
      <div class="left">
        <img :src="seller.avatar" alt="" width="64" height="64" class="h-img">
      </div>
      <div class="right">
        <h4 class="h-title">
          <span class="h-brand"></span>
          {{seller.name}}
        </h4>
        <p class="h-desc">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </p>
        <div class="h-activition" v-if="seller.supports">
          <span class="icon" :class="[classMap[seller.supports[0].type]]"></span>
          <span class="h-text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="btn" @click="handleDetailShow">
        <span class="btn-text">5个</span>
        <i class="btn-icon iconfont">&#xe64c;</i>
      </div>
    </div>
    <div class="bulletin" @click="handleDetailShow">
      <span class="title"></span>
      <span class="content">{{seller.bulletin}}</span>
      <span class="icon-arrow iconfont">&#xe64c;</span>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="">
    </div>
    <div v-show="detailShow" class="detail">
      <!-- 应用到了CSS Sticky layout -->
      <div class="detail-box clearfix">
        <div class="detail-main">
          <p>{{seller.bulletin}}</p>
          <p>{{seller.bulletin}}</p>
        </div>
      </div>
      <div class="detail-close">close</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h-header',
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: true
    }
  },
  methods: {
    handleDetailShow() {
      this.detailShow = true
    }
  },
  created() {
    this.classMap = ['decrese', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/mixin'
.h-header
  color #ffffff
  position relative
  overflow hidden
  background-color rgba(7, 17, 27, 0.2)
  .wrapper
    padding 24px 12px 18px 24px
    display flex
    position relative
    .h-img
      display block
      margin-right 16px
      border-radius 2px
    .right
      flex 1
      .h-title
        margin: 2px 0 8px 0
        font-size 16px
        line-height 18px
        font-weight bold
      .h-brand
        width 30px
        height 18px
        display inline-block
        vertical-align top
        bg-image('brand')
        background-size 30px 18px
        background-repeat no-repeat
        margin-right: 6px
      .h-desc
        line-height 12px
        font-size 12px
        margin-bottom 10px
      .h-activition
        font-size 0
      .icon
        display inline-block
        width 12px
        height 12px
        margin-right 4px
        background-size 12px 12px
        background-repeat no-repeat
        vertical-align top
        &.decrese
          bg-image('decrease_1')
        &.discount
          bg-image('discount_1')
        &.guarantee
          bg-image('guarantee_1')
        &.invoice
          bg-image('invoice_1')
        &.special
          bg-image('special_1')
      .h-text
        font-size 12px
        line-height 12px
        display inline-block
    .btn
      position absolute
      right 12px
      bottom 18px
      padding 0 8px
      height 24px
      line-height 24px
      border-radius 14px
      background-color rgba(0, 0, 0, 0.2)
      text-align center
      font-size 0
      .btn-text
        font-size 10px
        margin-right 2px
      .btn-icon
        font-size 10px
  .bulletin
    height 28px
    line-height 28px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    padding 0 28px 0 12px
    position relative
    background-color rgba(7, 17, 27, 0.2)
    .title
      display inline-block
      width 22px
      height 12px
      bg-image('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
      margin: 0 4px 0 0
      vertical-align top
      margin-top 8px
    .content
      font-size 12px
    .icon-arrow
      position absolute
      font-size 12px
      right 12px
  .background
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    z-index -1
    filter blur(10px)
    img
     display block
     width 100%
     height 100%
  .detail
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    overflow-x hidden
    overflow-y auto
    background-color rgba(7, 17, 27, 0.8)
    .detail-box
      min-height 100%
      background-color red
    .detail-main
      margin-top 64px
      padding-bottom 64px
    .detail-close
      height 64px
      width 64px
      background-color blue
      margin -64px auto 0
      clear both
      position relative
</style>
