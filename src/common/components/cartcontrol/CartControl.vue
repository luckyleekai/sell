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
      if (type === '+') {
        if (this.food.count === undefined) {
          // 这里必须使用$set方法，原因在于vue只能对数据对象中已存在的属性进行监听和响应
          // 动态添加的属性无法做出直接做出响应，需调用set方法
          this.$set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
      } else {
        if (this.food.count > 0) {
          this.food.count--
        }
      }
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
