import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

// Contenedor principal de filtros
export const FilterWrapper = styled.div`
  display:flex;
  flex-direction:column;
  & input{
    width: 50px;
  }
`
// Contenedor superior de filtros
export const FilterTopWrapper = styled.div`
  display: flex;
  margin: 0 0 10px 0;
  @media only ${devices.xs} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
// Contenedor Inferior de filtros
export const FilterBottomWrapper = styled.div`
  display: flex;
  justify-items: space-between;
  align-items: center;

  // grid-template-columns: 25px 135px 300px  repeat(auto-fill, minmax(200px, 1fr));
  & svg {
    cursor: pointer;
  }
  & > div > svg path {
    fill: #dcdcdc;
    stroke: #dcdcdc;
  }
  & > div > svg:hover path {
    fill: #ffc600;
    stroke: #ffc600;
  }
  @media only ${devices.xs} {
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
`
// Contenedor superior izquierdo de filtros
export const FilterTopWrapperLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  @media only ${devices.xs} {
    margin: 0 0 30px 0;
    flex-basis: 100%;
  }
`
// Contenedor superior derecho de filtros
export const FilterTopWrapperRight = styled.div`
  display: flex;
  justify-content: end;
  flex-basis: 50%;
  @media only ${devices.xs} {
    flex-basis: 100%;
    margin: 0 0 30px 0;
  }
`
// Contenedor Inferior izquierdo de filtros
export const FilterBottomWrapperLeft = styled.div`
  display: grid;
  grid-template-columns: 25px 135px 30px 1fr;
  align-items: center;
  flex: 1 1 100%;
  @media only ${devices.xs} {
    margin: 0 0 30px 0;
    flex-basis: 100%;
    width: 100%;
  }
`
// Contenedor Inferior derecho de filtros
export const FilterBottomWrapperRight = styled.div`
  display: flex;
  min-width: 12rem;
  justify-content: end;
  @media only ${devices.xs} {
    margin: 0 0 30px 0;
    flex-basis: 100%;
    justify-content: center;
    width: 100%;
  }
`
