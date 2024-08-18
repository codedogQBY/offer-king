import { createRouter, createWebHistory } from 'vue-router'
import { BookOne, Worker } from '@icon-park/vue-next'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index.vue'),
    redirect: '/questions',
    children: [
      {
        path: 'questions',
        name: 'questions',
        component: () => import('../views/questions/index.vue'),
        meta: {
          title: '题库',
          icon: BookOne
        }
      },
      {
        path: 'jd',
        name: 'jd',
        component: () => import('../views/jd/index.vue'),
        meta: {
          title: '岗位',
          icon: Worker
        }
      },
    ]
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('../views/questions/question/index.vue'),
    meta: {
      title: '题目'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
