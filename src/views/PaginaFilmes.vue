<template>
   <v-container>
    <h1>Lista de Filmes</h1>
    <v-row>
      <v-col
        v-for="(filme) in filmes"
        :key="filme.id"
        cols="12"
        sm="6"
        md="4"
      >
        <CardFilme :filme="filme" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore';

const store = entretenimentoStore()

const filmes = computed(() => store.filmes)

import CardFilme from '@/components/CardFilme.vue';
import { computed } from 'vue';

</script>

<style>

</style>
