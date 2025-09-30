<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Filtros</h2>
      </v-col>
    </v-row>

    <!-- Filtros -->
    <v-row class="">
      <v-col cols="12" sm="4">
        <v-text-field
          v-model="busca"
          label="Buscar por título"
          clearable
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          v-model="filtroGenero"
          :items="generosDisponiveis"
          label="Filtrar por gênero"
          clearable
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          v-model="filtroAno"
          :items="anosDisponiveis"
          label="Filtrar por ano"
          clearable
        />
      </v-col>
    </v-row>

    <!-- Séries filtradas -->
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        v-for="serie in seriesFiltradas"
        :key="serie.id"
      >
        <CartaoSerie :serie="serie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CartaoSerie from '@/components/series/CartaoSerie.vue'
import { entretenimentoStore } from '@/stores/entretenimentoStore'
import { computed, ref } from 'vue'

const store = entretenimentoStore()

// Filtros
const busca = ref('')
const filtroGenero = ref(null)
const filtroAno = ref(null)

// Opções únicas
const generosDisponiveis = computed(() =>
  [...new Set(store.series.map(s => s.genero))]
)

const anosDisponiveis = computed(() =>
  [...new Set(store.series.map(s => s.ano))].sort((a, b) => b - a)
)

// Aplicação dos filtros
const seriesFiltradas = computed(() => {
  return store.series.filter(serie => {
    const tituloMatch = serie.titulo.toLowerCase().includes(busca.value.toLowerCase())
    const generoMatch = !filtroGenero.value || serie.genero === filtroGenero.value
    const anoMatch = !filtroAno.value || serie.ano === filtroAno.value
    return tituloMatch && generoMatch && anoMatch
  })
})
</script>
