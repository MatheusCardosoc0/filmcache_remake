import { Film } from '@/@types/FilmInterface'
import { urlImages } from '@/services/urlImages'
import Link from 'next/link'
import React from 'react'

const RecomedationCard = ({recomendation} : {recomendation: Film}) => {
  return (
    <Link className='w-[90%] max-w-[400px] flex justify-center items-center border-4 border-[#98ff2b]'
    href={`/film_detail/${recomendation.id}`}>
      <img src={`${urlImages}${recomendation.poster_path}`} />
    </Link>
  )
}

export default RecomedationCard