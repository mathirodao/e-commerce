import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = ({ itemCount }) => { 
  
  return (
    <Box style={{ color: 'black' }}>
      <FaShoppingCart />
      {itemCount}
    </Box>
  )
}

export default CartWidget
