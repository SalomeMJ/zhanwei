<template>
  <div class="myUser">
    <h3 ><span  onclick="window.history.go(-1)"> 返回 </span>我的勋章</h3>
    <el-table
      :data="tableData"
      说>
      <el-table-column
        prop="date"
        label="日期"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
<style>
  .myUser>h3{
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
  .myUser>h3>span{
    position: absolute;
    left: 0;
    font-size: .15rem;
    line-height: .5rem;
  }
</style>
