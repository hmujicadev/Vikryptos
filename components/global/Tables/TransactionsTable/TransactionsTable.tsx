import {
  TransactionsTableContainter,
  TransactionsTableWrap,
  TransactionsTableHeader,
} from './TransactionsTable.styles'
// Imports Constants
import { TEMPORAL_TRANSACTIONS } from '../../../../constants'
// Imports SVG
import RedLight from '../../../../public/images/red-light.svg'
import GreenLight from '../../../../public/images/green-light.svg'

const TransactionsTable = () => {
  return (
    <TransactionsTableContainter>
      <TransactionsTableWrap>
        <thead>
          <TransactionsTableHeader>
            <th>Coin</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </TransactionsTableHeader>
        </thead>
        <tbody>
          {TEMPORAL_TRANSACTIONS &&
            TEMPORAL_TRANSACTIONS.length > 1 &&
            TEMPORAL_TRANSACTIONS.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.coin === 0 ? 'VICKS' : 'BUSD'}</td>
                <td>{transaction.type === 0 ? 'Deposit' : 'Withdraw'}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>
                  {transaction.status === 0 ? (
                    <RedLight width="30px" />
                  ) : (
                    <GreenLight width="30px" />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </TransactionsTableWrap>
    </TransactionsTableContainter>
  )
}

export default TransactionsTable
