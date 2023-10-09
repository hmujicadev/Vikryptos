import {
  RequirementsTableContainter,
  RequirementsTableWrap,
  RequirementsTableHeader,
} from './RequirementsTable.styles'
// Imports SVG
import RedLight from '../../../../public/images/red-light.svg'
import GreenLight from '../../../../public/images/green-light.svg'
// Imports Constants
import { TEMPORAL_REQUIREMENTS } from '../../../../constants'

const RequirementsTable = () => (
  <RequirementsTableContainter>
    <RequirementsTableWrap>
      <thead>
        <RequirementsTableHeader>
          <th>Requirement</th>
          <th>Actual</th>
          <th>Required</th>
          <th>Status</th>
        </RequirementsTableHeader>
      </thead>
      <tbody>
        {TEMPORAL_REQUIREMENTS &&
          TEMPORAL_REQUIREMENTS.length > 1 &&
          TEMPORAL_REQUIREMENTS.map((requirement) => (
            <tr key={requirement.id}>
              <td>{requirement.type}</td>
              <td>{requirement.actual}</td>
              <td>{requirement.required}</td>
              <td>
                {requirement.status === 0 ? (
                  <RedLight width="30px" />
                ) : (
                  <GreenLight width="30px" />
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </RequirementsTableWrap>
  </RequirementsTableContainter>
)

export default RequirementsTable
