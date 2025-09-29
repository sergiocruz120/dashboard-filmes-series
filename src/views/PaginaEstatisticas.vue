<template>
  <v-container>
    <v-row class="mt-10">

      <v-col cols="12" md="6">
        <PieChart />
      </v-col>

      <v-col cols="12" md="6">
        <BarChart />
      </v-col>

    </v-row>
</v-container>
</template>

<script setup>
import BarChart from '@/components/graficos/BarChart.vue'
import PieChart from '@/components/graficos/PieChart.vue'
</script>

<style></style>
