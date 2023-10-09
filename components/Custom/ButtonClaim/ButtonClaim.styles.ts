import styled from 'styled-components'

// Contenedor principal del boton de claim
export const ClaimButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
// Boton de claim
export const ClaimButton = styled.button`
  width: 100%;
  max-width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-size: 1.2rem;

  background-image: url('/images/rectangle-ice.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: scale(1.03);
  }
`
