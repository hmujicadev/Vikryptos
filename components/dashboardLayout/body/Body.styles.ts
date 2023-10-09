import styled from 'styled-components'
import { devices } from '../../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 14vh);
  @media only ${devices.sm} {
    height: calc(100vh - 8vh);
  }
  @media only ${devices.lg} {
    padding-top: 50px;
  }
`
