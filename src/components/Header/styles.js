import styled, {css} from 'styled-components';
import {
  Search, 
  VideoPlus, 
  GridThreeUp, 
  Bell, 
  PersonCircle, 
  Menu,
  SearchAlt2,
  ArrowBack
} from '../../styles/Icons'

export const Container = styled.div`
display: flex;
width: 100%;
position: fixed;
align-items: center;
padding: 8px 10px 8px 16px;

@media(max-width: 472px){
  padding: 8px 10px 8px 10px;
}

@media(max-width: 370px){
  padding: 8px 4px;
}
background: var(--secondary);
justify-content: space-between;
`

export const ArrowBackIcon = styled(ArrowBack)`
display: none;
margin-right: 17px;
@media(max-width: 655px){
  display: ${props => props.visible ? 'none' : 'flex'};
}

width: 24px;
height: 27px;
fill: var(--white);
`

export const GroupButton = styled.div`
display: ${props => props.visible ? 'flex' : 'none'};
align-items: center;
padding-right: 10px;

@media(min-width: 655px){
  display: flex;
}

> button {
  padding: 8px;
  background: none;
  border-radius: 50%;
  outline: 0;

  &:hover{
    background: var(--hover-icon-gray);
    transition: 0.3s ease;
  }

  &:active{
    background: var(--gray);
    transition: 0.2s ease;
  }
}
`

export const MenuIcon = styled(Menu)`
width: 26px;
height: 26px;

color: var(--white);
`

export const Logo = styled.img`
width: 98px;
margin-left: 16px;
margin-right: 10px;
height: 28px;

@media(max-width: 422px){
  margin-left: 4px;
}
`
export const SearchWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
@media(max-width: 655px){
  display: ${props => props.visible ? 'none' : 'flex'};
}

`
export const SearchBar = styled.input`
background: var(--search-bar-color);
width: calc(34vw + 6em);
height: 32px;
color: var(--white);
font-size: 17px;
padding: 4px 6px;
outline: none;
border-radius: 3px 0 0 3px;
border: 1px solid var(--gray);

@media(max-width: 920px){
  width: calc(22vw + 2em);
}

@media(max-width: 860px){
  width: calc(21vw + 2em);
}

@media(max-width: 806px){
  width: calc(21vw + 2em);
}

@media(max-width: 760px){
  width: calc(17vw + 1em);
}

@media(max-width: 655px){
  width: ${props => props.visible ? '' : '100%'}
}

&:focus {
  border: solid 1px var(--search-border-hover) ;
}

&::placeholder{
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
}
`
export const SearchButton = styled.button`
display: flex;
align-items: center;
outline: none;
padding: 5px 29px;
justify-content: center;
height: 32px;
border-radius: 0 3px 3px 0;
background: var(--gray);

> svg:hover {
  opacity: 1.2;
}
`

export const SearchIcon = styled(Search)`
width: 15px;
height: 15px;
opacity: 0.8;
color: var(--gray-light);

`

export const ActionsIcons = styled.div`
display: ${props => props.visible ? 'flex': 'none'};
justify-content: center;
align-items: center;
padding: 0 20px;

> svg + svg {
  margin-left: 27px;
}

@media(min-width: 655px){
  display: flex;
}

@media(max-width: 655px){

  > svg + svg {
    margin-left: 17px;
  }
}

@media(max-width: 400px){
  padding: 0 6px 0 0px;
}

`

const iconCSS = css`
width: 21px;
height: 21px;

`
export const SearchIconAlt = styled(SearchAlt2)`
visibility: hidden;

@media(max-width: 655px){
  visibility: visible;
  fill: var(--white);
  ${iconCSS}
}
`

export const VideoIcon = styled(VideoPlus)`
${iconCSS}
fill: var(--white);
`
export const AppsIcon = styled(GridThreeUp)`
width: 16px;
fill: var(--white);
height: 16px;
`
export const BellIcon = styled(Bell)`
${iconCSS}
display: flex;
fill: var(--white);

@media(max-width: 428px){
  display: none;
}

`
export const PersonIcon = styled(PersonCircle)`
width: 30px;
height: 30px;
fill: #6b6bff;
`