import { useEffect, useState } from 'react'
import { Imagem, Precos, Titulo } from './styles'
import { formataPreco } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  //ADICIONA O FETCH DA API PELA REQUISIÇÃO FEITA EM SERVICES
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  //FUNÇÃO PARA PEGAR A IMAGEM DE BANNER DA API
  // useEffect(() => {
  //   fetch('https://ebac-fake-api.vercel.app/api/eplay/destaque')
  //     .then((res) => res.json())
  //     .then((res) => setGame(res))
  // }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          variant="secundary"
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
