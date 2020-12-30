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
width: 100%;
padding: 0 8px;
margin-top: 12px;
`
export const Avatar = styled.div`
background: var(--gray);
width: 34px;
height: 34px;
border-radius: 50%;
`
export const Infors = styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;
max-width: 80%;

> strong {
  font-weight: 600;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: wrap;
  color: var(--white);
  font-family: 'Roboto', sans-serif;
}

> p {
    color: var(--gray-light);
    margin-top: 7px;
  }

> span {
  display: flex;
  flex-wrap: wrap;
  color: var(--gray-light);
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  align-items: center;
}


`
export const Dot = styled.div`
width: 4px;
height: 4px;
margin: 0 5px;
border-radius: 50%;
background: var(--gray-light);
`