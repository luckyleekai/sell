<template>
  <div @click="handleDivClick" class="box">{{num}}</div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      num: {
        type: Number,
        default: 0
      }
    },
    methods: {
      handleDivClick() {
        // console.log('click')
        this.$emit('divHasClick')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .box
    height 30px
    line-height 30px
    background-color #f00
</style>
