<template>
  <v-navigation-drawer class="bg-dark" v-model="store.BarraLateral">
    <v-list-item class="text-center" title="Menu" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>

    <v-list>
      <v-row no-gutters>
        <v-col cols="12">
          <v-list-item
            class="pl-12"
            to="/filtro/filme"
            link
            prepend-icon="mdi-home"
            title="Início"
          ></v-list-item>
        </v-col>

        <v-col cols="12">
          <v-list-item
            class="pl-12"
            to="/filmes"
            link
            prepend-icon="mdi-movie-open"
            title="Filmes"
          ></v-list-item>
        </v-col>

        <v-col cols="12">
          <v-list-item
            class="pl-12"
            to="/series"
            link
            prepend-icon="mdi-television"
            title="Séries"
          ></v-list-item>
        </v-col>

        <v-col cols="12">
          <v-list-item
            class="pl-12"
            to="/assistidos"
            link
            prepend-icon="mdi-movie"
            title="Assistidos"
          />
        </v-col>

        <v-col cols="12">
          <v-list-item
            class="pl-12"
            to="/estatisticas"
            link
            prepend-icon="mdi-chart-bar"
            title="Estatísticas"
          ></v-list-item>
        </v-col>
      </v-row>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { uiStore } from '@/stores/uiStore'

const store = uiStore()
</script>

<style></style>
