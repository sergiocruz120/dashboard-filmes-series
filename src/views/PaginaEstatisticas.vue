<template>
  <v-container>
    <h1>Gráficos</h1>
    <v-row  >

      <v-col>
        <PieChart />
      </v-col>

      <v-col>
        <BarChart />
      </v-col>

    </v-row>
    <hr>
  </v-container>
</template>

<script setup>
import BarChart from '@/components/graficos/BarChart.vue';
import PieChart from '@/components/graficos/PieChart.vue';

</script>

<style>

</style>
