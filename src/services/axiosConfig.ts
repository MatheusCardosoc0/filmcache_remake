import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "ccbfbc8dd52c71d7f1a46e1b46db20ee",
    language: "pt-br",
  }
})