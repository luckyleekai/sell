<template>
   <div :class="[defaultClass, cname]">
     <slot>
       <div class="decrease" @click="decreseFood" v-show="food.count>0">-</div>
       <div class="count" v-show="food.count>0">{{ food.count }}</div>
       <div class="add" @click="addFood">+</div>
     </slot>
   </div>
</template>

<script>
  export default {
    props: {
      cname: {
        type: String,
        default: ''
      },
      food: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    name: 'FoodControl',
    data() {
      return {
        defaultClass: 'shop-control'
      }
    },
    methods: {
      decreseFood() {
        if (this.food.count) {
          this.food.count--
        }
      },
      addFood() {
        if (!this.food.count) {
          this.$set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .shop-control
    display: inline-flex
    .decrease, .add, .count
      padding: 6px
      font-size: 14px
      line-height: 24px
    .decrease, .add
      background-color: #ff0
      border-radius: 50%
</style>
