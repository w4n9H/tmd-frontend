<template>
  <div>
    <el-container>
      <el-header style="text-align: center">
        <div style="font-size: 28px; color: #000">{{ tmd_title }}</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="activeIndex" background-color="#000"
                   text-color="#fff" active-text-color="#5eb2eb" router>
            <el-menu-item index="index">首页</el-menu-item>
            <el-menu-item index="http_event">上网行为</el-menu-item>
            <el-menu-item index="dns_event">域名解析</el-menu-item>
            <el-menu-item index="mal_event">恶意事件</el-menu-item>
            <el-menu-item index="mal_behavior">恶意行为</el-menu-item>
            <el-menu-item index="rule_static">静态规则</el-menu-item>
            <el-menu-item index="rule_custom">自定义规则</el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>
            <p style="text-align: center; font-size: 14px">此项目由个人维护并提供技术支持: w4n9ya@gmail.com</p>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Layout.vue',
  data () {
    return {
      tmd_title: 'TMD流量检测系统'
    }
  }
}
</script>

<style type="text/css">

</style>
