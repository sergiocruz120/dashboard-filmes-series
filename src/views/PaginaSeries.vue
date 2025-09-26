<template>
  <v-container>
    <h1>Séries</h1>
    <v-row v-for="serie in series" :key="serie.id">
      <v-col cols="12">
        <CartaoSerie :serie="serie" />
      </v-col>

      <v-col v-for="episodio in serie.episodios" :key="episodio.id" cols="12" sm="6" md="4">
        <ListaEpisodios :episodio="episodio" :idSerie="serie.id" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import CartaoSerie from '@/components/series/CartaoSerie.vue';
import ListaEpisodios from '@/components/series/ListaEpisodios.vue';
import { entretenimentoStore } from '@/stores/entretenimentoStore';
import { computed } from 'vue';

const store = entretenimentoStore()

const series = computed(() => store.series)

</script>

<style></style>
