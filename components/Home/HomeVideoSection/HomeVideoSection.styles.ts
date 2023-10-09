import { motion } from 'framer-motion'
import styled from 'styled-components'
import { devices } from '../../../styles/breakpoints'

// Contenedor principal
export const HomeWrapper = styled.div`
  position: relative;
  height: 100%;
  @media only ${devices.xs} {
    //aqui va el gif
    // background-image: url('./images/play.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
`

// Video del home
export const Video = styled.video`
  position: fixed;
  left: 0;
  top: -5rem;
  min-width: 100%;
  min-height: 100%;
  @media only ${devices.xs} {
    left: -7rem;
    top: 0rem;
    height: 100vh;
  }
`
// Contenedor del body en el home
export const HomeBodyWrapper = styled.div`
  padding: 10px;
  display: grid;
  transform: translateY(70px);
  grid-template-columns: calc(100% - 70px) 70px;
  grid-template-rows: 50vh 35vh;
  grid-template-areas:
    'content social'
    'ancillary ancillary';
  @media only ${devices.xs} {
    transform: translateY(80px);
    grid-template-columns: 100%;
    grid-template-rows: 50vh 35vh;
    padding: 10px;
    right: 0px;
    grid-template-areas:
      'content'
      'ancillary';
  }
`
// Contenedor central del body
export const HomeBodyContentWrapper = styled.div`
  grid-area: content;
  display: grid;
  justify-content: center;
  align-items: start;
  grid-template-columns: 100%;

  @media only ${devices.xs} {
    // grid-template-rows: auto;
  }
  @media only ${devices.sm} {
    // grid-template-rows: 30% 10% 10%;
    grid-template-columns: 600px;
    transform: translateX(35px);
  }
`
// Logo de vikrypto en desktop
export const VLogoWrapper = styled(motion.div)`
  justify-self: center;
  align-self: end;
  width: 30rem;
  @media only ${devices.xs} {
    display: none;
  }
`
// Contenedor con fondo gradiante negro
export const ShadowWrapper = styled.div`
  justify-self: center;
  align-self: center;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.01531162464985995) 0%,
    rgba(0, 0, 0, 0.25531162464985995) 40%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.25531162464985995) 70%,
    rgba(0, 0, 0, 0.01531162464985995) 100%
  );
  & > span {
    text-align: center;
    font-size: 1rem;
  }
`

// Contedeor principal
export const AttackButtonImageWrapper = styled.div`
  width: 120px;
  height: 80px;
`
// Boton Atacar Aldeas
export const AttackButton = styled.button.attrs({
  type: 'button',
})`
  justify-self: center;
  background-color: transparent;
  color: white;
  border: none;
  width: 230px;
  height: 75px;
  cursor: pointer;
  display: flex;
  @media only ${devices.sm} {
    font-size: 1.2rem;
  }
  @media only ${devices.lg} {
    font-size: 1.6rem;
  }
  &:hover span {
    transform: scale(1.2);
  }
`
// Contenedor de las redes sociales
export const SocialNetworksDesktopWrapper = styled.div`
  align-self: center;
  grid-area: social;
  display: grid;
  padding: 10px;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  grid-template-rows: repeat(6, 45px);
  transform: translateY(70%);
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`
