<template>
  <div id="app">
    <v-header></v-header>
    <ul class="tab">
      <router-link tag="li" :to="{path: '/goods'}" class="tab-item">商品</router-link>
      <router-link tag="li" :to="{path: '/ratings'}" class="tab-item">评价</router-link>
      <router-link tag="li" :to="{path: '/sell'}" class="tab-item">商家</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/views/header/Header'
import Axios from 'axios'

export default {
  name: 'App',
  components: {
    'v-header': Header
  },
  created() {
    Axios.get('/mock/data.json').then((response) => {
      console.log(response)
    })
  }
}
</script>

<style lang="stylus">
  @import '~@/common/stylus/reset.styl'
</style>

<style lang="stylus" scoped>
  .tab
    display: flex
    height: 40px
    line-height: 40px
    .router-link-active
      color: #f00
    .tab-item
      flex: 1
      text-align: center
</style>
