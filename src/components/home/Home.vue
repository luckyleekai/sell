<template>
  <div>
    <H-Header :seller="seller"></H-Header>
    <ul class="tab">
      <li class="tab-item">商品</li>
      <li class="tab-item">评论</li>
      <li class="tab-item">商家</li>
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
</style>
