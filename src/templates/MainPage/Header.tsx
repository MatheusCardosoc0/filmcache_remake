import { Paragraph, Title } from '@/components/GlobalElements'
import React from 'react'

const Header = () => {
  return (
    <header style={{
      backgroundImage: 'url(/assets/fundo.png)'
    }} className="w-full h-[800px] bg-cover bg-center flex justify-center items-center bg-fixed">
      <div className='flex flex-col justify-center items-center gap-20'>

        <img src='/assets/Logo.png'
        className='w-[100px] sm:w-[200px] drop-shadow-[0px_2px_3px_black]' />

        <Title.H1>
          Cine_See
        </Title.H1>

        <Paragraph.Bolder stylish='w-full text-center px-2 sm:w-[500px]'>
          Cine_See o site com informações, detalhes e avaliações de filmes, utilizando a API do themovieDB. Descubra seus filmes favoritos e compartilhe suas opiniões com a comunidade de amantes do cinema.
        </Paragraph.Bolder>

      </div>
    </header>
  )
}

export default Header