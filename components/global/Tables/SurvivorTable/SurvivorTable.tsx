import {
  SurvivorTableContainter,
  SurvivorTableWrap,
  SurvivorTableHeader,
  TableTitleWrap,
  TableTitleItem,
} from './SurvivorTable.styles'
// Imports Constants
import { TEMPORAL_SURVIVOR } from '../../../../constants'
// Imports SVG
import Dollar from '../../../../public/images/dollar-icon.svg'

const SurvivorTable = () => {
  return (
    <SurvivorTableContainter>
      <TableTitleWrap>
        <TableTitleItem>GAME : SURVIVOR</TableTitleItem>
        <TableTitleItem>
          PRICE : {TEMPORAL_SURVIVOR[0].price} <Dollar width="25" />
        </TableTitleItem>
      </TableTitleWrap>
      <SurvivorTableWrap>
        <thead>
          <SurvivorTableHeader>
            <th>Numbers</th>
            <th>Lottery</th>
            <th>Award</th>
            <th>Winner</th>
          </SurvivorTableHeader>
        </thead>
        <tbody>
          {TEMPORAL_SURVIVOR &&
            TEMPORAL_SURVIVOR.length > 1 &&
            TEMPORAL_SURVIVOR.map((Survivor) => (
              <tr key={Survivor.id}>
                <td>{Survivor.character}</td>
                <td>{Survivor.lottery}</td>
                <td>{Survivor.award}</td>
                <td>{Survivor.winner}</td>
              </tr>
            ))}
        </tbody>
      </SurvivorTableWrap>
    </SurvivorTableContainter>
  )
}

export default SurvivorTable
