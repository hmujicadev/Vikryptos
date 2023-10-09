import styled from 'styled-components'
import { devices } from '../../../styles/breakpoints'

// Contenedores
export const MainHeader = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0 1px 15px rgb(f f f / 4%), 0 1px 6px rgb(0 0 0 / 4%);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 10;
  flex-wrap: nowrap;
  margin: 0 0 1% 0;
  @media only ${devices.xs} {
    height: 12vh;
    margin: 0 0 10% 0;
  }
  @media only ${devices.sm} {
    height: 8vh;
  }
  @media only ${devices.lg} {
  }
`
