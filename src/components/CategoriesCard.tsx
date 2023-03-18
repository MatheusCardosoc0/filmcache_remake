import { GenreProps } from '@/@types/GenreProps'
import React from 'react'

interface GenreCardProps{
  genre: GenreProps
}

const GenreCard = ({genre}: GenreCardProps) => {
  return (
    <div>{genre.name}</div>
  )
}

export default GenreCard