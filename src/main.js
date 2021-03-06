// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// require('../node_modules/swiper/dist/css/swiper.css')
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)


Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

var Ww = document.documentElement.clientWidth;
var xc = Ww/360;
console.log(Ww);

var ht = document.getElementsByTagName('html')[0];
ht.style.fontSize = 100*xc+'px';

console.log(ht.style.fontSize);
