import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/searchmode',
      name: 'search',
      component: () => import('./views/SearchMode.vue')
    },
    {
      path: '/itemsearch',
      name: 'itemsearch',
      component: () => import('./views/ItemSearch.vue')
    },
    {
      path: '/businesssearch',
      name: 'businesssearch',
      component: () => import('./views/BusinessSearch.vue')
    },
    {
      path: '/locationsearch',
      name: 'locationsearch',
      component: () => import('./views/LocationSearch.vue')
    }
  ]
})
