import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  HeaderMobileWrapper,
  HeaderLogoLetters,
  ShieldToggle,
  MenuToggle,
  MenuToggleSection,
  MenuToggleWalletWrapper,
  MenuToggleBalanceWrapper,
  MenuToggleBalanceTop,
  MenuToggleBalanceOption,
  MenuToggleOption,
  SelectCountriesWrapper,
  SocialNetworksMobileWrapper,
} from './HeaderMobile.styles'
import { useTranslation } from 'next-export-i18n'
import SelectCountries from '../SelectCountries/SelectCountries'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
// SVG elements
// import WalletInvert from '../../../../public/images/wallet-invert.svg'
import WalletInvert from '../../../public/images/wallet-invert.svg'
import FaratNavbarInvert from '../../../public/images/farat-navbar-invert.svg'

const HeaderMobile = () => {
  // Translation
  const { t } = useTranslation()
  // Router
  const route = useRouter()

  // Hooks
  const [showToggleMenu, setShowToggleMenu] = useState(false)

  return (
    <HeaderMobileWrapper>
      <HeaderLogoLetters />
      <ShieldToggle onClick={() => setShowToggleMenu(!showToggleMenu)} />

      <MenuToggle show={showToggleMenu}>
        <MenuToggleSection>
          {route.asPath.includes('/dashboard') && (
            <MenuToggleWalletWrapper>
              <WalletInvert height="40" />

              <MenuToggleBalanceWrapper>
                <MenuToggleBalanceTop>
                  <FaratNavbarInvert height="25" />

                  <MenuToggleBalanceOption>358,00</MenuToggleBalanceOption>
                </MenuToggleBalanceTop>
                <MenuToggleBalanceOption>0x4587...7865</MenuToggleBalanceOption>
              </MenuToggleBalanceWrapper>
            </MenuToggleWalletWrapper>
          )}
          <SelectCountriesWrapper>
            <SelectCountries />
          </SelectCountriesWrapper>

          {/* <MenuToggleOption>Home</MenuToggleOption>
            <MenuToggleOption>Aldea</MenuToggleOption>
            <MenuToggleOption>Clanes</MenuToggleOption>
            <MenuToggleOption>Market</MenuToggleOption>
            <MenuToggleOption>Finanzas</MenuToggleOption>
            <MenuToggleOption>Whitepaper</MenuToggleOption> */}

          <MenuToggleOption>{t('header.whitepaper')}</MenuToggleOption>
          <MenuToggleOption>{t('header.contractAddress')}</MenuToggleOption>
          <MenuToggleOption>{t('header.buy$VCryptos')}</MenuToggleOption>
          <MenuToggleOption>{t('header.contractAudit')}</MenuToggleOption>

          <SocialNetworksMobileWrapper>
            <SocialNetworks />
          </SocialNetworksMobileWrapper>
        </MenuToggleSection>
      </MenuToggle>
    </HeaderMobileWrapper>
  )
}
export default HeaderMobile
