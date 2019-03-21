<template>
  <div class="goods">
    <div class="menu-box" ref="menuBox">
      <ul>
        <li class="menu-item"
            v-for="(menuItem, index) in goods"
            :key="index"
            :class="{'current': index === currIndex}"
            @click="handleMenuItemClick(index, $event)"
        >
          <div class="menu-item-detail">
            <My-Icon v-if="menuItem.type > 0"
              :iconType="menuItem.type"
              iconSize="12_specail"
              class="menu-icon"
            />
            <span class="menu-text">{{ menuItem.name }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="goods-box" ref="goodsBox">
      <ul>
        <li v-for="(item, index) in goods"
            :key="index"
            class="goods-list goods-list-hook">
          <h2 class="goods-list-title">{{item.name}}</h2>
          <ul class="goods-item-box">
            <li v-for="(food, index) in item.foods"
                :key="index"
                class="goods-item">
              <div class="goods-image-box">
                <!-- <img :src="food.icon" :alt="food.name" class="goods-image"> -->
                <img :alt="food.name" class="goods-image">
              </div>
              <div class="goods-content-box">
                <h3 class="goods-content-title">{{food.name}}</h3>
                <p class="goods-desc">{{food.description}}</p>
                <div class="goods-extra">
                  <span class="goods-sell-count">月售{{food.sellCount}}份</span>
                  <span>好評率{{food.rating}}</span>
                </div>
                <div class="goods-price">
                  <span class="goods-price-now">￥{{food.price}}</span>
                  <span v-show="food.oldPrice" class="goods-price-old">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-btn">
                  <CartControl :food="food"></CartControl>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MyIcon from '@/common/components/icon/Icon'
import BScroll from 'better-scroll'
import CartControl from '@/common/components/cartcontrol/CartControl'

export default {
  name: 'goods',
  data() {
    return {
      goods: [],
      listHeight: [], // 右側商品列表每個區間的高度
      scrollY: 0
    }
  },
  created() {
    axios.get('/mock/data.json').then((res) => {
      this.goods = res.data.goods
      // 这里调用$nextTick方法的原因在于，如果calcHeight里面有用到DOM，如果不等到
      // 整个组件的DOM渲染完毕，会出现获取不到DOM元素的情况
      this.$nextTick(() => {
        this.initFoodList()
        setTimeout(() => {
          this.calcHeight()
        }, 20)
      })
    }, (err) => {
      console.log('请求出错')
      console.log(err)
    })
  },
  computed: {
    currIndex() {
      // 3763
      let currIndex = 0
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i] - 10
        if (this.scrollY <= height) {
          return i
        }
      }
      return currIndex
    }
  },
  components: {
    MyIcon,
    CartControl
  },
  methods: {
    initFoodList() {
      let menuBox = this.$refs['menuBox']
      this.menuList = new BScroll(menuBox, {
        click: true
      })
      let goodsBox = this.$refs['goodsBox']
      this.foodList = new BScroll(goodsBox, {
        probeType: 3,
        click: true
      })
      this.foodList.on('scroll', (pos) => {
        console.log('scrollY: ', Math.round(pos.y))
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    handleMenuItemClick(index, evt) {
      if (!evt._constructed) { // 阻止在PC端设备上，点击事件的回调函数多次执行
        return false
      }
      let goodsList = this.$refs['goodsBox']
      let nodeList = goodsList.getElementsByClassName('goods-list-hook')
      let elem = nodeList[index]
      this.foodList.scrollToElement(elem, 300)
    },
    calcHeight() {
      // 该方法的主要的功能是，计算出右侧的商品列表，每个分类下面的商品，最大的Y轴区间
      // 当滚动右侧的商品列表容器时，会需要用到当前Y轴是在哪个区间，从而可以让左侧的菜单
      // 实现联动效果
      let goodsList = this.$refs['goodsBox']
      let nodeList = goodsList.getElementsByClassName('goods-list-hook')
      let tmpHeight = 0
      for (let i = 0; i < nodeList.length; i++) {
        tmpHeight += nodeList[i].offsetHeight
        this.listHeight.push(tmpHeight)
      }
    }
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
    .menu-item
      width 56px
      height 56px
      line-height 14px
      display table
      padding 0 12px
      &.current
        background-color #fff
        .menu-item-detail
          border-color transparent
        .menu-text
          color #f01414
    .menu-item-detail
      display table-cell
      vertical-align middle
      font-size 0
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
    .menu-icon
      margin-right 2px
    .menu-text
      font-size 14px
  .goods-box
    flex 1
    // .goods-list
    .goods-list-title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background-color #f3f5f7
    .goods-item-box
      overflow hidden
    .goods-item
      display flex
      margin 18px
      padding-bottom 18px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      &:last-child
        border-width 0
        padding-bottom 0
    .goods-image-box
      width 57px
      margin-right 10px
    .goods-content-box
      flex 1
      position relative
    .goods-content-title
      margin 2px 0 8px
      font-size 14px
      height 14px
      line-height 14px
      color rgb(7, 17, 27)
    .goods-desc,.goods-extra
      font-size 10px
      color rgb(147, 153, 159)
    .goods-desc
      margin-bottom 8px
      line-height 12px
    .goods-extra
      line-height 10px
    .goods-sell-count
      margin-right 12px
    .goods-price
      font-size 0
      font-weight 700
      line-height 24px
    .goods-price-now
      margin-right 8px
      font-size 14px
      color rgb(240, 20, 20)
    .goods-price-old
      text-decoration line-through
      font-size 10px
      color rgb(147, 153, 159)
    .cartcontrol-btn
      position absolute
      right 0
      bottom 20px
</style>
