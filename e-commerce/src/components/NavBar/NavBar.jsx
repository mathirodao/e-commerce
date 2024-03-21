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
  Button
} from '@chakra-ui/react'
import { CiCircleChevDown } from "react-icons/ci";
import { MdOutlineFastfood } from "react-icons/md";


const NavBar = () => {
  return (
    <div className='navbar'>
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
    </div>
  )
}

export default NavBar