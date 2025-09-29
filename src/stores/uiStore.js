import { defineStore } from 'pinia'

export const uiStore = defineStore('uiStore', {
  state: () => ({
    BarraLateral: false,
    episodios: false,
  }),

  actions: {
    AbrirBarraLateral() {
      this.BarraLateral = !this.BarraLateral
    },
    // exibirEpisodios() {
    //   this.episodios = !this.episodios
    // }
  },
})
