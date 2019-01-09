import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/views/goods/Goods'
import Ratings from '@/views/ratings/Ratings'
import Seller from '@/views/seller/Seller'
import Test from '@/views/test/Test'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Goods
  }, {
    name: 'goods',
    path: '/goods',
    component: Goods
  }, {
    name: 'ratings',
    path: '/ratings',
    component: Ratings
  }, {
    name: 'seller',
    path: '/seller',
    component: Seller
  }, {
    name: 'test',
    path: '/test',
    component: Test
  }]
})
