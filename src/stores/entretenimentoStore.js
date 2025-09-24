import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const entretenimentoStore = defineStore('entretenimentoStore', {
  state: () => ({
    filmes: useStorage('filmes', []),
    series: useStorage('series', []),
  }),

  getters: {
    filmesAssistidos() {
      return this.filmes.filter((f) => f.assistido === true)
    },
    filmesNaoAssistidos() {
      return this.filmes.filter((f) => f.assistido === false)
    },
    seriesAssistidas() {
      return this.series.filter((s) => s.assistida === true)
    },
    seriesNaoAssistidas() {
      return this.series.filter((s) => s.assistida === false)
    },
  },

  actions: {
    adicionarFilme(dados) {
      this.filmes.push(dados)
    },
    removerFilme(id) {
      this.filmes = [...this.filmes.filter(filme => filme.id !== id)]
    },
    marcarFilmeAssistido(id, val) {
      const filme = this.filmes.find((f) => f.id === id)
      if (filme) {
        filme.assistido = val
      }
    },
    adicionarSerie(dados) {
      this.series.push(dados)
    },
    removerSerie(id) {
      this.series = this.series.filter((serie) => serie.id !== id)
    },
    marcarSerieAssistida(id, val) {
      const serie = this.series.find((s) => s.id === id)
      if (serie) {
        serie.assistida = val
      }
    },
    marcarEpisodioAssistido(idSerie, idEpisodio, val) {
      const serie = this.series.find((s) => s.id === idSerie)
      if (serie) {
        const episodio = serie.episodios.find((e) => e.id === idEpisodio)
        if (episodio) {
          episodio.assistido = val
        }
      }
    },
  },
})
