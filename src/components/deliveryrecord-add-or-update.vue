<template>
  <el-dialog
    :title="!dataForm.deliveryRecordId ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-form-item label="用户id" prop="userId">
      <el-input v-model="dataForm.userId" placeholder="用户id"></el-input>
    </el-form-item>
    <el-form-item label="校招活动id" prop="activityId">
      <el-input v-model="dataForm.activityId" placeholder="校招活动id"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input v-model="dataForm.remark" placeholder="备注"></el-input>
    </el-form-item>
    <el-form-item label="投递状态" prop="deliveryStatus">
      <el-input v-model="dataForm.deliveryStatus" placeholder="投递状态"></el-input>
    </el-form-item>
    <el-form-item label="投递时间" prop="deliveryTime">
      <el-input v-model="dataForm.deliveryTime" placeholder="投递时间"></el-input>
    </el-form-item>
    <el-form-item label="" prop="deliveryRecordcol">
      <el-input v-model="dataForm.deliveryRecordcol" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="岗位名" prop="postName">
      <el-input v-model="dataForm.postName" placeholder="岗位名"></el-input>
    </el-form-item>
    <el-form-item label="公司名" prop="companyName">
      <el-input v-model="dataForm.companyName" placeholder="公司名"></el-input>
    </el-form-item>
    <el-form-item label="工作地点" prop="workPlace">
      <el-input v-model="dataForm.workPlace" placeholder="工作地点"></el-input>
    </el-form-item>
    <el-form-item label="投递链接" prop="postUrl">
      <el-input v-model="dataForm.postUrl" placeholder="投递链接"></el-input>
    </el-form-item>
    <el-form-item label="工作职责" prop="recruitmentResponsibility">
      <el-input v-model="dataForm.recruitmentResponsibility" placeholder="工作职责"></el-input>
    </el-form-item>
    <el-form-item label="岗位要求" prop="jobRequirement">
      <el-input v-model="dataForm.jobRequirement" placeholder="岗位要求"></el-input>
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
          deliveryRecordId: 0,
          userId: '',
          activityId: '',
          remark: '',
          deliveryStatus: '',
          deliveryTime: '',
          deliveryRecordcol: '',
          postName: '',
          companyName: '',
          workPlace: '',
          postUrl: '',
          recruitmentResponsibility: '',
          jobRequirement: '',
          createTime: '',
          updateTime: ''
        },
        dataRule: {
          userId: [
            { required: true, message: '用户id不能为空', trigger: 'blur' }
          ],
          activityId: [
            { required: true, message: '校招活动id不能为空', trigger: 'blur' }
          ],
          remark: [
            { required: true, message: '备注不能为空', trigger: 'blur' }
          ],
          deliveryStatus: [
            { required: true, message: '投递状态不能为空', trigger: 'blur' }
          ],
          deliveryTime: [
            { required: true, message: '投递时间不能为空', trigger: 'blur' }
          ],
          deliveryRecordcol: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          postName: [
            { required: true, message: '岗位名不能为空', trigger: 'blur' }
          ],
          companyName: [
            { required: true, message: '公司名不能为空', trigger: 'blur' }
          ],
          workPlace: [
            { required: true, message: '工作地点不能为空', trigger: 'blur' }
          ],
          postUrl: [
            { required: true, message: '投递链接不能为空', trigger: 'blur' }
          ],
          recruitmentResponsibility: [
            { required: true, message: '工作职责不能为空', trigger: 'blur' }
          ],
          jobRequirement: [
            { required: true, message: '岗位要求不能为空', trigger: 'blur' }
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
        this.dataForm.deliveryRecordId = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.deliveryRecordId) {
            this.$http({
              url: this.$http.adornUrl(`/main/deliveryrecord/info/${this.dataForm.deliveryRecordId}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.userId = data.deliveryRecord.userId
                this.dataForm.activityId = data.deliveryRecord.activityId
                this.dataForm.remark = data.deliveryRecord.remark
                this.dataForm.deliveryStatus = data.deliveryRecord.deliveryStatus
                this.dataForm.deliveryTime = data.deliveryRecord.deliveryTime
                this.dataForm.deliveryRecordcol = data.deliveryRecord.deliveryRecordcol
                this.dataForm.postName = data.deliveryRecord.postName
                this.dataForm.companyName = data.deliveryRecord.companyName
                this.dataForm.workPlace = data.deliveryRecord.workPlace
                this.dataForm.postUrl = data.deliveryRecord.postUrl
                this.dataForm.recruitmentResponsibility = data.deliveryRecord.recruitmentResponsibility
                this.dataForm.jobRequirement = data.deliveryRecord.jobRequirement
                this.dataForm.createTime = data.deliveryRecord.createTime
                this.dataForm.updateTime = data.deliveryRecord.updateTime
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
              url: this.$http.adornUrl(`/main/deliveryrecord/${!this.dataForm.deliveryRecordId ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'deliveryRecordId': this.dataForm.deliveryRecordId || undefined,
                'userId': this.dataForm.userId,
                'activityId': this.dataForm.activityId,
                'remark': this.dataForm.remark,
                'deliveryStatus': this.dataForm.deliveryStatus,
                'deliveryTime': this.dataForm.deliveryTime,
                'deliveryRecordcol': this.dataForm.deliveryRecordcol,
                'postName': this.dataForm.postName,
                'companyName': this.dataForm.companyName,
                'workPlace': this.dataForm.workPlace,
                'postUrl': this.dataForm.postUrl,
                'recruitmentResponsibility': this.dataForm.recruitmentResponsibility,
                'jobRequirement': this.dataForm.jobRequirement,
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
