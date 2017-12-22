import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Nav from '@/components/nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/nav',
      name:'nav',
      component:Nav
    }
  ]
})
