import styled from 'styled-components'
import { devices } from '../../../../../styles/breakpoints'

// Contedeor principal
export const HeaderCenterWrapCenter = styled.div`
  background-image: url('/images/button-center-navbar.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 150px;
  padding: 0;
  height: 100%;
  cursor: pointer;
  transition-duration: 0.1s;
  &:hover {
    transform: scale(1.07);
    transition-duration: 0.1s;
  }

  //Animation
  animation: navbar 1.5s;
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
// Boton Atacar Aldeas
export const AttackButton = styled.button.attrs({
  type: 'button',
})`
  background-color: transparent;
  border: none;
  height: 100%;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  @media only ${devices.sm} {
    font-size: 1.2rem;
  }
  @media only ${devices.lg} {
    font-size: 1.2rem;
  }
`
