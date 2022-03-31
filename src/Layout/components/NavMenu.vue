<template>
   <el-aside width="200px">
        <!-- 需要添加router  才能进行跳转 -->
        <el-menu
          router
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 没有子级的 -->
          <el-menu-item index="/index">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-menu-item index="/loan-input">
            <i class="el-icon-setting"></i>
            <span slot="title">贷款申请</span>
          </el-menu-item>

          <el-menu-item index="/input-manager">
            <i class="el-icon-setting"></i>
            <span slot="title">申请管理</span>
          </el-menu-item>
          
          <!-- 有子级的 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              贷款审批
            </template>
            <el-menu-item index="/loan-approve/first">初审</el-menu-item>
            <el-menu-item index="/loan-approve/end">终审</el-menu-item>
          </el-submenu>

          <!-- 没有子级 -->
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
</template>

<script>
export default {

}
</script>

<style>

</style>