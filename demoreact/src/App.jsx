
import './App.css'
import Texto from './components/texto'
import Titulo from './components/Titulo'

function App() {

  return (
    <div className='cont-app'>
      <Titulo />
      <Texto />

      <img src="./../public/img/coração.png" className='imagens-gerais'/>
      <h2>Coisas que gosto em você</h2>
      <ol>
      <li>Você é legal</li>
      <li>Divertida</li>
      <li>Inteligente</li>
      <li>Simpática</li>
      <li>Prestativa</li>
      </ol>
    </div>
  )
}

export default App
