import Link from 'next/link'
import {
  AsideMenuWrap,
  AsideMenuOptionsGroupWrap,
  AsideMenuOptionsWrap,
  AsideMenuOptionIconWrap,
} from './AsideMenu.styles'
import IceBox from '../IceBox/IceBox'
import VikingIcon from '../../../public/images/icon-vikings.svg'
import BoatsIcon from '../../../public/images/icon-boats.svg'
import ClansIcon from '../../../public/images/icon-clans.svg'

const AsideMenu = () => {
  return (
    <AsideMenuWrap>
      <AsideMenuOptionsGroupWrap>
        <AsideMenuOptionsWrap>
          <Link href="/dashboard/villages/vikings" passHref>
            <AsideMenuOptionIconWrap>
              <VikingIcon height="105" />
            </AsideMenuOptionIconWrap>
          </Link>
        </AsideMenuOptionsWrap>
        <AsideMenuOptionsWrap>
          <Link href="/dashboard/villages/boats" passHref>
            <AsideMenuOptionIconWrap>
              <BoatsIcon />
            </AsideMenuOptionIconWrap>
          </Link>
        </AsideMenuOptionsWrap>
        <AsideMenuOptionsWrap>
          <Link href="/dashboard/villages/clans" passHref>
            <AsideMenuOptionIconWrap>
              <ClansIcon />
            </AsideMenuOptionIconWrap>
          </Link>
        </AsideMenuOptionsWrap>
      </AsideMenuOptionsGroupWrap>
    </AsideMenuWrap>
  )
}
export default AsideMenu
