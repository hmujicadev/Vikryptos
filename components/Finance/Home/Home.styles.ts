import styled from 'styled-components'
import { devices } from '../../../styles/breakpoints'

// Contenedor Principal
export const FinanceContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 50px 20px 20px 20px;
  display: grid;
  overflow: auto;
  @media only ${devices.xs} {
    padding: 1px;
    margin: 0 0 40px 0;
    gap: 40px 40px;
    grid-template:
      'requirements'
      'withdraw'
      'deposit'
      'transactions'
      'statistics'
      'gamesStats';
    width: 90%;
  }
  @media only ${devices.sm} {
    padding: 10px;
    gap: 20px;
    grid-template:
      'requirements requirements withdraw  withdraw deposit deposit' 150px
      'requirements requirements gamesStats gamesStats gamesStats gamesStats' 150px
      'statistics statistics gamesStats gamesStats gamesStats gamesStats' 150px
      'transactions transactions gamesStats gamesStats gamesStats gamesStats' auto;
  }
  @media only ${devices.lg} {
    gap: 30px;
    grid-template:
      'requirements statistics statistics gamesStats gamesStats gamesStats' 150px
      'requirements withdraw deposit gamesStats  gamesStats gamesStats' 150px
      'transactions transactions . gamesStats gamesStats gamesStats' auto;
  }
`

// Contenedor de requisitos para el retiro
export const FinanceRequirements = styled.div`
  grid-area: requirements;
  min-width: 300px;
  @media only ${devices.xs} {
    min-width: inherit;
  }
`
// Contenedor del boton de retiro
export const FinanceWithdraw = styled.div`
  grid-area: withdraw;
  align-self: end;
  height: 125px;
  min-width: 120px;
`
// Contenedor del boton de deposito
export const FinanceDeposit = styled.div`
  grid-area: deposit;
  height: 125px;
  align-self: end;
  min-width: 120px;
`
// Contenedor de stadisticas generales
export const FinanceStatistics = styled.div`
  grid-area: statistics;
`
// Contenedor de transacciones
export const FinanceTransactions = styled.div`
  grid-area: transactions;
  height: 95%;
`
// Contenedor de resultados
export const FinanceGamesStats = styled.div`
  grid-area: gamesStats;
  height: 95%;
  @media only ${devices.xs} {
    height: 100%;
  }
`

/* Secciones de finanzas
------------------------------------------------------------------------------*/
// Titulo de secciones
export const FinanceTitle = styled.h3`
  color: white;
  font-size: 1.2rem;
  font-weight: 100;
  margin: 10px 0 10px 0;
  text-align: initial;
`
// Emboltorio de requisitos para el retiro
export const FinanceRequirementsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`

export const TotalDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-weight: 400;
  align-items: center;
  width: auto;
  min-width: 150px;
  height: 100px;
  border: 2px solid transparent;
  border-image: url(../../images/div-square.svg) 5;
  background-image: url(../../images/bg-card.svg);
  background-repeat: repeat;
  background-size: 201px 220px;
`
