<template>
  <n-space vertical>
    <div style="float: right">
      <n-button type="primary" style="margin-right: 10px">批量上传</n-button>
      <n-button type="info" style="margin-right: 10px">下载模板</n-button>
      <n-button type="error" style="margin-right: 10px">批量删除</n-button>
    </div>
    <n-space style="margin-top: 32px">
      <n-select
        :options="typeData"
        :label-field="'name'"
        :value-field="'id'"
        clearable
        v-model="searchType"
        placeholder="请选择题库类型"
        style="width: 200px"
      >
      </n-select>
      <n-input v-model="searchKeyword" placeholder="请输入题干相关内容" style="width: 300px" />
      <n-select
        :options="tagData"
        :label-field="'name'"
        :value-field="'id'"
        clearable
        v-model="searchTag"
        placeholder="请选择标签"
        style="width: 200px"
      >
      </n-select>
      <n-button type="primary" @click="handleSearch">搜索</n-button>
    </n-space>
    <n-data-table
      :data="pagedData"
      :columns="columns"
      :pagination="pagination"
      @update:page="handlePageChange"
    />
  </n-space>
</template>

<script setup>
import { ref, onMounted, computed, h } from 'vue'
import { NInput, NButton, NSpace, NTag } from 'naive-ui'

// Mock 数据
const mockData = [
  {
    id: '01',
    title: 'HTML中xXXX',
    type: '前端',
    tag: [{ name: 'HTML' }, { name: '前端' }],
    uploadDate: '2025-08-25-16:22:00'
  }
]

// 标签模拟数据
const tagData = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'Vue' },
  { id: 5, name: 'React' },
  { id: 6, name: 'Angular' },
  { id: 7, name: 'Node.js' },
  { id: 8, name: 'Python' },
  { id: 9, name: 'Java' },
  { id: 10, name: 'C++' }
]

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

// 组件的属性
const searchKeyword = ref('')
const data = ref(mockData)
const searchTag = ref('')
const searchType = ref('')

// 列的定义
const columns = ref([
  {
    title: '题目ID',
    key: 'id'
  },
  {
    title: '题干',
    key: 'title'
  },
  {
    title: '题库类型',
    key: 'type'
  },
  {
    title: '标签',
    key: 'tag',
    render(row) {
      // 使用NTag组件渲染标签，color为当前标签各个字符ascii code决定
      return h(
        'div',
        row.tag.map((tag) =>
          h(
            NTag,
            {
              color: {
                color: (() => {
                  // 根据tag.name每个字符的ascii code计算颜色
                  let color = 0
                  for (let i = 0; i < tag.name.length; i++) {
                    color += tag.name.charCodeAt(i)
                  }
                  // 返回16进制颜色值
                  return '#' + color.toString(16)
                })(),
                textColor: '#fff'
              },
              style: { marginRight: '5px', cursor: 'pointer', padding: '0 5px' }
            },
            { default: () => tag.name }
          )
        )
      )
    }
  },
  {
    title: '上传日期',
    key: 'uploadDate'
  },
  {
    title: '操作',
    key: 'operation',
    render(row) {
      return h('div', [
        h(
          NButton,
          {
            size: 'small',
            onClick: () => handleDelete(row.id),
            style: { marginRight: '8px', cursor: 'pointer', padding: '0 16px' },
            type: 'error'
          },
          { default: () => '删除' }
        ),
        h(
          NButton,
          {
            size: 'small',
            style: { marginRight: '8px', cursor: 'pointer', padding: '0 16px' },
            type: 'default'
          },
          { default: () => '修改' }
        ),
        h(
          NButton,
          {
            size: 'small',
            style: { marginRight: '8px', cursor: 'pointer', padding: '0 16px' },
            type: 'primary',
            onClick: () => {
              handleDetail()
            }
          },
          { default: () => '详情' }
        )
      ])
    }
  }
])

// 分页配置
const pagination = ref({
  pageSize: 10,
  page: 1,
  total: computed(() => data.value.length)
})

// 计算当前页数据
const pagedData = computed(() => {
  return data.value.slice(
    (pagination.value.page - 1) * pagination.value.pageSize,
    pagination.value.pageSize * pagination.value.page
  )
})

// 搜索功能
const handleSearch = () => {
  // 根据 searchKeyword 过滤 data
  data.value = mockData.filter(
    (item) => item.id.includes(searchKeyword.value) || item.title.includes(searchKeyword.value)
  )
  pagination.value.page = 1 // 重置分页
}

// 分页变化处理
const handlePageChange = (page) => {
  pagination.value.page = page
}

// 详情操作
const handleDetail = () => {
  window.api.openNewWindow(
    {
      width: 800,
      height: 600,
      // 窗口位置在屏幕居中
      center: true,
      // 隐藏窗口标题栏
      titleBarStyle: 'hidden',
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    },
    'http://localhost:5174/question'
  )
}

// 删除操作
const handleDelete = (id) => {
  // 这里应该是调用 API 删除数据，然后更新 data
  data.value = data.value.filter((item) => item.id !== id)
}

onMounted(() => {
  handleSearch() // 初始加载数据
})
</script>

<style>
/* 可以添加一些自定义样式 */
</style>
