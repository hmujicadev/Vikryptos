import React from 'react'
import {
  HeaderDesktopWrapper,
  HeaderDesktopOptionWrapper,
  HeaderDesktopOption,
  SelectCountriesDesktopWrapper,
} from './HeaderDesktop.styles'
import SelectCountries from '../../../global/SelectCountries/SelectCountries'
import { useTranslation } from 'next-export-i18n'

const HeaderDesktop = () => {
  const { t } = useTranslation()

  return (
    <HeaderDesktopWrapper>
      <HeaderDesktopOptionWrapper>
        <HeaderDesktopOption>{t('header.whitepaper')}</HeaderDesktopOption>
      </HeaderDesktopOptionWrapper>
      <HeaderDesktopOptionWrapper>
        <HeaderDesktopOption>{t('header.contractAddress')}</HeaderDesktopOption>
      </HeaderDesktopOptionWrapper>
      <HeaderDesktopOptionWrapper>
        <HeaderDesktopOption>{t('header.buy$VCryptos')}</HeaderDesktopOption>
      </HeaderDesktopOptionWrapper>
      <HeaderDesktopOptionWrapper>
        <HeaderDesktopOption>{t('header.contractAudit')}</HeaderDesktopOption>
      </HeaderDesktopOptionWrapper>
      <SelectCountriesDesktopWrapper>
        <SelectCountries />
      </SelectCountriesDesktopWrapper>
    </HeaderDesktopWrapper>
  )
}

export default HeaderDesktop
