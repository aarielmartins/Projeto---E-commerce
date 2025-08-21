import * as S from './styles'
import { useGetFeaturedGameQuery } from '../../services/api'
import Tag from '../Tag'
import Button from '../Button'
import { parseToBrl } from '../../utils'

const Banner = () => {
  //ADICIONA O FETCH DA API PELA REQUISIÇÃO FEITA EM SERVICES
  const { data: game } = useGetFeaturedGameQuery()

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
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game?.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
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
    </S.Image>
  )
}

export default Banner
