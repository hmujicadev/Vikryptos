import styled from 'styled-components'

export const MarketplaceBoatsFiltersWrapper = styled.div`
  margin: 1rem;
`

export const MarketplaceBoatsFilters = styled.div`
  padding: 1rem;
  border: 2px solid transparent;
  border-image: url(../../images/div-square.svg) 5;
`

export const MarketplaceBoatsFiltersTitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0 0 20px 0;
`

export const MarketplaceBoatsFiltersItemWrapper = styled.div`
  margin-bottom: 15px;
`

export const MarketplaceBoatsFiltersItemTitle = styled.div`
  font-size: 1.6rem;
  margin-bottom: 15px;
  & svg {
    margin-left: 10px;
  }
`

export const MarketplaceBoatsFiltersItem = styled.div`
  display: flex;
  align-items: center;
  & input {
    margin: 0 10px;
    width: 80px;
  }
`
