import styled from 'styled-components'
import { devices } from '../../../styles/breakpoints'

// Contenedor de adicionales
export const AncillaryWrapper = styled.div`
  grid-area: ancillary;
  justify-self: center;
  align-self: end;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  column-gap: 10px;
  @media only ${devices.xs} {
    grid-template-columns: calc(50vw - 10px) calc(50vw - 10px);
  }
`
// Contenedor de adicionales
export const AncillaryOption = styled.div`
  width: 100%;
  cursor: pointer;
  background-image: url('./images/rectangle-ice.svg');
  background-repeat: no-repeat;
  height: 50px;
  display: grid;
  justify-content: center;
  align-items: center;
  @media only ${devices.xs} {
    height: 50px;
    & svg {
      width: 100px;
      height: 30px;
    }
  }
  @media only ${devices.sm} {
    opacity: 0.6;
  }
  &:hover {
    opacity: 1;
    transform: scale(1.1);
    @media only ${devices.xs} {
      transform: scale(1);
    }
  }
  & svg {
    width: 120px;
    height: 50px;
  }
`
