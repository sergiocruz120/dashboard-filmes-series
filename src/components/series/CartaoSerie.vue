<template>
  <v-card class="mb-1">
    <div class="pa-1 border">

      <v-card-title>{{ serie.titulo }}</v-card-title>
      <v-card-title>{{ serie.id }}</v-card-title>

      <v-card-subtitle class="pt-4">
           {{ serie.ano }}
        <h3>{{ serie.genero }}</h3>
      </v-card-subtitle>

      <v-card-text>
        <v-checkbox :label="assistido ? 'Assistido' : 'Não assistido'" v-model="assistido" density="compact"
          color="success" />
      </v-card-text>

      <v-card-actions>
        <v-btn variant="outlined" density="compact" color="red" @click="removerSerie">Remover</v-btn>
      </v-card-actions>
    </div>

  </v-card>
</template>

<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore';
import { computed } from 'vue';

const store = entretenimentoStore()

const props = defineProps({
  serie: {
    type: Object,
    require: true
  },
})

const assistido = computed({
  get: () => props.serie.assistida,
  set: (val) => store.marcarSerieAssistida(props.serie.id, val)
})

function removerSerie() {
  store.removerSerie(props.serie.id)
}

</script>

<style>

</style>
