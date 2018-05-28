<template>
  <div class="layout">
    <el-container>
      <el-header>
        <div class="title-wrapper">
          <div class="logo">
              <img :src="logo">
          </div>
          <div>
            <span>{{ tmd_title }}</span>
          </div>
          <div class="logout_button">
            <el-button type="info"
                       @click="onSubmit"
                       size="mini">登出
            </el-button>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="160px">
          <el-menu :default-active="active_index" text-color="#fff" active-text-color="#5eb2eb" router>
            <el-menu-item index="index">首页</el-menu-item>
            <el-menu-item index="http_event">上网行为</el-menu-item>
            <el-menu-item index="dns_event">域名解析</el-menu-item>
            <el-menu-item index="mal_event">恶意事件</el-menu-item>
            <el-menu-item index="rule_static">静态规则库</el-menu-item>
            <el-menu-item index="rule_custom">自定义规则</el-menu-item>
            <el-menu-item index="about">关于TMD</el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>
            <p>此项目由个人维护并提供技术支持: w4n9ya@gmail.com</p>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import logo from '../image/logo.png'
import {URLs} from '../config/urls'

export default {
  name: 'Layout',
  data () {
    return {
      logo: logo,
      tmd_title: 'TMD流量检测系统 v1.0',
      active_index: ''
    }
  },
  methods: {
    onSubmit () {
      this.$get(URLs.Logout)
        .then(
          (response) => {
            if (response.status === 0) {
              let sessionId = localStorage.getItem('session_id')
              if (sessionId) {
                localStorage.removeItem('session_id')
              }
              let userName = localStorage.getItem('username')
              if (userName) {
                localStorage.removeItem('username')
              }
              this.$router.push('/')
            }
          }
        )
        .catch(
          err => {
            console.log(err)
          }
        )
    }
  }
}
</script>

<style scoped>
.layout{
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-header {
  background: #555555;
}
.title-wrapper{
  color: white;
  display: flex;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  font-weight: 700;
  vertical-align: middle;
}
.logo {
  flex: 0 0 40px;
}
.logout_button {
  padding-left: 80%;
}
img {
  margin-top: 15px;
  width: 30px;
}
.el-menu {
  height: 100%;
  background: #555555;
}
.el-menu-item {
  color: white;
  font-size: 14px;
  line-height: 60px;
  font-weight: 600;
  display: flex;
  vertical-align: middle;
}
.el-footer {
  color: #929292;
  background: #fff;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
}
</style>
