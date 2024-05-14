import React, {createContext, useState} from 'react'

const Context = createContext()

export const ContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newProduct = {
            ...productToAdd,
            quantity
        }
        if(isInCart(newProduct.id)) {
            const updateCart = cart.map((el) => {
                if(el.id === newProduct.id){
                    return { ...el, quantity: el.quantity + newProduct.quantity}
                }
                return el
            })
            setCart(updateCart)
        }else {
            setCart([ ...cart, newProduct])   
        }
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
      };

    const getTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        return total
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let total = 0

        cart.forEach((product) =>{
            total = total + product.quantity
        })
        return total
    }

    console.log(cart)
    console.log(getTotal())
    console.log(getQuantity())

  return (
    <Context.Provider
        value={{
            cart,
            addItem,
            removeItem,
            getTotal,
            clearCart,
            getQuantity
        }}
    >
        {children}
    </Context.Provider>
  )
}

export default Context