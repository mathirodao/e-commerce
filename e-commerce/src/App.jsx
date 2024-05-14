import './App.css'
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { useState } from 'react'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { ContextProvider } from './context/CartContext'

const colors = {
  primary: {
    900: '#274862'
  },
  background: '#ffffff',
}

const theme = extendTheme({colors})

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <ContextProvider >
        <BrowserRouter>
          <NavBar className="navbar" itemCount={cartItemCount} />
          <Box className="app-container" bg="background">
            <Box className="content-container">
              <Routes>
                <Route path="/" element={<ItemListContainer title="Nuestro Menú"/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer title="Tienda"/>}/>
                <Route path="/product/:productId" element={<ItemDetailContainer cartItemCount={cartItemCount} updateCartItemCount={setCartItemCount}/>}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/checkout" element={<Checkout />}/>
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
