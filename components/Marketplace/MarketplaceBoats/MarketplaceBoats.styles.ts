import styled from 'styled-components'

export const MarketplaceBoatsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 85%;
`

export const MarketplaceBoatsFiltersWrapper = styled.div`
  flex: 0 0 265px;
`

export const MarketplaceBoatsItemsWrapper = styled.div`
  margin: 1rem;
  flex: 1 0 auto;
  border: 2px solid transparent;
  border-image: url(../../images/div-square.svg) 5;
  background-image: url(../../images/bg-card.svg);
  background-repeat: repeat;
  background-size: 200px;
`

export const MarketplaceBoatsItems = styled.div`
  padding: 2rem 0 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  row-gap: 20px;
  column-gap: 30px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60vh;
  overflow-x: hidden;
`

// Contenedor de las tarjetas
export const MarketplaceCardWrapper = styled.div`
  width: 140px;
  height: 200px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

export const MarketplacePaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 1rem 2rem;
`
