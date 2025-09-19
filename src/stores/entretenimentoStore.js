import { defineStore } from 'pinia'

export const entretenimentoStore = defineStore('entretenimentoStore', {
  state: () => ({
    filmes: [],
    series: [
      {
        id: 1,
        titulo: 'Stranger Things',
        ano: 2016,
        assistido: false,
        episodios: [
          { id: 101, titulo: 'Capítulo 1: O Desaparecimento de Will Byers', assistido: true },
          { id: 102, titulo: 'Capítulo 2: A Estranha da Rua Maple', assistido: false },
          { id: 103, titulo: 'Capítulo 3: Luzes de Natal', assistido: false },
        ],
      },
      {
        id: 2,
        titulo: 'Breaking Bad',
        ano: 2008,
        assistido: true,
        episodios: [
          { id: 201, titulo: 'Pilot', assistido: true },
          { id: 202, titulo: 'Cat’s in the Bag...', assistido: true },
          { id: 203, titulo: '...And the Bag’s in the River', assistido: true },
        ],
      },
      {
        id: 3,
        titulo: 'The Office',
        ano: 2005,
        assistido: false,
        episodios: [
          { id: 301, titulo: 'The Dundies', assistido: false },
          { id: 302, titulo: 'Sexual Harassment', assistido: false },
          { id: 303, titulo: 'Office Olympics', assistido: false },
        ],
      },
    ],
  }),

  actions: {
    adicionarFilme(dados) {
      this.filmes.push(dados)
    },
    removerFilme(id) {
      this.filmes = this.filmes.filter((filmes) => filmes.id !== id)
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
    marcarSerieAssistida(id) {
      const serie = this.series.find((s) => s.id === id)
      if (serie) {
        serie.assistida = true
      }
    },
    masrcarEpisodioAssistido(idSerie, idEpisodio) {
      const serie = this.series.find((s) => s.id === idSerie)
      if (serie) {
        const episodio = serie.episodios.find((e) => e.id === idEpisodio)
        if (episodio) {
          episodio.assistido = true
        }
      }
    },
  },
  persist: true,
})
