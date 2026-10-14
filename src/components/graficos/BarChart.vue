<template>
  <v-card class="rounded-lg bg-grey-darken-4 pa-4" height="300">
    <Bar :data="chartData" :options="chartOptions" />
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { entretenimentoStore } from '@/stores/entretenimentoStore'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const store = entretenimentoStore()

const generos = computed(() => {
  const generosFilmes = store.filmes.map((filme) => filme.genero)
  const generosSeries = store.series.flatMap((serie) => serie.generos ?? [])

  return [...new Set([...generosFilmes, ...generosSeries].filter(Boolean))].sort()
})

const chartData = computed(() => ({
  labels: generos.value,
  datasets: [
    {
      label: 'Filmes',
      data: generos.value.map(
        (genero) => store.filmes.filter((filme) => filme.genero === genero).length,
      ),
      backgroundColor: '#42b983',
    },
    {
      label: 'Séries',
      data: generos.value.map(
        (genero) => store.series.filter((serie) => (serie.generos ?? []).includes(genero)).length,
      ),
      backgroundColor: '#03A9F4',
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        precision: 0,
      },
    },
  },
}
</script>
