import styled from 'styled-components';


export const Container = styled.div`
display: flex;
justify-content: flex-start;
padding-top: 25px;
padding-right: 10px;
padding-left: ${props => props.visible ? '260px' : '85px' };
width: 100%;
flex-wrap: wrap;
max-height: 100vh;
background: var(--primary);

@media(max-width: 806px){
  padding-left: 10px;
}
`