import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllPets = () => {
    // remember that all types of fetches return a PROMISE
    return axios(`${apiUrl}/pets`)
}

export const getOnePet = (id) => {
    return axios(`${apiUrl}/pets/${id}`)
}