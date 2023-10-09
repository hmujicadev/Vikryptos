import { ReactNode } from 'react'
import { Container } from './Body.styles'

interface BodyProps {
  children: ReactNode
}

const Body = ({ children }: BodyProps) => {
  return <Container>{children}</Container>
}

export default Body
