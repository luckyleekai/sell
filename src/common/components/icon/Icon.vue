<template>
  <span class="icon" :class="[fullClass, uClass]"></span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconType: {
      type: Number,
      default: 0
    },
    iconSize: {
      type: [Number, String],
      default: 12
    },
    uClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    fullClass() {
      let classMap = ['decrese', 'discount', 'special', 'invoice', 'guarantee']
      return `icon${this.iconSize} ${classMap[this.iconType]}`
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/mixin'
.icon
  display inline-block
  vertical-align top
  margin-right 4px
  &.icon12
    width 12px
    height 12px
    background-size 12px 12px
    background-repeat no-repeat
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
  &.icon12_specail
    width 12px
    height 12px
    background-size 12px 12px
    background-repeat no-repeat
    &.decrese
      bg-image('decrease_3')
    &.discount
      bg-image('discount_3')
    &.guarantee
      bg-image('guarantee_3')
    &.invoice
      bg-image('invoice_3')
    &.special
      bg-image('special_3')
  &.icon16
    width 16px
    height 16px
    background-size 16px 16px
    background-repeat no-repeat
    &.decrese
      bg-image('decrease_2')
    &.discount
      bg-image('discount_2')
    &.guarantee
      bg-image('guarantee_2')
    &.invoice
      bg-image('invoice_2')
    &.special
      bg-image('special_2')
</style>
