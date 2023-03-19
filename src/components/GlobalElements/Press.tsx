import React from 'react'
import { GlobalElementsInterface } from './@types/GlobalElementsInterface'

type ButtonProps = { color?: string, text: string }
  & Omit<GlobalElementsInterface, 'children'>

const Button = ({ stylish, color, text }: ButtonProps) => {
  return (
    <button className={`${color} p-1 rounded-xl drop-shadow-[1px_1px_2px_black]  ${stylish}`}>
      <div className={`p-3 drop-shadow-[1px_1px_3px_black] hover:drop-shadow-[0px_0px_1px_black] rounded-xl ${color}`}>
        <p className='font-semibold text-white drop-shadow-[0px_1px_2px_black] text-2xl'>
          {text}
        </p>
      </div>
    </button>
  )
}

export default { Button }