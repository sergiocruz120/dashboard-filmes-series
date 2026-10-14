<template>
  <v-card class="rounded-lg bg-grey-darken-4 pa-4" height="300">
    <Pie :data="chartData" :options="chartOptions" />
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { entretenimentoStore } from '@/stores/entretenimentoStore'

ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels)

const store = entretenimentoStore()

const assistidos = computed(() => store.filmesAssistidos.length + store.seriesAssistidas.length)
const naoAssistidos = computed(
  () => store.filmesNaoAssistidos.length + store.seriesNaoAssistidas.length,
)

const chartData = computed(() => ({
  labels: ['Assistidos', 'Não assistidos'],
  datasets: [
    {
      data: [assistidos.value, naoAssistidos.value],
      backgroundColor: ['#4CAF50', '#EF5350'],
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      formatter: (value, context) => {
        const data = context.chart.data.datasets[0].data
        const total = data.reduce((acc, item) => acc + item, 0)

        if (total === 0) return '0%'

        return `${((value / total) * 100).toFixed(1)}%`
      },
      color: '#fff',
      font: {
        weight: 'bold',
        size: 18,
      },
    },
  },
}
</script>
