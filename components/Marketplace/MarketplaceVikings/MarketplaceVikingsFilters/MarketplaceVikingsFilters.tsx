import {
  MarketplaceVikingsFiltersWrapper,
  MarketplaceVikingsFilters as MarketplaceVikingsFiltersBorder,
  MarketplaceVikingsFiltersTitle,
  MarketplaceVikingsFiltersItemWrapper,
  MarketplaceVikingsFiltersItemTitle,
  MarketplaceVikingsFiltersItem,
} from './MarketplaceVikingsFilters.styles'

// SVG elements
import NotStars from '../../../../public/images/not-stars.svg'
import Thunderbolt from '../../../../public/images/thunderbolt.svg'
import OrderAscending from '../../../../public/images/order-ascendent.svg'
import OrderDescending from '../../../../public/images/order-descendent.svg'
import Arm from '../../../../public/images/arm.svg'
import Reloj from '../../../../public/images/reloj.svg'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

type Props = {}

const MarketplaceVikingsFilters = (props: Props) => {
  const [isDescending, setIsDescending] = useState(true)
  const [ratingValue, setRatingValue] = useState(0)
  const handleRating = (rate: number) => {
    setRatingValue(rate)
  }
  return (
    <MarketplaceVikingsFiltersWrapper>
      <MarketplaceVikingsFiltersBorder>
        <MarketplaceVikingsFiltersTitle>Filters</MarketplaceVikingsFiltersTitle>
        <MarketplaceVikingsFiltersItemWrapper>
          <MarketplaceVikingsFiltersItemTitle>
            Power
            <Arm width="20px" height="20px" />
          </MarketplaceVikingsFiltersItemTitle>
          <MarketplaceVikingsFiltersItem>
            <input placeholder="min" />
            -
            <input placeholder="max" />
          </MarketplaceVikingsFiltersItem>
        </MarketplaceVikingsFiltersItemWrapper>
        <MarketplaceVikingsFiltersItemWrapper>
          <MarketplaceVikingsFiltersItemTitle>
            Age
            <Reloj width="20px" height="20px" />
          </MarketplaceVikingsFiltersItemTitle>
          <MarketplaceVikingsFiltersItem>
            <input placeholder="min" />
            -
            <input placeholder="max" />
          </MarketplaceVikingsFiltersItem>
        </MarketplaceVikingsFiltersItemWrapper>
        <MarketplaceVikingsFiltersItemWrapper>
          <MarketplaceVikingsFiltersItemTitle>
            Rarity
          </MarketplaceVikingsFiltersItemTitle>
          <MarketplaceVikingsFiltersItem>
            <NotStars height={25} />
            <Rating
              tooltipDefaultText={'Rarity'}
              onClick={handleRating}
              ratingValue={ratingValue}
              allowHover={false}
              size={25}
            />
            <Thunderbolt height={20} />
          </MarketplaceVikingsFiltersItem>
        </MarketplaceVikingsFiltersItemWrapper>
      </MarketplaceVikingsFiltersBorder>
    </MarketplaceVikingsFiltersWrapper>
  )
}

export default MarketplaceVikingsFilters
