import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Box } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { PacmanLoader } from 'react-spinners'
import { db } from '../../config/firebase'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { productId } = useParams();
  const navigate = useNavigate();

    useEffect(() => {
      const getProduct = async () => {
        const queryRef = doc(db, 'products', productId);
        const response = await getDoc(queryRef);
        console.log(response)
        console.log(response._document)
        if (response._document === null) {
          navigate("*");
        } else {
          const newItem = {
            ...response.data(),
            id: response.id
          };
          console.log(newItem);
          setProduct(newItem);
          setLoading(false);
        }
      }
      getProduct()
    }, [productId, navigate])


  return (
    <Box className="item-detail-container" minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
      {loading ? (
        <PacmanLoader color="primary.900" />
      ) : (
        <ItemDetail {...product} />
      )}
    </Box>
    
  )
}

export default ItemDetailContainer