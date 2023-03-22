import React from 'react'
import FilmContainer from './FilmContainer'
import GenresContainer from './GenresContainer'
import Searchbar from './Searchbar'

const ContentContainer = () => {

  return (
    <>
      <Searchbar />
      <GenresContainer />
      <FilmContainer />
    </>
  )
}

export default ContentContainer