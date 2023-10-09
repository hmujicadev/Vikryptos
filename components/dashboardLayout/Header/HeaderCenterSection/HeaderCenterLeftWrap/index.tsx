import { useState } from 'react'
import { NavbarVideoControlWrap } from './index.styles'
import {
  NavOptionsSectionWrap,
  NavOptionsTopWrap,
  NavOptionsBottomWrap,
  NavOptionsWrap,
  NavOption,
} from '../HeaderCenterSection.styles'
// SVG elements
import Play from '../../../../../public/images/play-active.svg'
import Stop from '../../../../../public/images/play-inactive.svg'
import NavbarBorder from '../../../../../public/images/navbar.svg'
// Constants
import { GAMER_OPTIONS } from '../../../../../constants'
import Link from 'next/link'

const HeaderCenterLeftWrap = () => {
  // Hooks
  const [showVideos, setShowVideos] = useState(true)

  return (
    <>
      <NavbarVideoControlWrap onClick={() => setShowVideos(!showVideos)}>
        {showVideos ? (
          <>
            <Play height="25" />
            <span>stop</span>
          </>
        ) : (
          <>
            <Stop height="25" />
            <span>play</span>
          </>
        )}
      </NavbarVideoControlWrap>

      <NavOptionsSectionWrap>
        <NavOptionsTopWrap>
          {GAMER_OPTIONS &&
            GAMER_OPTIONS.map((option) => (
              <Link key={option.label} href={option.link} passHref>
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
    </>
  )
}
export default HeaderCenterLeftWrap
