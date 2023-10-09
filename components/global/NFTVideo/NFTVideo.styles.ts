import { motion } from 'framer-motion'
import { darken, lighten, linearGradient } from 'polished'
import styled from 'styled-components'
import { glowAnimation, rotateAnimation } from '../../../styles/animations'

interface NFTCardWrapperPropsI {
  color: string
}

export const NFTVideoWrapper = styled(motion.div)<NFTCardWrapperPropsI>`
  position: relative;
  width: 100%;
  height: 29rem;
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
`

export const NFTVideoContentWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  & video {
    border: 4px solid #000;
    object-fit: initial;
  }
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

export const NFTVideoInfoTitleWrapper = styled.div`
  position: absolute;
  top: 25px;
  width: 100%;
  padding: 10px;
  z-index: 2;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 2px;
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
  padding: 40px 15px 0px 15px;
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
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  fustify-content: center;
  & > span {
    margin-right: 2px !important;
  }
`

export const NFTCardInfoPower = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  // width: 100%;
  // margin: 0;
  & > span {
    font-size: 1.8rem;
    font-weight: bold;
  }
`
export const NFTCardInfoTime = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  & > span {
    font-size: 1.8rem;
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
