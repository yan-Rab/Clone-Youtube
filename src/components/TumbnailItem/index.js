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
          <strong>Título</strong>
          <p>Canal</p>
          <p>40 mil visualizações <Dot /></p>
          <p>há 4 meses</p>
        </Infors>
        
      </VideoData>

    </Container>
  )
}

export default TumbnailItem;
