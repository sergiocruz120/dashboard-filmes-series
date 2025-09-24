import FormularioFilme from '@/components/filmes/FormularioFilme.vue'
import PaginaFiltros from '@/views/PaginaFiltros.vue'
import FormularioSerie from '@/components/series/FormularioSerie.vue'
import PaginaAssistidos from '@/views/PaginaAssistidos.vue'
import PaginaDashboard from '@/views/PaginaDashboard.vue'
import PaginaFilmes from '@/views/PaginaFilmes.vue'
import PaginaSeries from '@/views/PaginaSeries.vue'

import { createRouter, createWebHistory } from 'vue-router'
import FiltroFilmes from '@/components/filtros/FiltroFilmes.vue'
import FiltroSeries from '@/components/filtros/FiltroSeries.vue'
import FiltroAssistidos from '@/components/filtros/FiltroAssistidos.vue'
import FiltroNaoAssistidos from '@/components/filtros/FiltroNaoAssistidos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component:  PaginaDashboard,
      children: [
        {
          path: '/filtro',
          name: 'filtro',
          component: PaginaFiltros,
          children: [
            {
              path: 'filme',
              name: 'filme',
              component: FiltroFilmes
            },
            {
              path: 'serie',
              name: 'serie',
              component: FiltroSeries
            },
            {
              path: 'assistido',
              name: 'assistido',
              component: FiltroAssistidos
            },
            {
              path: 'nao-assistidos',
              name: 'nao-assistidos',
              component: FiltroNaoAssistidos
            },
          ]
        },
        {
          path: 'filmes',
          name: 'filmes',
          component: PaginaFilmes,
        },
        {
          path: 'series',
          name: 'series',
          component: PaginaSeries,
        },
        {
          path: 'assistidos',
          name: 'assistidos',
          component: PaginaAssistidos
        }

      ]
    },
    {
      path: '/formulario-filme',
      name: 'formulario-filme',
      component: FormularioFilme,
    },
    {
      path: '/formulario-serie',
      name: 'formulario-serie',
      component: FormularioSerie,
    },
  ],
})

export default router
