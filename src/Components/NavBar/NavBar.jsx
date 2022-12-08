import { Link } from 'react-router-dom'
import '../../styles/activeNavBar.css'

export const NavBar = () => {
  const pathDestinations = window.location.pathname.includes('destinations')
  const pathCrew = window.location.pathname.includes('crew')
  const pathTechnology = window.location.pathname.includes('technology')

  return (
    <div className='hidden min-[640px]:flex bg-[#24272e] justify-center items-center'>
      <ul className='uppercase flex flex-row gap-6 px-[1.5rem] text-white text-sm tracking-[0.18rem] font-barlow'>
        <li className={window.location.pathname === '/' ? 'navbar__active' : 'navbar__hover'}><Link to='/'>home</Link></li>
        <li className={pathDestinations ? 'navbar__active' : 'navbar__hover'}><Link to='/destinations/1'>destination</Link></li>
        <li className={pathCrew ? 'navbar__active' : 'navbar__hover'}><Link to='/crew/1'>crew</Link></li>
        <li className={pathTechnology ? 'navbar__active' : 'navbar__hover'}><Link to='/technology/1'>technology</Link></li>
      </ul>
    </div>
  )
}
