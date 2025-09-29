<template>
  <v-container>
    <h1>Lista de Filmes</h1>
    <v-row no-gutters>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        class="pa-2"
        v-for="filme in filmes"
        :key="filme.id"
      >
        <CartaoFilme :filme="filme" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore'
import { computed } from 'vue'

const store = entretenimentoStore()

const filmes = computed(() => store.filmes)

import CartaoFilme from '@/components/filmes/CartaoFilme.vue'
</script>

<style></style>
