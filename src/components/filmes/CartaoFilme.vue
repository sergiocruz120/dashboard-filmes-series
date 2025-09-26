<template>
  <v-card class="mb-1">
    <div class="pa-1 border">

      <v-card-title>{{ filme.titulo }}</v-card-title>
      <v-card-title>{{ filme.id }}</v-card-title>

      <v-card-subtitle class="pt-4">
        {{ filme.ano }}
        <h3>{{ filme.genero }}</h3>
      </v-card-subtitle>

      <v-row no-gutters>
        <v-col cols="6">
            <v-checkbox :label="assistido ? 'Assistido' : 'Não assistido'" v-model="assistido" density="compact"
              color="success" />
        </v-col>

        <v-col cols="6">
            <v-btn variant="outlined" density="compact" color="red" @click="removerFilme">Remover</v-btn>
        </v-col>
      </v-row>




    </div>

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
  set: (val) => store.marcarFilmeAssistido(props.filme.id, val)
});

// Função para remover o filme da store
function removerFilme() {
  store.removerFilme(props.filme.id)
}
</script>
