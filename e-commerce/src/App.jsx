import './App.css'
import { ChakraProvider, Box } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { useState } from 'react'
import Cart from './components/Cart/Cart'
import { ContextProvider } from './context/CartContext'


function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <ChakraProvider>

      <ContextProvider>

        <BrowserRouter>
          <NavBar className="navbar" itemCount={cartItemCount} />
          <Box className="app-container">
            <Box className="content-container">
              <Routes>
                <Route path="/" element={<ItemListContainer title="Nuestro Menú"/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer title="Tienda"/>}/>
                <Route path="/product/:productId" element={<ItemDetailContainer cartItemCount={cartItemCount} updateCartItemCount={setCartItemCount}/>}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="*" element={<PageNotFound />}/>
              </Routes>
            </Box>
          </Box>
        </BrowserRouter>
      
      </ContextProvider>
    </ChakraProvider>
  )
}

export default App
