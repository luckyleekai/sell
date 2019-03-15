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
  created() {
    this.classMap = ['decrese', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/mixin'
.h-header
  color #ffffff
  background-color #000
  .wrapper
    padding 24px 12px 18px 24px
    display flex
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
</style>
