<template>
  <!-- <h2>Filmes não Assistidos</h2> -->
  <v-row no-gutters class="mt-5">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
      xxl="2"
      v-for="filmeNaoAssistido in filmesNaoAssistidos"
      :key="filmeNaoAssistido.id"
    >
      <v-card class="border-md my-1 mx-1" outlined>
        <v-img gradient="to bottom, rgba(0,0,0,0.0) 50%, rgba(0,0,0,1) 100%" src="../../../public/origem.jpg" height="300px" class="d-flex align-end" cover>
          <v-card-title class="text-h6 text-start">
            {{ filmeNaoAssistido.titulo }}
          </v-card-title>
        </v-img>

        <v-card-subtitle class="text-start mt-2">
          {{ filmeNaoAssistido.genero }} - {{ filmeNaoAssistido.ano }}
        </v-card-subtitle>

        <v-card-text class="text-start">
          Esta é uma descrição simples do conteúdo do card. Pode conter detalhes como ano, gênero ou
          status.
        </v-card-text>

        <!-- <v-card-actions>
          <v-btn density="comfortable" color="primary" variant="flat">Ver mais</v-btn>
          <v-spacer></v-spacer>
          <v-btn density="comfortable" color="error" variant="outlined">Remover</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>

  <h2>Séries não Assistidas</h2>
  <v-row class="mt-2" no-gutters>
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
      xxl="2"
      v-for="serieNaoAssistida in seriesNaoAssistidas"
      :key="serieNaoAssistida.id"
    >
      <v-card class="border-md my-1 mx-1" outlined>
        <v-img src="../../../public/images.jpeg" height="300px" class="d-flex align-end" cover>
          <v-card-title class="text-h5 text-start">
            {{ serieNaoAssistida.titulo }}
          </v-card-title>
        </v-img>

        <v-card-subtitle class="text-start mt-2">
          {{ serieNaoAssistida.genero }} Ano: {{ serieNaoAssistida.ano }}
        </v-card-subtitle>

        <v-card-text class="text-start">
          Esta é uma descrição simples do conteúdo do card. Pode conter detalhes como ano, gênero ou
          status.
        </v-card-text>

        <!-- <v-card-actions>
          <v-btn density="comfortable" color="primary" variant="flat">Ver mais</v-btn>
          <v-spacer></v-spacer>
          <v-btn density="comfortable" color="error" variant="outlined">Remover</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore'

const store = entretenimentoStore()

import { computed } from 'vue'

const filmesNaoAssistidos = computed(() => store.filmesNaoAssistidos)
const seriesNaoAssistidas = computed(() => store.seriesNaoAssistidas)
</script>

<style></style>
