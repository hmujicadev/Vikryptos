import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

// Contenedor principal
export const HeaderRightWrap = styled.div`
  flex-basis: 1;
  display: none;
  align-items: end;
  justify-content: flex-end;
  padding: 1px 5px;
  height: 100%;
  cursor: pointer;
  @media only ${devices.sm} {
    display: flex;
  }
`
// Contenedor svg de billetera
export const NavbarWalletIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 5px 0 0;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.1s;
  }
`
// Contenedor información de billetera
export const NavbarWalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 10px 0 0;
  padding: 0;
  cursor: pointer;
`
// Información dinero en billetera
export const NavbarWalletTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:span:first-child {
    margin: 0 0 0 10px;
  }
`
// Información direccion de billetera
export const NavbarWallet = styled.span`
  margin: 0 0 0 5px;
  font-size: 1.2rem;
`
