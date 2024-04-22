import useCounter from '../../hooks/useCounter'
import {
    Button,
    Box,
    Heading,
  } from '@chakra-ui/react'

const ItemCount = ({stock, initialValue, onAdd}) => {
  const {count, increase, decrease} = useCounter(initialValue,stock);

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Button onClick={decrease}>-</Button>
        <Heading>{count}</Heading>
        <Button onClick={increase}>+</Button>
      </Box>
      <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Box>
  )
}

export default ItemCount