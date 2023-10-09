import {
  MyStatisticsTableContainter,
  MyStatisticsTableWrap,
  MyStatisticsTableHeader,
} from './MyStatisticsTable.styles'
// Imports Constants
import { TEMPORAL_MYSTATISTICS } from '../../../../constants'

const MyStatisticsTable = () => {
  return (
    <MyStatisticsTableContainter>
      <MyStatisticsTableWrap>
        <thead>
          <MyStatisticsTableHeader>
            <th></th>
            <th>Mints</th>
            <th>Buys</th>
            <th>Sells</th>
          </MyStatisticsTableHeader>
        </thead>
        <tbody>
          {TEMPORAL_MYSTATISTICS &&
            TEMPORAL_MYSTATISTICS.length > 1 &&
            TEMPORAL_MYSTATISTICS.map((statistics) => (
              <tr key={statistics.id}>
                <td>{statistics.type === 0 ? 'Vikings' : 'Boats'}</td>
                <td>{statistics.mints}</td>
                <td>{statistics.buys}</td>
                <td>{statistics.sells}</td>
              </tr>
            ))}
        </tbody>
      </MyStatisticsTableWrap>
    </MyStatisticsTableContainter>
  )
}

export default MyStatisticsTable
