<template>
    <v-app-bar class="border-b" flat>
      <v-app-bar-nav-icon @click="abrirFechar"></v-app-bar-nav-icon>
      <v-toolbar-title>Minha aplicação</v-toolbar-title>
    </v-app-bar>
</template>

<script setup>
import { useUiStore } from '@/stores/ui';
import { computed } from 'vue';

const store = useUiStore()
const abrirFechar = computed(() => store.AbrirBarraLateral)


</script>

<style>

</style>
