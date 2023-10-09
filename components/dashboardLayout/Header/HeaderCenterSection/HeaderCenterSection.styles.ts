import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

// Contenedor principal navbar center section
export const HeaderCenterSectionWrap = styled.div`
  justify-content: center;
  flex-grow: 1;
  padding: 5px 1px 0px 1px;
  height: 100%;
  box-sizing: border-box;
  @media only ${devices.xs} {
    display: none;
  }
  @media only ${devices.sm} {
    display: flex;
  }
`

// Contenedor principal de opciones del navbar
export const NavOptionsSectionWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0;
  height: 100%;
`
// Bloque superior para opciones del navbar
export const NavOptionsTopWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
// Contenedor de opciones del navbar
export const NavOptionsWrap = styled.div`
  cursor: pointer;
  position: relative;
  //Animation
  animation: navbar 0.5s;
  animation-direction: alternate;
  & span:hover {
    color: #000;
  }
  @keyframes navbar {
    0% {
      transform: translateY(-60px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`
// Opciones del navbar
export const NavOption = styled.div`
  line-height: 1.5em;
  &:hover {
    transition-duration: 0.2s;
    color: #000;
  }
  @media only ${devices.sm} {
    font-size: 1.2rem;
    padding: 0 10px;
  }
  @media only ${devices.lg} {
    font-size: 1.2rem;
    padding: 0 15px;
  }
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    background-image: url('/images/navbar-option.svg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }
  &:hover ::before {
    transition-duration: 0.6s;
    opacity: 1;
  }
`

// Seccion inferior en donde se encuentra el borde de hielo del navbar
export const NavOptionsBottomWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
`
