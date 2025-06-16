import { useEffect, useState } from 'react'
import { games } from '../utils/mockGames.js';

export function useGames() {

    const [ game, setGame ] = useState([]);

    function fetchGames() {
        try {
            const data = games;
            setGame(data)
            console.log(data)
        } catch(e) {
            console.error('Error inesperado', e)
        } 
    }

    useEffect(()=>{
        fetchGames();
    }, [])    

    

    return{
        game
    }

}
