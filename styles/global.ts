import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'
import { devices } from './breakpoints'

export default createGlobalStyle`
  ${normalize()}

  * {
    box-sizing: border-box;
    user-select: none;
    font-size: 16px;
    @media only ${devices.xs} {
      font-size: 28px;
    }
    @media only ${devices.sm} {
      font-size: 24px;
    }
    @media only ${devices.lg} {
      font-size: 16px;
    }
  }

  html,
  body {
    font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    background: ${({ theme }) => theme.colors.backgroundColor};    
    color: ${({ theme }) => theme.colors.text};
    padding: 0;
    margin: 0;
    max-width: 100vw;
    overflow:hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
