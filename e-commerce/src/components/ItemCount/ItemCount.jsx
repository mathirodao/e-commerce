import useCounter from '../../hooks/useCounter'
import {
    Button,
    Box,
    Heading,
    Spacer,
    Flex,
    ButtonGroup,
  } from '@chakra-ui/react'

const ItemCount = ({stock, initialValue, onAdd}) => {
  const {count, increase, decrease} = useCounter(initialValue,stock);

  return (
    <>
    <Flex minWidth='max-content' alignItems='center' width='100%' p="0px" m="0px">
      <ButtonGroup gap='1'  p="0px" m="0px">
        <Button variant='ghost' color="white" onClick={decrease} >-</Button>
        <Heading>{count}</Heading>
        <Button variant='ghost' color="white" onClick={increase} >+</Button>
      </ButtonGroup>
      <Spacer />
      <Box p="0px" width="100%">
        <Button variant='ghost' color='white' onClick={() => onAdd(count)} width="100%" m="0px">Agregar al carrito</Button>
      </Box>
    </Flex>
    </>
  )
}

export default ItemCount