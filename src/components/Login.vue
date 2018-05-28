<template>
  <div class="login-wrap">
    <div class="ms-title">TMD流量检测系统 v1.0</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"
                    placeholder="密码"
                    v-model="ruleForm.password"
                    @keyup.enter.native="submitForm('ruleForm')">
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import {Message} from 'element-ui'
import {URLs} from '../config/urls'

export default {
  name: 'Login',
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      let sessionId = localStorage.getItem('session_id')
      if (sessionId) {
        localStorage.removeItem('session_id')
      }
    },
    submitForm (formName) {
      const self = this
      self.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    login () {
      var data = {
        username: this.ruleForm.username,
        password: this.ruleForm.password
      }
      this.$post(URLs.Login, data)
        .then((response) => {
          if (response.status === 0) {
            localStorage.setItem('session_id', response.data.session_id)
            localStorage.setItem('username', response.data.username)
            this.$router.push('layout')
          } else {
            Message.warning('用户名或密码不正确')
          }
        })
        .catch(err => {
          Message.warning('登陆失败' + err)
        })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  background-size: cover;
}
.ms-title{
  position: absolute;
  top:50%;
  width:100%;
  margin-top: -180px;
  text-align: center;
  font-size:30px;
  color: #666;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 160px;
  margin: -150px 0 0 -140px;
  padding: 40px;
  border-radius: 5px;
  background: transparent;
}
.login-btn {
  text-align: center;
  padding: 10px 10px;
}
button {
  width: 60%;
  height: 36px;
}
</style>
