import styled from 'styled-components'
import { devices } from '../../styles/breakpoints'

export const DashboardContainer = styled.div`
  background: #36393f url('../../images/dashboard-fondo-des.avif') center/cover
    no-repeat;
  background-color: rgb(17, 24, 39);
  height: 100vh;
  user-select: none;
  @media only ${devices.xs} {
  }
  @media only ${devices.sm} {
  }
  @media only ${devices.lg} {
    max-width: 2100px;
    margin: 0 auto;
  }
`
