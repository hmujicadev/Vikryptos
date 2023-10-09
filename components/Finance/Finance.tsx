import React from 'react'
import { FinanceContainer } from './Finance.styles'

import ButtonClaim from '../Custom/ButtonClaim/ButtonClaim'

// type Props = {}./AsideMenuSection/AsideMenuWrap

const Finance = () => {
  return (
    <>
      <FinanceContainer>
        <h1>Finanzas</h1>
        <ButtonClaim />
      </FinanceContainer>
    </>
  )
}
export default Finance
