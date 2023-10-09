import NFTCard from '../../global/NFTCard/NFTCard'
import {
  MarketplaceVikingsFiltersWrapper,
  MarketplaceVikingsWrapper,
  MarketplaceVikingsItemsWrapper,
  MarketplaceVikingsItems,
  MarketplaceCardWrapper,
  MarketplacePaginationWrapper,
} from './MarketplaceVikings.styles'
import MarketplaceVikingsFilters from './MarketplaceVikingsFilters/MarketplaceVikingsFilters'

type Props = {}

const MarketplaceVikings = (props: Props) => {
  return (
    <MarketplaceVikingsWrapper>
      <MarketplaceVikingsFiltersWrapper>
        <MarketplaceVikingsFilters />
      </MarketplaceVikingsFiltersWrapper>
      <MarketplaceVikingsItemsWrapper>
        <MarketplaceVikingsItems>
          {Array.from(new Array(20)).map((_, idx) => (
            <MarketplaceCardWrapper key={idx}>
              <NFTCard title="Ragnar Lothbrok" rareLevel={3} power="250" />
            </MarketplaceCardWrapper>
          ))}
        </MarketplaceVikingsItems>
        <MarketplacePaginationWrapper>
          <code>{'<- 1 2 3 4 5 6 ->'}</code>
        </MarketplacePaginationWrapper>
      </MarketplaceVikingsItemsWrapper>
    </MarketplaceVikingsWrapper>
  )
}

export default MarketplaceVikings
