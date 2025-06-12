import axios from "axios";

export async function getAllUsers() {

    const API_URL = 'https://fakestoreapi.com/users'

    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log('Ups, no se pudo mostrar la info :c', error)
    } 
} 
