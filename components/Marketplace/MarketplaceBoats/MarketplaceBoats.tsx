import NFTCard from '../../global/NFTCard/NFTCard'
import {
  MarketplaceBoatsFiltersWrapper,
  MarketplaceBoatsWrapper,
  MarketplaceBoatsItemsWrapper,
  MarketplaceBoatsItems,
  MarketplaceCardWrapper,
  MarketplacePaginationWrapper,
} from './MarketplaceBoats.styles'
import MarketplaceBoatsFilters from './MarketplaceBoatsFilters/MarketplaceBoatsFilters'

const BERSERKER = '/images/characters/Berserker.avif'

type Props = {}

const MarketplaceBoats = (props: Props) => {
  return (
    <MarketplaceBoatsWrapper>
      <MarketplaceBoatsFiltersWrapper>
        <MarketplaceBoatsFilters />
      </MarketplaceBoatsFiltersWrapper>
      <MarketplaceBoatsItemsWrapper>
        <MarketplaceBoatsItems>
          {Array.from(new Array(20)).map((_, idx) => (
            <MarketplaceCardWrapper key={idx}>
              <NFTCard
                title="Drakkar"
                rareLevel={4}
                videoSrc="/videos/boats4.mp4"
                price="150"
              />
            </MarketplaceCardWrapper>
          ))}
        </MarketplaceBoatsItems>
        <MarketplacePaginationWrapper>
          <code>{'<- 1 2 3 4 5 6 ->'}</code>
        </MarketplacePaginationWrapper>
      </MarketplaceBoatsItemsWrapper>
    </MarketplaceBoatsWrapper>
  )
}

export default MarketplaceBoats
