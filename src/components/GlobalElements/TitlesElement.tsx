import React from 'react'
import { GlobalElementsInterface } from './@types/GlobalElementsInterface'

const H1 = ({stylish, children}: GlobalElementsInterface) => {
  return (
    <h1 className={` text-3xl font-black text-white drop-shadow-[1px_2px_2px_black]
    ${stylish}`}>
      {children}
    </h1>
  )
}

const H2 = ({stylish, children}: GlobalElementsInterface) => {
  return (
    <h2>H1</h2>
  )
}

const H3 = ({stylish, children}: GlobalElementsInterface) => {
  return (
    <h3>H1</h3>
  )
}

const H4 = ({stylish, children}: GlobalElementsInterface) => {
  return (
    <h4>H1</h4>
  )
}

export default {H1, H2, H3, H4}