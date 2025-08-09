import { useEffect, useState } from 'react'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

// const promocoes: Game[] = [
//   {
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     image: resident,
//     infos: ['10%', 'R$ 250,00'],
//     system: 'Windows',
//     title: 'Resident Evil 4 - Remake',
//     id: 1
//   },
//   {
//     category: 'RPG',
//     description:
//       'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
//     image: diablo,
//     infos: ['10%', 'R$ 250,00'],
//     system: 'Windows',
//     title: 'Diablo 4',
//     id: 2
//   },
//   {
//     category: 'RPG',
//     description:
//       'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
//     image: zelda,
//     infos: ['10%', 'R$ 250,00'],
//     system: 'Windows',
//     title: 'The Legend of Zelda - TOK',
//     id: 3
//   },
//   {
//     category: 'Aventura',
//     description:
//       'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
//     image: starWars,
//     infos: ['10%', 'R$ 250,00'],
//     system: 'Windows',
//     title: 'Star Wars Jedi Survivor',
//     id: 4
//   }
// ]

// const emBreve: Game[] = [
//   {
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     image: resident,
//     infos: ['17/05'],
//     system: 'Windows',
//     title: 'Resident Evil 4 - Remake',
//     id: 6
//   },
//   {
//     category: 'RPG',
//     description:
//       'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
//     image: diablo,
//     infos: ['17/05'],
//     system: 'Windows',
//     title: 'Diablo 4',
//     id: 7
//   },
//   {
//     category: 'RPG',
//     description:
//       'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
//     image: zelda,
//     infos: ['17/05'],
//     system: 'Windows',
//     title: 'The Legend of Zelda - TOK',
//     id: 8
//   }
// ]

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

//JA EXISTE UMA CLASSE COM O NOME GAME
//UMA CLASSE TEM MAIS RECURSOS QUE UM TIPO
//COMO O SISTEMA É APENAS PARA LEITURA É MELHOR USAR O TIPO
//ESSE TIPO SE REFERE A API QUE IREMOS USAR, OS ATRIBUTOS SÃO IGUAIS
export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  // const [promocoes, setPromocoes] = useState<Game[]>([])
  // const [emBreve, setEmBreve] = useState<Game[]>([])

  // INTEGRACAO COM A API
  // useEffect(() => {
  //   fetch('https://ebac-fake-api.vercel.app/api/eplay/promocoes')
  //     .then((res) => res.json())
  //     .then((res) => setPromocoes(res))

  //   fetch('https://ebac-fake-api.vercel.app/api/eplay/em-breve')
  //     .then((res) => res.json())
  //     .then((res) => setEmBreve(res))
  // }, [])

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGames} title="Promoções" background="gray" />
        <ProductsList games={soonGames} title="Em breve" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
