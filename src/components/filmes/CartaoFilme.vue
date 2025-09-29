<template>
  <v-card class="d-flex flex-column card-hover">
    <v-img gradient="to bottom, rgba(0,0,0,0.0) 50%, rgba(0,0,0,1) 100%" src="../../../public/origem.jpg" height="300" class="d-flex align-end" cover>
      <v-card-title>{{ filme.titulo }}</v-card-title>
    </v-img>

    <!-- <v-card-title>{{ filme.id }}</v-card-title> -->

    <v-row no-gutters>
      <v-col cols="6" class="text-start mt-2 text-green-accent-4">
        <v-card-subtitle class="text-subtitle-1">
          {{ filme.genero }}
        </v-card-subtitle>
      </v-col>

      <v-col cols="6" class="text-end mt-2">
        <v-card-subtitle> Ano - {{ filme.ano }} </v-card-subtitle>
      </v-col>
    </v-row>

    <v-card-text>
      Esta é uma descrição simples do conteúdo do card. Pode conter detalhes como ano, gênero ou
      status.
    </v-card-text>

    <v-row no-gutters class="mt-4">
      <v-col cols="6" class="d-flex align-start">
        <v-btn icon @click="assistido = !assistido">
          <v-icon :color="assistido ? 'success' : 'grey'">
            {{ assistido ? 'mdi-check-circle' : 'mdi-eye-outline' }}
          </v-icon>
        </v-btn>
      </v-col>

      <v-col cols="6" class="d-flex align-center justify-end">
        <v-btn variant="plain" density="compact" color="red" @click="removerFilme">Remover</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { entretenimentoStore } from '@/stores/entretenimentoStore'
const store = entretenimentoStore()

const props = defineProps({
  filme: {
    type: Object,
    required: true,
  },
})

// Computed reativo para evitar mutação direta da prop
const assistido = computed({
  get: () => props.filme.assistido,
  set: (val) => store.marcarFilmeAssistido(props.filme.id, val),
})

// Função para remover o filme da store
function removerFilme() {
  store.removerFilme(props.filme.id)
}
</script>

<style scoped>
.card-hover:hover {
  transform: scale(1.05);
  transition: all 0.5s ease;
  cursor: pointer;
}
</style>
