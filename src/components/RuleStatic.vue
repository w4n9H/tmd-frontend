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
          <el-input v-model="formData.user" placeholder="规则类型"></el-input>
        </el-form-item>
        <el-form-item label="恶意等级">
          <el-input v-model="formData.user" placeholder="恶意等级"></el-input>
        </el-form-item>
        <el-form-item label="恶意类型">
          <el-input v-model="formData.user" placeholder="恶意类型"></el-input>
        </el-form-item>
        <el-form-item label="恶意内容">
          <el-input v-model="formData.user" placeholder="恶意内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="static_rule_table">
      <el-table :data="static_rule_data" border size="mini">
        <el-table-column fixed prop="time" label="规则类型" min-width="20%"></el-table-column>
        <el-table-column prop="ttl" label="恶意等级" min-width="20%"></el-table-column>
        <el-table-column prop="len" label="恶意类型" min-width="20%"></el-table-column>
        <el-table-column prop="src_ip" label="恶意内容" min-width="20%"></el-table-column>
        <el-table-column prop="sport" label="恶意描述" min-width="20%"></el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RuleStatic',
  data () {
    return {
      formData: {
        user: '',
        region: ''
      },
      static_rule_data: []
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
