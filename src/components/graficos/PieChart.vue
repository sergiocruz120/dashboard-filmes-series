<template>
  <v-card class="rounded-lg bg-grey-darken-4 pa-4" height="300">
    <Pie :data="chartData" :options="chartOptions" />
  </v-card>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { entretenimentoStore } from '@/stores/entretenimentoStore'

const store = entretenimentoStore()

const assistidos = computed(() => store.filmesAssistidos.length + store.seriesAssistidas.length)
const naoAssistidos = computed(
  () => store.filmesNaoAssistidos.length + store.seriesNaoAssistidas.length,
)

// ⬇️ Registro dos módulos necessários
ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels)

// ⬇️ Dados do gráfico
const chartData = ref({
  labels: ['Assistidos', 'Não Assistidos'],
  datasets: [
    {
      data: [assistidos.value, naoAssistidos.value],
      backgroundColor: ['#4CAF50', '#EF5350'],
    },
  ],
})

// ⬇️ Configurações do gráfico
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      formatter: (value, context) => {
        const data = context.chart.data.datasets[0].data
        const total = data.reduce((acc, val) => acc + val, 0)
        const percentage = ((value / total) * 100).toFixed(1)
        return `${percentage}%`
      },
      color: '#fff',
      font: {
        weight: 'bold',
        size: 18,
      },
    },
  },
})
</script>

<style scoped></style>
