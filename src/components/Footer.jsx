import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify/react"

export function Footer() {
  return (
    <footer className="fixed relative bottom-0 w-full m-0">
      <div className="bg-twilightcore text-voidlight h-[90px] flex flex-col justify-center items-center gap-6">
        <Link to='/'>
          <div>PT</div>
        </Link>
        <nav className="flex gap-8">
          <NavLink to='/' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
          <NavLink to='/catalogue' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Catalogue</NavLink>
          <NavLink to='/dashboard' className={({ isActive }) => isActive ? "font-bold underline" : ""}></NavLink>
          <Link to='/'>
            <Icon icon="ion:game-controller" width={30} height={30} className='left-0' />
          </Link>
        </nav>
      </div >
      <div className="bg-mistlayer text-zinc-400 h-6 text-center">
        <p>Proyecto final creado para Bootcamp React - BIT -&copy; Lina V. Garnica 2025</p>
      </div>
    </footer >
  )
}