<template>
  <div class="menu-container">
    <n-menu
      :options="menus"
      mode="vertical"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="20"
      :indent="24"
      :value="selectedKey"
      @update:value="handleMenuClick"
    >
    </n-menu>
  </div>
</template>
<script setup>
import { ref, h, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NIcon } from 'naive-ui'
const router = useRouter()
const route = useRoute()
const menus = ref([])
const collapsed = ref(false)

const selectedKey = computed(() => {
  return route.name
})

const routerChildren = router.currentRoute.value.matched[0].children
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}


routerChildren.forEach((item) => {
  const { path, meta } = item
  menus.value.push({
    key: path,
    label: meta.title,
    icon: renderIcon(meta.icon)
  })
})

const handleMenuClick = (menu) => {
  router.push({ name: menu })
}
</script>
<style lang="less" scoped>
.menu-container {
  padding-top: 32px;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 16px);
  // 不可滚动
  overflow: hidden;
  .menu-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    .menu-header-info {
      margin-top: 8px;
      .menu-header-info-name {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>
