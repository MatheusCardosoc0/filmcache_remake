import { useDataContext } from "@/context/DataContext";
import { getFilmByTitle } from "@/services/axiosConfig";
import { useState } from "react";

export function useGetSearchFilms(){
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  const {setFilms} = useDataContext()

  async function GetFilm(){
    setIsLoading(true)
    try {
      const film = await getFilmByTitle(search)

      setFilms(film)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return {
    setSearch,
    isLoading,
    GetFilm
  }
}