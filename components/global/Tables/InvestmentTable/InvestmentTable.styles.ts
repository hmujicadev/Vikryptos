import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

// Contenedor de la tabla de requisitos para el retiro
export const InvestmentTableContainter = styled.div`
  width: 100%;
`

// Cabecera de la tabla
export const InvestmentTableWrap = styled.table`
  border-collapse: collapse;
  border-spacing: 15px;
  width: 100%;
  line-height: 30px;
  text-align: center;
  // filas pares
  tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.15);
  }
  // filas impares
  tr:nth-child(odd) {
  }

  td {
    vertical-align: middle;
    svg {
      margin: 0 5px 0 0;
    }
  }
`
// cabecera de la tabla
export const InvestmentTableHeader = styled.tr`
  background-color: transparent !important;
  background-image: url('/images/navbar-option.svg');
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: cover;
  line-height: 40px;
  th {
    font-size: 1.1rem;
    height: 40px;
    color: black;
    padding: 0 10px 15px 10px;
    margin: 0 0 10px 0;
  }
`
// cabecera de la tabla
export const InvestmentTableTdContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`
