import styled, {css} from 'styled-components';
import {
  Home, 
  LocalFireDepartment, 
  VideoLibrary,
  FolderVideo,
  History,
  PlayVideo,
  ClockFill,
  Like,
  KeyboardArrowDown,
  Youtube,
  LocalMovies,
  GameController,
  Sound,
  Lightbulb,
  Settings,
  FlagAlt,
  Help,
  Feedback
} from '../../styles/Icons'

export const Container = styled.div`

display: flex;
flex-direction: column;
overflow: auto;

&::-webkit-scrollbar{
  width: 8px;
}

&::-webkit-scrollbar-thumb{
  border-radius: 1px;
  background: #545454;
}

position: fixed;

padding-top: ${props => props.visible ? '68px' : '50px'};
align-items: center;
background: var(--secondary);

width: ${props => props.visible ? '240px' : '72px'};
height: 100vh;

@media(max-width: 806px){
  display: ${props => props.visible ? 'flex' : 'none'};
}
`

export const BoxButton = styled.button`
display: flex;
outline: 0;
flex-direction: ${props => props.visible ? 'row' : 'column'};
align-items: center;
width: 100%;

height: ${props => props.visible ? '40px' : ''};

padding: ${props => props.visible ? '0 24px' : '18px 0'};

&:hover, &.active{

  background: ${props => props.visible ? 'var(--hover-icon-gray)' : 'none'};

  > svg {
    fill: var(--white);
  }

  > strong {
    color: var(--white);
  }
}

&:hover{
  background: var(--hover-icon-gray);

  > svg {
    fill: ${props => props.visible ? 'var(--gray-light)' : 'var(--white)'};
  }

}

> strong {
  margin-top: ${props => props.visible ? '0' : '5px'};
  white-space: nowrap;
  font-family: 'Roboto' ,'Noto', sans-serif;
  font-weight: ${props => props.visible ? '600' : '550'};
  overflow: hidden;
  font-size: ${props => props.visible ? '14px' : '9.5px'};
  color: ${props => props.visible ? 'var(--white)' : 'var(--gray-light)'};
  text-overflow: ellipsis;
}

> svg {
  margin: ${props => props.visible ? '0 24px 0 0' : '0'};
}
`

export const Content = styled.div`
padding: 10px 0;
width: 100%;
display: ${props => props.visible ? 'flex' : 'none'};
flex-direction: column;

& + div {
  border-top: solid 1px var(--gray);
}

> strong {
  margin-left: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--gray-light);
}

> span {
  width: 100%;
  display: flex;
  padding: 0 24px;

  > a {
  text-decoration: none;
  color: var(--gray-light);
  font-size: 13px;
  font-weight: bold;
  margin-right: 10px;
  }
}


`

export const Canal = styled(BoxButton)`
`;

export const Avatar = styled.div`
width: 24px;
height: 24px;
border-radius: 50%;
margin-right: 24px;
background: var(--gray);
`

const iconCSS = css`
width: 24px;
height: 24px;
fill: var(--gray-light);
color: var(--gray-light);
`
export const HomeIcon = styled(Home)`${iconCSS}`
export const FireIcon = styled(LocalFireDepartment)`${iconCSS}`
export const InscriptionsIcon = styled(FolderVideo)`
width: 21px;
height: 21px;
fill: var(--gray-light);
color: var(--gray-light);
`
export const LibraryIcon = styled(VideoLibrary)`${iconCSS}`


export const HistoricIcon = styled(History)`${iconCSS}`
export const MyVideosIcon = styled(PlayVideo)`${iconCSS}`
export const ClockIcon = styled(ClockFill)`
width: 21px;
height: 21px;
fill: var(--gray-light);
color: var(--gray-light);
`

export const LikeVideoIcon = styled(Like)`${iconCSS}`
export const ArrowDownIcon = styled(KeyboardArrowDown)`${iconCSS}`

export const YoutubeIcon = styled(Youtube)`${iconCSS}`
export const MoviesIcon = styled(LocalMovies)`${iconCSS}`
export const GamesIcon = styled(GameController)`${iconCSS}`
export const LiveIcon = styled(Sound)`${iconCSS}`
export const LearnIcon = styled(Lightbulb)`${iconCSS}`

export const SettingsIcon = styled(Settings)`${iconCSS}`
export const FlagIcon = styled(FlagAlt)`${iconCSS}`
export const HelpIcon = styled(Help)`${iconCSS}`
export const FeedBackIcon = styled(Feedback)`${iconCSS}`
