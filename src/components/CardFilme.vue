<template>
  <v-card class="mx-auto my-4" max-width="400">
    <v-img
      class="align-end text-white"
      height="200"
      :src="filme.url"
      cover
    >
      <v-card-title>{{ filme.titulo }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ filme.ano }}
    </v-card-subtitle>

    <v-card-text>
      <v-checkbox
        :label="assistido ? 'Assistido' : 'Não assistido'"
        v-model="assistido"
        density="compact"
        color="success"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn variant="tonal" color="red" @click="removerFilme">Remover</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed } from 'vue';
import { entretenimentoStore } from '@/stores/entretenimentoStore';
const store = entretenimentoStore();

const props = defineProps({
  filme: {
    type: Object,
    required: true
  }
});

// Computed reativo para evitar mutação direta da prop
const assistido = computed({
  get: () => props.filme.assistido,
  set: (val) => {
    const filmeStore = store.filmes.find(f => f.id === props.filme.id);
    if (filmeStore) filmeStore.assistido = val;
  }
});

// Função para remover o filme da store
function removerFilme() {
     store.removerFilme(props.filme.id)
}
</script>
