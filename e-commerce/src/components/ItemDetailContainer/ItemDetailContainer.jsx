import React, { useEffect, useState } from 'react'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Box } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const ItemDetailContainer = ({ updateCartItemCount }) => {
  const [product, setProduct] = useState({})
  const { productId } = useParams();
  const navigate = useNavigate();

    useEffect(() => {
        getProductById(productId)
            .then((prod) => { 
              if (!prod) {
                navigate("*");
              }else{
                setProduct(prod)
              }
            })
            .catch((err) => console.log(err))
    }, [productId, navigate])


  return (
    <Box>
      <ItemDetail {...product} />
    </Box>
  )
}

export default ItemDetailContainer