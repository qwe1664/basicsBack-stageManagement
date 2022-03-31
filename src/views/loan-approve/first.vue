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
      :total="rows">
    </el-pagination>
  

    <el-dialog title="贷款审批-查看详情" :visible="chakan">
      <el-form align='center' :model="ruleForm">
        <el-form-item label-width="120px" label="ID" prop="id">
          <el-input style="width:80%" v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label-width="120px" label="姓名" prop="address1">
          <el-input style="width:80%" v-model="ruleForm.address1"></el-input>
        </el-form-item>
        <el-form-item label-width="120px" label="出生日期" prop="birthday">
          <el-input style="width:80%" v-model="ruleForm.birthday"></el-input>
        </el-form-item>
        <el-form-item label-width="120px" label="性别" prop="sex">
          <el-input style="width:80%" v-model="ruleForm.sex"></el-input>
        </el-form-item>
      </el-form>
      
      <div style="text-align:center">
        <el-button type="primary" @click="btnOK">确认</el-button>
      <el-button @click="btnqx">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {approve,loanchakan,approvefirst} from '@/api/api'
export default {
  data () {
    return {
      qwe:'',
      list:[],
      // currentPage4:1,
      page:{
        pageNo:1,
        pageSize:10,
        name:null
      },
      rows:null,
      chakan:false,
      ruleForm:{
        id:'',
        address1:'',
        birthday:'',
        sex:''
      },
    }
  },
  created(){
    this.approve()
  },
  methods: {

    approve(){
      approve(this.page).then(res=>{
        let ress = res.data.data
        if(ress.status === 200){
          let duix = ress.data.data
          this.list = duix
        // console.log(duix);
        // console.log(ress);
        this.rows = ress.rows
        }
       

        

      })
    },

   async chakanww(row){ 

          var {data}= await loanchakan(row.id)
          this.ruleForm = data.data.data[0]
        // console.log(this.ruleForm);
        // console.log(data.data.data);
      this.chakan = true
      // console.log(row);

    },

    btnOK(){

    },
    btnqx(){
      this.chakan = false
    },


   async tongguo(row){
     console.log(row);

    //  console.log(row.id,row.loan_id);
      let www =   await approvefirst({appId:row.income,loanId:row.id})
      console.log(www);
      //  console.log(var);
      this.approve()
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

<style scoped lang="scss">

</style>