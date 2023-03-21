import { useRouter } from 'next/router'
import React, { ButtonHTMLAttributes } from 'react'
import { GlobalElementsInterface } from './@types/GlobalElementsInterface'

type ButtonProps = { color?: 'trailer' | 'detail' | 'main' }
  & Omit<GlobalElementsInterface, 'children'> & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ stylish, color, ...rest }: ButtonProps) => {

  const router = useRouter()

  const colorate = () => {
    if(color == 'detail'){
      return 'bg-[#98ff2b]'
    }
    if(color == 'trailer'){
      return 'bg-[#aa10f7]'
    }
    if(color == 'main'){
      return 'bg-[#f1ed16]'
    }
  }

  return (
    <button className={`${colorate()} p-1 rounded-xl drop-shadow-[1px_1px_2px_black] group  ${stylish}`}
      {...rest}>

      <div className={`p-1 lg:p-3 drop-shadow-[1px_1px_3px_black] hover:drop-shadow-[0px_0px_1px_black] rounded-xl group-hover:brightness-90 lg:text-2xl ${stylish} ${colorate()}`}>

        <p className='font-semibold text-white drop-shadow-[0px_1px_2px_black]'>
          {color == 'detail' && 'Detalhes'}
          {color == 'main' && 'Voltar ao Inicio'}
          {color == 'trailer' && 'Ver trailer'}
        </p>
      </div>
    </button>
  )
}

export default { Button }