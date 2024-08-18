import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import jsx from '@vue/babel-plugin-jsx';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      vue(),
      AutoImport({
        imports: [
          'vue',
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      }),
      {
        name: 'vue-jsx',
        enforce: 'pre',
        transform(code) {
          return {
            code: code.replace(/\bimport Vue from 'vue';/g, 'import { createApp } from \'vue\';\nimport Vue from \'vue\';')
          };
        }
      }
    ],
    esbuild: {
      jsxFactory: 'Vue.h',
      jsxFragment: 'Fragment'
    }
  }
})
