import { Box, Button, Heading, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import Context, { ContextProvider } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cart, getTotal, clearCart, removeItem } = useContext(Context);
  

  return (
    <>
      <Box color={'primary.900'}>
          <Heading as='h1' size='lg' noOfLines={1} mb={"5%"}>Tu carrito</Heading>
          { 
            Object.keys(cart).length === 0 ?
            <Box mt={'10%'}> 
              <h1>No hay productos en tu carrito.</h1> 
              <Button mt={'5%'}><Link to='/'>Seguir comprando</Link></Button>
            </Box>
            :
          <TableContainer>
            <Table variant='striped' colorScheme='blue'>
              <Thead>
                <Th>Producto</Th>
                <Th>Cantidad</Th>
                <Th>Precio</Th>
                <Th>Subtotal</Th>
                <Th></Th>
              </Thead>
              <Tbody>
                {
                  cart.map((product) =>(
                    <Tr key = {product.id}>
                      <Td>{product.name}</Td>
                      <Td>{product.quantity}</Td>
                      <Td>{product.price}</Td>
                      <Td>{product.price * product.quantity}</Td>
                      <Td>
                      <Button onClick={() => removeItem(product.id)}><FaTrashAlt /></Button>
                      </Td>
                    </Tr>
                  )
                )
                }
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total : ${getTotal()}</Th>
                  <Th>
                    <Button onClick={() => clearCart()}>Vaciar carrito</Button>
                  </Th>
                  <Th>
                    <Link to={`/checkout`}>
                      <Button>Finalizar compra</Button>
                    </Link>
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          }
      </Box>
    </>
  )
}

export default Cart