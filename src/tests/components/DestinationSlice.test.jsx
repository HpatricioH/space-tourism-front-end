/* eslint-disable no-undef */
import axios from 'axios'
import { configureStore } from '@reduxjs/toolkit'
import sinon from 'sinon'
import { render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { DestinationsPage } from '../../Components/DestinationsPage/DestinationsPage'
import { BrowserRouter } from 'react-router-dom'
// import { destinationsSlice } from '../../store/features/destinationsSlice'
import { destinationsSlice, getDestinationsAsync, showDestinations } from '../../store/features/destinationsSlice'

describe('destinationsSlice', () => {
  it('should handle the GET_DESTINATIONS action', () => {
    const destinations = [
      { id: 1, name: 'Moon' },
      { id: 2, name: 'Mars' },
      { id: 3, name: 'Europa' },
      { id: 4, name: 'Titan' }
    ]

    const initialState = { data: [] }
    const action = {
      type: destinationsSlice.actions.getDestinations.type,
      payload: destinations.map((el) => el)
    }

    const expectedState = { data: [destinations.map((el) => el)] }
    expect(destinationsSlice.reducer(initialState, action)).toEqual(expectedState)
  })

  it('renders content', async () => {
    sinon.stub(axios, 'get').resolves({
      data: [{ id: 1, name: 'Moon' }]
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
          data: [{ id: 1, name: 'Moon' }]
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

    expect(component.getByText('MOON')).toBeInTheDocument()
    component.debug()
  })
})
