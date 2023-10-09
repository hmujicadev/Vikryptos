import styled from 'styled-components'
import { devices } from '../../styles/breakpoints'

// Container Principal
export const BoatsContainer = styled.div`
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
// Container Principal
export const BoatsSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100%;
  margin: 20vh 0 0 0;
`
// Sección de Vikingos
export const BoatsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only ${devices.xs} {
    margin: 0;
    flex-direction: column;
  }
  @media only ${devices.sm} {
    flex-direction: row;
  }
`

// Sección de detalle
export const DetailSectionWrap = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media only ${devices.xs} {
    margin: 0 0 40px 0;
  }
  @media only ${devices.sm} {
  }
`
// Conenedor de la seccion del Claim
export const DetailSectionClaimWrap = styled.div`
  width: 300px;
  height: 8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media only ${devices.xs} {
  }
  @media only ${devices.sm} {
  }
`

// Contenedor de informacion detalle del personaje seleccionado
export const DetailSectioninfoWrap = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  align-items: center;
  flex-direction: column;
  background-color: #000;
  justify-content: center;
  padding: 10px;
  @media only ${devices.xs} {
  }
  @media only ${devices.sm} {
  }
`
// Informacion detalle del personaje seleccionado
export const DetailSectioninfo = styled.span`
  text-indent: 10px;
  text-align: justify;
  font-size: 1rem;
  letter-spacing: 1.1px;
  font-weight: bold;
  line-height: 20px;
  color: gray;
`

// Sección de detalle
export const InventorySectionWrap = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 5%;
  @media only ${devices.xs} {
    margin: 0;
    width: 100%;
  }
  @media only ${devices.sm} {
    margin: 0 0 0 2%;
    max-width: 60vw;
  }
`
