import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div>
      <NavBar className="navbar"/>
      <ItemListContainer title="E-COMMERCE" message= "Wellcome!!" />
    </div>
  )
}

export default App
