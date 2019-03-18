<template>
  <div>
    <H-Header :seller="seller"></H-Header>
    <ul class="tab">
      <router-link class="tab-item" tag="li" to="/home">商品</router-link>
      <router-link class="tab-item" tag="li" to="/rating">评论</router-link>
      <router-link class="tab-item" tag="li" to="/seller">商家</router-link>
    </ul>
    <div class="content">
      content
    </div>
  </div>
</template>

<script>
import HHeader from './components/H-Header'
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    HHeader
  },
  created() {
    axios.get('/mock/data.json').then((res) => {
      this.seller = res.data.seller
    }, (err) => {
      console.log('请求出错')
      console.log(err)
    })
  }
}
</script>

<style lang="stylus" scoped>
.tab
  display flex
  .tab-item
    flex 1
    height 40px
    line-height 40px
    text-align center
    &.router-link-active
      color #ff0000
</style>
