  import { defineStore } from "pinia";

  export const entretenimentoStore = defineStore('entretenimentoStore', {
    state: () => ({
      filmes: [],
      series: []

    }),

    actions: {
      adicionarFilme(dados) {
          this.filmes.push(dados)
      },
      removerFilme(id) {
        this.filmes = this.filmes.filter(filmes => filmes.id !== id)
      },
      marcarFilmeAssistido(id) {
        const filme = this.filmes.find(f => f.id === id);
    if (filme) {
      filme.assistido = true;
    }
      },
      adicionarSerie(dados) {
        this.series.push(dados)
      },
      removerSerie(id) {
        this.series = this.series.filter(serie => serie.id !== id)
      },
      marcarSerieAssistida(id) {
        const serie = this.series.find(s => s.id === id)
        if(serie) {
          serie.assistida = true
        }
      },
      masrcarEpisodioAssistido(idSerie, idEpisodio) {
        const serie = this.series.find(s => s.id === idSerie)
        if(serie) {
          const episodio = serie.episodios.find(e => e.id === idEpisodio)
        if(episodio) {
          episodio.assistido = true
        }
        }
      }
    },
    persist: true
  })
