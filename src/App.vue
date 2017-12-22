<template>
  <div id="app">
    <router-view/>
    <div class="navs">
      <router-link to="/nav" class="first"> <span class="glyphicon glyphicon-home  "></span> 首页</router-link>
      <router-link to="/nav"> <span class="glyphicon glyphicon-info-sign"></span>使用规则</router-link>
      <router-link to="/nav"> <span class="glyphicon glyphicon-user"></span>个人中心</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 6.67rem;
  position: relative;
  /*border:1px solid red;*/
}
.navs{
  height: 0.55rem;
  width: 100%;
  line-height: 0.7rem;
  background-color: #f8f8f8;
  border-top:0.01rem solid #eee;
  position: fixed;
  bottom: 0;
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
</style>



















