<template>
  <div class="background">
    <div><img class="perbg" src="static/img/beijing.jpeg" alt=""></div>
    <div class="headerPhotoWrap">
      <img class="headPhoto" :src="src" alt="">
      <br>
      <span>嘉木</span>
    </div>
    <div class="headerPhotoWrap">
      <div class="studyTime"><strong>0小时</strong><br><small>学习时间</small></div>
      <div class="studyTime"><strong>0小时</strong><br><small>学习时间</small></div>
      <div class="studyTime"><strong>0小时</strong><br><small>学习时间</small></div>
      <span>></span>
    </div>
    <div>
      <ul class="list-group">
        <li class="list-group-item menu-item" v-on:click="clickEnterMyhonor">
          <span><img src="static/img/xunzhang.png" alt=""></span>
          <div>我的勋章</div>
          <strong> ></strong>
        </li>
        <li class="list-group-item menu-item" v-on:click="clickEnterMycode">
          <span><img src="static/img/jifen.png" alt=""></span>
          <div>我的积分</div>
          <strong> ></strong>
        </li>
        <li class="list-group-item menu-item" >
          <span><img src="static/img/message.png" alt=""></span>
          <div>消息中心</div>
          <strong> ></strong>
        </li>
        <li class="list-group-item menu-item"  v-on:click="clickEnterBack">
          <span><img src="static/img/dengpao.png" alt=""></span>
          <div>意见反馈</div>
          <strong> ></strong>
        </li>
        <li class="list-group-item menu-item"  v-on:click="clickEnterUser">
          <span><img src="static/img/guize.png" alt=""></span>
          <div>使用规则</div>
          <strong> ></strong>
        </li>
        <li class="list-group-item menu-item">
          <span><img src="static/img/set.png" alt=""></span>
          <div>个人设置</div>
          <strong> ></strong>
        </li>

      </ul>
    </div>
   <navs></navs>
  </div>
</template>

<script>
  import navs from '@/components/nav.vue'
  export default {
    name: 'HelloWorld',
    components: {navs},
    data () {
      return {
        src:  "static/img/touxiang.jpg"
      }
    },
    methods:{
      clickEnterMyhonor:function () {
       this.$router.push({path:'/myHonor'})
      },
      clickEnterMycode:function () {
        this.$router.push({path:'/myCode'})
      },
      clickEnterBack:function () {
        this.$router.push({path:'/mySuggestion'})

      },
      clickEnterUser:function () {
        this.$router.push({path:'/myUser'})
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background{
    background: #f0f0f0;
  }

  .perbg{
    width: 3.6rem;
    height: 1.5rem;

  }
  .headPhoto{
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    margin-top: -.4rem;
  }
  .headerPhotoWrap{
    text-align: center;
    /*width: .8rem;*/
    /*height: 1.2rem;*/
    background-color: white;
  }
  .studyTime{
    display: inline-block;
    width: 30%;

  }
  li.menu-item{
    margin-top: .15rem;
    display: block!important;
  }
  .menu-item>span>img{
    display: inline-block;
      width: .2rem;
    height: .2rem;

  }
  .menu-item>div{
    text-indent: .2rem;
    display: inline-block;
    width: 88%;
    margin: 0;
    top: 0;
    text-align: left;
  }

  .menu-item>strong{
    width: 20%;
   }


</style>

