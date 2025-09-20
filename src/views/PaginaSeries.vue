<template>
  <v-container>
    <h1>Séries</h1>
    <v-row>
      <v-col v-for="(serie) in series" :key="serie.id" cols="12" sm="6" md="4">
        <CartaoSerie :serie="serie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import CartaoSerie from '@/components/series/CartaoSerie.vue';
import { entretenimentoStore } from '@/stores/entretenimentoStore';
import { computed } from 'vue';



const store = entretenimentoStore()

const series = computed(() => store.series)

</script>

<style></style>
