import { HStack ,Image} from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
const NavBar = () => {
  return (
    <div>
        <HStack>
            <Image src ={logo} boxSize='60'>

            </Image>
        </HStack>
    </div>
  )
}

export default NavBar