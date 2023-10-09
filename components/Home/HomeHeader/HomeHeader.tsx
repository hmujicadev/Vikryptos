import React from 'react'
import { HomeHeaderWrap } from './HomeHeader.styles'
import HeaderMobile from '../../global/HeaderMobile/HeaderMobile'
import HeaderDesktop from './HeaderDesktop/HeaderDesktop'

const HomeHeader = () => {
  return (
    <HomeHeaderWrap>
      <HeaderDesktop />
      <HeaderMobile />
    </HomeHeaderWrap>
  )
}

export default HomeHeader
