import { Link } from 'react-router-dom'
import '../../styles/activeNavBar.css'

export const NavBar = () => {
  const pathDestinations = window.location.pathname.includes('destinations')
  const pathCrew = window.location.pathname.includes('crew')
  const pathTechnology = window.location.pathname.includes('technology')

  return (
    <div className='hidden bg-[#24272e] justify-center items-center min-[640px]:flex lg:pt-[0.3rem] lg:backdrop-blur-lg lg:bg-[#ffffff07]'>
      <div className='border border-[#59595fb1] w-[20rem] absolute right-[34rem] hidden lg:flex' />
      <ul className='uppercase flex flex-row gap-6 px-[1.5rem] text-white text-sm tracking-[0.20rem] font-barlow lg:px-[3rem] lg:gap-8 [&_span]:font-bold [&_span]:pr-[0.5rem] [&_span]:hidden [&_span]:lg:inline'>
        <li className={window.location.pathname === '/' ? 'navbar__active' : 'navbar__hover'}>
          <Link to='/'><span>00</span>home</Link>
        </li>
        <li className={pathDestinations ? 'navbar__active' : 'navbar__hover'}>
          <Link to='/destinations/1'><span>01</span>destination</Link>
        </li>
        <li className={pathCrew ? 'navbar__active' : 'navbar__hover'}>
          <Link to='/crew/1'><span>02</span>crew</Link>
        </li>
        <li className={pathTechnology ? 'navbar__active' : 'navbar__hover'}>
          <Link to='/technology/1'><span>03</span>technology</Link>
        </li>
      </ul>
    </div>
  )
}
