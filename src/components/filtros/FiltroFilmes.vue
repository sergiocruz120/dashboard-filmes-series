<template>
  <!-- <v-row class="mt-4" no-gutters>
    <v-col class="bg-teal-darken-2 border-md text-start rounded-s" cols="12">
      <h2 class="ml-2 pa-2 rounded-2">Filmes</h2>
    </v-col>
  </v-row> -->
  <v-row no-gutters class="mt-5">
    <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="2" xxl="2" v-for="filme in filmes" :key="filme.id">
      <v-card class="border-md my-1 mx-1" outlined>
        <v-img src="../../../public/origem.jpg" height="300" class="d-flex align-end" cover>
          <v-card-title class="text-h5 text-start text-white">
            {{ filme.titulo }}
          </v-card-title>
        </v-img>

        <v-card-subtitle class="text-start mt-2">
          {{ filme.genero }} - {{ filme.ano }}
        </v-card-subtitle>

        <v-card-text class="text-start">
          Esta é uma descrição simples do conteúdo do card. Pode conter detalhes como ano, gênero ou status.
        </v-card-text>

        <!-- <v-card-actions class="d-flex justify-space-between">
          <v-btn density="comfortable" color="primary" variant="flat">Ver mais</v-btn>
          <v-btn density="comfortable" color="error" variant="outlined">Remover</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>

</template>


<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore';
const store = entretenimentoStore()

import { computed } from 'vue';

const filmes = computed(() => store.filmes)
</script>

<style>

</style>
