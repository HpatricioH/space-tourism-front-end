import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='hidden min-[640px]:flex bg-[#171515f7] justify-center items-center'>
      <ul className='uppercase flex flex-row gap-6 px-[2rem] text-white text-sm tracking-[0.18rem] font-barlow'>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/destinations/1'>destination</Link></li>
        <li><Link to='/crew/1'>crew</Link></li>
        <li><Link to='/technology/1'>technology</Link></li>
      </ul>
    </div>
  )
}
