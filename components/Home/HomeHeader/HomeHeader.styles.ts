import styled from 'styled-components'
import { devices } from '../../../styles/breakpoints'

// Contenedor principal del header
export const HomeHeaderWrap = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #fff;
  opacity: 0.99;
  position: absolute;
  top: 0;
  @media only ${devices.xs} {
    height: 80px;
    background-color: transparent;
  }
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    bottom: -23px;
    left: 0;
    width: 105vw;
    z-index: -1;
    background-image: url('/images/navbar.svg');
    background-repeat: no-repeat;
    background-position: 50% -1rem;
    background-size: cover;
    height: 30px;
    @media only ${devices.xs} {
      display: none;
    }
  }
  // &::after {
  //   content: ' ';
  //   display: block;
  //   position: absolute;
  //   bottom: -26px;
  //   left: 100rem;
  //   width: 115rem;
  //   z-index: -1;
  //   background-image: url('/images/navbar.svg');
  //   background-repeat: no-repeat;
  //   background-position: 50% -1rem;
  //   background-size: cover;
  //   height: 30px;
  // }
`
