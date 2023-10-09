import {
  TotalsDetailWrap,
  TotalDetail,
  TotalDetailTitle,
  TotalDetailNumber,
} from './TotalsDetail.styles'

const TotalsDetail = () => {
  return (
    <TotalsDetailWrap>
      <TotalDetail>
        <TotalDetailTitle>Total de Vikingos</TotalDetailTitle>
        <TotalDetailNumber>25</TotalDetailNumber>
      </TotalDetail>
      <TotalDetail>
        <TotalDetailTitle>Fuerza Total</TotalDetailTitle>
        <TotalDetailNumber>1780</TotalDetailNumber>
      </TotalDetail>
      <TotalDetail>
        <TotalDetailTitle>Edad promedio</TotalDetailTitle>
        <TotalDetailNumber>25 </TotalDetailNumber>
      </TotalDetail>
    </TotalsDetailWrap>
  )
}
export default TotalsDetail
