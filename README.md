# Dashboard de Filmes e Séries

Aplicação web para organizar filmes e séries, acompanhar conteúdos assistidos e visualizar estatísticas da coleção.

O projeto foi desenvolvido como prática de frontend com Vue 3. Ele reúne formulários, filtros combináveis, gerenciamento de estado, persistência local, rotas aninhadas e gráficos em uma interface responsiva construída com Vuetify.

## Funcionalidades

- Cadastro de filmes com título, gênero e ano.
- Cadastro de séries com seus respectivos episódios.
- Listagem e remoção de filmes e séries.
- Marcação de filmes e episódios como assistidos.
- Busca de títulos por texto.
- Filtros combináveis por gênero e ano.
- Visualização separada de conteúdos assistidos e não assistidos.
- Gráfico com a proporção de conteúdos assistidos.
- Persistência dos dados no navegador.
- Navegação responsiva com barra lateral e rotas aninhadas.

## Tecnologias

- [Vue 3](https://vuejs.org/) com Composition API
- [Pinia](https://pinia.vuejs.org/) para gerenciamento de estado
- [Vue Router](https://router.vuejs.org/) para navegação
- [Vuetify](https://vuetifyjs.com/) para componentes de interface
- [Chart.js](https://www.chartjs.org/) e [vue-chartjs](https://vue-chartjs.org/) para gráficos
- [VueUse](https://vueuse.org/) e `pinia-plugin-persistedstate` para persistência local
- [Vite](https://vite.dev/) como ferramenta de desenvolvimento e build
- [Vitest](https://vitest.dev/) e Vue Test Utils na estrutura de testes
- ESLint e Prettier para qualidade e padronização do código

## Como o projeto está organizado

```text
src/
├── components/
│   ├── filmes/        # Formulário e cartão de filmes
│   ├── filtros/       # Visões filtradas da coleção
│   ├── graficos/      # Gráficos de barras e pizza
│   └── series/        # Formulário, cartão e episódios
├── plugins/           # Configuração do Vuetify
├── router/            # Rotas e navegação da aplicação
├── stores/            # Estado global e persistência
├── views/             # Páginas principais
└── __tests__/         # Estrutura inicial de testes
```

O estado de filmes e séries fica centralizado na store `entretenimentoStore`. As páginas consomem esse estado por meio de propriedades computadas, enquanto as ações da store cuidam das inclusões, remoções e alterações de status.

Os dados são armazenados localmente no navegador. Portanto, esta versão não exige cadastro, servidor ou banco de dados externo.

## Como executar

### Pré-requisitos

- Node.js `20.19` ou `22.12` e versões superiores compatíveis
- npm

### Instalação

```bash
git clone https://github.com/sergiocruz120/dashboard-filmes-series.git
cd dashboard-filmes-series
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Acesse o endereço exibido pelo Vite no terminal.

### Build de produção

```bash
npm run build
npm run preview
```

## Scripts disponíveis

| Comando                      | Descrição                                             |
| ---------------------------- | ----------------------------------------------------- |
| `npm run dev`                | Inicia o servidor de desenvolvimento.                 |
| `npm run build`              | Gera o build otimizado de produção.                   |
| `npm run preview`            | Executa localmente o build de produção.               |
| `npm run lint`               | Verifica e corrige problemas encontrados pelo ESLint. |
| `npm run format`             | Formata os arquivos da pasta `src`.                   |
| `npm run test:unit -- --run` | Executa os testes unitários uma vez.                  |

## Estado atual de qualidade

| Verificação          | Estado             |
| -------------------- | ------------------ |
| Build de produção    | Aprovado           |
| ESLint               | Aprovado           |
| Testes automatizados | 5 testes aprovados |

Os testes automatizados cobrem as operações principais da store, a atualização do status de séries com base nos episódios e a combinação dos filtros de título, gênero e ano.

## Limitações conhecidas

- Os dados ficam disponíveis apenas no navegador em que foram cadastrados.
- Não há autenticação nem sincronização entre dispositivos.
- As imagens dos cartões ainda são estáticas.
- A suíte de testes ainda não cobre os componentes visuais.

## Próximos passos

- Ampliar os testes unitários e adicionar testes dos componentes visuais.
- Permitir imagens personalizadas para filmes e séries.
- Melhorar validações e mensagens de feedback dos formulários.
- Otimizar o carregamento dos pacotes no build de produção.
- Publicar uma demonstração online.

## Autor

Desenvolvido por [Sergio Cruz](https://github.com/sergiocruz120).

- [LinkedIn](https://www.linkedin.com/in/s%C3%A9rgio-cruz-49aa69227/)
- [E-mail](mailto:sergiocruz1200@gmail.com)
