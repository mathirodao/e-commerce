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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
 } from '@chakra-ui/react'
import { MdOutlineFastfood } from "react-icons/md";
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Context from '../../context/CartContext';
// import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({id, name, price, description, stock, img}) => {
  const [qty, setQty] = useState(1);

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

    toast.success('🦄 Producto agregado al carrito!', {
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
    <Card maxW='sm' m = {2} w={'100%'}>
    <CardBody>
      <Image
        src={img}
        alt={name}
        borderRadius='lg'
        boxSize='100%'
        objectFit='cover'
        w='400%'
        h='400px'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
          {description}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          ${price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
      </ButtonGroup>
      <ItemCount stock={stock} initialValue={1} onAdd={onAdd}/>
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
    
  )
}

export default ItemDetail