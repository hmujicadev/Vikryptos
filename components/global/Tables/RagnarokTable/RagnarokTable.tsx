import {
  RagnarokTableContainter,
  RagnarokTableWrap,
  RagnarokTableHeader,
  TableTitleWrap,
  TableTitleItem,
} from './RagnarokTable.styles'
// Imports Constants
import { TEMPORAL_RAGNAROK } from '../../../../constants'
// Imports SVG
import Dollar from '../../../../public/images/dollar-icon.svg'

const RagnarokTable = () => {
  return (
    <RagnarokTableContainter>
      <TableTitleWrap>
        <TableTitleItem>GAME : RAGNAROK</TableTitleItem>
        <TableTitleItem>
          PRICE : {TEMPORAL_RAGNAROK[0].price}
          <Dollar width="25" />
        </TableTitleItem>
      </TableTitleWrap>
      <RagnarokTableWrap>
        <thead>
          <RagnarokTableHeader>
            <th>Side</th>
            <th>Lottery</th>
            <th>Award</th>
            <th>Winner</th>
          </RagnarokTableHeader>
        </thead>
        <tbody>
          {TEMPORAL_RAGNAROK &&
            TEMPORAL_RAGNAROK.length > 1 &&
            TEMPORAL_RAGNAROK.map((ragnarok) => (
              <tr key={ragnarok.id}>
                <td>{ragnarok.side === 0 ? 'GOODS' : 'GIANTS'}</td>
                <td>{ragnarok.lottery}</td>
                <td>{ragnarok.award}</td>
                <td>{ragnarok.winner}</td>
              </tr>
            ))}
        </tbody>
      </RagnarokTableWrap>
    </RagnarokTableContainter>
  )
}

export default RagnarokTable
