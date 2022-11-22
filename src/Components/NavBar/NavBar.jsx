import icon from '../../assets/icons/logo.svg'
import hamburger from '../../assets/icons/icon-hamburger.svg'
import closeIcon from '../../assets/icons/icon-close.svg'
import Modal from 'react-modal'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

Modal.setAppElement('*')

export const NavBar = () => {
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
    console.log('clicked')
  }

  return (
    <nav className='p-[1rem] absolute w-full'>
      <div className='flex flex-row justify-between'>
        <img src={icon} alt='space icon' onClick={handleLink} />
        <img
          src={hamburger}
          alt='hamburger icon'
          onClick={modalOpen}
          className='h-[1.35rem] self-center'
        />
      </div>
      <Modal
        isOpen={openModal} closeModal={closeModal} closeTimeoutMS={200} style={{
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
            backgroundColor: 'rgba(0, 0, 0, .25)',
            backdropFilter: 'grayscale(0.5) opacity(0.8) blur(10px)',
            border: 0,
            borderRadius: 0
          }
        }}
      >
        <div className='flex flex-col pt-[1rem]'>
          <img src={closeIcon} alt='close icon' onClick={closeModal} className='w-[1.1rem] self-end' />
          <ul className='flex flex-col font-barlow text-[#fff] text-[1.3rem] mt-[3rem] [&_span]:font-bold [&_span]:pr-[2rem] tracking-widest '>
            <li><span>00</span> Home</li>
            <li><span>01</span> Destination</li>
            <li><span>02</span> Crew</li>
            <li><span>03</span> Technology</li>
          </ul>
        </div>
      </Modal>
    </nav>
  )
}
