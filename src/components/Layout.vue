<template>
    <div>
        <el-container>
            <el-header>
                <div class="title-wrapper">
                    <div class="title">
                        <span>{{ tmd_title }}</span>
                    </div>
                </div>
            </el-header>
            <el-main>
                <el-menu :default-active="activeIndex" class="el-menu" background-color="#476795"
                text-color="#fff" active-text-color="#5eb2eb" mode="horizontal" router>
                    <el-menu-item index="index">首页</el-menu-item>
                    <el-menu-item index="http_event">上网行为</el-menu-item>
                    <el-menu-item index="dns_event">域名解析</el-menu-item>
                    <el-menu-item index="mal_event">恶意事件</el-menu-item>
                    <el-menu-item index="mal_behavior">恶意行为</el-menu-item>
                    <el-menu-item index="rule_static">静态规则</el-menu-item>
                    <el-menu-item index="rule_custom">自定义规则</el-menu-item>
                </el-menu>
                <router-view></router-view>
            </el-main>
            <el-footer>
                <p>此项目由个人维护并提供技术支持: w4n9ya@gmail.com</p>
            </el-footer>
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
