import React from 'react'

import { 
  Container,
  BoxButton,
  Content,
  Canal,
  Avatar,
  HomeIcon,
  FireIcon,
  InscriptionsIcon,
  LibraryIcon,
  HistoricIcon,
  MyVideosIcon,
  ClockIcon,
  LikeVideoIcon,
  ArrowDownIcon,
  YoutubeIcon,
  MoviesIcon,
  GamesIcon,
  LiveIcon,
  LearnIcon,
  SettingsIcon,
  FlagIcon,
  HelpIcon,
  FeedBackIcon
} from './styles'

const MenuBar = ({menuBarBiggestVisible}) => {
  return (
    <Container visible = {menuBarBiggestVisible}>
      
      <Content visible = {true}>

        <BoxButton className = 'active' visible = {menuBarBiggestVisible}>
          <HomeIcon/>
          <strong>Início</strong>
        </BoxButton>

        <BoxButton visible = {menuBarBiggestVisible}>
          <FireIcon />
          <strong>Em alta</strong>
        </BoxButton>

        <BoxButton visible = {menuBarBiggestVisible}>
          <InscriptionsIcon />
          <strong>Inscrições</strong>
        </BoxButton>
        
        <BoxButton 
        style = {{display: menuBarBiggestVisible ? 'none' : 'flex'}} 
        visible = {menuBarBiggestVisible}
        >
          <LibraryIcon />
          <strong>Biblioteca</strong>
        </BoxButton>

      </Content>
      
      <Content visible = {menuBarBiggestVisible}>
        <BoxButton visible = {menuBarBiggestVisible}>
          <LibraryIcon />
          <strong>Biblioteca</strong>
        </BoxButton>

        <BoxButton visible = {menuBarBiggestVisible}>
          <HistoricIcon />
          <strong>Histórico</strong>
        </BoxButton>

        
        <BoxButton visible = {menuBarBiggestVisible}>
          <MyVideosIcon />
          <strong>Seus Videos</strong>
        </BoxButton>

        
        <BoxButton visible = {menuBarBiggestVisible}>
          <ClockIcon />
          <strong>Assistir mais tarde</strong>
        </BoxButton>

        <BoxButton visible = {menuBarBiggestVisible}>
          <LikeVideoIcon />
          <strong>Vídeos marcados como gostei</strong>
        </BoxButton>

        <BoxButton visible = {menuBarBiggestVisible}>
          <ArrowDownIcon />
          <strong>Mostrar mais</strong>
        </BoxButton>
      </Content>

      <Content visible = {menuBarBiggestVisible}>
        <strong>INSCRIÇÕES</strong>

        <Canal visible = {menuBarBiggestVisible}>
          <Avatar/>
          <strong>Canal exemplo</strong>
        </Canal>

        <BoxButton visible = {menuBarBiggestVisible}>
          <ArrowDownIcon />
          <strong>Mostrar mais</strong>
        </BoxButton>

      </Content>
      
      <Content visible = {menuBarBiggestVisible}>
        <strong>MAIS DO YOUTUBE</strong>

        <BoxButton visible = {menuBarBiggestVisible}>
          <YoutubeIcon />
          <strong>Youtube Premium</strong>
        </BoxButton>
        
        <BoxButton visible = {menuBarBiggestVisible}>
          <MoviesIcon />
          <strong>Filmes</strong>
        </BoxButton>

        <BoxButton visible = {menuBarBiggestVisible}>
          <GamesIcon />
          <strong>Jogos</strong>
        </BoxButton>

        <BoxButton visible = {menuBarBiggestVisible}>
          <LiveIcon />
          <strong>Ao vivo</strong>
        </BoxButton>

        <BoxButton visible = {menuBarBiggestVisible}>
          <LearnIcon/>
          <strong>Aprender</strong>
        </BoxButton>
      </Content>

      <Content visible = {menuBarBiggestVisible}>
         
          <BoxButton visible = {menuBarBiggestVisible}>
            <SettingsIcon/>
            <strong>Configurações</strong>
          </BoxButton>

          <BoxButton visible = {menuBarBiggestVisible}>
            <FlagIcon/>
            <strong>Histórico de denúncias</strong>
          </BoxButton>

          <BoxButton visible = {menuBarBiggestVisible}>
            <HelpIcon/>
            <strong>Ajuda</strong>
          </BoxButton>

          <BoxButton visible = {menuBarBiggestVisible}>
            <FeedBackIcon />
            <strong>Enviar Feedback</strong>
          </BoxButton>
      </Content>

      <Content visible = {menuBarBiggestVisible}>
        <span>
          <a href = ''>Sobre</a>
          <a href = ''>Imprensa</a>
        </span>

        <span>
          <a href = ''>Direitos autorais</a>
        </span>

        <span>
          <a href = ''>Entre em contato</a>
        </span>

        <span>
          <a href = ''>Criadores de conteúdo</a>
        </span>

        <span>
          <a href = ''>Publicidade</a>
          <a href = ''>Desenvolvedores</a>
        </span>

        <span style = {{marginTop: '20px'}}>
          <a href = ''>Termos</a> 
          <a href = ''>Privacidade</a>
        </span>

        <span>
          <a href = ''>Política e segurança</a>
        </span>

        <span>
          <a href = ''>Como funciona o YouTube</a>
        </span>

        <span>
          <a href = ''>Testar os novos recursos</a>
        </span>


      </Content>

    </Container>
  )
}

export default MenuBar