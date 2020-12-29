import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 15px 10px;
max-width: 320px;
min-width: 260px;
flex:1;
` 
export const Video = styled.div`
background: var(--gray);
border-radius: 2px;
width: 100%;

height: calc(11vh + 5em);

` 
export const VideoData = styled.div`
display: flex;
margin-top: 12px;
`
export const Avatar = styled.div`
background: var(--gray);
width: 35px;
height: 35px;
border-radius: 50%;
`
export const Infors = styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;
max-width: 100%;
> strong {
  word-wrap: break-word;
  color: var(--white);
}

> p {
  color: var(--gray-light);
}
`
export const Dot = styled.div`
width: 2px;
height: 2px;
background: var(--gray-light);
`