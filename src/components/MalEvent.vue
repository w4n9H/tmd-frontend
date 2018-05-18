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
          <el-date-picker v-model="time_start_end" type="datetimerange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="源IP">
          <el-input v-model="formData.user" placeholder="源IP"></el-input>
        </el-form-item>
        <el-form-item label="源端口">
          <el-input v-model="formData.user" placeholder="源端口"></el-input>
        </el-form-item>
        <el-form-item label="目的IP">
          <el-input v-model="formData.user" placeholder="目的IP"></el-input>
        </el-form-item>
        <el-form-item label="目的端口">
          <el-input v-model="formData.user" placeholder="目的端口"></el-input>
        </el-form-item>
        <el-form-item label="协议类型">
          <el-input v-model="formData.user" placeholder="协议类型"></el-input>
        </el-form-item>
        <el-form-item label="规则类型">
          <el-input v-model="formData.user" placeholder="规则类型"></el-input>
        </el-form-item>
        <el-form-item label="恶意类型">
          <el-input v-model="formData.user" placeholder="恶意类型"></el-input>
        </el-form-item>
        <el-form-item label="恶意等级">
          <el-input v-model="formData.user" placeholder="恶意等级"></el-input>
        </el-form-item>
        <el-form-item label="恶意内容">
          <el-input v-model="formData.user" placeholder="恶意内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="mal_table">
      <el-table :data="mal_data" border size="mini">
        <el-table-column fixed prop="time" label="时间" min-width="15%"></el-table-column>
        <el-table-column prop="src_ip" label="源IP" min-width="10%"></el-table-column>
        <el-table-column prop="sport" label="源端口" min-width="5%"></el-table-column>
        <el-table-column prop="dst_ip" label="目的IP" min-width="10%"></el-table-column>
        <el-table-column prop="dport" label="目的端口" min-width="5%"></el-table-column>
        <el-table-column prop="dport" label="协议类型" min-width="5%"></el-table-column>
        <el-table-column prop="ttl" label="规则类型" min-width="5%"></el-table-column>
        <el-table-column prop="len" label="恶意类型" min-width="5%"></el-table-column>
        <el-table-column prop="src_ip" label="恶意等级" min-width="5%"></el-table-column>
        <el-table-column prop="sport" label="恶意内容" min-width="15%"></el-table-column>
        <el-table-column prop="dst_ip" label="恶意描述" min-width="20%"></el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MalEvent',
  data () {
    return {
      formData: {
        user: '',
        region: ''
      },
      time_start_end: [],
      mal_data: []
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
