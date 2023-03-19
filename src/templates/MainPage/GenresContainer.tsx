import GenreCard from '@/components/CategoriesCard'
import Loading from '@/components/Loading'
import { useGetCategories } from '@/hooks/useGetCategories'
import React from 'react'

const GenresContainer = () => {

  const { error, genres, isloading } = useGetCategories()

  return (
    <div className='flex overflow-x-scroll scrollCustom p-4 gap-4 bg-[#d9d8d8]'>
      {isloading ? <Loading /> : (
        genres.map(genre => (
          <GenreCard key={genre.id}
            genre={genre} />
        ))
      )}
    </div>
  )
}

export default GenresContainer