import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  itens: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //ADICIONA AO CARRINHO CASO NÃO TENHA SIDO ADICIONADA
    add: (state, action: PayloadAction<Game>) => {
      const game = state.itens.find((item) => item.id === action.payload.id)

      // A EXCLAÇÃO SERVE PARA DIZER QUE SE O GAME NÃO EXISTIR A CONDIÇÃO ESTA CORRETA
      if (!game) {
        state.itens.push(action.payload)
      } else {
        alert('O jogo já esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    //ABRE E FECHA A ABA DO CARRINHO
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
