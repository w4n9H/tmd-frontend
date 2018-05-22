<template>
  <div class="pageinfo">
    <div class="static_rule_title">
      <el-breadcrumb>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>静态规则</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="static_rule_search">
      <el-form :inline="true" :model="formData">
        <el-form-item label="规则类型">
          <el-input v-model="formData.rule_type" placeholder="规则类型"></el-input>
        </el-form-item>
        <el-form-item label="恶意等级">
          <el-input v-model="formData.mal_level" placeholder="恶意等级"></el-input>
        </el-form-item>
        <el-form-item label="恶意类型">
          <el-input v-model="formData.mal_type" placeholder="恶意类型"></el-input>
        </el-form-item>
        <el-form-item label="恶意内容">
          <el-input v-model="formData.mal_info" placeholder="恶意内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="static_rule_table" v-show="staticRuleData.length >= 0">
      <el-table :data="staticNewRuleData" v-loading="tableLoading" border size="mini">
        <el-table-column fixed prop="rule_type" label="规则类型" min-width="20%"></el-table-column>
        <el-table-column prop="mal_level" label="恶意等级" min-width="20%"></el-table-column>
        <el-table-column prop="mal_type" label="恶意类型" min-width="20%"></el-table-column>
        <el-table-column prop="mal_info" label="恶意内容" min-width="20%"></el-table-column>
        <el-table-column prop="mal_description" label="恶意描述" min-width="20%"></el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background layout="sizes, prev, pager, next"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="pageSize"
                       :total="staticRuleData.length"
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
  name: 'RuleStatic',
  data () {
    return {
      formData: {
        rule_type: '',
        mal_type: '',
        mal_level: '',
        mal_info: ''
      },
      staticRuleData: [],
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
    staticNewRuleData () {
      return this.staticRuleData.slice(this.start, this.end)
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
      this.ReqData(URLs.staticRule, data)
    },
    fetchData () {
      const data = {
        'page': this.pageSize,
        'limit': this.pageDataTotal
      }
      this.ReqData(URLs.staticRule, data)
    },
    ReqData (url, data) {
      this.tableLoading = true
      this.$get(url, data)
        .then(
          (response) => {
            if (response.status === 0) {
              this.staticRuleData = response.tmd
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
.static_rule_title {
  padding: 10px 10px;
}
.el-breadcrumb {
  font-size: 16px;
}
.static_rule_search {
  padding: 10px 10px;
}
.static_rule_table {
  padding: 10px 10px;
  width: 100%;
  height: 100%;
}
.pagination {
  text-align: right;
  padding: 20px 10px;
}
</style>
