import { useState } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'
import {
  NFTVideoWrapper,
  NFTCardInfoBottomContent,
  NFTCardInfoCog,
  NFTCardInfoPower,
  NFTCardInfoTime,
  NFTCardInfoRareWrapper,
  NFTCardInfoTitle,
  NFTVideoInfoTitleWrapper,
  NFTVideoContentWrapper,
} from './NFTVideo.styles'

// SVG elements
import Arm from '../../../public/images/arm.svg'
import Reloj from '../../../public/images/reloj.svg'

//Import models
import CharacterModel from '../../CharacterModel/CharacterModel'

interface NFTVideo {
  videoSrc?: string | undefined
  title: string
  rareLevel: 1 | 2 | 3 | 4 | 5
  power?: string | number
  age?: string | number
  videoLoop?: boolean
  image?: string | null
  onConfig?: () => void
  children?: any
}

export const NFTVideo = ({
  videoSrc = undefined,
  title,
  rareLevel,
  power,
  age,
  videoLoop = true,
  onConfig,
}: NFTVideo) => {
  const getColorByRareLevel = (): string => {
    const rareColors = [
      '#C1C1C1F5', // 1: Common
      '#15467EF5', // 2: Uncommon
      '#3FEF74F5', // 3: Rare
      '#6C27B3F5', // 4: Epic
      '#FF8700F5', // 5: Legend
    ]
    return rareColors[rareLevel - 1]
  }
  return (
    <NFTVideoWrapper color={getColorByRareLevel()}>
      <NFTVideoInfoTitleWrapper>BERSEKER</NFTVideoInfoTitleWrapper>
      <NFTVideoContentWrapper>
        {!videoSrc && (
          <video
            width="100%"
            height="100%"
            controls={false}
            loop={videoLoop}
            autoPlay
            muted
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <CharacterModel></CharacterModel>
        {/* <NFTCardInfoTitle>{title}</NFTCardInfoTitle> */}
        <NFTCardInfoRareWrapper>
          {Array.from(new Array(rareLevel)).map((_, idx) => (
            <img
              key={idx}
              loading="lazy"
              src="/assets/star.png"
              alt="star"
              height={15}
              width={16}
            />
          ))}
        </NFTCardInfoRareWrapper>

        <NFTCardInfoBottomContent>
          <NFTCardInfoPower>
            <Arm width="40px" height="40px" />
            &nbsp;
            <span>
              {`${power}`}
              {onConfig ? <NFTCardInfoCog onClick={onConfig} /> : null}
            </span>
          </NFTCardInfoPower>
          <NFTCardInfoTime>
            <Reloj width="20px" height="32px" />
            &nbsp;
            <span>{`${power}`}</span>
          </NFTCardInfoTime>
        </NFTCardInfoBottomContent>
      </NFTVideoContentWrapper>
    </NFTVideoWrapper>
  )
}

export default NFTVideo
