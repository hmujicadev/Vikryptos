import HeaderCenterWrap from './HeaderCenterWrap/HeaderCenterWrap'
import HeaderCenterLeftWrap from './HeaderCenterLeftWrap'
import HeaderCenterRightWrap from './HeaderCenterRightWrap/HeaderCenterRightWrap'
import { HeaderCenterSectionWrap } from './HeaderCenterSection.styles'

const HeaderCenterSection = () => {
  return (
    <HeaderCenterSectionWrap>
      <HeaderCenterLeftWrap />
      <HeaderCenterWrap />
      <HeaderCenterRightWrap />
    </HeaderCenterSectionWrap>
  )
}
export default HeaderCenterSection
