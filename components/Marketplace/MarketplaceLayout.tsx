import { ReactNode } from 'react'
import {
  MarketplaceLayoutNavMenuItem,
  MarketplaceLayoutNavMenuItemWrapper,
  MarketplaceLayoutNavMenuItemIconWrapper,
  MarketplaceLayoutNavMenuWrapper,
  MarketplaceLayoutWrapper,
  MarketplaceLayoutNavMenuItemText,
} from './MarketplaceLayout.styles'

import { MARKETPLACE_NAV_ITEMS } from '../../constants'
import Link from 'next/link'

interface MarketplaceLayoutProps {
  children: ReactNode
}

const MarketplaceLayout = ({ children }: MarketplaceLayoutProps) => {
  return (
    <MarketplaceLayoutWrapper>
      <MarketplaceLayoutNavMenuWrapper>
        <MarketplaceLayoutNavMenuItemWrapper>
          {MARKETPLACE_NAV_ITEMS.map((navItem) => (
            <Link href={navItem.link} passHref key={navItem.label}>
              <MarketplaceLayoutNavMenuItem>
                <MarketplaceLayoutNavMenuItemIconWrapper>
                  <navItem.icon />
                </MarketplaceLayoutNavMenuItemIconWrapper>
                <MarketplaceLayoutNavMenuItemText>
                  {navItem.label}
                </MarketplaceLayoutNavMenuItemText>
              </MarketplaceLayoutNavMenuItem>
            </Link>
          ))}
        </MarketplaceLayoutNavMenuItemWrapper>
      </MarketplaceLayoutNavMenuWrapper>
      {children}
    </MarketplaceLayoutWrapper>
  )
}

export default MarketplaceLayout
