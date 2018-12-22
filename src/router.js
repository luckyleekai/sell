import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/views/goods/Goods'
import Ratings from '@/views/ratings/Ratings'
import Sell from '@/views/sell/Sell'

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
    name: 'sell',
    path: '/sell',
    component: Sell
  }]
})
