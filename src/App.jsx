import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Produtos from './pages/Produtos'

const App = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Produtos" element={<Produtos />} />
            <Route path="/Contato" element={<Contato />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
