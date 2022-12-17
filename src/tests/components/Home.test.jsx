/* eslint-disable no-undef */
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { HomePage } from '../../Components/HomePage/HomePage'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  it('Home button link to destination page', async () => {
    render(<HomePage />, { wrapper: BrowserRouter })
    const button = screen.getByRole('button')

    await fireEvent.click(button)

    waitFor(() => {
      expect(location.pathname('/destinations/1'))
    })
  })
})
