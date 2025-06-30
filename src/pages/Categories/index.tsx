import ProductsList from '../../components/ProductsList'
import Game from '../../models/games'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4 - Remake',
    id: 1
  },
  {
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Diablo 4',
    id: 2
  },
  {
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'The Legend of Zelda - TOK',
    id: 3
  },
  {
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Star Wars Jedi Survivor',
    id: 4
  }
]

const emBreve: Game[] = [
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['17/05'],
    system: 'Windows',
    title: 'Resident Evil 4 - Remake',
    id: 6
  },
  {
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['17/05'],
    system: 'Windows',
    title: 'Diablo 4',
    id: 7
  },
  {
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['17/05'],
    system: 'Windows',
    title: 'The Legend of Zelda - TOK',
    id: 8
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
