import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Index from '@/components/Index'
import HTTPEvent from '@/components/HTTPEvent'
import DNSEvent from '@/components/DNSEvent'
import MalEvent from '@/components/MalEvent'
import RuleStatic from '@/components/RuleStatic'
import RuleCustom from '@/components/RuleCustom'
import About from '@/components/About'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
      meta: {
        name: '登录',
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: Index,
          meta: {
            name: '首页',
            requireAuth: true
          }
        },
        {
          path: '/http_event',
          component: HTTPEvent,
          meta: {
            name: '上网行为',
            requireAuth: true
          }
        },
        {
          path: '/dns_event',
          component: DNSEvent,
          meta: {
            name: '域名解析',
            requireAuth: true
          }
        },
        {
          path: '/mal_event',
          component: MalEvent,
          meta: {
            name: '恶意事件',
            requireAuth: true
          }
        },
        {
          path: '/rule_static',
          component: RuleStatic,
          meta: {
            name: '静态规则',
            requireAuth: true
          }
        },
        {
          path: '/rule_custom',
          component: RuleCustom,
          meta: {
            name: '自定义规则',
            requireAuth: true
          }
        },
        {
          path: '/about',
          component: About,
          meta: {
            name: '关于TMD',
            requireAuth: true
          }
        }
      ]
    }
  ]
})
