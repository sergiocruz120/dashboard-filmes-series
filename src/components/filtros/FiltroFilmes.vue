<template>
  <h1>Filmes Teste</h1>
  <v-card v-for="filme in filmes" :key="filme.id" class="border-lg" max-width="320" outlined>
    <v-img
      src="/imagens/exemplo.jpg"
      height="200px"
      cover
    ></v-img>
    <v-card-title class="text-h6">
      {{ filme.titulo }}
    </v-card-title>

    <v-card-subtitle>
      {{ filme.genero }} - {{ filme.ano }}
    </v-card-subtitle>

    <v-card-text>
      Esta é uma descrição simples do conteúdo do card. Pode conter detalhes como ano, gênero ou status.
    </v-card-text>

    <v-card-actions>
      <v-btn density="comfortable" color="primary" variant="flat">Ver mais</v-btn>
      <v-spacer></v-spacer>
      <v-btn density="comfortable" color="error" variant="outlined">Remover</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore';
const store = entretenimentoStore()

import { computed } from 'vue';

const filmes = computed(() => store.filmes)
</script>

<style>

</style>
