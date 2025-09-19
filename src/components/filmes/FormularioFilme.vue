<template>

    <v-sheet  class="mx-auto pa-5 mt-15" width="400">
      <!-- <v-sheet-title>Adicioanr Filme</v-sheet-title> -->
    <v-form fast-fail @submit.prevent="addFilme">

      <v-text-field
        variant="outlined"
        v-model="titulo"
        label="Título"
      ></v-text-field>

      <v-select
        variant="outlined"
        v-model="ano"
        :items="years"
        label="Ano"
        outlined>
      </v-select>

      <v-select
        v-model="genero"
        variant="outlined"
        :items="items"
        :menu-props="{ scrim: true, scrollStrategy: 'close' }"
        label="Gênero"
      ></v-select>
      <v-btn  type="Submit" variant="tonal" block >Submit</v-btn>

    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import { entretenimentoStore } from '@/stores/entretenimentoStore';
const store = entretenimentoStore()

const items = ref(['Ação', 'Aventura', 'Comédia', 'Ficção'])

const titulo = ref('')
const genero = ref('')
const ano = ref(null)

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 36 }, (_, i) => currentYear - i)

function addFilme() {

  if(!titulo.value || !genero.value || !ano.value) {
        alert('Preencha todos os campos!')
        return
  } else {

  const dados = {id: store.filmes.length + 1, titulo: titulo.value, genero: genero.value, ano: ano.value  }

  titulo.value = '',
  genero.value = '',
  ano.value = null

  store.adicionarFilme(dados)

  alert('Formulário enviado!')
  }


}
</script>

<style>

</style>
