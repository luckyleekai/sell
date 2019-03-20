import Home from '@/components/home/Home'
import Goods from '@/components/home/components/Goods'

const routes = [{
    path: '/',
    redirect: '/home/goods'
  },
  {
    path: '/home',
    component: Home,
    children: [{
      path: '/home/goods',
      component: Goods
    }]
  }
]

export default routes
