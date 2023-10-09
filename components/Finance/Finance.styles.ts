import styled from 'styled-components'
import { devices } from '../../styles/breakpoints'

// Container Principal
export const FinanceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  position: absolute;
  top: 0;
  overflow: hidden;
  @media only ${devices.xs} {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  @media only ${devices.sm} {
    justify-content: start;
    flex-direction: row;
    height: 100%;
  }
`

