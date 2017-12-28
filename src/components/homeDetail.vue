<template>
  <div class="homeDetail">

    <h3 ><span  onclick="window.history.go(-1)"> 返回 </span>请选择座位</h3>
    <div class="header">
      <div class="headerContent">
        <img src="../../static/img/enterLeave.png" alt="">
        <br>
        <span>出入口</span>
      </div>
        <div class="headerContent">
          <img src="static/img/one.png" alt="">
          <br>
          <span>有人</span>
        </div>
        <div class="headerContent">
          <img src="static/img/choose.png" alt="">
          <br>
          <span>请选择</span>
        </div>
        <div class="headerContent">
          <img src="static/img/none.png" alt="">
          <br>
          <span>空闲</span>
        </div>

    </div>
    <div class="detailBox">
      <div class="detailBlock"></div>
      <div class="detailBlock"></div>
      <div class="detailBlock"></div>
      <div class="detailBlock"></div>
      <div class="detailBlock"></div>
      <div class="detailBlock"></div>

    </div>
    </div>


</template>
<script></script>
<style>


  .homeDetail>h3{
    margin: 0;
    padding: 0;
    background-color: dimgray;
    /*margin-left: .2rem;*/
    text-indent: .2rem;
    text-align: center;
    position: relative;
    height: .5rem;
    line-height: .5rem;
    color: white;
  }
  .homeDetail>h3>span{
    position: absolute;
    left: 0;
    font-size: .15rem;
    line-height: .5rem;
  }
  .header{
    height: 1rem;
    background-color: lightgray;
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items:center;/*指定垂直居中*/
  }
  .detailBlock{
     width: .16rem;
    height: .16rem;
    display: inline-block;
    background-image: url("../../static/img/出入口.png") ;
  }
  .headerContent{
    display: inline-block;
    width: .5rem;
   margin: auto;
  }
  .headerContent>img{
    width: .3rem;
  }
</style>
