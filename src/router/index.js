import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
// import Nav from '@/components/nav'
import Own from '@/components/own'
import myHonor from '@/components/myHonor'
import myCode  from '@/components/myCode'
import mySuggestion  from '@/components/mySuggestion'
import myUser  from '@/components/myUser'
import  homeDetail from  '@/components/homeDetail'
import  homeJiandu from  '@/components/homeJiandu'
import  homeJilu from  '@/components/homeJilu'
import  homeJifen from  '@/components/homeJifen'
import  homeDaoju from  '@/components/homeDaoju'
import  homeRenwu from  '@/components/homeRenwu'
import  homePaihang from  '@/components/homePaihang'
import  homeWeigui from  '@/components/homeWeigui'
import  homeLibao from  '@/components/homeLibao'
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
    // {
    //   path:'/',
    //   name:'nav',
    //   component:Nav
    // },
    {
      path:'/homedetail',
      name:'homedetail',
      component:homeDetail
    },
    // {
    //   path:'/nav',
    //   name:'nav',
    //   component:Nav
    // },
//    监督占位
    {
      path:'/homeJiandu',
      name:'homeJiandu',
      component:homeJiandu
    },
    //    使用记录
    {
      path:'/homeJilu',
      name:'homeJilu',
      component:homeJilu
    },
    //    积分商城
    {
      path:'/homeJifen',
      name:'homeJifen',
      component:homeJifen
    },
    //    道具包
    {
      path:'/homeDaoju',
      name:'homeDaoju',
      component:homeDaoju
    },
    //   积分任务
    {
      path:'/homeRenwu',
      name:'homeRenwu',
      component:homeRenwu
    },
    //    排行榜
    {
      path:'/homePaihang',
      name:'homePaihang',
      component:homePaihang
    },
    //    违规记录
    {
      path:'/homeWeigui',
      name:'homeWeigui',
      component:homeWeigui
    },
    //    小礼包
    {
      path:'/homeLibao',
      name:'homeLibao',
      component:homeLibao
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
