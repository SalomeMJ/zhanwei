<template>
 <div>
   <div class="navs">
     <router-link to="/" class="first"> <span class="glyphicon glyphicon-home  "></span> 首页</router-link>
     <router-link to="/nav"> <span class="glyphicon glyphicon-info-sign"></span>使用规则</router-link>
     <router-link to="/own"> <span class="glyphicon glyphicon-user"></span>个人中心</router-link>
   </div>
 </div>
</template>
<script>
  export default{
    // name:'nav'
  }
</script>
<style scoped>
  .navs{
    height: 0.55rem;
    width: 100%;
    line-height: 0.7rem;
    background-color: #f8f8f8;
    border-top:0.01rem solid #eee;
    position: fixed;
    bottom: 0;
    z-index: 9999;
  }
  .navs a{
    display: inline-block;
    text-decoration: none;
    width: 33%;
    /*border:0.01rem solid red;*/
    position: relative;
  }
  .navs .first{
    margin-left: -0.05rem;
  }
  .glyphicon{
    display: inline-block;
    position: absolute;
    top: 0.1rem;
    left: 45%;


  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>
