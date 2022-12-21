/* eslint-disable no-undef */
import axios from 'axios'
import { configureStore } from '@reduxjs/toolkit'
import sinon from 'sinon'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { DestinationsPage } from '../../Components/DestinationsPage/DestinationsPage'
import { BrowserRouter } from 'react-router-dom'

describe('destinationsSlice', () => {
  const destinations = [
    { name: 'MOON' },
    { name: 'MARS' },
    { name: 'EUROPA' },
    { name: 'TITAN' }
  ]

  it('renders content', async () => {
    sinon.stub(axios, 'get').resolves({
      data: [{}]
    })

    const mockReducer = (state = { data: [] }, action) => {
      switch (action.type) {
        default:
          return state
      }
    }

    const store = configureStore({
      reducer: mockReducer,
      preloadedState: {
        destinations: {
          data: [{}]
        }
      }
    })

    let component
    await waitFor(async () => {
      component = render(
        <Provider store={store}>
          <BrowserRouter>
            <DestinationsPage />
          </BrowserRouter>
        </Provider>
      )
    })

    destinations.map((destination, i) => {
      const destinationName = destination.name

      fireEvent.click(screen.getByText(destinationName))

      return waitFor(() => {
        expect(location.pathname).toBe(`/destinations/${i + 1}`)
        expect(component.getByTestId('destinationName')).toBeInTheDocument()
      })
    })
  })
})
