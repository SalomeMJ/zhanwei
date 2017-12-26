<template>
  <div class="home">
    <div class="top">
        <p class="hello">
          <span>您好:</span>
          <span class="name">xxx</span>
        </p>
        <p class="scl"><span class="school">xxx学校</span></p>
        <div class="content">
          <div class="title">
            <span class="leftLine"></span>
            <b>免费留学申请规划书</b>
            <span class="rightLine"></span>
          </div>
          <ul>
            <li class="goout">留学总体规划</li>
            <li>院校学术要求</li>
            <li>留学准备建议</li>
          </ul>
          <span class="clickFree">点击免费领取</span>
        </div>
        <a href="https://www.baidu.com/">
          <el-carousel >
            <el-carousel-item v-for="(item,index) in items" :key="index">
              <h3>{{ item.img }}</h3>
            </el-carousel-item>
          </el-carousel>
        </a>
      <ul class="contentItem">
        <li>
          <div>
            <img src="../assets/c1.png" alt="">
            <span>监督占位</span>
          </div>
          <div>
            <img src="../assets/c2.png" alt="">
            <span>使用记录</span>
          </div>
          <div>
            <img src="../assets/c3.png" alt="">
            <span>积分商城</span>
          </div>
          <div>
            <img src="../assets/c4.png" alt="">
            <span>道具包</span>
          </div>
        </li>
        <li>
          <div>
            <img src="../assets/c5.png" alt="">
            <span>积分任务</span>
          </div>
          <div>
            <img src="../assets/c6.png" alt="">
            <span>拍行榜</span>
          </div>
          <div>
            <img src="../assets/c7.png" alt="">
            <span>违规记录</span>
          </div>
          <div>
            <img src="../assets/c8.png" alt="">
            <span>小礼包</span>
          </div>
        </li>
      </ul>
      <div class="proceed">
        <span class="zuowei">座位预定</span>
        <div class="btns">
          <button>常用座位1</button>
          <button>常用座位2</button>
        </div>
        <img src="../assets/setting.png" alt="">
        <ul>
          <li>
            <div class="left">
              <span>2楼206综合图书馆(2楼)</span>
              <span>8:00~22:00开关前可提前2.0小时预订</span>
            </div>
            <div class="right">
              <span>0</span>
              <span>/7</span>
              <p>已满</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>


</template>
<script>
  import ElCarouselItem from "../../node_modules/element-ui/packages/carousel/src/item.vue";

  export default {
    components: {ElCarouselItem},
    name:'home',
    data(){
      return {
        items:[
          {img:""},
          {img:""},
          {img:""}
        ]
      }
    }
  }
</script>
<style scoped>
  .home>ul,.home>li{
    list-style: none;
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  .el-carousel__item h3 {
    display: inline-block;
    width: 100%;
    height: 1.8rem;
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    /*border:0.01rem solid red;*/
  }
  .el-carousel__item {
    display: inline-block;
    height: 1.8rem;
  }
  .el-carousel__container {
    height: 1.8rem;

  }
  .el-carousel__item:nth-child(2n) {
    background:url("../assets/b1.jpg");
    background-size: cover;
  }

  .el-carousel__item:nth-child(2n+1) {
    background:url("../assets/b2.jpg");
    background-size: cover;
  }
  .el-carousel__item:nth-child(3n) {
    background:url("../assets/b3.jpg");
    background-size: cover;
  }
  p{
    display: inline-block;
    color:#fff;
    font-size: 0.18rem;
    font-weight: bold;

  }
  .top{
    position: relative;
  }
  .hello{
    display: inline-block;
    width: 1rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: left;
    /*border:0.01rem solid red;*/
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .scl{
    position: absolute;
    top: 0;
    right:0.05rem;
    z-index: 9999;
  }
  .content{
    width: 100%;
    margin: 0.5rem auto;
    /*height:1rem;*/
    /*border:0.01rem solid red;*/
    color:#fff;
    position: absolute;
    top: 0.2rem;
    z-index: 9999;
    font-size: 0.18rem;
  }
  .content .title{
    /*border:0.01rem solid red;*/
  }
    .content .title .leftLine{
      display: inline-block;
      width: 10%;
      height: 0.01rem;
      background-color: #fff;
      border:0.01rem solid #fff;
      vertical-align:middle;
    }
  .content .title .rightLine{
    display: inline-block;
    width: 10%;
    height: 0.01rem;
    background-color: #fff;
    border:0.01rem solid #fff;
    vertical-align:middle;
  }
.content ul{
/*border:0.01rem solid red;*/
  width: 100%;
  margin-left: -0.2rem;
}
  .content ul li{
    display: inline-block;
    width: 30%;
    font-size: 0.12rem;
    /*border:0.01rem solid blue;*/
    margin-left: -0.06rem;
    border-left:0.01rem solid #fff;

  }
      .content ul  .goout{
        border:none;
      }
.clickFree{
  display: block;
  font-size: 0.15rem;
}
  ul.el-carousel__indicators {
    display: none;
  }
  ul.contentItem {
    width: 100%;
    height: 1.5rem;
    /*border: 0.01rem solid red;*/
    border-bottom:0.01rem solid #999;
  }
      ul.contentItem li{
        width: 100%;
        height: 0.7rem;
        /*border:0.01rem solid blue;*/
        /*text-align: left;*/
      }
      ul.contentItem li div{
        display: inline-block;
        width: 24%;
        height: 0.7rem;
        /*border:0.01rem solid green;*/
        font-size: 0.12rem;
        /*text-align: center;*/
      }
      ul.contentItem li div img{
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 auto;
        margin-top: 0.1rem;
        /*border:0.01rem solid blue;*/
      }
.proceed{
  width: 100%;
  background:#f8f8f8;
}
.proceed .zuowei{
  display: block;
  width: 30%;
  height: 0.3rem;
  line-height: 0.3rem;
  border-top:0.01rem solid red;
  border-left:0.01rem solid red;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
 /*border:0.01rem solid red;*/
  /*background-color: #fff;*/

}



</style>

















