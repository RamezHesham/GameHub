import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatofrms'

const PlatformSelector = () => {
    const {data,error}=usePlatforms();
    if(error)  return error;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            Platform
        </MenuButton>
        <MenuList>
            {
                data.map(platform => <MenuItem key ={platform.id}>{platform.name}</MenuItem>)
            }
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector