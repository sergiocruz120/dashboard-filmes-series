import PaginaFilmes from '@/views/PaginaFilmes.vue'
import PaginaInicial from '@/views/PaginaInicial.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: PaginaInicial
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: PaginaFilmes
    }
  ],
})

export default router
