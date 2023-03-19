import { Film } from '@/@types/FilmInterface'
import React from 'react'

const FilmCard = ({film}: {film: Film}) => {
  return (
    <div>
      {film.title}
    </div>
  )
}

export default FilmCard