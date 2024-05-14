import React, { useContext, useEffect, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
  Heading,
  Box
} from '@chakra-ui/react'
import { MdOutlineFastfood } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import Context from '../../context/CartContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true)
  const { getQuantity } = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      const categorySet = new Set();
      const querySnapshot = await getDocs(collection(db, 'products'));
      querySnapshot.forEach((doc) => {
        const product = doc.data();
        categorySet.add(product.category);
      });
      setCategories(Array.from(categorySet));
      setLoading(false)
    };
    fetchCategories();
  }, []);

  return (
    <>
      {
        loading ?
        ''
        :
      <Box className='navbar' position="fixed" top="0" height='70px' width="100%" bg="primary.900" boxShadow="md" zIndex="999" display='flex' alignItems='center' justifyContent='space-between' paddingX='20px'>
        <Link to='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} >
          <MdOutlineFastfood style={{ marginRight: '5px', fontSize: '24px', color: 'white', transition: 'color 0.3s' }} _hover={{ color: 'gray' }} />
          <Heading size='md' lineHeight='1' _hover={{ color: 'gray' }} color="white">FastFood</Heading>
        </Link>
        <Box display="flex" alignItems="center">
          <Link to='/' style={{ marginRight: '20px', color: location.pathname === '/' ? 'gray' : 'white' }}>Menú</Link>
          {categories.map(category => (
            <Link to={`/category/${category}`} key={category} style={{ marginRight: '20px', color: location.pathname === `/category/${category}` ? 'gray' : 'white' }}>
              {category}
            </Link>
          ))}
        </Box>
        <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }} >
          <span style={{ color: 'white' }}>
            <CartWidget itemCount={getQuantity()} />
          </span>
        </Link>


      </Box>
      }
    </>
  )
}

export default NavBar