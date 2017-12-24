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
            <li>留学总体规划</li>
            <li>院校学术要求</li>
            <li>留学准备建议</li>
          </ul>
          <span>点击免费领取</span>
        </div>
        <a href="https://www.baidu.com/">
          <el-carousel >
            <el-carousel-item v-for="(item,index) in items" :key="index">
              <h3>{{ item.img }}</h3>
            </el-carousel-item>
          </el-carousel>
        </a>

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
</style>

















