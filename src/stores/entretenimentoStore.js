import { defineStore } from 'pinia'

export const entretenimentoStore = defineStore('entretenimentoStore', {
  state: () => ({
    filmes: [
      { id: 1, titulo: 'Matrix', ano: 1999, assistido: false, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaPU-uCfPub-U9HmLBQRYMBakUGTHKpsvjtw&s' },
      { id: 2, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', ano: 2001, assistido: true, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgtg3qNoPZmyKlcdQ3uX9Wx2EhkF-ny78LA&s' },
      { id: 3, titulo: 'Interestelar', ano: 2014, assistido: false, url:'https://isabelaboscov.com/wp-content/uploads/2016/08/interstellar_feat.jpg?w=1038&h=520&crop=1' },
      { id: 4, titulo: 'Clube da Luta', ano: 1999, assistido: true, url: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fa086dc9-2c08-4c47-9391-66c59aba3077/compose?aspectRatio=1.78&format=webp&width=1200' },
      { id: 5, titulo: 'A Origem', ano: 2010, assistido: false, url:'https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABd6Hrg4NFsGPVaXTo7_H_6K3KHel1XgYJ8eqnkVZP5vZ5eHB0BwajXldUHuTj8lubQcBjzmMJLeUl7lS7dOdO59Fj8FIYH1h8LOG.jpg?r=071' },
    ],
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
    marcarFilmeAssistido(id) {
      const filme = this.filmes.find((f) => f.id === id)
      if (filme) {
        filme.assistido = true
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
