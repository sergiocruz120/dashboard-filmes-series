export function obterGenerosSeries(series) {
  return [...new Set(series.flatMap((serie) => serie.generos ?? []).filter(Boolean))].sort()
}

export function filtrarSeries(series, { busca = '', genero = null, ano = null } = {}) {
  const termo = busca?.trim().toLocaleLowerCase('pt-BR') ?? ''

  return series.filter((serie) => {
    const titulo = serie.titulo?.toLocaleLowerCase('pt-BR') ?? ''
    const tituloCorresponde = titulo.includes(termo)
    const generoCorresponde = !genero || (serie.generos ?? []).includes(genero)
    const anoCorresponde = !ano || serie.ano === ano

    return tituloCorresponde && generoCorresponde && anoCorresponde
  })
}
