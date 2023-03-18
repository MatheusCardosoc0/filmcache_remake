import { GenreProps } from "@/@types/GenreProps";
import { api } from "@/services/axiosConfig";
import { useEffect, useState } from "react";

export function useGetCategories(){
  const [genres, setGenres] = useState<GenreProps[]>([])
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function GetGenres(){
    setIsLoading(true)
    try {
      const response = await api.get('/genre/movie/list', {
        params: {
          api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
          language: "pt-br"
      }})
  
      setGenres(response.data.genres)
      setError('')
    } catch (error) {
      setError('Não foi possivel carregar os gêneros')
      console.log(error)
    }
    setIsLoading(false)
  }
  
  useEffect(() => {
    GetGenres()
  },[])

  return {
    error,
    isloading,
    genres
  }
}