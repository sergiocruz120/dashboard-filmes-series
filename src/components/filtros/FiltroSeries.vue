<template>
  <!-- <h1>Séries</h1> -->
  <v-row no-gutters class="mt-5">
    <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="2" xxl="2" v-for="serie in series" :key="serie.id">
      <v-card class="border-md my-1 mx-1" outlined>
        <v-img src="../../../public/interstellar_feat.jpg" height="300px" class="d-flex align-end" cover>

          <v-card-title class="text-h5 text-start">
            {{ serie.titulo }}
          </v-card-title>
        </v-img>

        <v-card-subtitle class="text-start mt-2">
          {{ serie.genero }} Ano: {{ serie.ano }}
        </v-card-subtitle>

        <v-card-text class="text-start">
          Esta é uma descrição simples do conteúdo do card. Pode conter detalhes como ano, gênero ou status.
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
import { computed } from 'vue';
import { entretenimentoStore } from '@/stores/entretenimentoStore';
const store = entretenimentoStore()


const series = computed(() => store.series)
</script>

<style>

</style>
