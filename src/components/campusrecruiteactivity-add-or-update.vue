<template>
  <el-dialog
    :title="!dataForm.campusRecruiteactivityId ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-form-item label="校招公司id" prop="campusCompanyId">
      <el-input v-model="dataForm.campusCompanyId" placeholder="校招公司id"></el-input>
    </el-form-item>
    <el-form-item label="公司名" prop="companyName">
      <el-input v-model="dataForm.companyName" placeholder="公司名"></el-input>
    </el-form-item>
    <el-form-item label="公司官网" prop="companyUrl">
      <el-input v-model="dataForm.companyUrl" placeholder="公司官网"></el-input>
    </el-form-item>
    <el-form-item label="公司校招官网" prop="schoolRecruitmentUrl">
      <el-input v-model="dataForm.schoolRecruitmentUrl" placeholder="公司校招官网"></el-input>
    </el-form-item>
    <el-form-item label="宣发链接：比如公众号的宣传链接" prop="publicizeDistributeUrl">
      <el-input v-model="dataForm.publicizeDistributeUrl" placeholder="宣发链接：比如公众号的宣传链接"></el-input>
    </el-form-item>
    <el-form-item label="公司标签：互联网、游戏、银行、国企、外企、芯片、新能源" prop="companyLabel">
      <el-input v-model="dataForm.companyLabel" placeholder="公司标签：互联网、游戏、银行、国企、外企、芯片、新能源"></el-input>
    </el-form-item>
    <el-form-item label="招聘岗位标签：JavaGoPythonC++、前端、后端、嵌入式" prop="jobTag">
      <el-input v-model="dataForm.jobTag" placeholder="招聘岗位标签：JavaGoPythonC++、前端、后端、嵌入式"></el-input>
    </el-form-item>
    <el-form-item label="校招活动类型：日常实习、暑期实习、秋招提前批、秋招、秋招补录、春招" prop="schoolRecruitmentType">
      <el-input v-model="dataForm.schoolRecruitmentType" placeholder="校招活动类型：日常实习、暑期实习、秋招提前批、秋招、秋招补录、春招"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input v-model="dataForm.remark" placeholder="备注"></el-input>
    </el-form-item>
    <el-form-item label="校招年份（可以有多个，有些公司招往年生源）：2020，2023" prop="schoolRecruitmentYear">
      <el-input v-model="dataForm.schoolRecruitmentYear" placeholder="校招年份（可以有多个，有些公司招往年生源）：2020，2023"></el-input>
    </el-form-item>
    <el-form-item label="校招活动的截至时间" prop="endDate">
      <el-input v-model="dataForm.endDate" placeholder="校招活动的截至时间"></el-input>
    </el-form-item>
    <el-form-item label="创建时间" prop="createTime">
      <el-input v-model="dataForm.createTime" placeholder="创建时间"></el-input>
    </el-form-item>
    <el-form-item label="更新时间" prop="updateTime">
      <el-input v-model="dataForm.updateTime" placeholder="更新时间"></el-input>
    </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          campusRecruiteactivityId: 0,
          campusCompanyId: '',
          companyName: '',
          companyUrl: '',
          schoolRecruitmentUrl: '',
          publicizeDistributeUrl: '',
          companyLabel: '',
          jobTag: '',
          schoolRecruitmentType: '',
          remark: '',
          schoolRecruitmentYear: '',
          endDate: '',
          createTime: '',
          updateTime: ''
        },
        dataRule: {
          campusCompanyId: [
            { required: true, message: '校招公司id不能为空', trigger: 'blur' }
          ],
          companyName: [
            { required: true, message: '公司名不能为空', trigger: 'blur' }
          ],
          companyUrl: [
            { required: true, message: '公司官网不能为空', trigger: 'blur' }
          ],
          schoolRecruitmentUrl: [
            { required: true, message: '公司校招官网不能为空', trigger: 'blur' }
          ],
          publicizeDistributeUrl: [
            { required: true, message: '宣发链接：比如公众号的宣传链接不能为空', trigger: 'blur' }
          ],
          companyLabel: [
            { required: true, message: '公司标签：互联网、游戏、银行、国企、外企、芯片、新能源不能为空', trigger: 'blur' }
          ],
          jobTag: [
            { required: true, message: '招聘岗位标签：JavaGoPythonC++、前端、后端、嵌入式不能为空', trigger: 'blur' }
          ],
          schoolRecruitmentType: [
            { required: true, message: '校招活动类型：日常实习、暑期实习、秋招提前批、秋招、秋招补录、春招不能为空', trigger: 'blur' }
          ],
          remark: [
            { required: true, message: '备注不能为空', trigger: 'blur' }
          ],
          schoolRecruitmentYear: [
            { required: true, message: '校招年份（可以有多个，有些公司招往年生源）：2020，2023不能为空', trigger: 'blur' }
          ],
          endDate: [
            { required: true, message: '校招活动的截至时间不能为空', trigger: 'blur' }
          ],
          createTime: [
            { required: true, message: '创建时间不能为空', trigger: 'blur' }
          ],
          updateTime: [
            { required: true, message: '更新时间不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.campusRecruiteactivityId = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.campusRecruiteactivityId) {
            this.$http({
              url: this.$http.adornUrl(`/main/campusrecruiteactivity/info/${this.dataForm.campusRecruiteactivityId}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.campusCompanyId = data.campusRecruiteActivity.campusCompanyId
                this.dataForm.companyName = data.campusRecruiteActivity.companyName
                this.dataForm.companyUrl = data.campusRecruiteActivity.companyUrl
                this.dataForm.schoolRecruitmentUrl = data.campusRecruiteActivity.schoolRecruitmentUrl
                this.dataForm.publicizeDistributeUrl = data.campusRecruiteActivity.publicizeDistributeUrl
                this.dataForm.companyLabel = data.campusRecruiteActivity.companyLabel
                this.dataForm.jobTag = data.campusRecruiteActivity.jobTag
                this.dataForm.schoolRecruitmentType = data.campusRecruiteActivity.schoolRecruitmentType
                this.dataForm.remark = data.campusRecruiteActivity.remark
                this.dataForm.schoolRecruitmentYear = data.campusRecruiteActivity.schoolRecruitmentYear
                this.dataForm.endDate = data.campusRecruiteActivity.endDate
                this.dataForm.createTime = data.campusRecruiteActivity.createTime
                this.dataForm.updateTime = data.campusRecruiteActivity.updateTime
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/main/campusrecruiteactivity/${!this.dataForm.campusRecruiteactivityId ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'campusRecruiteactivityId': this.dataForm.campusRecruiteactivityId || undefined,
                'campusCompanyId': this.dataForm.campusCompanyId,
                'companyName': this.dataForm.companyName,
                'companyUrl': this.dataForm.companyUrl,
                'schoolRecruitmentUrl': this.dataForm.schoolRecruitmentUrl,
                'publicizeDistributeUrl': this.dataForm.publicizeDistributeUrl,
                'companyLabel': this.dataForm.companyLabel,
                'jobTag': this.dataForm.jobTag,
                'schoolRecruitmentType': this.dataForm.schoolRecruitmentType,
                'remark': this.dataForm.remark,
                'schoolRecruitmentYear': this.dataForm.schoolRecruitmentYear,
                'endDate': this.dataForm.endDate,
                'createTime': this.dataForm.createTime,
                'updateTime': this.dataForm.updateTime
              })
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>
