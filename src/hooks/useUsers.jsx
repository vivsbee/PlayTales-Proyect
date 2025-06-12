import { useState, useEffect } from "react"
import { getAllUsers } from "../services/userService.js";

export function useUsers() {
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        try {
            const data = await getAllUsers();
            setUsers(data)
        } catch(e) {
            console.error('Error inesperado', e)
        } 
    }

    useEffect(()=>{
        fetchUsers;
    }, [])

    return { 
        users,
    }
}