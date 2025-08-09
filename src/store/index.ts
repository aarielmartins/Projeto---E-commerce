import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'

//CRIA A STORE COM 2 REDUCERS: CART E [API.ERDUCERPATH]
//(ENTRE COLCHETES PARA ACESSAR PROPRIEDADES DENTRO DE UM OBJETO)
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  //ADICIONA O MIDDLEWARE QUE ESCUTA OS ENDPINTS E FAZ AS REQUISIÇÕES
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
