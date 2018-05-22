<template>
  <div class="pageinfo">
    <div class="http_title">
      <el-breadcrumb>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>上网行为</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="http_search">
      <el-form :inline="true" :model="formData">
        <el-form-item label="时间">
          <el-date-picker v-model="formData.time" type="datetimerange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="源IP">
          <el-input v-model="formData.src_ip" placeholder="源IP"></el-input>
        </el-form-item>
        <el-form-item label="源端口">
          <el-input v-model="formData.sport" placeholder="源端口"></el-input>
        </el-form-item>
        <el-form-item label="目的IP">
          <el-input v-model="formData.dst_ip" placeholder="目的IP"></el-input>
        </el-form-item>
        <el-form-item label="目的端口">
          <el-input v-model="formData.dport" placeholder="目的端口"></el-input>
        </el-form-item>
        <el-form-item label="请求方式">
          <el-input v-model="formData.method" placeholder="请求方式"></el-input>
        </el-form-item>
        <el-form-item label="域名">
          <el-input v-model="formData.domain" placeholder="域名"></el-input>
        </el-form-item>
        <el-form-item label="设备">
          <el-input v-model="formData.device" placeholder="设备"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="http_table">
      <el-table :data="httpNewData" v-loading="tableLoading" border size="mini">
        <el-table-column fixed prop="ts" label="时间" min-width="15%"></el-table-column>
        <el-table-column prop="ttl" label="TTL" min-width="5%"></el-table-column>
        <el-table-column prop="len" label="LEN" min-width="5%"></el-table-column>
        <el-table-column prop="src_ip" label="源IP" min-width="10%"></el-table-column>
        <el-table-column prop="sport" label="源端口" min-width="5%"></el-table-column>
        <el-table-column prop="dst_ip" label="目的IP" min-width="10%"></el-table-column>
        <el-table-column prop="dport" label="目的端口" min-width="5%"></el-table-column>
        <el-table-column prop="method" label="请求方式" min-width="5%"></el-table-column>
        <el-table-column prop="host" label="请求HOST" min-width="10%" show-overflow-tooltip></el-table-column>
        <el-table-column prop="domain" label="域名" min-width="10%" show-overflow-tooltip></el-table-column>
        <el-table-column prop="uri" label="请求URI" min-width="10%" show-overflow-tooltip></el-table-column>
        <el-table-column prop="device" label="设备型号" min-width="10%" show-overflow-tooltip></el-table-column>
      </el-table>
      <div class="pagination" v-show="httpData.length >= 0">
        <el-pagination background layout="sizes, prev, pager, next"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="pageSize"
                       :total="httpData.length"
                       :page-size="pageLimit"
                       prev-text="上页"
                       next-text="下页">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {URLs} from '../config/urls'

export default {
  name: 'HTTPEvent',
  data () {
    return {
      formData: {
        time: [],
        src_ip: '',
        sport: '',
        dst_ip: '',
        dport: '',
        method: '',
        domain: '',
        device: ''
      },
      httpData: [],
      tableLoading: false,
      pageSize: 1,
      pageLimit: 10,
      pageDataTotal: 50
    }
  },
  created () { // 生命周期,页面加载是调用 fetchData 函数
    this.fetchData()
  },
  computed: {
    httpNewData () {
      return this.httpData.slice(this.start, this.end)
    },
    start () {
      return (this.pageSize - 1) * this.pageLimit
    },
    end () {
      return this.pageSize * this.pageLimit
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pageLimit = val
      this.pageSize = 1
    },
    handleCurrentChange (val) {
      this.pageSize = val
    },
    onSubmit () {
      const data = {
        'page': this.pageSize,
        'limit': this.pageDataTotal,
        'service': 'http'
      }
      for (let [k, v] of Object.entries(this.formData)) {
        if (v.length > 0) {
          if (Array.isArray(v) && v.length === 2) {
            data['begin'] = v[0]
            data['end'] = v[1]
          } else {
            data[k] = v
          }
        }
      }
      this.ReqData(URLs.normalTraffic, data)
    },
    fetchData () {
      const data = {
        'page': this.pageSize,
        'limit': this.pageDataTotal,
        'service': 'http'
      }
      this.ReqData(URLs.normalTraffic, data)
    },
    ReqData (url, data) {
      this.tableLoading = true
      this.$get(url, data)
        .then(
          (response) => {
            if (response.status === 0) {
              this.httpData = response.tmd
            }
            this.tableLoading = false
          }
        )
        .catch(
          err => {
            this.tableLoading = false
            console.log(err)
          }
        )
    }
  }
}
</script>

<style scoped>
.pageinfo {
  min-height: calc(100vh - 180px);
}
.http_title {
  padding: 10px 10px;
}
.el-breadcrumb {
  font-size: 16px;
}
.http_search {
  padding: 10px 10px;
}
.http_table {
  padding: 10px 10px;
  width: 100%;
  height: 100%;
}
.pagination {
  text-align: right;
  padding: 20px 10px;
}
</style>
