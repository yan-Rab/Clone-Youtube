import React from 'react';
import { 
  Container, 
  Video, 
  VideoData,
  Avatar,
  Infors,
  Dot
} from './styles'

const TumbnailItem = () => {
  return (
    <Container>
      <Video/>

      <VideoData>

        <Avatar />

        <Infors>
          <strong>Título do vídeo</strong>
          <p>Canal verificado</p>

          <span>
            <span>40 mil visualizações</span> 
            <Dot />
            <span>há 2 dias</span>
          </span>

          
        </Infors>
        
      </VideoData>

    </Container>
  )
}

export default TumbnailItem;
