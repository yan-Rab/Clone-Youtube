import React, {useState} from 'react'
import logoImg from '../../assets/logo-youtube.png'

import {
  Container,
  GroupButton,
  ArrowBackIcon,
  MenuIcon,
  Logo,
  SearchWrapper,
  SearchBar,
  SearchButton,
  SearchIcon,
  ActionsIcons,
  SearchIconAlt,
  VideoIcon,
  AppsIcon,
  BellIcon,
  PersonIcon
} from './styles'

const Header = ({menuBarBiggestVisible,setMenuBarBiggestVisible}) => {

  const [visibleHeader, setVisibleHeader] = useState(true)
  console.log(visibleHeader)
  return (
    <Container>

      <ArrowBackIcon 
      title = 'Voltar'
      onClick = {() => setVisibleHeader(!visibleHeader)}
      visible = {visibleHeader}/>

      <GroupButton visible = {visibleHeader}>
        <button onClick = {() => setMenuBarBiggestVisible(!menuBarBiggestVisible)}>
          <MenuIcon />
        </button>
        
        <Logo src = {logoImg} />
      </GroupButton>

      <SearchWrapper visible = {visibleHeader}>
        <SearchBar placeholder = 'Pesquisar'/>
        <SearchButton title = 'Pesquisar'>
          <SearchIcon />
        </SearchButton>
      </SearchWrapper>

      <ActionsIcons visible = {visibleHeader}>
        <SearchIconAlt onClick = {() => {setVisibleHeader(!visibleHeader)}} />
        <VideoIcon title = 'Criar' />
        <AppsIcon title = 'Aplicativos do youtube'/>
        <BellIcon title = 'Notificações' />
        <PersonIcon />
      </ActionsIcons>
    </Container>
  )
}

export default Header