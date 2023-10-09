import styled from 'styled-components'
import { devices } from '../../styles/breakpoints'

export const MarketplaceLayoutWrapper = styled.div`
  width: 100%;
  padding: 10px 0 40px 0;
`

export const MarketplaceLayoutNavMenuWrapper = styled.div`
  margin-bottom: 1.8rem;
`

export const MarketplaceLayoutNavMenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const MarketplaceLayoutNavMenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only ${devices.xs} {
    margin: 0 10px;
    & :hover svg {
      transform: scale(1.3);
    }
  }
  @media only ${devices.sm} {
    margin: 0 15px;
  }
  & :hover svg {
    transform: scale(1.2);
  }
`

export const MarketplaceLayoutNavMenuItemIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  position: relative;
  &:: before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url('/images/aside-option-background.svg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: contain;
  }
  & svg {
    z-index: 2;
  }

  @media only ${devices.xs} {
  }
  @media only ${devices.sm} {
  }
  @media only ${devices.lg} {
  }
`

export const MarketplaceLayoutNavMenuItemText = styled.p`
  padding: 0 1rem;
  font-size: 1.7rem;
`
