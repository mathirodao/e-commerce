import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'

const ItemListContainer = ({title}) => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()


    dataProducts
      .then((el) =>  setProducts(el))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
    }, [categoryId])


  return (
    <div>
      {
        loading ?
        <PacmanLoader color="#000000" />
        :
        <ItemList products={products}/>
      }
    </div>
  )
}

export default ItemListContainer