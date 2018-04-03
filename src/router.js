import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import About from './views/About.vue'
import Used from './views/Used.vue'
import Page from './views/Page.vue'
import Shop from './views/Shop.vue'
import Journalism from './views/Journalism.vue'
import Lianxi from './views/Lianxi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/used',
      name: 'ershou',
      component: Used
    },
    {
      path: '/page',
      name: 'xiangqing',
      component: Page
    },
    {
      path: '/shop',
      name: 'sahngpu',
      component: Shop
    },
    {
      path: '/journalism',
      name: 'loushi',
      component: Journalism
    },
     {
      path: '/lianxi',
      name: 'lianxi',
      component: Lianxi
    },
  ]
})
