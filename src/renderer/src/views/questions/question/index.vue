<!-- App.vue -->
<template>
  <div class="container">
  <n-layout has-sider position="absolute">
    <n-layout-sider :native-scrollbar="false" bordered content-style="padding: 24px;">
      <side-bar></side-bar>
    </n-layout-sider>
    <n-layout-content :native-scrollbar="false" content-style="padding: 24px;" >
      <content></content>
    </n-layout-content>
  </n-layout>
  </div>
</template>

<script setup>
import Content from './Content.vue'
import SideBar from './SideBar.vue'
</script>

<style lang="less">
.container{
  position: relative;
  height: 100vh;
}
</style>
