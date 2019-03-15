import Home from '@/components/home/Home'

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]

export default routes
