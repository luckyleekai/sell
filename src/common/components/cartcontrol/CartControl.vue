<template>
  <span class="control">
    <i class="control-decrease" v-show="food.count>0" @click="handleBtnClick()">-</i>
    <label class="control-count" v-show="food.count>0">{{food.count}}</label>
    <i class="control-add" @click="handleBtnClick('+', $event)">+</i>
  </span>
</template>

<script>
export default {
  name: 'cartcontrol',
  props: {
    food: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    handleBtnClick(type, evt) {
      // 这里感觉直接对父组件传递过来的数据进行直接的修改不是太好，但是这个数据是父组件
      // 列表循环传递给子组件的数据
    }
  }
}
</script>

<style lang="stylus" scoped>
.control
  display inline-flex
  font-size 0
  .control-decrease,
  .control-add,
  .control-count
    display inline-block
    height 30px
    line-height 30px
    text-align center
    font-size 16px
  .control-count
    min-width 30px
  .control-decrease,
  .control-add
    width 30px
    background-color rgba(0, 0, 255, 0.4)
</style>
