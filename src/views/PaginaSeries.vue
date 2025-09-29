<template>
  <v-container class="">
    <v-row>
      <v-col>
        <h1>Séries</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="6" v-for="serie in series" :key="serie.id">
        <CartaoSerie :serie="serie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CartaoSerie from '@/components/series/CartaoSerie.vue'
import { entretenimentoStore } from '@/stores/entretenimentoStore'

import { computed } from 'vue'

const store = entretenimentoStore()

const series = computed(() => store.series)
</script>

<style></style>
