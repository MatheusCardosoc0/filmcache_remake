import { Paragraph, Title } from '@/components/GlobalElements'
import Loading from '@/components/Loading'
import RecomedationCard from '@/components/RecomendationCard'
import { useGetRecomendations } from '@/hooks/useGetRecomendations'
import React, { useState } from 'react'

const RecomendedFilms = () => {

  const [viewRecomendations, setViewRecomendations] = useState(false)

  const { recomendations, isLoading, error } = useGetRecomendations()

  return (
    <>
      <div className='fixed hidden sm:block right-0 drop-shadow-[1px_1px_8px_black] w-[30%] bg-[#424242] h-screen overflow-x-scroll NOT_SCROLL py-8 pb-20'>
        <div>
          <Title.H2 stylish='text-center text-2xl md:text-3xl'>
            Filmes recomendados.
          </Title.H2>

          <div className='flex justify-center items-center gap-8 flex-col'>
            <Paragraph.Bolder stylish='mt-12 text-center'>
              {error}
            </Paragraph.Bolder>
            {isLoading ? <Loading /> : (
              recomendations.map(recomendation => (
                <RecomedationCard key={recomendation.id}
                  recomendation={recomendation} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default RecomendedFilms