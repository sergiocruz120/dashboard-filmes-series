import FormularioFilme from '@/components/filmes/FormularioFilme.vue'
import FormularioSerie from '@/components/series/FormularioSerie.vue'
import PaginaFilmes from '@/views/PaginaFilmes.vue'
import PaginaInicial from '@/views/PaginaInicial.vue'
import PaginaSeries from '@/views/PaginaSeries.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: PaginaInicial,
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: PaginaFilmes,
    },
    {
      path: '/formulario-filme',
      name: 'formulario-filme',
      component: FormularioFilme,
    },
    {
      path: '/series',
      name: 'series',
      component: PaginaSeries,
    },
    {
      path: '/formulario-serie',
      name: 'formulario-serie',
      component: FormularioSerie,
    },
  ],
})

export default router
