import Link from 'next/link'
import {
  NavbarBalanceWrap,
  NavbarbalanceMoneyWrap,
  NavbarbalanceMoney,
} from './HeaderCenterRightWrap.styles'
import {
  NavOptionsSectionWrap,
  NavOptionsTopWrap,
  NavOptionsBottomWrap,
  NavOptionsWrap,
  NavOption,
} from '../HeaderCenterSection.styles'
// SVG elements
import NavbarBorder from '../../../../../public/images/navbar.svg'
import FaratNavbar from '../../../../../public/images/farat-navbar.svg'
import TaxNavbar from '../../../../../public/images/tax-navbar.svg'
// Constants
import { OPERATIONAL_OPTIONS } from '../../../../../constants'

const HeaderCenterRightWrap = () => {
  return (
    <>
      <NavOptionsSectionWrap>
        <NavOptionsTopWrap>
          {OPERATIONAL_OPTIONS &&
            OPERATIONAL_OPTIONS.map((option) => (
              <Link key={option.label} href={option.link || '#'} passHref>
                <NavOptionsWrap>
                  <NavOption>{option.label}</NavOption>
                </NavOptionsWrap>
              </Link>
            ))}
        </NavOptionsTopWrap>

        <NavOptionsBottomWrap>
          <NavbarBorder />
        </NavOptionsBottomWrap>
      </NavOptionsSectionWrap>
      <Link href="/dashboard/finance/home" passHref>
        <NavbarBalanceWrap>
          <NavbarbalanceMoneyWrap onClick={() => alert('do you wanna money?')}>
            <TaxNavbar height="25" />
            <NavbarbalanceMoney>Claim -75%</NavbarbalanceMoney>
          </NavbarbalanceMoneyWrap>
          <NavbarbalanceMoneyWrap>
            <FaratNavbar height="25" />
            <NavbarbalanceMoney>150,25</NavbarbalanceMoney>
          </NavbarbalanceMoneyWrap>
        </NavbarBalanceWrap>
      </Link>
    </>
  )
}
export default HeaderCenterRightWrap
