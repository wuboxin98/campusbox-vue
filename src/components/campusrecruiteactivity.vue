<template>
  <div class="mod-config">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="dataForm.key" placeholder="参数名" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
        <el-button type="primary" @click="addOrUpdateHandle()">新增</el-button>
        <el-button type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="dataList" border v-loading="dataListLoading" @selection-change="selectionChangeHandle"
      style="width: 100%;">
      <el-table-column type="selection" header-align="center" align="center" width="50">
      </el-table-column>
      <el-table-column prop="campusRecruiteactivityId" header-align="center" align="center" label="校招活动id">
      </el-table-column>
      <el-table-column prop="campusCompanyId" header-align="center" align="center" label="校招公司id">
      </el-table-column>
      <el-table-column prop="companyName" header-align="center" align="center" label="公司名">
      </el-table-column>
      <el-table-column prop="companyUrl" header-align="center" align="center" label="公司官网">
      </el-table-column>
      <el-table-column prop="schoolRecruitmentUrl" header-align="center" align="center" label="校招官网">
      </el-table-column>
      <el-table-column prop="publicizeDistributeUrl" header-align="center" align="center" label="宣发链接">
        <template slot="header" slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="比如公众号的宣传链接" placement="top">
            <span>{{ scope.column.label }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="companyLabel" header-align="center" align="center" label="公司标签">
        <template slot="header" slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="互联网、游戏、银行、国企、外企、芯片、新能源" placement="top">
            <span>{{ scope.column.label }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="jobTag" header-align="center" align="center" label="招聘岗位标签">
        <template slot="header" slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="JavaGoPythonC++、前端、后端、嵌入式" placement="top">
            <span>{{ scope.column.label }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="schoolRecruitmentType" header-align="center" align="center" label="校招活动类型">
        <template slot="header" slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="日常实习、暑期实习、秋招提前批、秋招、秋招补录、春招" placement="top">
            <span>{{ scope.column.label }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="remark" header-align="center" align="center" label="备注">
      </el-table-column>
      <el-table-column prop="schoolRecruitmentYear" header-align="center" align="center" label="校招年份">
        <template slot="header" slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="（可以有多个，有些公司招往年生源）：2020，2023" placement="top">
            <span>{{ scope.column.label }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="endDate" header-align="center" align="center" label="截至时间">
        <template slot="header" slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="校招活动的截至时间" placement="top">
            <span>{{ scope.column.label }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" header-align="center" align="center" label="创建时间">
      </el-table-column>
      <el-table-column prop="updateTime" header-align="center" align="center" label="更新时间">
      </el-table-column>
      <el-table-column fixed="right" header-align="center" align="center" width="150" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small"
            @click="addOrUpdateHandle(scope.row.compusRecruiteactivityId)">修改</el-button>
          <el-button type="text" size="small" @click="deleteHandle(scope.row.compusRecruiteactivityId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="sizeChangeHandle" @current-change="currentChangeHandle" :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]" :page-size="pageSize" :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
  </div>
</template>

<script>
import AddOrUpdate from './campusrecruiteactivity-add-or-update.vue'

export default {
  data() {
    return {
      dataForm: {
        key: ''
      },
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false
    }
  },
  components: {
    AddOrUpdate
  },
  created() {
    console.log("created")
    this.getDataList()
  },
  mounted() {
    console.log("onMounted")
    this.getDataList()
  },
  methods: {
    // 获取数据列表
    getDataList() {
      this.dataListLoading = true
      this.$http({
        url: this.$http.adornUrl('/main/campusrecruiteactivity/list'),
        method: 'get',
        params: this.$http.adornParams({
          'page': this.pageIndex,
          'limit': this.pageSize,
          'key': this.dataForm.key
        })
      }).then(({ data }) => {
        console.log(data);
        if (data && data.code == 200) {
          this.dataList = data.page.list
          this.totalPage = data.page.totalCount
        } else {
          this.dataList = []
          this.totalPage = 0
        }
        this.dataListLoading = false
      }).catch(error => {
        // 处理错误
        console.log("getDataList",error);
      });
    },


    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val
      this.pageIndex = 1
      this.getDataList()
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val
      this.getDataList()
    },
    // 多选
    selectionChangeHandle(val) {
      this.dataListSelections = val
    },
    // 新增 / 修改
    addOrUpdateHandle(id) {
      this.addOrUpdateVisible = true
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id)
      })
    },
    // 删除
    deleteHandle(id) {
      var ids = id ? [id] : this.dataListSelections.map(item => {
        return item.compusRecruiteactivityId
      })
      this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
          url: this.$http.adornUrl('/main/campusrecruiteactivity/delete'),
          method: 'post',
          data: this.$http.adornData(ids, false)
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message({
              message: '操作成功',
              type: 'success',
              duration: 1500,
              onClose: () => {
                this.getDataList()
              }
            })
          } else {
            this.$message.error(data.msg)
          }
        })
      })
    }
  }
}
</script>
