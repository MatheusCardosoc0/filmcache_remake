import { Film } from "@/@types/FilmInterface"
import { useDataContext } from "@/context/DataContext"
import { api } from "@/services/axiosConfig"
import { useEffect, useState } from "react"

export function useGetFilmsByGenre(){
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  

  const {genre, page, films, setFilms} = useDataContext()

  async function GetFilms() {
    setIsLoading(true)
    try {
      const response = await api.get("discover/movie", {
        params: {
          page: page,
          with_genres: genre || undefined
        }
      })

      setFilms(response.data.results.slice(0,18))
      setError('')
    } catch (error) {
      console.log(error)
      setError("Erro ao carregar os filmes")
    }
    if(films.length == 0){
      setError("Não há filmes desse gênero.")
    }else{
      setError('')
    }

    setIsLoading(false)
  }

  useEffect(() => {
    GetFilms()
  }, [genre, page])

  return {
    error,
    isLoading,
    films,
    page
  }
}