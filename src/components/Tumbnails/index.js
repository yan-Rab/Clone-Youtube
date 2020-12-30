import React from 'react';
import TumbnailItem from '../TumbnailItem'
import { Container } from './styles'

const Tumbnails = ({menuBarBiggestVisible}) => {
  return (
    <Container visible = {menuBarBiggestVisible}>
      <TumbnailItem />
      <TumbnailItem />
      <TumbnailItem />

      <TumbnailItem />
      <TumbnailItem />
      <TumbnailItem />

      <TumbnailItem />
      <TumbnailItem />
      <TumbnailItem />

      <TumbnailItem />
      <TumbnailItem />
    
    </Container>
  )
}

export default Tumbnails;
