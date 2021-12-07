import axios from "axios"

export const Api = axios.create({
  baseURL: "https://hp-api.herokuapp.com/api/characters"
})
