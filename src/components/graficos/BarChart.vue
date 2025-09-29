<!-- src/components/BarChart.vue -->
<template>
  <v-card class="rounded-lg bg-grey-darken-4 pa-4" height="300">
    <Bar :data="chartData" :options="chartOptions"/>
  </v-card>
</template>

<script>
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

// ⬇️ Aqui é onde você registra os módulos do Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar,
  },
  data() {
    return {
      chartData: {
        labels: ['Ação', 'Comédia', 'Aventura', 'Ficção'],
        datasets: [
          {
            label: 'Filmes',
            data: [15, 28, 21, 10],
            backgroundColor: '#42b983',
            // maxBarThickness: 99,
            categoryPercentage: 0.7,
            barPercentage: 1.0,
          },
          {
            label: 'Série',
            data: [18, 20, 5, 23],
            backgroundColor: '#03A9F4',
            // maxBarThickness: 99,
            categoryPercentage: 0.7,
            barPercentage: 1.0,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true,
            min: 0, // valor mínimo do eixo Y
            max: 30, // valor máximo do eixo Y
            ticks: {
              stepSize: 5, // intervalo entre os valores
            },
            grid: {
              lineWidth: 1, // ⬅️ espessura da linha da grade
              color: '#ccc', // cor da grade
            },
          },
          x: {
            stacked: false,
            grid: {
              lineWidth: 1,
              color: '#eee',
              display: false,
            },
          },
        },
      },
    }
  },
}
</script>

<style scoped>
/* Estilize como quiser */
</style>
