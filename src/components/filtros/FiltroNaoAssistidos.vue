<template>
  <h2>Filmes não Assistidos</h2>
  <v-card v-for="filmeNaoAssistido in filmesNaoAssistidos" :key="filmeNaoAssistido.id" class="border-lg" max-width="350" outlined>
    <v-img
      src="/imagens/exemplo.jpg"
      height="200px"
      cover
    ></v-img>
    <v-card-title class="text-h6">
      {{ filmeNaoAssistido.titulo }}
    </v-card-title>

    <v-card-subtitle>
      {{ filmeNaoAssistido.genero }} - {{ filmeNaoAssistido.ano }}
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

  <h2>Séries não Assistidas</h2>
  <v-card v-for="serieNaoAssistida in seriesNaoAssistidas" :key="serieNaoAssistida.id" class="border-lg" max-width="350" outlined>
    <v-img
      src="/imagens/exemplo.jpg"
      height="200px"
      cover
    ></v-img>
    <v-card-title class="text-h6">
      {{ serieNaoAssistida.titulo }}
    </v-card-title>

    <v-card-subtitle>
      {{ serieNaoAssistida.genero }} - {{ serieNaoAssistida.ano }}
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

const filmesNaoAssistidos = computed(() => store.filmesNaoAssistidos)
const seriesNaoAssistidas = computed(() => store.seriesNaoAssistidas)
</script>

<style>

</style>
