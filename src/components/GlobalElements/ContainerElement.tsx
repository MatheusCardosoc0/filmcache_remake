import React, { ReactNode } from 'react'
import { GlobalElementsInterface } from './@types/GlobalElementsInterface'

interface ContainerProps extends GlobalElementsInterface {
  flex?: 'row' | 'col'
  width?: 'total' | 'content'
}

const Container = ({ stylish, flex = "row", children, width }: ContainerProps) => {
  return (
    <div className={`flex
      ${flex == "row" ? 'flex-row' : 'flex-col justify-center items-center gap-10'}
      ${stylish}`}>
      {children}
    </div>
  )
}

export default Container