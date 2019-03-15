<template>
  <div class="main">
    <test-one @divHasClick="handleDivHasClick" :num="num"></test-one>
    <test-two></test-two>
  </div>
</template>

<script>
  import TestOne from '@/views/test/TestOne.vue'
  import TestTwo from '@/views/test/TestTwo.vue'
  export default {
    data() {
      return {
        num: 0
      }
    },
    components: {
      TestOne,
      TestTwo
    },
    methods: {
      handleDivHasClick(step) {
        this.num = this.num + 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #f8f8f8
    z-index: 100
    box-sizing: border-box
    padding: 20px
</style>
