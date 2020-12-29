import React, {useState} from 'react'
import MenuBar from '../MenuBar'
import MenuBarAlt from '../MenuBarAlt'
import Main from '../Main'
import {Container} from './styles'

const Layout = () => {
    const [menuBarBiggestVisible, setMenuBarBiggestVisible] = useState(false);
  
    return (
        <Container>
            <MenuBarAlt />
            <MenuBar menuBarBiggestVisible = {menuBarBiggestVisible} />

            <Main 
            menuBarBiggestVisible = {menuBarBiggestVisible}
            setMenuBarBiggestVisible = {setMenuBarBiggestVisible} 
            />
        </Container>
    )
}

export default Layout;