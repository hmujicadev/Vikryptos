import React from 'react'
import {
  BoatsContainer,
  DetailSectionWrap,
  DetailSectioninfoWrap,
  DetailSectioninfo,
  BoatsSectionWrap,
  BoatsWrap,
  InventorySectionWrap,
  DetailSectionClaimWrap,
} from './Boats.styles'
import AsideMenu from '../global/AsideMenu/AsideMenu'
import TotalsDetail from '../global/TotalsDetail/TotalsDetail'
import NFTVideo from '../global/NFTVideo/NFTVideo'
import Inventory from '../global/Inventory/Inventory'
import ButtonClaim from '../Custom/ButtonClaim/ButtonClaim'

// type Props = {}./AsideMenuSection/AsideMenuWrap

const Boats = () => {
  return (
    <>
      <BoatsContainer>
        <AsideMenu />
        <BoatsSectionWrap>
          <TotalsDetail />
          <BoatsWrap>
            <DetailSectionWrap>
              <DetailSectionClaimWrap>
                <ButtonClaim />
              </DetailSectionClaimWrap>
              <NFTVideo
                rareLevel={5}
                title="Ragnar Lothbrok"
                videoSrc="../../videos/r5.mp4"
                power="250"
                age=""
              />
              <DetailSectioninfoWrap>
                <DetailSectioninfo>
                  El berseker es el nivel mas alto dentro de un clan, debes
                  haber demostrado ser un guerrero de elite para obtener este
                  título.
                </DetailSectioninfo>
              </DetailSectioninfoWrap>
            </DetailSectionWrap>
            <InventorySectionWrap>
              <Inventory />
            </InventorySectionWrap>
          </BoatsWrap>
        </BoatsSectionWrap>
      </BoatsContainer>
    </>
  )
}
export default Boats
