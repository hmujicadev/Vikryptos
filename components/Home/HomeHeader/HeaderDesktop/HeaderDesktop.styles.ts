import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

// Contenedor Principal
export const HeaderDesktopWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0 auto;
  @media only ${devices.xs} {
    display: none;
  }
  @media only ${devices.sm} {
    max-width: 1500px;
    justify-content: start;
  }
  @media only ${devices.lg} {
    justify-content: center;
  }
`
// Contenedor de opciones del header
export const HeaderDesktopOptionWrapper = styled.div`
  height: 100%;
  cursor: pointer;
`
// Opcion del header
export const HeaderDesktopOption = styled.span`
  height: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #696a6e;
  // color: #000;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px 15px;
  & :hover {
    transform: scale(1.1);
    color: #000;
  }
`
// Contenedor del select de lenguajes
export const SelectCountriesDesktopWrapper = styled.div`
  margin: 0 0 0 20px;
  @media only ${devices.sm} {
    position: absolute;
    right: 10px;
  }
  @media only ${devices.lg} {
    position: inherit;
  }
`