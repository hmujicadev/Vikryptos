import {
  DoubleTableContainter,
  DoubleTableWrap,
  DoubleTableHeader,
  TableTitleWrap,
  TableTitleItem,
} from './DoubleTable.styles'
// Imports Constants
import { TEMPORAL_DOUBLE } from '../../../../constants'
// Imports SVG
import Dollar from '../../../../public/images/dollar-icon.svg'

const DoubleTable = () => {
  return (
    <DoubleTableContainter>
      <TableTitleWrap>
        <TableTitleItem>GAME : DOUBLE</TableTitleItem>
        <TableTitleItem>
          PRICE : {TEMPORAL_DOUBLE[0].price} <Dollar width="25" />
        </TableTitleItem>
      </TableTitleWrap>
      <DoubleTableWrap>
        <thead>
          <DoubleTableHeader>
            <th>Numbers</th>
            <th>Lottery</th>
            <th>Award</th>
            <th>Winner</th>
          </DoubleTableHeader>
        </thead>
        <tbody>
          {TEMPORAL_DOUBLE &&
            TEMPORAL_DOUBLE.length > 1 &&
            TEMPORAL_DOUBLE.map((Double) => (
              <tr key={Double.id}>
                <td>{Double.numbers}</td>
                <td>{Double.lottery}</td>
                <td>{Double.award}</td>
                <td>{Double.winner}</td>
              </tr>
            ))}
        </tbody>
      </DoubleTableWrap>
    </DoubleTableContainter>
  )
}

export default DoubleTable
