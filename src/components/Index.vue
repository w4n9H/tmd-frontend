<template>
  <div class="pageinfo">
    <div class="index_title">
      <el-breadcrumb>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>总览</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="index_body">
      <div class="tmd">
        <p>去他的首页,研究了几天echarts,怎么摆怎么不好看,首页先做项目介绍吧</p>
      </div>
      <div class="process"> <!-- 流程 -->
        <p class="title">TMD整体流程</p>
        <el-steps :active="active" align-center finish-status="success">
          <el-step title="流量捕获" description="轻量级的流量捕获组件"></el-step>
          <el-step title="流量检测" description="支持规则检测以及机器学习模型检测"></el-step>
          <el-step title="数据存储" description="由Sqlite升级至Mariadb,优化之后支持更大的数据量和不同维度的聚合查询"></el-step>
          <el-step title="数据展示" description="前后端分离,采用了Python+Vue的前后端组合"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </div>
      <div class="folding_panel"> <!-- 折叠面板 -->
        <p class="title">TMD相关特点</p>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="轻量级 Lightweight" name="1">
            <div>所有的组件均遵循轻量化和模块化的思想, 部署快速简单。</div>
            <div>而且整套系统对配置要求极低，可以部署在树莓派，笔记本，云主机等等。</div>
          </el-collapse-item>
          <el-collapse-item title="跨平台 CrossPlatform" name="2">
            <div>整套系统使用的组件均支持Windows和Linux</div>
            <div>所以TMD既可以部署在Linux上也可以部署在Windows上。</div>
          </el-collapse-item>
          <el-collapse-item title="检测能力 Detection" name="3">
            <div>内置了规则检测模块以及机器学习检测模块</div>
            <div>规则检测模块暂时支持Ip,域名以及对应的自定义规则检测,机器学习模型内置了恶意URL行为检测模型</div>
            <div>下一步还会增加暴恐关键词检测以及泄露检测等模块</div>
          </el-collapse-item>
          <el-collapse-item title="灵活性 Flexibility" name="4">
            <div>扩展方便:整体架构灵活,规则可扩展,机器学习模型可扩展</div>
            <div>应用场景多变:经过少量调整之后可以改装为流量检测设备,IDS,蜜罐设备等等</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      activeName: 0,
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 16px;
  padding: 20px 20px;
}
.tmd {
  font-size: 14px;
  text-align: center;
  padding: 10px 10px;
}
.process {
  font-size: 14px;
  text-align: center;
  padding: 20px 20px;
}
.folding_panel {
  text-align: center;
  padding-top: 20px;
  width: 70%;
  padding-left: 15%;
}
</style>
