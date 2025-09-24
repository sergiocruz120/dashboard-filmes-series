<template>
  <v-container>
    <v-card>

      <v-card-title>{{ episodio.titulo }}</v-card-title>

      <v-card-item> Assistido - {{ episodio.assistido }}</v-card-item>

      <v-card-item> id - {{ episodio.id }}</v-card-item>

      <v-card-item> id - {{ episodio.numero }}</v-card-item>

      <v-card-actions>
        <v-checkbox :label="assistido ? 'Assistido' : 'Não assistido'" v-model="assistido" density="compact"
          color="success" />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore';
import { computed } from 'vue';
const store = entretenimentoStore()

const props = defineProps({
  episodio: {
    type: Object,
    required: true
  },
  idSerie: {
    type: Number,
    required: true
  }
})

const assistido = computed({
  get: () => props.episodio.assistido,
  set: (val) => store.marcarEpisodioAssistido( props.idSerie, props.episodio.id, val)
})

</script>

<style></style>
