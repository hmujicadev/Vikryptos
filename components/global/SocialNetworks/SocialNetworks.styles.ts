import styled from 'styled-components'
import { devices } from '../../../styles/breakpoints'

// Contenedor de svg
export const SocialNetwork = styled.div`
  cursor: pointer;
  opacity: 0.6;
  @media only ${devices.xs} {
    opacity: 1;
  }
  & svg {
    width: 50px;
    height: 45px;
    @media only ${devices.xs} {
      width: 35px;
      height: 35px;
    }
  }
  &:hover {
    opacity: 1;
    transform: scale(1.1);
    @media only ${devices.xs} {
      width: 35px;
      transform: inherit;
    }
  }
`
