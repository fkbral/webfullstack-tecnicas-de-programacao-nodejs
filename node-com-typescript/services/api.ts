import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

export const api = axios.create({
  baseURL: process.env.API_URL,
})
