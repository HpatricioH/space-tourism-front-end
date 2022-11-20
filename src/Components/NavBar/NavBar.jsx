import icon from '../../assets/icons/logo.svg'
import hamburger from '../../assets/icons/icon-hamburger.svg'
import closeIcon from '../../assets/icons/icon-close.svg'
import Modal from 'react-modal'
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
    <nav className='p-[1rem]'>
      <div className='flex flex-row justify-between'>
        <img src={icon} alt='space icon' onClick={handleLink} />
        <img src={hamburger} alt='hamburger icon' onClick={modalOpen} className='h-[1.35rem] self-center' />
      </div>
      <Modal isOpen={openModal} closeModal={closeModal}>
        <img src={closeIcon} alt='close icon' onClick={closeModal} />
        <ul className='flex flex-col'>
          <li>00 Home</li>
          <li>01 Destination</li>
          <li>02 Crew</li>
          <li>03 Technology</li>
        </ul>
      </Modal>
    </nav>
  )
}
