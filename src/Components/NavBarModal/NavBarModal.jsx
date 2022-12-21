import icon from '../../assets/icons/logo.svg'
import hamburger from '../../assets/icons/icon-hamburger.svg'
import closeIcon from '../../assets/icons/icon-close.svg'
import Modal from 'react-modal'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { NavBar } from '../NavBar/NavBar'

Modal.setAppElement('*')

export const NavBarModal = () => {
  const [openModal, setOpenModal] = useState(false)

  const history = useNavigate()

  const modalOpen = () => {
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  const handleLink = () => {
    history('/')
  }

  return (
    <nav className='p-[1rem] absolute w-full min-[640px]:pt-0 min-[640px]:pr-0 lg:p-[2rem] lg:pr-0'>
      <div className='flex flex-row justify-between'>
        <img src={icon} alt='space icon' onClick={handleLink} className='min-[640px]:pt-[1rem] cursor-pointer' />
        <img
          src={hamburger}
          alt='hamburger icon'
          onClick={modalOpen}
          className='h-[1.35rem] self-center min-[640px]:hidden cursor-pointer'
        />
        <NavBar />
      </div>

      <Modal
        isOpen={openModal} onRequestClose={closeModal} closeTimeoutMS={200} style={{
          overlay: {
            position: 'fixed',
            left: '5.48rem'
          },
          content: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            background: '#3b3c3f35',
            backdropFilter: 'blur(12px)',
            border: 0,
            borderRadius: 0,
            padding: '1rem 0 1rem 1rem'
          }
        }}
      >
        <div data-testid='modal' className='flex flex-col pt-[1rem]'>
          <img src={closeIcon} alt='close icon' onClick={closeModal} className='w-[1.1rem] self-end mr-[1rem]' />
          <ul className='flex flex-col font-barlow text-[#fff] text-[1.3rem] mt-[3rem] [&_span]:font-bold [&_span]:pr-[2rem] tracking-widest '>
            {/* check if URL matches the current location and add active border */}
            <li className={window.location.pathname === '/' ? 'border-r-[0.2rem]' : 'border-none'}>
              <span>00</span> <Link to='/' onClick={closeModal}>Home</Link>
            </li>
            <li className={window.location.pathname === '/destinations/1' ? 'border-r-[0.2rem]' : 'border-none'}>
              <span>01</span> <Link to='/destinations/1' onClick={closeModal} className='pl-[0.1rem]'>Destinations</Link>
            </li>
            <li className={window.location.pathname === '/crew/1' ? 'border-r-[0.2rem]' : 'border-none'}>
              <span>02</span> <Link to='/crew/1' onClick={closeModal}>Crew</Link>
            </li>
            <li className={window.location.pathname === '/technology/1' ? 'border-r-[0.2rem]' : 'border-none'}>
              <span>03</span> <Link to='/technology/1' onClick={closeModal}>Technology</Link>
            </li>
          </ul>
        </div>
      </Modal>
    </nav>
  )
}
