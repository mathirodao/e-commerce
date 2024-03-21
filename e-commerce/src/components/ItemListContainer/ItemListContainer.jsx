import React from 'react'

const ItemListContainer = ({title, message}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default ItemListContainer