import { ReactNode } from 'react'
import Header from './Header/Header'
import Body from './body/Body'
import { DashboardContainer } from './DashboardLayout.styles'

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <DashboardContainer>
      <Header />
      <Body>{children}</Body>
    </DashboardContainer>
  )
}

export default DashboardLayout
