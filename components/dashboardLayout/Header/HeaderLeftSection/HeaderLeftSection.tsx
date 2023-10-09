import { HeaderLeftWrap, HeaderLogo } from './HeaderLeftSection.styles'
import { useRouter } from 'next/router'
import ROUTES from '../../../../routes'
const HeaderLeftSection = () => {
  const router = useRouter()
  return (
    <HeaderLeftWrap>
      <HeaderLogo onClick={() => router.push(`${ROUTES.home.href}`)} />
    </HeaderLeftWrap>
  )
}

export default HeaderLeftSection
