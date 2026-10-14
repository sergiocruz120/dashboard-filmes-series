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
        <v-text-field v-model="busca" label="Buscar por título" clearable variant="solo" />
      </v-col>
      <v-col cols="12" sm="4">
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

    <!-- Séries filtradas -->
    <v-row>
      <v-col cols="12" sm="12" md="6" v-for="serie in seriesFiltradas" :key="serie.id">
        <CartaoSerie :serie="serie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CartaoSerie from '@/components/series/CartaoSerie.vue'
import { entretenimentoStore } from '@/stores/entretenimentoStore'
import { filtrarSeries, obterGenerosSeries } from '@/shared/utils/filtros'
import { computed, ref } from 'vue'

const store = entretenimentoStore()

// Filtros
const busca = ref('')
const filtroGenero = ref(null)
const filtroAno = ref(null)

// Opções únicas
const generosDisponiveis = computed(() => obterGenerosSeries(store.series))

const anosDisponiveis = computed(() =>
  [...new Set(store.series.map((s) => s.ano))].sort((a, b) => b - a),
)

// Aplicação dos filtros
const seriesFiltradas = computed(() => {
  return filtrarSeries(store.series, {
    busca: busca.value,
    genero: filtroGenero.value,
    ano: filtroAno.value,
  })
})
</script>
