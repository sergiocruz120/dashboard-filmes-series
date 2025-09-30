<template>
  <v-container>
    <v-row>
      <v-col class="text-center mb-2">
        <h2>Filtros</h2>
      </v-col>
    </v-row>
    <!-- Filtros -->
    <v-row no-gutters>
      <v-col cols="12" sm="4" class="pr-2">
        <v-text-field
          v-model="busca"
          label="Buscar por título"

          clearable
          variant="solo"
        />
      </v-col>
      <v-col cols="12" sm="4" class="pr-2">
        <v-select
          v-model="filtroGenero"
          :items="generosDisponiveis"
          label="Filtrar por gênero"
          clearable
          variant="solo"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          v-model="filtroAno"
          :items="anosDisponiveis"
          label="Filtrar por ano"
          clearable
          variant="solo"
        />
      </v-col>
    </v-row>

    <!-- Lista de filmes filtrados -->
    <v-row no-gutters>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        class="pa-2"
        v-for="filme in filmesFiltrados"
        :key="filme.id"
      >
        <CartaoFilme :filme="filme" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore'
import { computed, ref } from 'vue'
import CartaoFilme from '@/components/filmes/CartaoFilme.vue'

const store = entretenimentoStore()

const busca = ref('')
const filtroGenero = ref(null)
const filtroAno = ref(null)

const generosDisponiveis = computed(() =>
  [...new Set(store.filmes.map(f => f.genero))]
)

const anosDisponiveis = computed(() =>
  [...new Set(store.filmes.map(f => f.ano))].sort((a, b) => b - a)
)

const filmesFiltrados = computed(() => {
  return store.filmes.filter(filme => {
    const tituloMatch = filme.titulo.toLowerCase().includes(busca.value.toLowerCase())
    const generoMatch = !filtroGenero.value || filme.genero === filtroGenero.value
    const anoMatch = !filtroAno.value || filme.ano === filtroAno.value
    return tituloMatch && generoMatch && anoMatch
  })
})
</script>
