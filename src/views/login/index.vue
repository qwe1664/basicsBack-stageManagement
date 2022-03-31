<template>
  <div class="about">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="姓名" prop="account">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="isBtn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '@/api/api'
import {setToken} from '@/utils/setToken'
export default {
  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在3 到5个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在6 到15字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    isBtn() {
      this.$refs.ruleForm.validate((isOk)=>{
        if(isOk){
          login(this.ruleForm).then(res =>{
            console.log(res);
            let {code,data} = res.data
            if(code === 20000){
              let {token} = data
              setToken(token) // 保存token的值
              this.$router.push("/home");
            }else{
              // alert('用户名或密码错误')
              this.$message('用户名或密码错误');
            }
          })
        }else{
          alert(2)
          return false
        }
      })
    },
  },
};
</script>

<style>
</style>