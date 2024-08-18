<!-- SideBar.vue -->
<template>
  <div class="sidebar">
    <!-- 筛选器 -->
    <div class="type-change">
      <n-select
        :options="typeData"
        :label-field="'name'"
        :value-field="'id'"
        clearable
        :default-value="1"
        v-model="type"
        @update:value="handleTypeChange"
        placeholder="请选择题库类型"
        style="width: 200px">
      </n-select>
    </div>
    <!-- 题目列表 -->
    <div class="question-list">
      <n-menu
        :options="questionList"
        mode="vertical"
        :collapsed="false"
        :collapsed-width="64"
        :collapsed-icon-size="20"
        :indent="24"
        :value="questionId"
        @update:value="handleMenuClick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 题库类型
const typeData = [
  { id: 1, name: '前端' },
  { id: 2, name: '后端' },
  { id: 3, name: '数据库' },
  { id: 4, name: '算法' },
  { id: 5, name: '网络' },
  { id: 6, name: '操作系统' },
  { id: 7, name: '软件工程' }
]

const questionId = ref('01')

// 题目mock数据
const mockData = [
  {
    id: '01',
    title: 'HTML中xXXX',
    type: '前端',
    tag: [{ name: 'HTML' }, { name: '前端' }],
    uploadDate: '2025-08-25-16:22:00'
  },
  // 其他题目...
]

const questionList = mockData.map(item => {
  return {
    key: item.id,
    label: item.title
  }
})

const type = ref('1')

const handleMenuClick = (menu) => {
  questionId.value = menu
}

const handleTypeChange = (value) => {
  console.log(value)
}
</script>

<style lang="less">
.sidebar {
  padding: 20px;
  .type-change {
    margin-bottom: 20px;
  }
  .question-list {
    width: 200px;
  }
}
</style>
