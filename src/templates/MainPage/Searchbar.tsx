import { useGetSearchFilms } from '@/hooks/useGetSearchFilms'
import React from 'react'

const Searchbar = () => {

  const {GetFilm, setSearch} = useGetSearchFilms()

  return (
    <div className='w-full p-1 flex justify-center gap-3'>
      <input placeholder='Buscar...'
       className='w-[60%] p-2 rounded-lg outline-[#85ff28]'
       onChange={(e) => setSearch(e.target.value)} />

      <button onClick={() => GetFilm()}
      className="p-2 bg-green-400 rounded-lg text-2xl font-bold text-white hover:brightness-125">
        <p className='drop-shadow-[1px_1px_1px_black]'>Click</p>
      </button>
    </div>
  )
}

export default Searchbar