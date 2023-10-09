import { AncillaryWrapper, AncillaryOption } from './Ancillary.styles'
import React from 'react'
import ApeSwap from '../../../public/images/apeswap.svg'
import PancakeSwap from '../../../public/images/pancakeswap.svg'
import BinanceSmartChain from '../../../public/images/binance-smart-chain.svg'
import Blender from '../../../public/images/blender.svg'

const Ancillary = () => {
  return (
    <AncillaryWrapper>
      <AncillaryOption>
        <Blender />
      </AncillaryOption>
      <AncillaryOption>
        <BinanceSmartChain />
      </AncillaryOption>
      <AncillaryOption>
        <PancakeSwap />
      </AncillaryOption>
      <AncillaryOption>
        <ApeSwap />
      </AncillaryOption>
    </AncillaryWrapper>
  )
}

export default Ancillary
