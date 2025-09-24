<template>
  <h2>Filmes Assistidos</h2>
  <v-card v-for="filmeAssistido in filmesAssistidos" :key="filmeAssistido.id" class="border-lg" max-width="350" outlined>
    <v-img
      src="/imagens/exemplo.jpg"
      height="200px"
      cover
    ></v-img>
    <v-card-title class="text-h6">
      {{ filmeAssistido.titulo }}
    </v-card-title>

    <v-card-subtitle>
      {{ filmeAssistido.genero }} - {{ filmeAssistido.ano }}
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

  <h2>Séries Assistidas</h2>
  <v-card v-for="serieAssistida in seriesAssistidas" :key="serieAssistida.id" class="border-lg" max-width="350" outlined>
    <v-img
      src="/imagens/exemplo.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title class="text-h6">
      {{ serieAssistida.titulo }}
    </v-card-title>

    <v-card-subtitle>
      {{ serieAssistida.genero }} - {{ serieAssistida.ano }}
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
import { computed } from 'vue';

const store = entretenimentoStore()

const filmesAssistidos = computed(() => store.filmesAssistidos)
const seriesAssistidas = computed(() => store.seriesAssistidas)

</script>

<style>

</style>
