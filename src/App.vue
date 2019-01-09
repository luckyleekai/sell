<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <ul class="tab" id="tab">
      <router-link tag="li" :to="{path: '/goods'}" class="tab-item">商品</router-link>
      <router-link tag="li" :to="{path: '/ratings'}" class="tab-item">评价</router-link>
      <router-link tag="li" :to="{path: '/seller'}" class="tab-item">商家</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  import Header from '@/views/header/Header'
  import Axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
        seller: {}
      }
    },
    components: {
      'v-header': Header
    },
    created() {
      Axios.get('/mock/data.json').then((response) => {
        //console.log(response)
      })
    },
    mounted() {
      // let oTab = document.getElementById('tab')
      // let style = document.defaultView.getComputedStyle(oTab, 'after')
      // console.log(style['display'])
      // console.log(style['width'])
    }
  }
</script>

<style lang="stylus">
  @import '~@/common/stylus/reset.styl'
</style>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixin.styl'
  .tab
    display: flex
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,27,0.1))
    .router-link-active
      color: #f00
    .tab-item
      flex: 1
      text-align: center
</style>
