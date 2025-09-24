<template>
  <h1>Séries</h1>
  <v-card v-for="serie in series" :key="serie.id" class="border-lg" max-width="350" outlined>
    <v-img
      src="/imagens/exemplo.jpg"
      height="200px"
      cover
    ></v-img>
    <v-card-title class="text-h6">
      {{ serie.titulo }}
    </v-card-title>

    <v-card-subtitle>
      {{ serie.genero }} - {{ serie.ano }}
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
import { computed } from 'vue';
import { entretenimentoStore } from '@/stores/entretenimentoStore';
const store = entretenimentoStore()


const series = computed(() => store.series)
</script>

<style>

</style>
