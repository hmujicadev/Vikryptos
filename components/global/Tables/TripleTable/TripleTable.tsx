import {
  TripleTableContainter,
  TripleTableWrap,
  TripleTableHeader,
  TableTitleWrap,
  TableTitleItem,
} from './TripleTable.styles'
// Imports Constants
import { TEMPORAL_TRIPLE } from '../../../../constants'
// Imports SVG
import Dollar from '../../../../public/images/dollar-icon.svg'

const TripleTable = () => {
  return (
    <TripleTableContainter>
      <TableTitleWrap>
        <TableTitleItem>GAME : TRIPLE</TableTitleItem>
        <TableTitleItem>
          PRICE : {TEMPORAL_TRIPLE[0].price} <Dollar width="25" />
        </TableTitleItem>
      </TableTitleWrap>
      <TripleTableWrap>
        <thead>
          <TripleTableHeader>
            <th>Numbers</th>
            <th>Lottery</th>
            <th>Award</th>
            <th>Winner</th>
          </TripleTableHeader>
        </thead>
        <tbody>
          {TEMPORAL_TRIPLE &&
            TEMPORAL_TRIPLE.length > 1 &&
            TEMPORAL_TRIPLE.map((Triple) => (
              <tr key={Triple.id}>
                <td>{Triple.numbers}</td>
                <td>{Triple.lottery}</td>
                <td>{Triple.award}</td>
                <td>{Triple.winner}</td>
              </tr>
            ))}
        </tbody>
      </TripleTableWrap>
    </TripleTableContainter>
  )
}

export default TripleTable
