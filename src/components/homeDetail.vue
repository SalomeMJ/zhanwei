<template>
  <div class="homeDetail">

    <h3 ><span  onclick="window.history.go(-1)"> 返回 </span>请选择座位</h3>
    <div class="header">
      <div>
        <img src="" alt="">
        <span>出入口</span>
      </div>
      <div></div>
      <div></div>
      <div></div>
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
  .detailBlock{

  }
</style>
