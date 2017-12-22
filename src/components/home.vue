<template>
  <el-carousel>
    <el-carousel-item v-for="(item,index) in items" :key="index">
      <h3>{{ item.img }}</h3>
    </el-carousel-item>
    <el-carousel-item class="name">
      <h4>1234</h4>
    </el-carousel-item>

  </el-carousel>
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
<style>
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

  /*.name h4{*/
    /*margin: 0;*/
    /*background-color: red;*/
    /*position: absolute;*/
  /*}*/
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
</style>

















