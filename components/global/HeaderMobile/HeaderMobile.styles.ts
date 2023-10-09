import styled from 'styled-components'
import { devices } from '../../../styles/breakpoints'

// Contenedor Principal
export const HeaderMobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  flex-grow: 1;
  padding: 10px 10px 0px 10px;
  position: fixed;
  width: 100%;
  z-index: 11;
  @media only ${devices.sm} {
    display: none;
  }
`
// Logo en header
export const HeaderLogoLetters = styled.div`
  width: 60%;
  height: 3.7em;
  background-image: url('/images/logoLetters.avif');
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  @media only ${devices.sm} {
    display: none;
  }
`
// Escudo para abrir header
export const ShieldToggle = styled.div`
  height: 60px;
  width: 60px;
  z-index: 11;
  background-image: url('/images/escudo.avif');
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  right: 5px;
  top: 2rem;
  &:active {
    transform: rotate(70deg);
    transition-duration: 0.2s;
  }
  &:not(:active) {
    transform: rotate(-70deg);
    transition-duration: 0.8s;
  }
`

interface MenuToggle {
  show: any
}
// Contenedor hielo base oscuro
export const MenuToggle = styled.div<MenuToggle>`
  height: 110vh;
  display: block;
  position: fixed;
  top: -12px;
  left: ${(p) => (p.show && '0') || '100vw'};
  width: 100vw;
  transition-duration: 0.3s;
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 10px;
    width: 150%;
    height: 100%;
    opacity: 0.98;
    background-image: url('/images/toggle-menu.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`
// Contenedor hielo claro
export const MenuToggleSection = styled.div`
  display: grid;
  grid-template-columns: 80%;
  grid-template-rows: 105px 60px repeat(auto-fit, 8vh);
  color: #000;
  position: relative;
  top: 65px;
  left: 60px;
  width: 100%;
  height: 100%;
`

// Contenedor principal balance y billetera
export const MenuToggleWalletWrapper = styled.div`
  justify-self: start;
  z-index: 11;
  transform: translateX(25vw);
  font-size: 0.8em;
  height: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
// Contenedor del balance
export const MenuToggleBalanceWrapper = styled.div`
  font-size: 0.8em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0 0;
  position: relative;
`
// Elemento del balance
export const MenuToggleBalanceOption = styled.span`
  font-size: 0.8em;
  display: flex;
  margin: 0 0 5px 5px;
  position: relative;
`
// Elementos superiores del balance
export const MenuToggleBalanceTop = styled.div`
  display: flex;
  align-items: start;
`
// Links a vistas del menu
export const MenuToggleOption = styled.span`
  z-index: 11;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0 0 0 20px;
`
// Contenedor del select de idiomas/paises
export const SelectCountriesWrapper = styled.div`
  z-index: 11;
  margin: 0 0 0 30vw;
`
// Contenedor de las redes sociales
export const SocialNetworksMobileWrapper = styled.div`
  z-index: 11;
  display: grid;
  margin: 0 0 0 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fit, 8vh);
`

