import ContainerLayout from '../pages/_container.vue'

const children = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../pages/chat.vue')
  },

]

export default {
  path: '/',
  component: ContainerLayout,
  children: children
}
