<template>
  <v-app-bar class="border-b" flat>
    <v-row no-gutters>
      <v-col xs="1" sm="2" class="text-start pl-2">
        <v-app-bar-nav-icon @click="abrirFechar"></v-app-bar-nav-icon>
      </v-col>
      <v-col xs="2" sm="8" class="my-auto text-center">
        <v-app-bar-title class="text-h6">Dashboard de Filmes e Séries</v-app-bar-title>
      </v-col>
      <v-col xs="1" sm="2" class="text-end pr-2 my-auto">
        <v-menu offset-y>
          <template #activator="{ props }">

            <v-btn icon v-bind="props" rounded="xl" size="xxl">
              <v-avatar>
                <v-icon size="35" icon="mdi-account-circle"></v-icon>
              </v-avatar>
            </v-btn>
          </template>

          <v-list density="compact">
            <v-list-item link>
              <v-list-item-title>Editar Perfil</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link>
              <v-list-item-title>Configurações</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link>
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import { useUiStore } from '@/stores/ui';
import { computed } from 'vue';

const store = useUiStore()
const abrirFechar = computed(() => store.AbrirBarraLateral)


</script>

<style></style>
