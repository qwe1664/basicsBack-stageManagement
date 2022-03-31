<template>
  <div>
    <el-input  class="biaoge" v-model="qwe" style="width:150px;margin-right:10px" placeholder="请输入姓名"></el-input>
   <el-button type="primary" icon="el-icon-search">搜索  </el-button>
 

     <el-table :data="list">
      <el-table-column label="姓名" prop="address1"></el-table-column>
      <el-table-column label="身份证" prop="identity_card"></el-table-column>
      <el-table-column label="操作">
        <template v-slot={row}>
          <el-button type="primary" size="small" @click="chakanww(row)">查看</el-button>
          <el-button type="success" size="small" @click="tongguo(row)">通过</el-button>
          <el-button type="danger" size="small">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>


        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pageNo"
      :page-sizes="[1, 3, 5, 10]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
 
  </div>
</template>

<script>
import {zongshenc} from '@/api/api'
export default {
  data () {
    return {
      qwe:'',
      list:[],
       page:{
        pageNo:1,
        pageSize:10,
        name:null
      },
    }
  },
  created(){
    this.zongshenc()
  },
  methods: {
    
    zongshenc(){
     zongshenc(this.page).then(res =>{
       console.log(res);
     })
    
    },


      tongguo(row){},

      chakanww(row){

      },

    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>

<style>
</style>