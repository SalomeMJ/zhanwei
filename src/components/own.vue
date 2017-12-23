<template>
  <div>
    <div><img class="perbg" src="static/img/beijing.jpeg" alt=""></div>
    <div class="headerPhotoWrap">
      <img class="headPhoto" :src="src" alt="">
      <br>
      <span>嘉木</span>
    </div>
    <div >
      <div class="studyTime"><strong>0小时</strong><br><small>学习时间</small></div>
      <div class="studyTime"><strong>0小时</strong><br><small>学习时间</small></div>
      <div class="studyTime"><strong>0小时</strong><br><small>学习时间</small></div>
      <span>></span>
    </div>
    <div>
      <ul class="list-group">
        <li class="list-group-item menu-item">
          <span><img src="static/img/勋章.png" alt=""></span>
          <div>我的勋章</div>
          <strong> ></strong>
        </li>
        <li class="list-group-item menu-item">
          <span><img src="static/img/勋章.png" alt=""></span>
          <div>我的积分</div>
          <strong> ></strong>
        </li>
        <li class="list-group-item menu-item">
          <span><img src="static/img/勋章.png" alt=""></span>
          <div>消息中心</div>
          <strong> ></strong>
        </li>
        <li class="list-group-item menu-item">
          <span><img src="static/img/勋章.png" alt=""></span>
          <div>意见反馈</div>
          <strong> ></strong>
        </li>
        <li class="list-group-item menu-item">
          <span><img src="static/img/勋章.png" alt=""></span>
          <div>使用规则</div>
          <strong> ></strong>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        src:  "static/img/touxiang.jpg"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .perbg{
    width: 3.75rem;
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
  }
  .studyTime{
    display: inline-block;
    width: 30%;

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

