import {
  MarketplaceBoatsFiltersWrapper,
  MarketplaceBoatsFilters as MarketplaceBoatsFiltersBorder,
  MarketplaceBoatsFiltersTitle,
  MarketplaceBoatsFiltersItemWrapper,
  MarketplaceBoatsFiltersItemTitle,
  MarketplaceBoatsFiltersItem,
} from './MarketplaceBoatsFilters.styles'

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

const MarketplaceBoatsFilters = (props: Props) => {
  const [isDescending, setIsDescending] = useState(true)
  const [ratingValue, setRatingValue] = useState(0)
  const handleRating = (rate: number) => {
    setRatingValue(rate)
  }
  return (
    <MarketplaceBoatsFiltersWrapper>
      <MarketplaceBoatsFiltersBorder>
        <MarketplaceBoatsFiltersTitle>Filters</MarketplaceBoatsFiltersTitle>
        <MarketplaceBoatsFiltersItemWrapper>
          <MarketplaceBoatsFiltersItemTitle>
            Power
            <Arm width="20px" height="20px" />
          </MarketplaceBoatsFiltersItemTitle>
          <MarketplaceBoatsFiltersItem>
            <input placeholder="min" />
            -
            <input placeholder="max" />
          </MarketplaceBoatsFiltersItem>
        </MarketplaceBoatsFiltersItemWrapper>
        <MarketplaceBoatsFiltersItemWrapper>
          <MarketplaceBoatsFiltersItemTitle>
            Age
            <Reloj width="20px" height="20px" />
          </MarketplaceBoatsFiltersItemTitle>
          <MarketplaceBoatsFiltersItem>
            <input placeholder="min" />
            -
            <input placeholder="max" />
          </MarketplaceBoatsFiltersItem>
        </MarketplaceBoatsFiltersItemWrapper>
        <MarketplaceBoatsFiltersItemWrapper>
          <MarketplaceBoatsFiltersItemTitle>
            Rarity
          </MarketplaceBoatsFiltersItemTitle>
          <MarketplaceBoatsFiltersItem>
            <NotStars height={25} />
            <Rating
              tooltipDefaultText={'Rarity'}
              onClick={handleRating}
              ratingValue={ratingValue}
              allowHover={false}
              size={25}
            />
            <Thunderbolt height={20} />
          </MarketplaceBoatsFiltersItem>
        </MarketplaceBoatsFiltersItemWrapper>
      </MarketplaceBoatsFiltersBorder>
    </MarketplaceBoatsFiltersWrapper>
  )
}

export default MarketplaceBoatsFilters
