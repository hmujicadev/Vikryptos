import { useState } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'
import {
  NFTCardBackground,
  NFTCardVideoWrapper,
  NFTCardImageWrapper,
  NFTCardWrapper,
  NFTCardInfoBottomContent,
  NFTCardInfoCog,
  NFTCardInfoPower,
  NFTCardInfoTime,
  NFTCardInfoRareWrapper,
  NFTCardInfoTitle,
  NFTCardInfoTitleWrapper,
  NFTCardPerspectiveWrapper,
  NFTCardContentWrapper,
  NFTCardInfoPrice,
} from './NFTCard.styles'

// SVG elements
import Arm from '../../../public/images/arm.svg'
import Reloj from '../../../public/images/reloj.svg'

interface NFTCardI {
  title: string
  rareLevel: 1 | 2 | 3 | 4 | 5
  power?: string | number
  age?: string | number
  image?: string
  price?: string
  imageSrc?: string
  videoSrc?: string
  videoLoop?: boolean
  inventory?: boolean
  onConfig?: () => void
}

export const NFTCard = ({
  title,
  rareLevel,
  power,
  age,
  price,
  imageSrc,
  videoSrc,
  videoLoop = true,
  inventory = false,
  onConfig,
}: NFTCardI) => {
  const [angle, setAngle] = useState(10)
  // const [pos, setPos] = useState<Array<number>>([0, 0])
  // const [perspective, setPerspective] = useState(500)

  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)

  const rotateY = useTransform(x, [0, 1], [-angle, angle], {
    clamp: true,
  })
  const rotateX = useTransform(y, [0, 1], [angle, -angle], {
    clamp: true,
  })

  const onMove = (e: any) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight
    x.set(xValue, true)
    y.set(yValue, true)
  }

  const getColorByRareLevel = (): string => {
    const rareColors = [
      '#C1C1C1F5', // 1: Common
      '#3FEF74F5', // 2: Uncommon
      '#15467EF5', // 3: Rare
      '#6C27B3F5', // 4: Epic
      '#FF8700F5', // 5: Legend
    ]
    return rareColors[rareLevel - 1]
  }
  return (
    <NFTCardPerspectiveWrapper>
      <NFTCardWrapper
        color={getColorByRareLevel()}
        onPointerMove={onMove}
        style={{
          rotateY,
          rotateX,
        }}
      >
        <NFTCardBackground />
        <NFTCardContentWrapper>
          {videoSrc ? (
            <NFTCardVideoWrapper>
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
            </NFTCardVideoWrapper>
          ) : (
            <NFTCardImageWrapper>
              <img
                alt="r1"
                src={imageSrc || '/images/characters/Berserker.avif'}
              />
            </NFTCardImageWrapper>
          )}
          <NFTCardInfoTitleWrapper>
            {/* <NFTCardInfoTitle>{title}</NFTCardInfoTitle> */}
            <NFTCardInfoRareWrapper>
              {Array.from(new Array(rareLevel)).map((_, idx) => (
                <img
                  key={idx}
                  loading="lazy"
                  src="/assets/star.png"
                  alt="star"
                  height={12}
                  width={13}
                />
              ))}
              {price ? (
                <NFTCardInfoPrice>{`$ ${price}`}</NFTCardInfoPrice>
              ) : null}
            </NFTCardInfoRareWrapper>
          </NFTCardInfoTitleWrapper>
          {power || age ? (
            <NFTCardInfoBottomContent>
              {power ? (
                <NFTCardInfoPower>
                  <Arm width="20px" height="20px" />
                  &nbsp;
                  <span>
                    {`${power}`}
                    {onConfig ? <NFTCardInfoCog onClick={onConfig} /> : null}
                  </span>
                </NFTCardInfoPower>
              ) : null}
              {age ? (
                <NFTCardInfoTime>
                  <Reloj width="20px" height="20px" />
                  &nbsp;
                  <span>{`${power}`}</span>
                </NFTCardInfoTime>
              ) : null}
            </NFTCardInfoBottomContent>
          ) : null}
        </NFTCardContentWrapper>
      </NFTCardWrapper>
    </NFTCardPerspectiveWrapper>
  )
}

export default NFTCard
