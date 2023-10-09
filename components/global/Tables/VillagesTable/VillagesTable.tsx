import {
  VillagesTableContainter,
  VillagesTableWrap,
  VillagesTableHeader,
  TableTitleWrap,
  TableTitleItem,
} from './VillagesTable.styles'
// Imports Constants
import { TEMPORAL_VILLAGES } from '../../../../constants'
// Imports SVG
import Dollar from '../../../../public/images/dollar-icon.svg'

const VillagesTable = () => {
  return (
    <VillagesTableContainter>
      <TableTitleWrap>
        <TableTitleItem>GAME : VILLAGES</TableTitleItem>
        <TableTitleItem>
          Winned : {TEMPORAL_VILLAGES[0].award} <Dollar width="25" />
        </TableTitleItem>
      </TableTitleWrap>
      <VillagesTableWrap>
        <thead>
          <VillagesTableHeader>
            <th>Village</th>
            <th>Date</th>
            <th>Stars</th>
            <th>Clan</th>
          </VillagesTableHeader>
        </thead>
        <tbody>
          {TEMPORAL_VILLAGES &&
            TEMPORAL_VILLAGES.length > 1 &&
            TEMPORAL_VILLAGES.map((Villages) => (
              <tr key={Villages.id}>
                <td>{Villages.village}</td>
                <td>{Villages.date}</td>
                <td>{Villages.stars}</td>
                <td>{Villages.clan}</td>
              </tr>
            ))}
        </tbody>
      </VillagesTableWrap>
    </VillagesTableContainter>
  )
}

export default VillagesTable
