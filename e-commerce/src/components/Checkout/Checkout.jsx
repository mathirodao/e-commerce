import { Box, Button, Flex, FormControl, Heading, Input, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const [error, setError] = useState({})
  const { cart, getTotal, clearCart } = useContext(Context);
  const navigate = useNavigate()


  const [user, setUser] = useState({
    name: '',
    email:'',
    repeatedEmail:'',
    phone:'',
    address:''
  })

  const updateUser = (event)=> {
    setUser((user) =>({
      ...user,
      [event.target.name]: event.target.value
    }));
  }

  console.log(user)

  const validateEmails = () => {
    let result = true
    if (user.email != user.repeatedEmail){
      result = false
    }
    return result
  }

  const validateForm = () => {
    const errors = {}
    if (!user.name){
      errors.name='Debe agregar un nombre'
    }
    
    if (!user.email) {
      errors.email = 'Debe agregar un email';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = 'El email no es válido';
    }
    
    if (!user.repeatedEmail) {
      errors.repeatedEmail = 'Debe agregar el email de validación';
    }

    if (!user.phone) {
      errors.phone = 'Debe agregar un número de teléfono';
    } else if (!/^\d{6,}$/.test(user.phone)) {
      errors.phone = 'El número de teléfono debe tener al menos 6 dígitos numericos';
    }
    
    if (!user.address) {
      errors.address = 'Debe agregar una dirección de entrega';
    }

    setError(errors)
    return Object.keys(errors).length === 0
  }

  const getOrder = async () => {
    const isFormValid = validateForm()    
    const emailMatch = validateEmails()
    if (isFormValid){
      if(emailMatch){

        
        const ordersCollection = collection(db, 'orders')
        console.log(ordersCollection)
        
        try {
          for(const item of cart){
            const productRef = doc(db, 'products', item.id)
          const productDoc = await getDoc(productRef)
          
          const currentStock = productDoc.data().stock
          
          if(currentStock >= item.quantity){
            await updateDoc(productRef, {
              stock: currentStock - item.quantity
            })
          }else{
            console.log(`No hay suficiente stock para ${item.name}`)
            Swal.fire({
              title: 'No hay suficiente stock para',
              text: `${item.name}`,
              icon: 'warning'
            });
            
          }
          const currentTimestamp = Timestamp.now();
          const dateObject = currentTimestamp.toDate();

          const order = {
            buyer: user,
            cart: cart,
            total: getTotal(), 
            dateOfBuy : dateObject,
          }
          const orderDocRef = await addDoc(ordersCollection, order)
          console.log(orderDocRef.id)
          
          Swal.fire({
            title: 'Gracias por su compra!',
            text: `El numero de orden es: ${orderDocRef.id}`,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(()=>{
            clearCart()
            navigate('/')
          });
          
        }
        }catch(error){
          console.log(error)
        }
      }else {
        Swal.fire({
          title: 'Atención!',
          text: `Los email no coinciden.`,
          icon: 'warning',
          confirmButtonText: 'OK'
        })
      }
    }

  }
  
  
  return (
    <>
      <Box color={'primary.900'}>
        <Heading as='h1' size='lg' noOfLines={1} mb={"5%"}>Finalizar compra</Heading>
        {
          Object.keys(cart).length === 0 ?
          <Box mt={'10%'}> 
            <h1 color='primary.900'>No hay productos para realizar la compra.</h1> 
          </Box>
          :
          <Flex direction={'row'} justify={'space-between'} >

            <Box flex='1'>
              <Heading as='h2' size='md' noOfLines={1} align={'left'} mb={'10px'}>Datos de facturación</Heading>
              <FormControl w={'90%'}>
                <Input tpye='text' name='name' placeholder='Ingrese el nombre' onChange={updateUser} mb={1}/>
                {error.name && <span style={{ color: 'red' }} >{error.name}</span>}
                <Input tpye='email' name='email' placeholder='Ingrese email' onChange={updateUser} mb={1}/>
                {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
                <Input tpye='email' name='repeatedEmail' placeholder='Ingrese nuevamente el email' onChange={updateUser} mb={1}/>
                {error.repeatedEmail && <span style={{ color: 'red' }}>{error.repeatedEmail}</span>}
                <Input tpye='text' name='phone' placeholder='Ingrese su telefono' onChange={updateUser} mb={1}/>
                {error.phone && <span style={{ color: 'red' }}>{error.phone}</span>}
                <Input tpye='text' name='address' placeholder='Ingrese dirección de entrega' onChange={updateUser} mb={1}/>
                {error.address && <span style={{ color: 'red' }}>{error.address}</span>}
                <Flex w={'100%'} justify={'center'} align={'center'}>
                  <Button onClick={getOrder}>Finalizar compra</Button>
                </Flex>
              </FormControl>
            </Box> 
            <Box>
              <TableContainer >
                <Table size='md'>
                  <Thead>
                    <Tr>
                      <Th>Producto</Th>
                      <Th isNumeric>Subtotal</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      cart.map((product) =>(
                        <Tr key = {product.id}>
                          <Td>{product.name} x {product.quantity}</Td>
                          <Td isNumeric>${product.price*product.quantity}</Td>
                        </Tr>
                      )
                    )
                  }
                  </Tbody>
                  <Tfoot bg="primary.900" >
                    <Tr>
                      <Th color="white">Total</Th>
                      <Th isNumeric color="white">${getTotal()}</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </Box>
          </Flex>
        }
      </Box>
    </>
  )
}

export default Checkout