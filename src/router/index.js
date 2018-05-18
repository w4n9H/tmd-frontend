import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Index from '@/components/Index'
import HTTPEvent from '@/components/HTTPEvent'
import DNSEvent from '@/components/DNSEvent'
import MalEvent from '@/components/MalEvent'
import RuleStatic from '@/components/RuleStatic'
import RuleCustom from '@/components/RuleCustom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: Index,
          name: '首页'
        },
        {
          path: '/http_event',
          component: HTTPEvent,
          name: '上网行为'
        },
        {
          path: '/dns_event',
          component: DNSEvent,
          name: '域名解析'
        },
        {
          path: '/mal_event',
          component: MalEvent,
          name: '恶意事件'
        },
        {
          path: '/rule_static',
          component: RuleStatic,
          name: '静态规则'
        },
        {
          path: '/rule_custom',
          component: RuleCustom,
          name: '自定义规则'
        }
      ]
    }
  ]
})
