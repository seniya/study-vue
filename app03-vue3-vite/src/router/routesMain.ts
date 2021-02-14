import { RouteRecordRaw } from 'vue-router'
import ContainerLayout from '../pages/_container.vue'

const children: Array<RouteRecordRaw> = [  
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../pages/chat.vue')
  }
]

export default {
  path: '/',
  component: ContainerLayout,
  children: children
}
