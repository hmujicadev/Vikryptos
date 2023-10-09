import { ReactNode } from 'react'
import {
  InfoBoxBottom,
  InfoBoxContent,
  InfoBoxContentBg,
  InfoBoxContentWrapper,
  InfoBoxTop,
  InfoBoxWrapper,
} from './InfoBox.styles'

// import InfoBoxBg from '../../../public/assets/info_box.svg'
const BOX_TOP = '/assets/box_t.png'
// const BOX_BG = '/assets/box_mid.png'
const BOX_BOTTOM = '/assets/box_b.png'

interface InfoBoxProps {
  children: ReactNode | Array<ReactNode>
}

const InfoBox = ({ children }: InfoBoxProps) => {
  return (
    <InfoBoxWrapper>
      {/* <InfoBoxBg /> */}
      <InfoBoxTop src={BOX_TOP} />
      <InfoBoxContentWrapper>
        <InfoBoxContentBg>
          <InfoBoxContent>{children}</InfoBoxContent>
        </InfoBoxContentBg>
      </InfoBoxContentWrapper>
      <InfoBoxBottom src={BOX_BOTTOM} />
    </InfoBoxWrapper>
  )
}

export default InfoBox
