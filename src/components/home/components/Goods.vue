<template>
  <div class="goods">
    <div class="menu-box"></div>
    <div class="goods-box"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'goods',
  data() {
    return {
      goods: []
    }
  },
  created() {
    axios.get('/mock/data.json').then((res) => {
      this.goods = res.data.goods
      console.log(this.goods)
    }, (err) => {
      console.log('请求出错')
      console.log(err)
    })
  }
}
</script>

<style lang="stylus" scoped>
.goods
  position absolute
  width 100%
  top 174px
  bottom 46px
  display flex
  overflow hidden
  .menu-box
    width 80px
    background-color #f3f5f7
  .goods-box
    flex 1
</style>
