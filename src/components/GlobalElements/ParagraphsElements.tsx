import React from 'react'
import { GlobalElementsInterface } from './@types/GlobalElementsInterface'

interface ParagraphProps extends GlobalElementsInterface{
  color?: 'primary' | 'secondary'
}

const Base = ({children, stylish, color = "secondary"}: ParagraphProps) => {
  return (
    <p className={`${stylish}`}>
      {children}
    </p>
  )
}

const Bolder = ({children, stylish, color = "primary"}: ParagraphProps) => {
  return (
    <p className={` font-bold drop-shadow-[1px_1px_2px_black] text-base sm:text-xl
    ${color == "primary"? "text-[#ffffff]": "text-[#424446]"}
    ${stylish}`}>
      {children}
    </p>
  )
}

export default {Base, Bolder}