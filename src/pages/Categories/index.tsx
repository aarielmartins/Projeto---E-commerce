import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  // const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  // const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  // const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  // const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  // const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://ebac-fake-api.vercel.app/api/eplay/acao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesAcao(res))

  //   fetch('https://ebac-fake-api.vercel.app/api/eplay/esportes')
  //     .then((res) => res.json())
  //     .then((res) => setGamesEsportes(res))

  //   fetch('https://ebac-fake-api.vercel.app/api/eplay/simulacao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesSimulacao(res))

  //   fetch('https://ebac-fake-api.vercel.app/api/eplay/luta')
  //     .then((res) => res.json())
  //     .then((res) => setGamesLuta(res))

  //   fetch('https://ebac-fake-api.vercel.app/api/eplay/rpg')
  //     .then((res) => res.json())
  //     .then((res) => setGamesRPG(res))
  // }, [])

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
