import { useState } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import { Rating } from 'react-simple-star-rating'
import InputFilter from '../../../Custom/InputFilter/InputFilter'
import {
  FilterWrapper,
  FilterTopWrapper,
  FilterBottomWrapper,
  FilterTopWrapperLeft,
  FilterTopWrapperRight,
  FilterBottomWrapperLeft,
  FilterBottomWrapperRight,
} from './Filters.styles'

// SVG elements
import NotStars from '../../../../public/images/not-stars.svg'
import Thunderbolt from '../../../../public/images/thunderbolt.svg'
import OrderAscending from '../../../../public/images/order-ascendent.svg'
import OrderDescending from '../../../../public/images/order-descendent.svg'
import Arm from '../../../../public/images/arm.svg'
import Reloj from '../../../../public/images/reloj.svg'

const Filters = () => {
  const [isDescending, setIsDescending] = useState(true)
  const [ratingValue, setRatingValue] = useState(0)
  const handleRating = (rate: number) => {
    setRatingValue(rate)
  }
  return (
    <FilterWrapper>
      <FilterTopWrapper>
        <FilterTopWrapperLeft>
          <MinusIcon width="15px" />
          <InputFilter placeholder="min" />
          <Arm width="20px" height="20px" />
          <InputFilter placeholder="max" />
          <PlusIcon width="15px" />
        </FilterTopWrapperLeft>
        <FilterTopWrapperRight>
          <MinusIcon width="15px" />
          <InputFilter placeholder="min" />
          <Reloj width="20px" height="20px" />
          <InputFilter placeholder="max" />
          <PlusIcon width="15px" />
        </FilterTopWrapperRight>
      </FilterTopWrapper>
      <FilterBottomWrapper>
        <FilterBottomWrapperLeft>
          <NotStars height={25} />
          <Rating
            tooltipDefaultText={'Rarity'}
            onClick={handleRating}
            ratingValue={ratingValue}
            size={25}
          />
          <Thunderbolt height={20} />
          {isDescending ? (
            <OrderDescending
              style={{ justifySelf: 'end' }}
              onClick={() => setIsDescending(!isDescending)}
              height={20}
            />
          ) : (
            <OrderAscending
              style={{ justifySelf: 'end' }}
              onClick={() => setIsDescending(!isDescending)}
              height={20}
            />
          )}
        </FilterBottomWrapperLeft>
        <FilterBottomWrapperRight>
          &nbsp;&nbsp;<code>{'<- 1 2 3 4 5 6 ->'}</code>&nbsp;&nbsp;
        </FilterBottomWrapperRight>
      </FilterBottomWrapper>
    </FilterWrapper>
  )
}

export default Filters
