import React from 'react'
import {
  FinanceContainer,
  FinanceRequirements,
  FinanceRequirementsWrap,
  FinanceWithdraw,
  FinanceDeposit,
  FinanceStatistics,
  FinanceTransactions,
  FinanceGamesStats,
  FinanceTitle,
  TotalDetail,
} from './Home.styles'

import RequirementsTable from '../../global/Tables/RequirementsTable/RequirementsTable'
import InvestmentTable from '../../global/Tables/InvestmentTable/InvestmentTable'
import TransactionsTable from '../../global/Tables/TransactionsTable/TransactionsTable'
import GameStats from '../../global/Swiper/GameStats/GameStats'

import ButtonClaim from '../../Custom/ButtonClaim/ButtonClaim'

// type Props = {}./AsideMenuSection/AsideMenuWrap

const FinanceHome = () => {
  return (
    <FinanceContainer>
      <FinanceRequirements>
        <FinanceTitle>Requisitos de retiro</FinanceTitle>
        <FinanceRequirementsWrap>
          <RequirementsTable />
        </FinanceRequirementsWrap>
      </FinanceRequirements>
      <FinanceWithdraw>
        <ButtonClaim />
      </FinanceWithdraw>
      <FinanceDeposit>
        <ButtonClaim />
      </FinanceDeposit>
      <FinanceStatistics>
        <FinanceTitle>Inversion</FinanceTitle>
        <InvestmentTable />
      </FinanceStatistics>
      <FinanceTransactions>
        <FinanceTitle>Transacciones</FinanceTitle>
        <TransactionsTable />
      </FinanceTransactions>
      <FinanceGamesStats>
        <FinanceTitle>Estadísticas en Juegos </FinanceTitle>
        <GameStats />
      </FinanceGamesStats>
    </FinanceContainer>
  )
}
export default FinanceHome
