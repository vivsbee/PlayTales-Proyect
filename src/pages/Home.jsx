import React, { useEffect } from 'react'
import { useUsers } from '../hooks/useUsers.jsx'

export function Home() {

    const { users } = useUsers()
    // useEffect(() => {console.log(users)}, [users])

  return (

    
    <div>Home</div>
  )
}
