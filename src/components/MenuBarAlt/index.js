import React from 'react'
import {
 Container,
 Box,
 Content,
 MenuIcon,
 Logo,
 BoxButton,
 HomeIcon,
 FireIcon,
 InscriptionsIcon,
 LibraryIcon,
 HistoricIcon,
 MyVideosIcon,
 ClockIcon,
 LikeVideoIcon,
 ArrowDownIcon,
 Canal,
 Avatar,
 YoutubeIcon,
 MoviesIcon,
 PlaysIcon,
 LiveIcon,
 LearnIcon,
 ConfigIcon,
 FlagIcon,
 HelpIcon,
 FeedBackIcon,
 Footer
} from './styles'

const MenuBarAlt = () => {
  return (
    <Container>
      <Box>
        <MenuIcon />
        <Logo />
      </Box>
      
      <Content>
        <BoxButton>
          <HomeIcon />
          <p>Início</p>
        </BoxButton>

        <BoxButton>
          <FireIcon />
          <p>Em alta</p>
        </BoxButton>

        <BoxButton>
          <InscriptionsIcon />
          <p>Inscrições</p>
        </BoxButton>

      </Content>
     
      <Content>
        <BoxButton>
          <LibraryIcon />
          <p>Biblioteca</p>
        </BoxButton>

        <BoxButton>
          <HistoricIcon />
          <p>Histórico</p>
        </BoxButton>

        
        <BoxButton>
          <MyVideosIcon />
          <p>Seus Videos</p>
        </BoxButton>

        
        <BoxButton>
          <ClockIcon />
          <p>Assistir mais tarde</p>
        </BoxButton>

        <BoxButton>
          <LikeVideoIcon />
          <p>Marcados como gostei</p>
        </BoxButton>

        <BoxButton>
          <ArrowDownIcon />
          <p>Mostrar mais</p>
        </BoxButton>
      </Content>

      <Content>
        <strong>INSCRIÇÕES</strong>

        <Canal>
          <Avatar/>
          <p>Canal exemplo</p>
        </Canal>

      </Content>

      <Content>
        <strong>MAIS DO YOUTUBE</strong>

        <BoxButton>
          <YoutubeIcon />
          <p>Youtube Premium</p>
        </BoxButton>
        
        <BoxButton>
          <MoviesIcon />
          <p>Filmes</p>
        </BoxButton>

        <BoxButton>
          <PlaysIcon />
          <p>Jogos</p>
        </BoxButton>

        <BoxButton>
          <LiveIcon />
          <p>Ao vivo</p>
        </BoxButton>

        <BoxButton>
          <LearnIcon/>
          <p>Aprender</p>
        </BoxButton>
      </Content>

      <Content>
          <BoxButton>
            <ConfigIcon/>
            <p>Configurações</p>
          </BoxButton>

          <BoxButton>
            <FlagIcon/>
            <p>Histórico de denúncias</p>
          </BoxButton>

          <BoxButton>
            <HelpIcon/>
            <p>Ajuda</p>
          </BoxButton>

          <BoxButton>
            <FeedBackIcon />
            <p>Enviar Feedback</p>
          </BoxButton>
      </Content>

      <Footer>
        <strong>Sobre imprensa</strong>
        <strong>Direitos autorais</strong>
        <strong>Entre em contato</strong>
        <strong>Criadores de conteúdo</strong>
        <strong>Publicidade Desenvolvedores</strong>

        <strong>Termos Privacidade</strong>
        <strong>Política e segurança</strong>
        <strong>Como funciona o YouTube</strong>
        <strong>Testar os novos recursos</strong>
      </Footer>
        
      
     
    </Container>
  )
}

export default MenuBarAlt