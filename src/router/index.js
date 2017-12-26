import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Nav from '@/components/nav'
import Own from '@/components/own'
import myHonor from '@/components/myHonor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/nav',
      name:'nav',
      component:Nav
    },
    {
      path:'/own',
      name:'own',
      component:Own
    },
    {
      path:'/myHonor',
      name:'myHonor',
      component:myHonor
    }
  ]
})
