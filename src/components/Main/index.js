import React from 'react'
import Header from '../Header'
import Tumbnails from '../Tumbnails'
import {Container, WrapperTumbnails} from './styles'
const Main = ({menuBarBiggestVisible,setMenuBarBiggestVisible}) => {
  return (
    <Container>
      <Header 
      menuBarBiggestVisible = {menuBarBiggestVisible}
      setMenuBarBiggestVisible = {setMenuBarBiggestVisible}/>

      <WrapperTumbnails>
        <Tumbnails menuBarBiggestVisible = {menuBarBiggestVisible} />
      </WrapperTumbnails>
      
    </Container>
  )
}

export default Main