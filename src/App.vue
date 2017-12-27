<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      transitionName:''
    }
  },
    watch: {
      '$route' (to, from) {
        let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
        if(isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    }
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
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 1;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 1;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
.child-view {
  position: absolute;
  width: 100%;
  transition: all .8s ease;
  top: 40px;
}
</style>



















