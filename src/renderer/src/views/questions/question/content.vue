<!-- Content.vue -->
<template>
  <div class="content-container">
    <!-- 标题区域 -->
    <n-card>
      <div class="title">
        <h1>{{ title }}</h1>
        <div class="tags">
          <n-tag v-for="tag in tags" :key="tag">{{ tag }}</n-tag>
        </div>
      </div>
    </n-card>
    <!-- 答案区域 -->
    <div class="answer">
      <n-card>
        <markdown :source="answer" />
      </n-card>
    </div>
    <!-- 切换题目 -->
    <div class="switch-question">
      <n-button type="primary">上一题</n-button>
      <n-button type="primary">下一题</n-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Markdown from '../../../components/MarkdownRenderer.vue'

// 模拟数据
const title = ref('什么是设计模式？')
const tags = ref(['设计模式', '面向对象'])
const answer = ref(`
## 设计模式
设计模式是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。
## 设计模式的分类
- 创建型模式
- 结构型模式
- 行为型模式
## 设计模式的六大原则
- 开闭原则
- 里氏替换原则
- 依赖倒置原则
- 接口隔离原则
- 迪米特法则
- 合成复用原则
## 常见的设计模式
- 单例模式
- 工厂模式
- 抽象工厂模式
- 建造者模式
- 原型模式
- 适配器模式
`)
</script>

<style lang="less">
.content-container {
  padding: 20px;
  .title {
    h1 {
      width: 100%;
    }
    .tags {
      display: flex;
      gap: 10px;
    }
  }
  .answer {
    margin-top: 20px;
  }
  .switch-question {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
}
</style>
