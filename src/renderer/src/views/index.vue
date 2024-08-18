<template>
  <div class="app-container">
    <n-layout has-sider position="absolute">
      <n-layout-sider
        width="160px"
        :native-scrollbar="false" class="layout-container">
        <Layout />
      </n-layout-sider>
      <n-layout-content :native-scrollbar="false" content-style="padding: 16px;" >
        <router-view />
      </n-layout-content>
    </n-layout>
  </div>
</template>
<script setup>
import Layout from '../components/layout/index.vue'
</script>
<style lang="less" scoped>
.app-container {
  margin-top: 16px;
  position: relative;
  height: calc(100vh - 16px);
}
</style>
