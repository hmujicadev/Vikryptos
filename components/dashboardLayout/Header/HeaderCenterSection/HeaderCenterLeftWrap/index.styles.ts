import styled from 'styled-components'
import { devices } from '../../../../../styles/breakpoints'

// Contenedor de control de videos
export const NavbarVideoControlWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  height: 100%;
  width: 50px;
  padding: 5px;
  margin: 0;
  cursor: pointer;
  transition-duration: 0.1s;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.1s;
  }
  & > span {
    font-size: 1.2rem;
  }
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
