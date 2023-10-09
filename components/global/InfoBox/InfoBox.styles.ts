import styled from 'styled-components'

export const InfoBoxWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const InfoBoxTop = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`
export const InfoBoxBottom = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`

export const InfoBoxContentWrapper = styled.div`
  position: relative;
  padding: 6.759% 0 6.76% 0;
  height: 100%;
`

export const InfoBoxContentBg = styled.div`
  height: 100%;
  background-image: url('/assets/box_m.png');
  background-repeat-y: repeat;
  background-size: contain;
`

export const InfoBoxContent = styled.div`
  margin: 0 auto;
  width: 90%;
  overflow: hidden;
  line-height: 2.75rem;
`
