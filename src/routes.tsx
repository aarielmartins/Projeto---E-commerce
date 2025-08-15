import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

//CRIAR ROTAS DE MANEIRA DIFERENTE USANDO O BROWSERROUTER
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    {/* O ":ID" É UM PATH PARAMITER, QUE APARECE DEPOIS DA "/" NA URL
    EXISTE TAMBÉM O QUERY PARAMITER, QUE APARECE DEPOIS DA "?"*/}
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
