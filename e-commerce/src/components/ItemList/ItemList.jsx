import React from 'react'
import Item from '../Item/Item'
import { Box, Flex, Spacer, SimpleGrid } from "@chakra-ui/react";

const ItemList = ({products}) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4} className='cardContainer'>
        {products.map((elem) =>(
            <Box key={elem.id}>
                <Item {...elem} />
                <Spacer />
            </Box>
            
        ))}
    </SimpleGrid>
  )
}

export default ItemList