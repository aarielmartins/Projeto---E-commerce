import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import { store } from './store'
import Header from './components/Header'
import Rotas from './routes'
import Footer from './components/Footer'

//ORGANIZAÇÃO DE PÁGINAS PELO BROWSERROUTER
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
