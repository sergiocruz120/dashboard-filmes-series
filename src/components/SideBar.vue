<template>
  <v-navigation-drawer temporary v-model="store.BarraLateral">
    <v-list-item title="Menu" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>

    <v-list>
      <v-list-item link prepend-icon="mdi-home" title="Início"></v-list-item>
      <v-list-item link prepend-icon="mdi-movie-open" title="Filmes"></v-list-item>
      <v-list-item link prepend-icon="mdi-television" title="Séries"></v-list-item>
      <v-list-item link prepend-icon="mdi-movie" title="Assistidos"></v-list-item>
      <v-list-item link prepend-icon="mdi-chart-bar" title="Estatísticas"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useUiStore } from '@/stores/ui'
const store = useUiStore()

</script>

<style></style>
