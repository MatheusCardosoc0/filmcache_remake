import { Paragraph, Title } from '@/components/GlobalElements'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='w-full RADIAL py-20'>
      <div className='w-[90%] max-w-[700px] justify-center items-center flex flex-col mx-auto gap-8'>
        <img src='/assets/Logo.png'
          className='w-[120px] h-[120px]' />

        <Paragraph.Bolder stylish='text-center'>
          Agradecemos por visitar o site da Cine_See! Esperamos que tenha encontrado as informações e recomendações que procurava. Continue acompanhando nossas atualizações para descobrir novos filmes incríveis!
        </Paragraph.Bolder>

        <Title.H3>
          Feito por Matheus Cardoso
        </Title.H3>

        <div className='flex flex-col md:flex-row gap-8 justify-around text-8xl text-white'>
          <a className='cursor-pointer hover:text-green-400'
          href='https://github.com/MatheusCardosoc0'
          target={"_blank"} rel="noreferrer noopener">
            <AiFillGithub />
          </a>
          
          <a className='cursor-pointer hover:text-green-400'
          href='https://www.linkedin.com/in/matheus-cardoso-026488244/'
          target={"_blank"} rel="noreferrer noopener" >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer