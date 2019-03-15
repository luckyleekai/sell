import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/views/goods/Goods'
import Ratings from '@/views/ratings/Ratings'
import Seller from '@/views/seller/Seller'
import Test from '@/views/test/Test'

Vue.use(Router)
// {name: '主页', path: '/', component: Goods} 错误的写法，
// 必须要用redirect这种方式
const routes = [
  { name: '主页', path: '/', redirect: '/goods' },
  { name: 'goods', path: '/goods', component: Goods },
  { name: 'ratings', path: '/ratings', component: Ratings },
  { name: 'seller', path: '/seller', component: Seller },
  { name: 'test', path: '/test', component: Test }
]
export default new Router({
  routes
})
