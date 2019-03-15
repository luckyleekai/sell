import Home from '@/components/home/Index'

const routes = [{
  path: '/',
  redirect: '/home'
  // component: Home
}, {
  path: '/home',
  component: Home
}]

export default routes
