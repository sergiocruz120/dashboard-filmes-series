<template>
  <v-container class="text-center" fluid>
    <v-btn to="/filtro/filme" exact active-class="btn-ativo">Filmes</v-btn>
    <v-btn to="/filtro/serie" exact active-class="btn-ativo">Séries</v-btn>
    <v-btn to="/filtro/assistido" exact active-class="btn-ativo">Assistidos</v-btn>
    <v-btn to="/filtro/nao-assistidos" exact active-class="btn-ativo">Não Assistidos</v-btn>
    <router-view />
  </v-container>
</template>

<script setup>

</script>

<style>

</style>
