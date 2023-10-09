import { AnimatePresence } from 'framer-motion'
import * as ROUTES from '../../../routes'
import HomeHeader from '../HomeHeader/HomeHeader'
import Ancillary from '../../global/Ancillary/Ancillary'
import SocialNetworks from '../../global/SocialNetworks/SocialNetworks'

import {
  Video,
  HomeWrapper,
  VLogoWrapper,
  HomeBodyWrapper,
  ShadowWrapper,
  AttackButtonImageWrapper,
  AttackButton,
  HomeBodyContentWrapper,
  SocialNetworksDesktopWrapper,
} from './HomeVideoSection.styles'

import { useRouter } from 'next/router'

const HomeVideoSection = () => {
  const router = useRouter()
  return (
    <>
      <HomeWrapper>
        <Video autoPlay loop muted>
          <source src="/videos/bgn.mp4" type="video/mp4" />
        </Video>

        <HomeBodyWrapper>
          <HomeBodyContentWrapper>
            <AnimatePresence>
              <VLogoWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{
                  delay: 0.3,
                  duration: 3,
                }}
              >
                <img
                  src={'/images/logoLetters.png'}
                  alt="logo"
                  width={'420px'}
                  height={'180px'}
                  loading="lazy"
                />
              </VLogoWrapper>
            </AnimatePresence>
            <ShadowWrapper>
              <span> NFT GAME (CLICK TO EARN) ON BINANCE SMART CHAIN</span>
            </ShadowWrapper>

            <AttackButton
              onClick={() => {
                router.push(ROUTES.dashboard.href)
              }}
            >
              <AttackButtonImageWrapper>
                <img
                  src="/images/Play.png"
                  alt="Play"
                  height="80px"
                  width="70px"
                  loading="lazy"
                />
              </AttackButtonImageWrapper>
              <ShadowWrapper>
                <span>PLAY THE GAME</span>
              </ShadowWrapper>
            </AttackButton>
          </HomeBodyContentWrapper>
          <SocialNetworksDesktopWrapper>
            <SocialNetworks />
          </SocialNetworksDesktopWrapper>
          <Ancillary />
        </HomeBodyWrapper>
        <HomeHeader />
      </HomeWrapper>
    </>
  )
}

export default HomeVideoSection
