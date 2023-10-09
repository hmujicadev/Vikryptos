import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}
  body {
    font-family: 'Mate SC', serif;
    color:white;
    background-color:white;
  }
`
export default GlobalStyle