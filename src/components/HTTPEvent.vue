<template>
  <div>
    <div class="http_title">
      <el-breadcrumb>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>上网行为</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="http_search">
      <el-form :inline="true" :model="formInline">
        <el-form-item label="时间">
          <el-date-picker v-model="time_start_end" type="datetimerange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="源IP">
          <el-input v-model="formInline.user" placeholder="源IP"></el-input>
        </el-form-item>
        <el-form-item label="源端口">
          <el-input v-model="formInline.user" placeholder="源端口"></el-input>
        </el-form-item>
        <el-form-item label="目的IP">
          <el-input v-model="formInline.user" placeholder="目的IP"></el-input>
        </el-form-item>
        <el-form-item label="目的端口">
          <el-input v-model="formInline.user" placeholder="目的端口"></el-input>
        </el-form-item>
        <el-form-item label="请求方式">
          <el-input v-model="formInline.user" placeholder="请求方式"></el-input>
        </el-form-item>
        <el-form-item label="域名">
          <el-input v-model="formInline.user" placeholder="域名"></el-input>
        </el-form-item>
        <el-form-item label="设备">
          <el-input v-model="formInline.user" placeholder="设备"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="http_table">
      <el-table :data="http_data" border style="width: 100%" height="250">
        <el-table-column fixed prop="time" label="时间" width="180"></el-table-column>
        <el-table-column prop="ttl" label="TTL" width="50"></el-table-column>
        <el-table-column prop="len" label="LEN" width="50"></el-table-column>
        <el-table-column prop="src_ip" label="源IP" width="150"></el-table-column>
        <el-table-column prop="sport" label="源端口" width="80"></el-table-column>
        <el-table-column prop="dst_ip" label="目的IP" width="150"></el-table-column>
        <el-table-column prop="dport" label="目的端口" width="80"></el-table-column>
        <el-table-column prop="method" label="请求方式" width="100"></el-table-column>
        <el-table-column prop="host" label="请求HOST" width="100"></el-table-column>
        <el-table-column prop="domain" label="域名" width="100"></el-table-column>
        <el-table-column prop="uri" label="请求URI" width="100"></el-table-column>
        <el-table-column prop="device" label="设备型号" width="100"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HTTPEvent',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      time_start_end: [],
      http_data: [{
        time: '2016-05-02 10:23:59',
        ttl: 64,
        len: 456,
        src_ip: '192.168.0.1',
        sport: 65120,
        dst_ip: '192.168.55.180',
        dport: 80,
        method: 'POST',
        host: 'fanyi.baidu.com',
        domain: 'baidu.com',
        uri: '#en/zh/test',
        device: 'iOS 10'
      }]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>
