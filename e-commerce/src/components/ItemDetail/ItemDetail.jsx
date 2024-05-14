import React , { useContext, useState } from 'react'
import { 
  Button, 
  ButtonGroup, 
  Card, 
  CardBody, 
  CardFooter, 
  Divider, 
  Heading, 
  Image, 
  Stack, 
  Text, 
  Flex,
 } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({id, name, price, description, stock, img}) => {
  const [qty, setQty] = useState(0);
  const {addItem} = useContext(Context)

  const onAdd = (quantity) => {
    
    const item = {
      id,
      name,
      price,
      stock
    }
    addItem(item, quantity)
    
    setQty(quantity)
    
    toast.success('😎 Producto agregado al carrito!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce
    });
  }

  return (
    <>
      <Card maxW='lg' m = {2} w={'100%'} bg="primary.900" color="white" borderRadius={"0px"} boxShadow='dark-lg'>
      <CardBody p={"0px"} mb={"20px"}>
        <Image
          src={img}
          alt={name}
          boxSize='100%'
          w="100%"
          objectFit='cover'
          objectPosition='center'
          h='400px'
          />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>
            {description}
          </Text>
          <Text fontSize='2xl'>
            ${price}
          </Text>
          {
            stock == 0?
            <Text color='red.600' fontSize='2x1'>Producto sin stock</Text>
            :
            ''
          }
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter p="0px">
        {
        qty > 0 || stock == 0?
        <Flex justifyContent="center" width="100%">
          <ButtonGroup width="100%">
            <Button variant='ghost' color="white" width="50%" p="0"><Link to='/cart' style={{ width: '100%' }}>Ir al carrito</Link></Button>
            <Button variant='ghost' color="white" width="50%" p="0"><Link to='/' style={{ width: '100%' }}>Seguir comprando</Link></Button>
          </ButtonGroup>
        </Flex>
          :
          <ItemCount stock={stock} initialValue={1} onAdd={onAdd} width="100%"/>
        }
      </CardFooter>

        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          />

      </Card>
    </>
    
  )
}

export default ItemDetail