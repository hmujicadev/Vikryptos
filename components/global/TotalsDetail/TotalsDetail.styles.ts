import styled from 'styled-components'
import { devices } from '../../../styles/breakpoints'

// Contenedor Principal
export const TotalsDetailWrap = styled.div`
  width: 100%;
  height: auto;
  margin: 0 0 2% 0;
  display: flex;
  @media only ${devices.xs} {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media only ${devices.sm} {
    align-items: strech;
    justify-content: space-evenly;
    flex-direction: row;
  }
  @media only ${devices.lg} {
  }
`
export const TotalDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-weight: 400;
  align-items: center;
  width: auto;
  min-width: 200px;
  height: 70px;
  border: 2px solid transparent;
  border-image: url(../../images/div-square.svg) 5;
  background-image: url(../../images/bg-card.svg);
  background-repeat: no-repeat;
  background-size: cover;
  @media only ${devices.xs} {
    width: 80%;
    margin: 0 0 10px 0;
  }
`

export const TotalDetailTitle = styled.span`
  margin: 0 0 5px 0;
  font-size: 1.2rem;
`
export const TotalDetailNumber = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`
