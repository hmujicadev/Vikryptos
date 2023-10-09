import React from 'react'
import { CustomInput } from './InputFilter.styles'

interface InputFilter {
  placeholder: string
}

const InputFilter = ({ placeholder }: InputFilter) => {
  return <CustomInput placeholder={placeholder} />
}

export default InputFilter
