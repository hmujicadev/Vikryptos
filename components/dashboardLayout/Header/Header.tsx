import { MainHeader } from './Header.styles'
// Header sections import
import HeaderLeftSection from './HeaderLeftSection/HeaderLeftSection'
import HeaderRightSection from './HeaderRightSection/HeaderRightSection'
import HeaderCenterSection from './HeaderCenterSection/HeaderCenterSection'
import HeaderMobile from '../../global/HeaderMobile/HeaderMobile'

const Header = () => {
  return (
    <MainHeader>
      <HeaderLeftSection />
      <HeaderCenterSection />
      <HeaderRightSection />
      <HeaderMobile />
    </MainHeader>
  )
}

export default Header
