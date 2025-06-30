import Product from '../Product'
import { Container, List, Title } from './styles'
import resident from '../../assets/images/resident.png'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          category="Ação"
          description="teste"
          image={resident}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Resident"
        />
        <Product
          category="Ação"
          description="teste"
          image={resident}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Resident"
        />
        <Product
          category="Ação"
          description="teste"
          image={resident}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Resident"
        />
        <Product
          category="Ação"
          description="teste"
          image={resident}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Resident"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
