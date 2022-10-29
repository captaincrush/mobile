import Vue from 'vue'
import VueRouter from 'vue-router'
import first from './modules/first'
import sale from './modules/sale'
import shop from './modules/shop'
import center from './modules/center'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/first/Index'
  },
  {
    path:'/first/index',
    component:()=>import('@/views/first/Index.vue')
  },
  {
    path:'/sale/index',
    component:()=>import('@/views/sale/Index.vue')
  },
  {
    path:'/shop/index',
    component:()=>import('@/views/shop/Index.vue')
  },
  {
    path:'/center/index',
    component:()=>import('@/views/center/Index.vue')
  },
  ...first,
  ...sale,
  ...shop,
  ...center,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
