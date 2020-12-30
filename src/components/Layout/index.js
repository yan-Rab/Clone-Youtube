import React, {useState} from 'react'
import MenuBar from '../MenuBar'
import Main from '../Main'
import {Container} from './styles'

const Layout = () => {
    const [menuBarBiggestVisible, setMenuBarBiggestVisible] = useState(false);
  
    return (
        <Container>
           
            <MenuBar menuBarBiggestVisible = {menuBarBiggestVisible} />
            <Main 
            menuBarBiggestVisible = {menuBarBiggestVisible}
            setMenuBarBiggestVisible = {setMenuBarBiggestVisible} 
            />
        </Container>
    )
}

export default Layout;