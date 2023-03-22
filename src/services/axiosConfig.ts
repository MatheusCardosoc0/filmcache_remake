import { TrailerProps } from "@/@types/TrailerProps";
import axios from "axios";


const key = process.env.NEXT_PUBLIC_API_KEY

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: key,
    language: "pt-br",
  }
})

const getTrailer = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: key,
    language: "en",
  }
})

async function getApiTrailer(film_id: number){

  const response = await getTrailer(`movie/${film_id}/videos`)

  const filter = response.data.results.find((trailer: TrailerProps) => trailer.name === 'Official Trailer')

  if(filter){
    return filter
  } else {
    throw new Error('error')
  }
}


async function getFilmByTitle(title: string){
  const response = await api.get(`search/movie`, {
    params: {
      language: 'pt-br',
      query: title
    }
  })

  if(response.data){
    return response.data.results
  }else{
    throw new Error('Não foi encontrado este filme')
  }
}

export {getApiTrailer, api, getFilmByTitle}


