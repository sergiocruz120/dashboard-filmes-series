import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    BarraLateral: false,
  }),

  actions: {
    AbrirBarraLateral() {
      this.BarraLateral = !this.BarraLateral
    },
  },
  persist: true,
})
