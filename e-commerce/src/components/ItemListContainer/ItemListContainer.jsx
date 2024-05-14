import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import { db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Box } from '@chakra-ui/react';

const ItemListContainer = ({title}) => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const coleccion = collection(db, 'products')

      const queryRef = !categoryId ?
      coleccion
      :
      query(coleccion, where('category', '==', categoryId))

      const response = await getDocs(queryRef)

      console.log(response)
      const products = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProducts(products)
      setLoading(false)
    }
    getData()
    }, [categoryId])


  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {
        loading ?
        <PacmanLoader color="#274862" />
        :
        <ItemList products={products}/>
      }
    </Box>
  )
}

export default ItemListContainer