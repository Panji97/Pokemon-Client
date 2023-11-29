import axios from 'axios'
import { getAccessToken } from '../helper/getAccessToken'

const accessToken = getAccessToken()

const baseUrl = 'http://localhost:9090/data/pokemon/v1'

export const showAllPokemon = async () => {
  try {
    const response = await axios.get(`${baseUrl}/show`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const showPokemonById = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/show/${id}`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const pokemonTop5 = async () => {
  try {
    const response = await axios.get(`${baseUrl}/top5`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const pokemonStatisticType1 = async () => {
  try {
    const response = await axios.get(`${baseUrl}/statisticType1`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const pokemonStatisticType2 = async () => {
  try {
    const response = await axios.get(`${baseUrl}/statisticType2`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
