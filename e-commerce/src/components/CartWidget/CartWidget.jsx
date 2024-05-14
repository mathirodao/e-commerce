import { Box, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({ itemCount }) => { 
  
  return (
    <Flex alignItems="center">
      <FaShoppingCart />
      <Box ml="2">({itemCount})</Box>
    </Flex>
  )
}

export default CartWidget
