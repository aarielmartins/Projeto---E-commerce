import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getTotalPrice, parseToBrl } from '../../utils'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import * as S from './styles'
import Button from '../Button'
import Tag from '../Tag'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CardContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {itens.map((item) => (
            <S.CardItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CardItem>
          ))}
        </ul>
        <S.Quantity>{itens.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice(itens))}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button
          onClick={goToCheckout}
          title="Click aqui para continuar com a compra"
          type="button"
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CardContainer>
  )
}

export default Cart
