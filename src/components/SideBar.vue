<template>
  <v-navigation-drawer temporary v-model="store.BarraLateral">
    <v-list-item title="Menu" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>

    <v-list>
      <v-list-group value="Home">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-home" title="Home">
          </v-list-item>
        </template>

        <v-list-item link prepend-icon="mdi-account" title="User">
        </v-list-item>
      </v-list-group>
      <v-list-item color="primary" v-for="(item, index) in menuItems" :key="index" :to="item.link" link>

        <v-list-item-title class="d-flex">
          <v-icon class="mr-7">
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useUiStore } from '@/stores/ui';
const store = useUiStore()

const menuItems = [
  { icon: 'mdi-home', title: 'Início' },
  { icon: 'mdi-movie-open', title: 'Filmes' },
  { icon: 'mdi-television-classic', title: 'Séries' },
  { icon: 'mdi-fire', title: 'Em Alta' },
  { icon: 'mdi-new-box', title: 'Lançamentos' },
  { icon: 'mdi-magnify', title: 'Buscar' },
  { icon: 'mdi-star-outline', title: 'Favoritos' },
  { icon: 'mdi-clock-outline', title: 'Assistir Depois' },
  { icon: 'mdi-chart-bar', title: 'Estatísticas' },
  { icon: 'mdi-cog-outline', title: 'Configurações' }
]



</script>

<style></style>
