import {
  HeaderRightWrap,
  NavbarWalletIconWrapper,
  NavbarWalletWrapper,
  NavbarWalletTop,
  NavbarWallet,
} from './HeaderRightSection.styles'
// SVG imports
import FaratNavbar from '../../../../public/images/farat-navbar.svg'
import Wallet from '../../../../public/images/wallet2.svg'

export const HeaderRightSection = () => (
  <HeaderRightWrap>
    <NavbarWalletIconWrapper>
      <Wallet height="40" />
    </NavbarWalletIconWrapper>
    <NavbarWalletWrapper>
      <NavbarWalletTop>
        <FaratNavbar height="22" />
        <NavbarWallet>358,00</NavbarWallet>
      </NavbarWalletTop>
      <NavbarWallet>0x4587...7865</NavbarWallet>
    </NavbarWalletWrapper>
  </HeaderRightWrap>
)
export default HeaderRightSection
