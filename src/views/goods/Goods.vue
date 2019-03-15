<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu">
        <li class="menu-item" v-for="(item, index) of goods" :key="index" :class="{active:currentIndex===index}" @click="selectMenu(index, $event)">
          <div class="text-wrapper border-1px-bottom">
            <i class="icon" v-if="item.type>-1" :class="classMap[item.type]"></i>
            <span>{{item.name}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="content-wrapper" ref="contentWrapper">
      <ul>
        <li class="item item-hook" v-for="(item, index) of goods" :key="index">
          <h1 class="title">{{item.name}}</h1>
          <ul class="sub-list">
            <li class="sub-item border-1px-bottom" v-for="(food, index) of item.foods" :key="index">
              <div class="img-wrapper">
                <img :src="food.image" alt="" width="57" height="57">
              </div>
              <div class="infor">
                <h2 class="infor-name">{{food.name}}</h2>
                <p class="infor-desc">{{food.description}}</p>
                <p class="infor-sell">
                  <span class="sell-count">月售{{food.sellCount}}份</span>
                  <span class="sell-rating">好评率{{food.rating}}%</span>
                </p>
                <p class="infor-price">
                  <span class="new-price">￥{{food.price}}</span>
                  <span class="old-price" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </p>
                <div class="goods-btn">
                  <food-control></food-control>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :seller="seller"></shopcart>
  </div>
</template>

<script>
import Axios from 'axios'
import BScroll from 'better-scroll'
import Shopcart from '@/views/shopcart/Shopcart'
import FoodControl from '@/common/components/FoodControl'

export default {
  name: 'Goods',
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      goods: [],
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      listHeight: [],
      scrollY: 0
    }
  },
  created() {
    Axios.get('/api/data.json').then((response) => {
      // console.log(response)
      const data = response.data
      this.goods = data.goods
      this.$nextTick(() => {
        this._initScroll()
        // 计算每个分类下面的商品所占据的区域高度
        this._calculateHeight()
      })
    })
  },
  methods: {
    _initScroll() {
      const refs = this.$refs
      this.menuWrapper = new BScroll(refs.menuWrapper, {
        click: true
      })
      this.contentWrapper = new BScroll(refs.contentWrapper, {
        probeType: 3,
        click: true
      })
      this.contentWrapper.on('scroll', (pos) => {
         this.scrollY = Math.abs(Math.round(pos.y))
         // console.log(this.scrollY)
      })
    },
    _calculateHeight() {
      let list = document.getElementsByClassName('item-hook')
      let height = 0
      this.listHeight.push(0)
      // for (let i = 0; i < list.length; i++) {
      //   let itemHeight = list[i].offsetHeight
      //   height += itemHeight
      //   this.listHeight.push(height)
      // }
      list = Array.from(list)
      list.forEach((item) => {
        height += item.offsetHeight
        this.listHeight.push(height)
      })
      // console.log(this.listHeight)
    },
    selectMenu(index, evt) {
      let list = document.getElementsByClassName('item-hook')
      let el = list[index]
      this.contentWrapper.scrollToElement(el, 300)
    }
  },
  components: {
    FoodControl,
    Shopcart
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/common/stylus/mixin.styl'
  .goods
    position: absolute
    top: 174px
    bottom: 46px
    left: 0
    width: 100%
    display: flex
    overflow: hidden
    .menu-wrapper
      width: 80px
      background-color: #f3f5f7
      .menu-item
        width: 56px
        height: 54px
        display: table
        padding: 0 12px
        line-height: 14px
        &.active
          background-color: #fff
          .text-wrapper
            border-none()
        .text-wrapper
          display: table-cell
          vertical-align: middle
          font-size: 12px
          font-weight: 200
          border-1px-bottom(rgba(7, 17, 27, 0.1))
          .icon
            display:inline-block
            width: 12px
            height: 12px
            background-repeat: no-repeat
            background-size: 12px 12px
            margin-right: 2px
            vertical-align: top
            &.decrease
              bg-image('decrease_3', 'png')
            &.discount
              bg-image('discount_3', 'png')
            &.special
              bg-image('special_3', 'png')
            &.invoice
              bg-image('invoice_3', 'png')
            &.guarantee
              bg-image('guarantee_3', 'png')
    .content-wrapper
      flex: 1
      .title
        font-size: 12px
        color: rgb(147, 153, 159)
        line-height: 26px
        background-color: #f3f5f7
        border-left: 2px solid #d9dde1
        padding-left: 14px
      .sub-list
        overflow: hidden
        .sub-item
          margin: 18px
          display: flex
          padding-bottom: 18px
          border-1px-bottom(rgba(7, 17, 27, 0.1))
          &:last-child
            border-none()
            margin-bottom: 0
          .img-wrapper
            width: 57px
            height: 57px
            overflow: hidden
            margin-right: 10px
          .infor
            flex: 1
            position: relative
            overflow: hidden
            .infor-name
              font-size: 14px
              color: rgb(7, 17, 27)
              line-height: 14px
              margin: 2px 0 8px 0
            .infor-desc, .infor-sell
              color: rgb(147, 153, 159)
              line-height: 10px
              margin-bottom: 8px
            .infor-desc
              font-size: 10px
              line-height: 12px
            .infor-sell
              font-size: 0
              .sell-count, .sell-rating
                display: inline-block
                font-size: 10px
              .sell-count
                margin-right: 12px
            .infor-price
              font-size: 0
              font-weight: 700
              .new-price
                font-size: 14px
                color: rgb(240, 20, 20)
                margin-right: 8px
              .old-price
                font-size: 10px
                text-decoration: line-through
                color: rgb(147, 153, 159)
            .goods-btn
              position: absolute
              right: 0
              bottom: 12px
</style>
