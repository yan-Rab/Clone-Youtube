import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html,#root{
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
}

*,button, input{
border: 0;
background: none;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

html {
background: var(--primary);
}

:root{
--primary: #181818;
--secondary: #202020;
--search-bar-color: #121212;
--gray:#303030; 
--gray-light: gray;
--white: #FFFFFF;
--search-border-hover: #2092AB;
--hover-icon-gray: #424242;
}

`