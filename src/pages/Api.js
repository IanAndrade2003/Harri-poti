import axios from "axios"

export const Api = axios.create({
  baseURL: "http://hp-api.herokuapp.com/api/characters"
})
