import {
  InvestmentTableContainter,
  InvestmentTableWrap,
  InvestmentTableTdContent,
  InvestmentTableHeader,
} from './InvestmentTable.styles'
// Imports Constants
import { TEMPORAL_INVESTMENT } from '../../../../constants'
// Imports SVG
import FaratNavbar from '../../../../public/images/farat-navbar.svg'
import Dollar from '../../../../public/images/dollar-icon.svg'

const InvestmentTable = () => {
  return (
    <InvestmentTableContainter>
      <InvestmentTableWrap>
        <thead>
          <InvestmentTableHeader>
            <th>Coin</th>
            <th>Deposited</th>
            <th>Withdrawn</th>
            <th>Available</th>
          </InvestmentTableHeader>
        </thead>
        <tbody>
          {TEMPORAL_INVESTMENT &&
            TEMPORAL_INVESTMENT.length > 1 &&
            TEMPORAL_INVESTMENT.map((investment) => (
              <tr key={investment.id}>
                <td>
                  <InvestmentTableTdContent>
                    {investment.coin === 0 ? 'VICKS' : 'BUSD'}
                  </InvestmentTableTdContent>
                </td>
                <td>
                  <InvestmentTableTdContent>
                    {investment.deposit}
                  </InvestmentTableTdContent>
                </td>
                <td>
                  <InvestmentTableTdContent>
                    {investment.withdraw}
                  </InvestmentTableTdContent>
                </td>
                <td>
                  <InvestmentTableTdContent>
                    {investment.coin === 0 ? (
                      <FaratNavbar height="25" />
                    ) : (
                      <Dollar height="25" />
                    )}
                    {investment.available}
                  </InvestmentTableTdContent>
                </td>
              </tr>
            ))}
        </tbody>
      </InvestmentTableWrap>
    </InvestmentTableContainter>
  )
}

export default InvestmentTable
