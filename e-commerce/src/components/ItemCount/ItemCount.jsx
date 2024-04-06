import React, { useState } from 'react';
import {
    Button,
    Box
  } from '@chakra-ui/react'

const ItemCount = () => {
    const stock = 5;
    const [count, setCount] = useState(1);

    const increase = () => {
        count < stock && setCount(count + 1)
    }

    const decrease = () => {
        count > 1 && count <= stock && setCount(count - 1)
    }

  return (
    <Box>
        <Button onClick={decrease}>-</Button>
        {count}
        <Button onClick={increase}>+</Button>
    </Box>
  )
}

export default ItemCount