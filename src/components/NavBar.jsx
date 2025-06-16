import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useAuth } from '../context/UserContext.jsx';

export function NavBar() {

  const [isLogged, setIsLogged] = useState(false);
  const context = useAuth();

  useEffect(() => {
    const local = localStorage.getItem("userLogged");
    if (local) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])
  // [context.users]
  return (
    <> 
      <nav className='bg-twilightcore text-voidlight font-tipographyTexto flex w-full h-[80px] px-8 justify-between items-center'>
        <Link to='/'>
          {/* <div>PT</div> */}
          <Icon icon="octicon:mark-github-16" width={30} height={30} />
        </Link>
        <div className='flex gap-20 text-right'>
          <NavLink to='/' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
          <NavLink to='/catalogue' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Catalogue</NavLink>
          
          {isLogged ? (

            <div>
              <NavLink to='/dashboard' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Your Profile</NavLink>
            </div>,
            
            <button onClick={context.logout}>Sign out</button>

          ) : (
            <div className='flex gap-20'>

              <NavLink to='/register' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Register</NavLink>
              <NavLink to='/login' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Login</NavLink>
            </div>
          )}
        </div>
        <div></div>
      </nav>
    </>

  )
}