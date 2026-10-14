import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { entretenimentoStore } from '@/stores/entretenimentoStore'

describe('entretenimentoStore', () => {
  beforeEach(() => {
    localStorage.clear()
    setActivePinia(createPinia())
  })

  it('adiciona, marca e remove um filme', () => {
    const store = entretenimentoStore()
    const filme = { id: 1, titulo: 'Origem', genero: 'Ficção', ano: 2010, assistido: false }

    store.adicionarFilme(filme)
    store.marcarFilmeAssistido(1, true)

    expect(store.filmesAssistidos).toHaveLength(1)

    store.removerFilme(1)

    expect(store.filmes).toHaveLength(0)
  })

  it('marca a série como assistida quando todos os episódios foram assistidos', () => {
    const store = entretenimentoStore()
    store.adicionarSerie({
      id: 10,
      titulo: 'Dark',
      assistida: false,
      episodios: [
        { id: 1, titulo: 'Segredos', numero: 1, assistido: false },
        { id: 2, titulo: 'Mentiras', numero: 2, assistido: false },
      ],
    })

    store.marcarEpisodioAssistido(10, 1, true)
    expect(store.series[0].assistida).toBe(false)

    store.marcarEpisodioAssistido(10, 2, true)
    expect(store.series[0].assistida).toBe(true)

    store.marcarEpisodioAssistido(10, 1, false)
    expect(store.series[0].assistida).toBe(false)
  })
})
