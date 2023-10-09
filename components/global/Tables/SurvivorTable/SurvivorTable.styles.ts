import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

// Contenedor de la tabla de requisitos para el retiro
export const SurvivorTableContainter = styled.div`
  width: 100%;
`
// Contenedor de la tabla de requisitos para el retiro
export const TableTitleWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

// elemento en cabecera de la tabla
export const TableTitleItem = styled.h2`
  font-size: 1.1rem;
  text-align: center;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    margin: 0 0 0 5px;
  }
`
// Cabecera de la tabla
export const SurvivorTableWrap = styled.table`
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
    font-size: 1rem;
    svg {
      margin-top: 10px;
    }
  }
`
// cabecera de la tabla
export const SurvivorTableHeader = styled.tr`
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
  @media only ${devices.xs} {
    line-height: 30px;
  }
  @media only ${devices.lg} {
    th {
      padding: 0 10px 20px 10px;
    }
  }
`
