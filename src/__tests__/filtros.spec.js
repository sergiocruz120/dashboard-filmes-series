import { describe, expect, it } from 'vitest'
import { filtrarSeries, obterGenerosSeries } from '@/shared/utils/filtros'

const series = [
  { id: 1, titulo: 'Dark', ano: 2017, generos: ['Drama', 'Ficção Científica'] },
  { id: 2, titulo: 'Arcane', ano: 2021, generos: ['Animação', 'Fantasia'] },
  { id: 3, titulo: 'Fallout', ano: 2024, generos: ['Ação', 'Ficção Científica'] },
]

describe('filtros de séries', () => {
  it('retorna os gêneros únicos em ordem alfabética', () => {
    expect(obterGenerosSeries(series)).toEqual([
      'Animação',
      'Ação',
      'Drama',
      'Fantasia',
      'Ficção Científica',
    ])
  })

  it('combina busca por título, gênero e ano', () => {
    expect(
      filtrarSeries(series, {
        busca: 'fall',
        genero: 'Ficção Científica',
        ano: 2024,
      }),
    ).toEqual([series[2]])
  })

  it('retorna todas as séries quando não há filtros', () => {
    expect(filtrarSeries(series)).toEqual(series)
  })
})
