import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  itens: Game[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
