/* eslint-disable no-undef */
import { render, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from '../../Components/NavBar/NavBar'

describe('App', () => {
  it('link to the correct destination page', async () => {
    const { getByText } = render(<NavBar />, { wrapper: BrowserRouter })
    const destinationLink = getByText('destination')
    await fireEvent.click(destinationLink)

    waitFor(() => {
      expect(location.pathname).toBe('/destinations/1')
    })
  })

  it('link to the correct crew page', async () => {
    const { getByText } = render(<NavBar />, { wrapper: BrowserRouter })
    const crewLink = getByText('crew')
    await fireEvent.click(crewLink)

    waitFor(() => {
      expect(location.pathname).toBe('/crew/1')
    })
  })

  it('link to the correct technology page', async () => {
    const { getByText } = render(<NavBar />, { wrapper: BrowserRouter })
    const technologyLink = getByText('technology')
    await fireEvent.click(technologyLink)

    waitFor(() => {
      expect(location.pathname).toBe('/technology/1')
    })
  })

  it('link to the correct home page', async () => {
    const { getByText } = render(<NavBar />, { wrapper: BrowserRouter })
    const homeLink = getByText('home')
    await fireEvent.click(homeLink)

    waitFor(() => {
      expect(location.pathname).toBe('/')
    })
  })
})
