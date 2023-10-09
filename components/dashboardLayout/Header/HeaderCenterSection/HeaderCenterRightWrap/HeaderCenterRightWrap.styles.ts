import styled from 'styled-components'
import { devices } from '../../../../../styles/breakpoints'

// Contenedor de balance en Navbar
export const NavbarBalanceWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  margin: 0 0 0 20px;
  //Animation
  animation: navbar 0.5s;
  animation-direction: alternate;
  @keyframes navbar {
    0% {
      transform: translateY(-60px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`
// Contenedor de balance del juego en navbar
export const NavbarbalanceMoneyWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.1s;
  }
`
// Balance del Juego en Navbar
export const NavbarbalanceMoney = styled.span`
  margin: 0 0 0 5px;
  font-size: 1.2rem;
`
