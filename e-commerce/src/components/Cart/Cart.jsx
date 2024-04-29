import { Box, Button, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import Context, { ContextProvider } from '../../context/CartContext';


const Cart = () => {
  const { cart, getTotal, clearCart, removeItem } = useContext(Context);
  

  return (
    <Box>
        <h1>Cart</h1>
        <TableContainer>
          <Table variant='striped' colorScheme='gray'>
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
                  <Button>Finalizar compra</Button>
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
    </Box>
  )
}

export default Cart