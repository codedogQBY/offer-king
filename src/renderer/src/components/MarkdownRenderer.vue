<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script setup>
import MarkdownIt from 'markdown-it';
import { computed, ref } from 'vue';

const props = defineProps({
  source: {
    type: String,
    default: ''
  }
});

const markdownIt = ref(new MarkdownIt({
  // 在这里添加markdown-it的配置选项
}));

const compiledMarkdown = computed(() => {
  return markdownIt.value.render(props.source);
});
</script>

<style scoped>
/* 在这里添加你的样式 */
</style>
