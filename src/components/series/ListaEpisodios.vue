<template>
    <v-card class="border-md">
      <v-row no-gutters>
        <v-col cols="12">
          <v-img gradient="to bottom, rgba(0,0,0,0.0) 40%, rgba(0,0,0,1) 100%" src="../../../public/origem.jpg" cover>
            <v-row class="align-center">
              <v-col cols="12">
                <v-card-title class="">{{ episodio.titulo }} - {{ episodio.numero }}</v-card-title>
              </v-col>

              <v-col cols="12" class="">
                <v-card-text class="">
                  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </v-card-text>
              </v-col>
            </v-row>

          </v-img>

        </v-col>

        <v-col cols="12" class="border">

            <v-checkbox
            icon
            class="checkbox d-flex"
            :label="assistido ? 'Assistido' : 'Não assistido'"
            v-model="assistido"
            density="compact"
            color="success"
            />
        </v-col>
      </v-row>
    </v-card>
</template>

<script setup>
import { entretenimentoStore } from '@/stores/entretenimentoStore'
import { computed } from 'vue'
const store = entretenimentoStore()

const props = defineProps({
  episodio: {
    type: Object,
    required: true,
  },
  idSerie: {
    type: Number,
    required: true,
  },
})

const assistido = computed({
  get: () => props.episodio.assistido,
  set: (val) => store.marcarEpisodioAssistido(props.idSerie, props.episodio.id, val),
})
</script>

<style scoped>

</style>
