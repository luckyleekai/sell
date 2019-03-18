<template>
<!-- 根据设计稿抽离出来的星星模板组件 -->
  <div class="star" :class="starType">
    <span v-for="(itemClasses, index) in starClass"
          :class="itemClasses"
          :key="index"
          class="star-item">
    </span>
  </div>
</template>

<script>
const LEN = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
  name: 'star',
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size
    },
    starClass() {
      let result = []
      // 这里对传递过来的评分做向下取整运算, 比如如果是4.1~4.4之间的评分
      // 那么当4星评论，4.5~4.9之间的评论当4星半评论，这也是为啥需要先*2
      // 再除以2的原因
      let score = Math.floor(this.score * 2) / 2
      let hasDecimal = score % 1
      let interge = Math.floor(score)
      for (let i = 0; i < interge; i++) {
        result.push(CLS_ON)
      }
      if (hasDecimal) {
        result.push(CLS_HALF)
      }
      while (result.length < LEN) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/common/stylus/mixin'
.star
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-24
    .star-item
      width 10px
      height 10px
      background-size 10px 10px
      margin-right 3px
      &:last-child
        margin-right 0
      &.on
        bg-image('star24_on')
      &.off
        bg-image('star24_off')
      &.half
        bg-image('star24_half')
  &.star-36
    .star-item
      width 15px
      height 15px
      background-size 15px 15px
      margin-right 26px
      &:last-child
        margin-right 0
      &.on
        bg-image('star36_on')
      &.off
        bg-image('star36_off')
      &.half
        bg-image('star36_half')
  &.star-48
    .star-item
      width 20px
      height 20px
      background-size 20px 20px
      margin-right 22px
      &:last-child
        margin-right 0
      &.on
        bg-image('star48_on')
      &.off
        bg-image('star48_off')
      &.half
        bg-image('star48_half')
</style>
