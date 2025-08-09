import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  CardContainer,
  CardItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'
import Button from '../Button'
import Tag from '../Tag'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  //FUNÇÃO PARA SOMAR OS JOGOS NO CARRINHO
  const getTotalPrice = () => {
    return itens.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {itens.map((item) => (
            <CardItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CardItem>
          ))}
        </ul>
        <Quantity>{itens.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formataPreco(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Click aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CardContainer>
  )
}

export default Cart
