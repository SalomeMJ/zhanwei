<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>

  </div>
</template>

<script>
  //引入导航组件
  import mjwnavs from './components/mjw-navs.vue'
export default {
  name: 'app',
  components:{mjwnavs},
  watch:{
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }

  },
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

  height: 6.67rem;
  position: relative;
  /*border:1px solid red;*/
}



.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);




/*.child-view {*/
  /*position: absolute;*/
  /*width:100%;*/
  /*transition: all .8s cubic-bezier(.55,0,.1,1);*/
/*}*/
/*.slide-left-enter, .slide-right-leave-active {*/
  /*opacity: 0;*/
  /*-webkit-transform: translate(350px, 0);*/
  /*transform: translate(50px, 0);*/
/*}*/
/*.slide-left-leave-active, .slide-right-enter {*/
  /*opacity: 0;*/
  /*-webkit-transform: translate(-350px, 0);*/
  /*transform: translate(-350px, 0);*/
/*}*/

.child-view {
  position: absolute;
  width: 100%;
  transition: all .5s ease;
  top: 40px;
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

</style>



















