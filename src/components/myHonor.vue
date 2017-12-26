<template>
  <div class="text-left myhonor">

    <h3 ><span  onclick="window.history.go(-1)"><返回</span>我的勋章</h3>
    <div class="xunzhang" v-for="x,index in xunzhangs" >
      <img  :src="x.src" alt=""  @click="clickActive(index)">
      <span >{{x.content}}</span>
    </div>

    <el-dialog
      :visible.sync="centerDialogVisible"
      width="70%"
      center>
      <span>您已经满足在线两小时，点击激活勋章</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="clickActives()">确 定</el-button>
  </span>
    </el-dialog>




  </div>


</template>
<script>
  export default {
    name: 'myHonor',
    data () {
      return {
        centerDialogVisible: false,
        // active:index,
        xunzhangs:[
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          {src:'static/img/xunzhangcolor.png',content:'新手入坑'},
          ],
        count:''

      }
    },
    methods:{
      clickEnter:function () {

        // console.log("11111");
        this.$router.push({path:'/myHonor'})
      },
      clickActives:function () {
        console.log(this.count);
        console.log( this.xunzhangs[0])
        this.centerDialogVisible=false;
        this.xunzhangs[this.count].src='static/img/xunzhangDetail.png'
      },
      clickActive:function (index) {
        // console.log(index,x);
        // x.src='static/img/xunzhangDetail.png'
        // centerDialogVisible=false;

           this.count = index;
        console.log(this.count);
        this.centerDialogVisible=true;







      }
    }
  }
</script>
<style >
  .myhonor>h3{
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
  .myhonor>h3>span{
     position: absolute;
    left: 0;
    font-size: .15rem;
    line-height: .5rem;
  }
   .xunzhang{
     width: 25%;
     display: inline-block;
   text-align: center;
   }
  .xunzhang>img{
    width: 100%;
  }
</style>
