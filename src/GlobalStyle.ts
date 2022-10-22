import  { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


body {
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
     sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   background: #272727;
   overflow-x: hidden;
}
`

