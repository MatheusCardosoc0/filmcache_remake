import { useDataContext } from '@/context/DataContext'
import React from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const NavigatePagesButton = () => {

  const { page, setMutatedPage } = useDataContext()

  return (
    <div className='flex justify-center items-center w-[200px] h-[60px] drop-shadow-[1px_1px_4px_black] gap-1'>
      <button className='bg-[#c60505] flex-1 p-2 rounded-l-full h-full flex justify-center items-center drop-shadow-[1px_1px_1px_black] group'
        onClick={() => setMutatedPage('reduce')}>
        <BsArrowLeftCircleFill
          className='text-5xl mx-auto text-[#eeebf3] drop-shadow-[1px_1px_2px_black] group-hover:drop-shadow-[0px_0px_1px_black] group-hover:brightness-90' />
      </button>

      <span className='flex-1 flex h-full justify-center items-center bg-[#6f03e9] text-4xl text-white'>
        <b className='drop-shadow-[1px_1px_1px_black]'>
          {page}
        </b>
      </span>

      <button className='bg-[#c60505] flex-1 p-2 rounded-r-full h-full flex justify-center items-center drop-shadow-[-1px_1px_1px_black] group'
        onClick={() => setMutatedPage('add')}>
        <BsArrowRightCircleFill
          className='text-5xl text-[#e9c916] drop-shadow-[1px_1px_2px_black] group-hover:drop-shadow-[0px_0px_1px_black] group-hover:brightness-90' />
      </button>
    </div>
  )
}

export default NavigatePagesButton