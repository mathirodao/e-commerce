import React, { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box
} from '@chakra-ui/react'
import { CiCircleChevDown } from "react-icons/ci";
import { MdOutlineFastfood } from "react-icons/md";
import { Link } from 'react-router-dom';
import { products } from '../../data/asyncMock';
import Cart from '../Cart/Cart';
import Context, { ContextProvider } from '../../context/CartContext';

const NavBar = () => {
  const categories = [...new Set(products.map(product => product.category))];
  const { getQuantity } = useContext(Context);

  return (
    <Box className='navbar' position="fixed" top="0" height='70px' width="100%" backgroundColor="white" boxShadow="md" zIndex="999" display='flex' alignItems='center' paddingX='20px'>
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        <MdOutlineFastfood style={{ marginRight: '5px', fontSize: '24px' }} />
        <Heading size='md' lineHeight='1'>FastFood</Heading>
      </Link>
      <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button} rightIcon={<CiCircleChevDown />}>
            {isOpen ? 'Close' : 'Open'}
          </MenuButton>
          <MenuList>
            <Link to='/'><MenuItem>Menú</MenuItem></Link>
            {categories.map(category => (
              <Link to={`/category/${category}`} key={category}>
                <MenuItem>{category}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
    <Link to='/cart' element={<Cart />}><CartWidget itemCount={getQuantity()} /></Link>
    </Box>
  )
}

export default NavBar