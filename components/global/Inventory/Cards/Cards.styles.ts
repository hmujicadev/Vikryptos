import styled from 'styled-components'
import { devices } from '../../../../styles/breakpoints'

// Contenedor principal de las tarjetas
export const CardsSectionWrapper = styled.div`
  width: 60vw;
  height: 60vh;
  border: 2px solid transparent;
  border-image: url(../../images/div-square.svg) 5;
  background-image: url(../../images/bg-card.svg);
  background-repeat: repeat;
  background-size: 200px;

  @media only ${devices.xs} {
    width: 100%;
    column-gap: 10px;
    height: 40vh;
    padding: 10px 0 10px 0;
    margin-bottom: 50px;
  }
`
// Contenedor principal de las tarjetas
export const CardsSectionWrapper2 = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  row-gap: 20px;
  column-gap: 30px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  @media only ${devices.xs} {
    column-gap: 10px;
  }
`
// Contenedor de las tarjetas
export const CardWrapper = styled.div`
  width: 140px;
  height: 200px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`
// personaje de las tarjetas
export const CharacterImage = styled.img.attrs({
  src: '',
  alt: 'Berserker',
})`
  object-fit: cover;
`
