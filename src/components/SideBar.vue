<template>
  <v-navigation-drawer class="bg-" v-model="store.BarraLateral">
    <v-list-item class="text-center" title="Menu" subtitle=""></v-list-item>
    <v-divider></v-divider>

    <v-list>
      <router-link to="/filtro">
        <v-list-item link prepend-icon="mdi-home" title="Início"></v-list-item>
      </router-link>

      <router-link to="/filmes">
        <v-list-item link prepend-icon="mdi-movie-open" title="Filmes"></v-list-item>
      </router-link>

      <router-link to="/series">
        <v-list-item link prepend-icon="mdi-television" title="Séries"></v-list-item>
      </router-link>

      <router-link to="/assistidos">
        <v-list-item link prepend-icon="mdi-movie" title="Assistidos" />
      </router-link>

      <v-list-item link prepend-icon="mdi-chart-bar" title="Estatísticas"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useUiStore } from '@/stores/ui'
const store = useUiStore()

</script>

<style></style>
