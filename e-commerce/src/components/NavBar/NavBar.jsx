import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box
} from '@chakra-ui/react'
import { CiCircleChevDown } from "react-icons/ci";
import { MdOutlineFastfood } from "react-icons/md";


const NavBar = () => {
  return (
    <Box className='navbar'>
      <Heading><MdOutlineFastfood />FastFood</Heading>
      <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button} rightIcon={<CiCircleChevDown />}>
            {isOpen ? 'Close' : 'Open'}
          </MenuButton>
          <MenuList>
            <MenuItem>
              Burgers
            </MenuItem>
            <MenuItem>
              Milanesas
            </MenuItem>
            <MenuItem>
              Pizzas
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>

    <CartWidget/>
    </Box>
  )
}

export default NavBar