import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Nav from '@/components/nav'
import Own from '@/components/own'
import myHonor from '@/components/myHonor'
import myCode  from '@/components/myCode'
import mySuggestion  from '@/components/mySuggestion'
import myUser  from '@/components/myUser'
import  homeDetail from  '@/components/homeDetail'
Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/homedetail',
      name:'homedetail',
      component:homeDetail
    },
    {
      path:'/nav',
      name:'nav',
      component:Nav
    },
//个人中心
    {
      path:'/own',
      name:'own',
      component:Own
    },
    //我的积分
    {
      path:'/myHonor',
      name:'myHonor',
      component:myHonor
    },
    //我的积分
    {
      path:'/myCode',
      name:'myCode',
      component:myCode
    },
    //意见反馈
    {
      path:'/mySuggestion',
      name:'mySuggestion',
      component:mySuggestion
    },
    //使用规则
    {
      path:'/myUser',
      name:'myUser',
      component:myUser
    }

  ]
})
