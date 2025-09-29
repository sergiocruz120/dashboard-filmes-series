<template>
  <v-container>
    <v-card class="border pa-4 mt-10">
      <v-row>
        <v-col>
          <h2>Filmes Assistidos</h2>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="text-end mr-2 my-auto">
          <h2>Total: {{ filmes.length }}</h2>
        </v-col>
      </v-row>
    </v-card>

    <v-row class="mt-5" no-gutters>
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
      xxl="2"
      v-for="filmeAssistido in filmes"
      :key="filmeAssistido.id"
    >
      <v-card class="border-md my-1 mx-1" outlined>
        <v-img src="../../../public/images.jpeg" height="300px" class="d-flex align-end" cover>
          <v-card-title class="text-h6 text-start">
            {{ filmeAssistido.titulo }}
          </v-card-title>
        </v-img>

        <v-card-subtitle class="text-start mt-2">
          {{ filmeAssistido.genero }} - {{ filmeAssistido.ano }}
        </v-card-subtitle>

        <v-card-text class="text-start">
          Esta é uma descrição simples do conteúdo do card. Pode conter detalhes como ano, gênero ou
          status.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>


    <v-card class="border pa-4 mt-10">
      <v-row>
        <v-col>
          <h2>Séries Assistidas</h2>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="text-end mr-2 my-auto">
          <h2>Total: {{ series.length }}</h2>
        </v-col>
      </v-row>
    </v-card>

    <v-row class="mt-5" no-gutters>
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
      xxl="2"
      v-for="serieAssistida in series"
      :key="serieAssistida.id"
    >
      <v-card class="border-md my-1 mx-1" outlined>
        <v-img
          src="../../../public/aneis.jpg"
          height="300px"
          class="d-flex align-end text-black"
          cover
        >
          <v-card-title class="text-h5 text-start">
            {{ serieAssistida.titulo }}
          </v-card-title>
        </v-img>

        <v-card-subtitle class="text-start mt-2">
          {{ serieAssistida.genero }} Ano: {{ serieAssistida.ano }}
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

    <v-card class="border pa-4 mt-4">
      <v-row>
        <v-col cols="12" class="text-center">
          <h3>Total de itens assistidos: {{ filmes.length + series.length }}</h3>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore'
import { computed } from 'vue'
const store = entretenimentoStore()

const filmes = computed(() => store.filmesAssistidos)
const series = computed(() => store.seriesAssistidas)
</script>

<style></style>
