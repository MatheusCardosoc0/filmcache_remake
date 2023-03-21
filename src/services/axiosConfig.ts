import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
    language: "pt-br",
  }
})

const getTrailer = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
    language: "en",
  }
})

async function getApiTrailer(film_id: number){
  try {
    const response = await getTrailer(`movie/${film_id}/videos`)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export {getApiTrailer, api}


