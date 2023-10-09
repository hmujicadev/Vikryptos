import NFTCard from '../../NFTCard/NFTCard'
import { Scrollbars } from 'react-custom-scrollbars'

import {
  CardsSectionWrapper,
  CardWrapper,
  CardsSectionWrapper2,
} from './Cards.styles'

const Cards = () => {
  return (
    <CardsSectionWrapper>
      <Scrollbars universal>
        <CardsSectionWrapper2>
          <CardWrapper>
            <NFTCard
              title="Ragnar Lothbrok"
              videoSrc="../../videos/r5.mp4"
              rareLevel={2}
              power="250"
            />
          </CardWrapper>
          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={3} power="250" />
          </CardWrapper>
          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={4} power="250" />
          </CardWrapper>
          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={1} power="250" />
          </CardWrapper>
          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={2} power="250" />
          </CardWrapper>
          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={3} power="250" />
          </CardWrapper>
          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={5} power="250" />
          </CardWrapper>
          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={1} power="250" />
          </CardWrapper>

          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={2} power="250" />
          </CardWrapper>
          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={3} power="250" />
          </CardWrapper>
          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={5} power="250" />
          </CardWrapper>
          <CardWrapper>
            <NFTCard title="Ragnar Lothbrok" rareLevel={1} power="250" />
          </CardWrapper>
        </CardsSectionWrapper2>
      </Scrollbars>
    </CardsSectionWrapper>
  )
}

export default Cards
