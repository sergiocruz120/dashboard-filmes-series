<template>
  <v-container fluid>
    <SideBar />
    <TopBar />
    <router-view />
  </v-container>
</template>

<script setup>
import TopBar from '@/components/TopBar.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<style></style>
