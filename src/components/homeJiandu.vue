<template>
  <div class="jiandu">
    <div class="top">
      <span class="el-icon-arrow-left" @click="gohome"> 返回</span>
      <h3>监督占位</h3>
      <i class="el-icon-more" @click="share"></i>
    </div>
    <img src="../assets/zahnwei .jpg" alt="">
    <!--输入框-->
    <el-form ref="form" :model="sizeForm"  size="mini">
      <el-form-item>
        <el-select v-model="sizeForm.region" placeholder="2楼206综合图书馆">
          <el-option label="201-2医学图书馆" value="1"></el-option>
          <el-option label="409工具书阅览室" value="2"></el-option>
          <el-option label="2楼206综合图书馆" value="3"></el-option>
          <el-option label="中文非医现刊阅览室" value="4"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <input type="text" placeholder="座位号">
  <p>监督占位将有效减少图书馆站位现象，提高座位使用效率。感谢您做出的贡献，维护图书馆秩序，您将获得额外积分。</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
     share:function(){

     },
     gohome:function(){
         this.$router.goBack();
     }
  }
};
</script>
  <style scoped>
  .top {
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: #000;
    color: #fff;
  }
    .top h3{
      display: inline-block;
      font-size: 0.18rem;
      margin: 0;
      padding: 0;
      width: 40%;
      margin: 0 auto;
     text-align: left;
      height: 0.5rem;
      line-height: 0.5rem;
      /*border:0.01rem solid #fff;*/

    }
    .top span{
      float: left;
      margin-left: 0;
      font-size: 0.16rem;
      height: 0.5rem;
      line-height: 0.5rem;
    }
  .jiandu{
    background-color: #dee6f2;
    height: 100%;
    width: 100%;
    margin-top: -0.4rem;
  }

.jiandu img{
  display: inline-block;
  width: 20%;
  height: 10%;
  margin-top: 0.2rem;
  background-color: #dee6f2;
}
.el-form{
  border:0.01rem solid red;
  position: relative;
}
  .jiandu div.el-form-item__content {
    position: absolute;
    left: -50px;
    top: 0.2rem;
    border:0.01rem solid green;
  }
  .el-input.el-input--mini.el-input--suffix {
    border: 1px solid red;
  }
    .jiandu p{
      color:#6d91c4;
      width: 80%;
      margin-left: 0.2rem;
      margin-top: 0.2rem;
      text-align: left;
    }




</style>
