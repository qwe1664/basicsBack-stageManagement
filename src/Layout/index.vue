<template>
  <div class="about">
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu/>
      <!-- 右侧导航 -->
      <el-container> 
        <!-- 上部分 -->
       <el-header>
         <Top/>
        </el-header>
          
        <!-- 主体部分 -->
        <el-main>
          <Main/>
        </el-main>
      
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import NavMenu from './components/NavMenu.vue'
// import Main from './components/Main.vue'
// import Top from './components/Top.vue'
import{NavMenu,Main,Top} from './components'
export default {
  data() {
    return {};  
  },
  components:{
    NavMenu,Main,Top
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss">
.about{
  height: 100% !important;
  // background-color: pink;
}

/deep/ .NavMenu{
  height: 100% !important;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center;
  line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>