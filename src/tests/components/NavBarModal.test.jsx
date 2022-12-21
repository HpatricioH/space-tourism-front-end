/* eslint-disable no-undef */
import { fireEvent, render, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { NavBarModal } from '../../Components/NavBarModal/NavBarModal'

describe('Test NavBar Modal', () => {
  it('Open & Close NavBar Modal', async () => {
    const container = render(<NavBarModal />, { wrapper: BrowserRouter })

    // open navBar modal
    const hamburgerIcon = container.getByAltText('hamburger icon')

    fireEvent.click(hamburgerIcon)

    const modalOpen = container.getByTestId('modal')
    expect(modalOpen).toBeInTheDocument()

    // close navBar Modal
    const closeIcon = container.getByAltText('close icon')

    fireEvent.click(closeIcon)

    waitFor(() => {
      const modalClose = container.getByTestId('modal')
      expect(modalClose).toBeNull()
    })
  })
})
