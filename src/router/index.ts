import { createRouter, createWebHistory } from 'vue-router'
import UsuariosView from '@/views/UsuariosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/registro',
      name: 'registro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UsuariosView.vue')
    },
    {
      path: '/usuario',
      name: 'usuario',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UsuarioView.vue')
    }
  ]
})

export default router
