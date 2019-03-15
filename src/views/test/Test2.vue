<template>
  <div :class="[defaultClass, cname]">
    <!--<slot></slot>-->
  </div>
</template>

<script>
  export default {
    props: {
      cname: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      }
    },
    name: 'Test2',
    data() {
      return {
        defaultClass: 'btn'
      }
    },
    created() {
      console.log('url ', this.url)
    }
  }
</script>

<style lang="stylus" scoped>
  .btn
    font-size: 24px
    min-width: 124px
    text-align: center
</style>
