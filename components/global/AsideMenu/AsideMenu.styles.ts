import styled from 'styled-components'
import { devices } from '../../../styles/breakpoints'

// Contenedor principal
export const AsideMenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only ${devices.xs} {
    margin: 12vh 0 20px 0;
    height: 15vh;
    width: 100%;
  }
  @media only ${devices.sm} {
    height: 100%;
  }
  @media only ${devices.lg} {
  }
`
// Menú de links
export const AsideMenuOptionsGroupWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only ${devices.xs} {
    flex-direction: row;
    justify-content: center;
  }
  @media only ${devices.sm} {
    justify-content: start;
    flex-direction: column;
  }
  @media only ${devices.lg} {
  }
`
// Contenedor de cada Link
export const AsideMenuOptionsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media only ${devices.xs} {
    margin: 0 10px;
    & :hover svg {
      transform: scale(1.3);
    }
  }
  @media only ${devices.sm} {
    margin: 15px 0;
  }
  & :hover svg {
    transform: scale(1.2);
  }
`
// Contenedor de cada icono
export const AsideMenuOptionIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  position: relative;
  &:: before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url('/images/aside-option-background.svg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: contain;
  }
  & svg {
    z-index: 2;
  }

  @media only ${devices.xs} {
  }
  @media only ${devices.sm} {
  }
  @media only ${devices.lg} {
  }
`
// Icono de los options
export const AsideMenuOptionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;

  background-color: rgba(255, 255, 255, 0.2);
  @media only ${devices.xs} {
    margin: 0 10px 0 10px;
  }
  @media only ${devices.sm} {
    margin: 10px 0 10px 0;
  }
  @media only ${devices.lg} {
  }
`
// Contenedor del Label en cada option del menu
export const AsideMenuOptionLabelWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;

  background-color: rgba(255, 255, 255, 0.2);
  @media only ${devices.xs} {
    margin: 0 10px 0 10px;
  }
  @media only ${devices.sm} {
    margin: 10px 0 10px 0;
  }
  @media only ${devices.lg} {
  }
`
// Label de cada option del menu
export const AsideMenuOptionLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;

  background-color: rgba(255, 255, 255, 0.2);
  @media only ${devices.xs} {
    margin: 0 10px 0 10px;
  }
  @media only ${devices.sm} {
    margin: 10px 0 10px 0;
  }
  @media only ${devices.lg} {
  }
`
