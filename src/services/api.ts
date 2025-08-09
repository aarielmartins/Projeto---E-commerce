/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

const categories = [
  'promocoes',
  'acao',
  'destaque',
  'em-breve',
  'esportes',
  'luta',
  'rpg',
  'simulacao'
]

//FUNÇÃO USADA PARA CRIAR UMA SLICE DE API, OU SEJA, BUSCA DADOS
//WEB COM REDUX TOOLKIT QUERY E GERA ENDPOINTS PRONTOS PARA USAR COM HOOKS
//FETCHBASEQUERY É UMA FUNÇÃO QUE JÁ USA O FETCH POR BAIXO
const api = createApi({
  //ENDEREÇO BASE DA API
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/eplay'
  }),
  //ADICIONA UM ENDPOINT A API
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGameById: builder.query<Game | undefined, string>({
      async queryFn(id, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const results = await Promise.all(
            categories.map((cat) => fetchWithBQ(cat))
          )

          // Se alguma requisição falhar, retorna o erro
          for (const r of results) {
            if ((r as any).error) {
              return { error: (r as any).error as FetchBaseQueryError }
            }
          }

          // Junta todos os jogos de todas as categorias
          const allGames = results.map((r) => (r as any).data as Game[]).flat()

          // Encontra o jogo específico pelo ID
          const game = allGames.find((g) => String(g.id) === String(id))

          return { data: game }
        } catch (err: any) {
          return {
            error: {
              status: 'CUSTOM_ERROR',
              data: String(err)
            } as FetchBaseQueryError
          }
        }
      }
    })
  })
})

//EXTRAI O HOOK AUTOMÁTICO GERADO PELA API
export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetGameByIdQuery
} = api

export default api
