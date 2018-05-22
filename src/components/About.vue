<template>
  <div class="pageinfo">
    <div class="about">
      <el-breadcrumb>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>关于TMD</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.pageinfo {
  min-height: calc(100vh - 180px);
}
.about {
  padding: 10px 10px;
}
.el-breadcrumb {
  font-size: 16px;
}
</style>
