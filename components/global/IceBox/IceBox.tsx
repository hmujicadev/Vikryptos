import { ReactNode } from 'react'
import { IceBoxWrapper } from './IceBox.styles'

interface IceBoxProps {
  children: ReactNode | Array<ReactNode>
}

const IceBox = ({ children }: IceBoxProps) => {
  return <IceBoxWrapper>{children}</IceBoxWrapper>
}

export default IceBox
