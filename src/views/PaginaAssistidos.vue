<template>
  <v-container fluid>

      <v-row class="border mt-2 pa-1 bg-grey-darken-4">
        <v-col>
          <h2>Filmes Assistidos</h2>
        </v-col>

        <v-col class="text-end mr-5 my-auto">
          <h2> Total: {{ filmes.length }}</h2>
        </v-col>
      </v-row>


    <v-row class="border">
      <v-col cols="2" v-for="filme in filmes" :key="filme.id"  class="bg-light-blue-darken-2 border d-flex-column ma-1">

        <v-card-title>{{ filme.titulo }}</v-card-title>

        <v-card-item class="pt-4">
          - {{ filme.ano }}
        </v-card-item>
        <v-card-item>
          - {{ filme.genero }}
        </v-card-item>
      </v-col>
    </v-row>


    <v-card class="border pa-4 mt-10">
      <v-row>
        <v-col>
          <h1>Séries Assistidas</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="text-end mr-2 my-auto">
          <h2>Total: {{ series.length }}</h2>
        </v-col>
      </v-row>
    </v-card>

    <v-row class="border">
      <v-col cols="3" v-for="(serie) in series" :key="serie.id" class="border">

        <v-card-title>{{ serie.titulo }}</v-card-title>
        <v-card-item> - {{ serie.id }}</v-card-item>
        <v-card-item> - {{ serie.ano }}</v-card-item>

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
import { entretenimentoStore } from '@/stores/entretenimentoStore';
import { computed } from 'vue';
const store = entretenimentoStore()

const filmes = computed(() => store.filmesAssistidos)
const series = computed(() => store.seriesAssistidas)



</script>

<style></style>
