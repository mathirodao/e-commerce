import React , { useState } from 'react'
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

const ItemDetail = ({name, price, description, stock, img, onAddToCart}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [qty, setQty] = useState(1);
  
  const onAdd = (quantity) => {
      setQty(quantity)
      onOpen();
      onAddToCart(quantity);
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

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><MdOutlineFastfood/></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Se han agregado {qty} producto/s al carrito exitosamente.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Link to='/cart' element={<Cart />}><Button variant='ghost'>Terminar compra</Button></Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  )
}

export default ItemDetail