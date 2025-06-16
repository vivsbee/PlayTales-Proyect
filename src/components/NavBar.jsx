import { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useAuth } from '../context/UserContext.jsx';
import { useAlert } from '../hooks/useAlert.jsx';

export function NavBar() {

  const [isLogged, setIsLogged] = useState(false);
  const context = useAuth();
  const navigate = useNavigate();
  const { show } = useAlert

  // useEffect(() => {
  //   const local = localStorage.getItem("userLogged");
  //   if (local) {
  //     setIsLogged(true)
  //   } else {
  //     setIsLogged(false)
  //   }
  // }, [])

  useEffect(() => {
    const local = localStorage.getItem("userLogged");
    setIsLogged(!!local);
  }, [context.user]);


  const handleLogout = () => {
    context.logout();
    show({ title: "Success", type: "success", text: "Goob bye, gamer! 🎮" });
    navigate('/');
  };
  return (
    <>
      <nav className='bg-twilightcore text-voidlight font-tipographyTexto flex w-full h-[80px] px-8 items-center'>
        <Link to='/'>
          <Icon icon="ion:game-controller" width={30} height={30} className='left-0' />
        </Link>

        <div className='justify-end flex items-center gap-8 ml-auto'>
          <NavLink to='/' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
          <NavLink to='/catalogue' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Catalogue</NavLink>
          {isLogged ? (
            <>
              <button onClick={handleLogout}>Sign out</button>
            </>
          ) : (
            <>
              <NavLink to='/register' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Register</NavLink>
              <NavLink to='/login' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Login</NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  )
}