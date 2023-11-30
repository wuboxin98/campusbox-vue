<template>
  <el-container id="app">
    <el-header style="
        text-align: right;
        font-size: 12px;
        position: sticky;
        top: 0;
        z-index: 100;
      ">
      <span >
        <router-link to="/compusrecruiteactivity">校招大厅</router-link>
        <router-link to="/resume-delivery-record">ResumeDeliveryRecord</router-link>
      </span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-container>
      <el-aside style="width: 20%; float: left; background-color: rgb(238, 241, 246)">
        <span></span>
        这是侧边栏<br />
        <router-link to="/">Home</router-link> <br />

        <router-link to="/HelloWorld">HelloWorld</router-link> <br />
      </el-aside>
      <el-main style="width: 80%; float: left">
        <router-view></router-view>
        <!-- 被匹配的组件将渲染在这里 -->
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>