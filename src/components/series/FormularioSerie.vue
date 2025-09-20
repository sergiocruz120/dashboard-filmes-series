<template>
  <v-sheet class="mx-auto pa-8 mt-10" width="450">
    <v-form @submit.prevent="adicionarSerie">
      <!-- Série -->
      <v-text-field v-model="novaSerie.titulo" label="Título" variant="outlined" />

      <v-select v-model="novaSerie.ano" :items="dataAno" label="Ano" dense variant="outlined" />

      <v-select v-model="novaSerie.generos[0]" :items="generos" label="Gênero" dense variant="outlined" />

      <!-- Episódio -->
      <v-divider class="my-3" />
      <v-row dense>
        <v-col cols="9">
          <v-text-field v-model="episodioTemp.titulo" label="Ep. Título" dense variant="outlined" />
        </v-col>
        <v-col cols="3">
          <v-text-field v-model.number="episodioTemp.numero" label="Nº" type="number" variant="outlined" />
        </v-col>
      </v-row>

      <v-btn size="small" block class="mb-2" @click="adicionarEpisodio">
        + Episódio
      </v-btn>

      <v-btn type="submit" variant="tonal" block>
        Salvar Série
      </v-btn>
    </v-form>
  </v-sheet>
</template>



<script setup>
import { reactive } from 'vue'
import { entretenimentoStore } from '@/stores/entretenimentoStore'

const store = entretenimentoStore()

const dataAno = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i)
const generos = [
  'Ação',
  'Comédia',
  'Drama',
  'Suspense',
  'Terror',
  'Romance',
  'Ficção Científica',
  'Fantasia',
  'Documentário',
  'Animação'
]


const novaSerie = reactive({
  titulo: '',
  ano: null,
  generos: [null],
  assistida: false,
  episodios: []
})

// Campos temporários para adicionar episódio
const episodioTemp = reactive({
  titulo: '',
  numero: null,
  assistido: false
})

// Adiciona episódio à série
function adicionarEpisodio() {
  if (!episodioTemp.titulo || episodioTemp.numero === null) {
    alert('Preencha o título e número do episódio.')
    return
  }

  novaSerie.episodios.push({
    id: Date.now(),
    titulo: episodioTemp.titulo,
    numero: episodioTemp.numero,
    assistido: episodioTemp.assistido
  })

  // Limpa os campos temporários
  episodioTemp.titulo = ''
  episodioTemp.numero = null
  episodioTemp.assistido = false
}

// Envia série para a store
function adicionarSerie() {
  if (!novaSerie.titulo || !novaSerie.ano || novaSerie.generos.length === 0) {
    alert('Preencha todos os campos da série.')
    return
  }

  if (novaSerie.episodios.length === 0) {
    alert('Adicione pelo menos um episódio antes de salvar.')
    return
  }
  store.adicionarSerie({
      ...novaSerie,
      id: Date.now()
     })

  // Limpa o formulário
  novaSerie.titulo = ''
  novaSerie.ano = null
  novaSerie.generos = []
  novaSerie.assistida = false
  novaSerie.episodios = []

  alert('Série adicionada com sucesso!')
}
</script>


<style></style>
