import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { getProducts } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({title, message}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      getProducts(products)
      .then((el) => {
        setProducts(el);
      })
      .catch((err) =>console.log(err))
  }, [])

  

  return (
    <div>
      <h1>{title}</h1>
      <h2>{message}</h2>
      <ItemCount/>

      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer