import styled from 'styled-components'

export const CustomInput = styled.input`
  background-color: transparent;
  outline: none;
  border-color: soild 1px white;
  color: white;
  margin: 0 5px;
  padding: 0 5px;
  font-size: 1.2rem;
  text-align: center;
  border: 3px solid transparent;
  border-image: url(../../images/div-square.svg) 2;
  &::placeholder {
    color: white;
  }
`
