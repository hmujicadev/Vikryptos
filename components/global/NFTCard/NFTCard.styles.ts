import { motion } from 'framer-motion'
import { darken, lighten, linearGradient } from 'polished'
import styled from 'styled-components'
import { glowAnimation, rotateAnimation } from '../../../styles/animations'

export const NFTCardPerspectiveWrapper = styled.div`
  position: relative;
  perspective: 1000;
  width: 100%;
  height: 100%;
`

interface NFTCardWrapperPropsI {
  color: string
}

export const NFTCardWrapper = styled(motion.div)<NFTCardWrapperPropsI>`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  &::after {
    content: '';
    background: ${({ color }) =>
        linearGradient({
          colorStops: [
            `${darken(0.2, color)} 0%`,
            `${color} 60%`,
            `${darken(0.1, color)} 90%`,
          ],
          toDirection: 'to top left',
          fallback: color,
        })}
      repeat 0% 0% / 300% 100%;
    position: absolute;
    inset: -3px;
    border-radius: 16px;
    filter: blur(8px);
    transform: translateZ(-2px); /*or z-index */
    z-index: -1;
    animation-name: ${glowAnimation};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    opacity: 0;
  }
  &:hover ::after,
  &:active ::after {
    opacity: 1;
  }
`

export const NFTCardBackground = styled.div``

export const NFTCardContentWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 3px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-left: 4px solid #000;
  border-right: 4px solid #000;
  background-image: url(/images/bg-runic.avif);
  background-repeat: repeat;
  background-size: 200px;
  overflow-y: clip;
  overflow: hidden;
`

export const NFTCardVideoWrapper = styled.div``
export const NFTCardImageWrapper = styled.div`
  position: relative;
  & img {
    width: 200px;
    left: -35px;
    top: 20px;
    position: absolute;
  }
`

export const NFTCardInfoTitleWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  border-top: 4px solid #000;
  // background: transparent url(/assets/card_top_wrapper.png) no-repeat top left;
  // background-size: contain;
`

export const NFTCardInfoTitle = styled.p`
  position: absolute;
  top: 0;
  user-select: none;
  width: 100%;
  text-align: center;
  font-size: 16px;
  padding: 2px 0 3px 0;
  margin: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 1) 35%,
    rgba(0, 0, 0, 1) 65%,
    rgba(0, 0, 0, 0) 90%
  );
`

export const NFTCardInfoBottomContent = styled.div`
  position: absolute;
  width: 100%;
  margin: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px 1px 1px 1px;
  border-bottom: 4px solid #000;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 0.36207986612613796) 80%,
    rgba(0, 0, 0, 0) 100%
  );
`

export const NFTCardInfoRareWrapper = styled.p`
  width: 100%;
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  fustify-content: center;
  & > span {
    margin-right: 2px !important;
  }
`

export const NFTCardInfoPrice = styled.span`
  position: absolute;
  right: 0;
`

export const NFTCardInfoPower = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  // width: 100%;
  // margin: 0;
  & > span {
    font-size: 1.3rem;
    font-weight: bold;
  }
`
export const NFTCardInfoTime = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  & > span {
    font-size: 1.3rem;
    font-weight: bold;
  }
`

export const NFTCardInfoCog = styled.div`
  cursor: pointer;
  margin-right: auto;
  width: 30px;
  height: 30px;
  margin: 0;
  background: transparent url(/assets/cog.png) no-repeat top left;
  background-size: contain;
  &:hover {
    animation-name: ${rotateAnimation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
`
