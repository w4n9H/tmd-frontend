<template>
  <div class="pageinfo">
    <div class="mal_title">
      <el-breadcrumb>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>恶意事件</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="mal_search">
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
        <el-form-item label="协议类型">
          <el-input v-model="formData.proto" placeholder="协议类型"></el-input>
        </el-form-item>
        <el-form-item label="规则类型">
          <el-input v-model="formData.rule_type" placeholder="规则类型"></el-input>
        </el-form-item>
        <el-form-item label="恶意类型">
          <el-input v-model="formData.mal_type" placeholder="恶意类型"></el-input>
        </el-form-item>
        <el-form-item label="恶意等级">
          <el-input v-model="formData.mal_level" placeholder="恶意等级"></el-input>
        </el-form-item>
        <el-form-item label="恶意内容">
          <el-input v-model="formData.mal_info" placeholder="恶意内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="mal_table" v-show="malData.length >= 0">
      <el-table :data="malNewData" v-loading="tableLoading" border size="mini">
        <el-table-column fixed prop="ts" label="时间" min-width="15%"></el-table-column>
        <el-table-column prop="src_ip" label="源IP" min-width="10%"></el-table-column>
        <el-table-column prop="sport" label="源端口" min-width="5%"></el-table-column>
        <el-table-column prop="dst_ip" label="目的IP" min-width="10%"></el-table-column>
        <el-table-column prop="dport" label="目的端口" min-width="5%"></el-table-column>
        <el-table-column prop="service" label="协议类型" min-width="5%"></el-table-column>
        <el-table-column prop="rule_type" label="规则类型" min-width="5%"></el-table-column>
        <el-table-column prop="mal_type" label="恶意类型" min-width="5%"></el-table-column>
        <el-table-column prop="mal_level" label="恶意等级" min-width="5%"></el-table-column>
        <el-table-column prop="mal_info" label="恶意内容" min-width="15%" show-overflow-tooltip></el-table-column>
        <el-table-column prop="mal_description" label="恶意描述" min-width="20%" show-overflow-tooltip></el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background layout="sizes, prev, pager, next"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="pageSize"
                       :total="malData.length"
                       :page-size="pageLimit"
                       prev-text="上页"
                       next-text="下页"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {URLs} from '../config/urls'

export default {
  name: 'MalEvent',
  data () {
    return {
      formData: {
        time: [],
        src_ip: '',
        sport: '',
        dst_ip: '',
        dport: '',
        proto: '',
        rule_type: '',
        mal_type: '',
        mal_level: '',
        mal_info: ''
      },
      malData: [],
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
    malNewData () {
      return this.malData.slice(this.start, this.end)
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
        'limit': this.pageDataTotal
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
      this.ReqData(URLs.malTraffic, data)
    },
    fetchData () {
      const data = {
        'page': this.pageSize,
        'limit': this.pageDataTotal
      }
      this.ReqData(URLs.malTraffic, data)
    },
    ReqData (url, data) {
      this.tableLoading = true
      this.$get(url, data)
        .then(
          (response) => {
            if (response.status === 0) {
              this.malData = response.tmd
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
.mal_title {
  padding: 10px 10px;
}
.el-breadcrumb {
  font-size: 16px;
}
.mal_search {
  padding: 10px 10px;
}
.mal_table {
  padding: 10px 10px;
  width: 100%;
  height: 100%;
}
.pagination {
  text-align: right;
  padding: 20px 10px;
}
</style>
