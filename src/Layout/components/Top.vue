<template>
   <div>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="v in list" :key="v.path">{{v.meta.title}}</el-breadcrumb-item>
            
          </el-breadcrumb>

          <el-dropdown>
            <span class="el-dropdown-link"
              >退出
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span @click="goBack()">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
</template>

<script>
import { logout} from '@/api/api'
import { removeToken } from '@/utils/setToken'
export default {
data () {
  return {
    list:[],
  }
},
watch:{
  $route(to,from){
    this.list = to.matched.filter(item=>item.meta && item.meta.title)
  }
},
mounted () {
    this.list = this.$route.matched.filter(item=>item.meta && item.meta.title)
},
methods: {
  goBack(){
    logout().then(res =>{
     let {code} = res.data
     removeToken()  // 删除token
     if(code === 20000){    
      this.$router.push('./login')
     }else{
       alert('error')
     }
    })
  }
}
}
</script>

<style>
.el-dropdown {
      float: right;
    }
</style>