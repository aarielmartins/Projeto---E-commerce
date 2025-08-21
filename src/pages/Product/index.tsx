import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useGetGameByIdQuery } from '../../services/api'
import Loader from '../../components/Loaders'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game, isLoading, error } = useGetGameByIdQuery(id)

  // const [game, setGame] = useState<Game>()

  // O ID É USADO COMO PARÂMETRO PARA PEGAR AS REFERêNCIAS DA API
  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setGame(res))
  // }, [id])

  // const endpoints = [
  //   'https://ebac-fake-api.vercel.app/api/eplay/promocoes',
  //   'https://ebac-fake-api.vercel.app/api/eplay/acao',
  //   'https://ebac-fake-api.vercel.app/api/eplay/destaque',
  //   'https://ebac-fake-api.vercel.app/api/eplay/em-breve',
  //   'https://ebac-fake-api.vercel.app/api/eplay/esportes',
  //   'https://ebac-fake-api.vercel.app/api/eplay/luta',
  //   'https://ebac-fake-api.vercel.app/api/eplay/rpg',
  //   'https://ebac-fake-api.vercel.app/api/eplay/simulacao'
  // ]

  // useEffect(() => {
  //   const fetchAllGames = async () => {
  //     try {
  //       const responses = await Promise.all(endpoints.map((url) => fetch(url)))
  //       const gamesArrays = await Promise.all(
  //         responses.map((res) => res.json())
  //       )
  //       const allGames: Game[] = gamesArrays.flat()

  //       const foundGame = allGames.find((g) => g.id === Number(id))
  //       setGame(foundGame)
  //     } catch (error) {
  //       console.error('Erro ao carregar jogos:', error)
  //     }
  //   }

  //   fetchAllGames()
  // }, [])

  // if (!game) {
  //   return <h3>Carregando...</h3>
  // }

  if (isLoading) return <Loader />
  if (error) return <p>Erro ao carregar o jogo</p>
  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b>
          {game.details.system}
          <br />
          <b>Desenvolvedor:</b>
          {game.details.developer}
          <br />
          <b>Editora:</b>
          {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          {/* PARA TRANSFORMAR O ARRAY DE LÍNGUAS EM UMA FRASE SEPARADA POR VÍRGULA SE USA O JOY */}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        name={game.name}
        itens={game.media.gallery}
      />
    </>
  )
}

export default Product
