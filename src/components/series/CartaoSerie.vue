<template>
  <v-card class="border-lg">
    <v-img height="150" src="../../../public/interstellar_feat.jpg" cover>
      <v-card-title class="text-black">{{ serie.titulo }}</v-card-title>
    </v-img>

    <v-row noGutters class="justify-space-around border mt-">
      <v-col cols="2" class="d-flex align-center justify-center">
        <v-card-subtitle class="text-subtitle-1">{{ serie.ano }}</v-card-subtitle>
      </v-col>

      <v-col cols="2" class="d-flex align-center justify-center">
        <v-card-subtitle class="text-subtitle-1">{{ serie.generos[0] }}</v-card-subtitle>
      </v-col>

      <v-col cols="2" class="d-flex align-center justify-center">
        <v-btn icon @click="mostrarEpisodios = !mostrarEpisodios">
          <v-icon :icon="mostrarEpisodios ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
        </v-btn>
      </v-col>

      <v-col cols="2" class="d-flex align-center justify-center mr-4">
        <v-card-actions>
          <v-btn variant="tonal" density="compact" color="red" @click="removerSerie"
            >Remover</v-btn
          ></v-card-actions
        >
      </v-col>
    </v-row>


      <v-card v-show="mostrarEpisodios"  max-height="80vh" class="overflow-y-auto pa-4">
        <v-row no-gutters>
          <v-col
          class="pa-1"
            v-for="episodio in serie.episodios"
            :key="episodio.id"
            cols="12"
            sm="12"
            md="12"
            lg="6"
            xl="6 "
          >
            <ListaEpisodios :episodio="episodio" :idSerie="serie.id" />
          </v-col>
        </v-row>
      </v-card>

  </v-card>
</template>

<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore'
import ListaEpisodios from '@/components/series/ListaEpisodios.vue'
import { ref } from 'vue'

const store = entretenimentoStore()

const props = defineProps({
  serie: {
    type: Object,
    required: true,
  },
})

const mostrarEpisodios = ref(false)

function removerSerie() {
  store.removerSerie(props.serie.id)
}
</script>

<style scoped></style>
