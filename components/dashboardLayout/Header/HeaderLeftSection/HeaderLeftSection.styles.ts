import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

export const HeaderLeftWrap = styled.div`
  display: none;
  flex-basis: 1;
  justify-content: space-between;
  padding: 10px 5px;
  height: 100%;
  @media only ${devices.sm} {
    display: flex;
    justify-content: flex-start;
  }
`
export const HeaderLogo = styled.img.attrs({
  src: `../../images/LogoVikryptos.png`,
  alt: 'Vikryptos',
  loading: 'lazy',
})`
  margin: 0 0 0 20px;
  width: 110px;
  cursor: pointer;
  &:hover,
  active {
    transform: scale(1.05);
    transition-duration: 0.1s;
  }
  @media only ${devices.sm} {
    display: none;
  }
  @media only ${devices.lg} {
    display: block;
    height: 9em;
  }
`
